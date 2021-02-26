#!/usr/bin/env python3

import json
import psycopg2
import threading
import time
import uuid

from DBconnection import Connection
from http.server import SimpleHTTPRequestHandler, HTTPServer
from psycopg2 import Error
    

class myHandler(SimpleHTTPRequestHandler):
    db_connection = Connection()

    # def __init__(self, *args, directory=None, **kwargs):
    #     super().__init__(*args, **kwargs)
    #     import pdb
    #     pdb.set_trace()
    #     self.

    # Handler for the GET requests
    def do_POST(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/json')
        self.end_headers()
        if self.path == '/do_signup':
            data = self.rfile.read(int(self.headers.get('Content-Length')))
            data = json.loads(data)
            self.db_connection.create_user(data)
            # return self.wfile.write(True)
        elif self.path == '/do_login':
            data = self.rfile.read(int(self.headers.get('Content-Length')))
            data = json.loads(data)
            user_data = self.db_connection.user_exists(data)
            if user_data is None:
                return self.wfile.write(json.dumps({'credentials': False}).encode())
            else:
                session_id = str(uuid.uuid4())
                self.db_connection.create_user_session(session_id, user_data[0])
                return self.wfile.write(json.dumps({'session_id': session_id}).encode())
        elif self.path == '/session_validate':
            data = self.rfile.read(int(self.headers.get('Content-Length')))
            data = json.loads(data)
            user = self.db_connection.session_validate(data)
            if (len(user)):
                return self.wfile.write(json.dumps({'valid': True}).encode())
            else:
                return self.wfile.write(json.dumps({'valid': False}).encode())


    def do_GET(self):
        if self.path == '/':
            with open('index.html') as f:
                self.send_response(200)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                self.wfile.write(f.read().encode())
        else:
            super(myHandler, self).do_GET()
            
def start_server():
    SimpleHTTPRequestHandler.extensions_map['.js'] = 'application/javascript'
    httpd = HTTPServer(('0.0.0.0', 3800), myHandler)
    httpd.serve_forever()

url = 'http://127.0.0.1:3800'

if __name__ == "__main__":
    print("----------------------")
    print("----------------------")
    print("Server running on: {}".format(url))
    threading.Thread(target=start_server, daemon=True).start()

    while True:
        try:
            time.sleep(1)
        except KeyboardInterrupt:
            httpd.server_close()
            quit(0)