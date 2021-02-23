#!/usr/bin/env python3
import json
import threading
import time
import psycopg2
from psycopg2 import Error
    
from http.server import SimpleHTTPRequestHandler, HTTPServer

class myHandler(SimpleHTTPRequestHandler):
    # Handler for the GET requests

    def do_POST(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/json')
        self.end_headers()
        if self.path == '/do_signup':
            data = self.rfile.read(int(self.headers.get('Content-Length')))
            return self.wfile.write(json.dumps({'name': 'dummy'}).encode())

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
    print("Moder Mondy Bazar")
    print("----------------------")
    print("Server running on: {}".format(url))
    threading.Thread(target=start_server, daemon=True).start()

    while True:
        try:
            time.sleep(1)
        except KeyboardInterrupt:
            httpd.server_close()
            quit(0)