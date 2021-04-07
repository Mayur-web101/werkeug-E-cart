#!/usr/bin/env python3
import json
import psycopg2
import threading
import time
import uuid
from DBconnection import Connection
from http.server import SimpleHTTPRequestHandler, HTTPServer
from psycopg2 import Error
from urllib.parse import parse_qs

class myHandler(SimpleHTTPRequestHandler):
    db_connection = Connection()

    def do_POST(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/json')
        self.end_headers()

        if self.path == '/do_signup':
            data = self.rfile.read(int(self.headers.get('Content-Length')))
            data = json.loads(data)
            user_data=self.db_connection.create_user(data)
            return self.wfile.write(json.dumps({'credentials': True}).encode()) 

        elif self.path == '/do_clientsignup':
            data = self.rfile.read(int(self.headers.get('Content-Length')))
            data = json.loads(data)
            user_data=self.db_connection.client_create_user(data)
            return self.wfile.write(json.dumps({'credentials': True}).encode()) 

        elif self.path == '/do_login':
            data = self.rfile.read(int(self.headers.get('Content-Length')))
            data = json.loads(data)
            user_data = self.db_connection.user_exists(data)
            user_get_role = self.db_connection.user_get_role(data)
            print(user_get_role)

            if user_data is None:
                return self.wfile.write(json.dumps({'credentials': False}).encode())
            else:
                session_id = str(uuid.uuid4())
                self.db_connection.create_user_session(session_id, user_data[0])
                if "client" in user_get_role:
                    return self.wfile.write(json.dumps({'session_id': session_id, 'user_id': user_data[0], 'is_valid': True, 'role':"client"}).encode())
                else:
                    return self.wfile.write(json.dumps({'session_id': session_id, 'user_id': user_data[0], 'is_valid': True, 'role':"farmer"}).encode())
                    
        elif self.path == '/session_validate':
            data = self.rfile.read(int(self.headers.get('Content-Length')))
            data = json.loads(data)
            user = self.db_connection.session_validate(data)
            if (len(user)):
                return self.wfile.write(json.dumps({'valid': True}).encode())
            else:
                return self.wfile.write(json.dumps({'valid': False}).encode())

        elif self.path == '/do_logout':
            data = self.rfile.read(int(self.headers.get('Content-Length')))
            data = json.loads(data)
            user_data = self.db_connection.user_logout(data)
            return self.wfile.write(json.dumps({'logout': "success"}).encode())
        
        elif self.path == '/do_insert_cropdetail':
            data = self.rfile.read(int(self.headers.get('Content-Length')))
            data = json.loads(data)
            self.db_connection.insert_cropdetail(data)

        elif self.path == '/do_insert_stageactivity':
            data = self.rfile.read(int(self.headers.get('Content-Length')))
            data = json.loads(data)
            result = self.db_connection.get_crop_id(data['cropname'])
            self.db_connection.insert_activity(data,result[0])

        elif self.path == '/do_booking':
            data = self.rfile.read(int(self.headers.get('Content-Length')))
            data = json.loads(data)
            self.db_connection.crop_booking(data)
	 elif self.path == '/do_bookingdetails':
            details = self.db_connection.booking_detail()
            print(details)
            return self.wfile.write(json.dumps({'details': details}).encode())

        elif self.path == '/do_approve':
            data = self.rfile.read(int(self.headers.get('Content-Length')))
            data = json.loads(data)
            print(data)
            confirm = self.db_connection.approve(data)
            return self.wfile.write(json.dumps({'confirm': confirm}).encode())

	elif self.path == '/do_pendding':
            data = self.rfile.read(int(self.headers.get('Content-Length')))
            data = json.loads(data)
            print(data)
            confirm = self.db_connection.pending(data)
            return self.wfile.write(json.dumps({'confirm': confirm}).encode())

        # elif self.path == '/do_cancel':
        #     data = self.rfile.read(int(self.headers.get('Content-Length')))
        #     data = json.loads(data)
        #     print(data)
        #     confirm = self.db_connection.cancel(data)
        #     return self.wfile.write(json.dumps({'cancel': cancel}).encode())

        elif self.path == '/do_BookingStatus':
            details = self.db_connection.booking_status()
            print(details)
            return self.wfile.write(json.dumps({'details': details}).encode())


        elif self.path == '/do_order_details':
            details = self.db_connection.order_details()
            result_data = list()
            for order_details in details:
                order_details = {
                        'name': order_details[1],
                        'address': order_details[2],
                        'mobile': order_details[3],
                        'qty': order_details[4],
                        'date': order_details[5],
                        }
                result_data.append(order_details)
                print(result_data)
            return self.wfile.write(json.dumps({'details': result_data}).encode())

        elif self.path == '/do_crop_details':
            details = self.db_connection.crop_details()
            result_data = list()
            for crop_details in details:
                crop_details = {
                        'c_name': crop_details[1],
                        'detail': crop_details[2],
                        'place': crop_details[3],
                        'qty': crop_details[4],
                        'category': crop_details[5],
                        'state': crop_details[6],
                        }
                result_data.append(crop_details)
                print(result_data)
            return self.wfile.write(json.dumps({'details': result_data}).encode())

        elif self.path == '/do_stage_details':
            details = self.db_connection.view_stage_details()
            print(details)
            return self.wfile.write(json.dumps({'details': details}).encode())

    def do_GET(self):
        if self.path in ['/', '/signup', '/login', '/Cropregistration','/ClientSignUp','/home','/Cropregistration','/Stageactivity','/Crop_booking', '/Orderlist','/Croplist']:
            with open('index.html') as f:
                Cookie = self.headers.get('Cookie')
                session_id = False
                html = f.read()
                session_info = {
                    'user_id': None,
                    'is_valid': False,
                }
                if Cookie:
                    session_cookie = parse_qs(Cookie.replace(' ', ''))
                    if session_cookie.get('session_id'):
                        session_id = session_cookie.get('session_id')[0]
                        user = self.db_connection.session_validate({'session_id': session_id})
                        role = self.db_connection.user_get_role_session({'session_id': session_id})

                        if user and len(user):
                            session_info = {
                                'user_id': user[0],
                                'is_valid': True,
                                'session_id': session_id,
                                'role':role[0]


                            }
                html = html.replace('$session_info', json.dumps(session_info))
                self.send_response(200)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                self.wfile.write(html.encode())
        else:
            super(myHandler, self).do_GET()
            
def start_server():
    SimpleHTTPRequestHandler.extensions_map['.js'] = 'application/javascript'
    httpd = HTTPServer(('0.0.0.0', 3200), myHandler)
    httpd.serve_forever()

url = 'http://127.0.0.1:3200'

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
