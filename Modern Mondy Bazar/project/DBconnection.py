#!/usr/bin/env python3
import psycopg2
from psycopg2 import Error

class Connection():

    def __init__(self):
        print('>>> connection')
        self.create_connection('postgres')
        self.db_name = 'agriculture'
        db_check = "SELECT 1 FROM pg_database WHERE datname='%s'" % self.db_name
        self.cr.execute(db_check)
        if not len(self.cr.fetchall()):
            self.cr.execute('CREATE DATABASE %s' % self.db_name)
            self.connection.close()
            self.create_connection(self.db_name)
            users = '''CREATE TABLE users(
                id SERIAL PRIMARY KEY,
                role varchar NOT NULL,
                email varchar  NOT NULL,
                password varchar NOT NULL,
                name varchar,
                address varchar,
                session varchar,
                mobile_no varchar NOT NULL
            );'''
            self.cr.execute(users);
            cropdetail = '''CREATE TABLE IF NOT EXISTS cropdetail(
                id SERIAL PRIMARY KEY,
                u_id INTEGER NOT NULL,
                crop_name varchar  NOT NULL,
                detail varchar NOT NULL,
                place varchar,
                expected_qty varchar NOT NULL,
                Category varchar NOT NULL,
                state varchar
            );'''
            self.cr.execute(cropdetail);

            stage_activity = '''CREATE TABLE IF NOT EXISTS stage_activity(
                st_id SERIAL,
                cropdetail_id INT NOT NULL,
                cropname varchar NOT NULL,
                stage varchar NOT NULL,
                start_date varchar  NOT NULL,
                end_date varchar NOT NULL,
                price INT NOT NULL,
                sequence INT NOT NULL,
                video varchar,
                images bytea,
                description varchar NOT NULL,
                finish_note varchar,
                PRIMARY KEY(st_id),
                  FOREIGN KEY(cropdetail_id) 
                  REFERENCES cropdetail(id)

            );'''
            self.cr.execute(stage_activity);

            crop_book = '''CREATE TABLE IF NOT EXISTS crop_book(
                b_id SERIAL,
                u_id INTEGER NOT NULL,
                name varchar  NOT NULL,
                address varchar NOT NULL,
                mobile varchar NOT NULL,
                qty varchar NOT NULL,
                dat varchar NOT NULL,
                status varchar,
                PRIMARY KEY(b_id),
                  FOREIGN KEY(u_id) 
                  REFERENCES users(id)
            );'''
            self.cr.execute(crop_book);
        else:
            self.create_connection(self.db_name)

    def create_connection(self, db_name):
        self.connection = psycopg2.connect(user="postgres", password="postgres", host="127.0.0.1", port="5432", database=db_name)
        self.connection.autocommit = True
        self.cr = self.connection.cursor()

    def create_user(self, data):
        users = """INSERT INTO users (role,email, password, mobile_no) VALUES ('farmer','%s', '%s', '%s')""" % (data['email'], data['password'], data['mobile']);
        self.cr.execute(users)

    def client_create_user(self, data):
        users = """INSERT INTO users (role,email, password, mobile_no,name,address) VALUES ('client','%s', '%s', '%s', '%s', '%s')""" % (data['email'], data['password'], data['mobile'],data['client'],data['address']);
        self.cr.execute(users)

    def user_exists(self, data):
        self.cr.execute("SELECT id FROM users WHERE email='%s' and password='%s'" % (data['email'], data['password']))
        return self.cr.fetchone()

    def  user_get_role(self, data):
        self.cr.execute("SELECT role FROM users WHERE email='%s' and password='%s'" % (data['email'], data['password']))
        return self.cr.fetchone()
        
    def user_get_role_session(self,data):
        self.cr.execute("SELECT role FROM users WHERE session='%s'" % (data['session_id']))
        return self.cr.fetchone()

    def create_user_session(self, session_id, user_id):
        self.cr.execute("UPDATE users set session='%s' where id=%s" % (session_id, user_id))

    def session_validate(self, data):
        self.cr.execute("SELECT id FROM users WHERE session='%s'" % (data['session_id']))
        return self.cr.fetchone()

    def user_logout(self, data):
        self.cr.execute("UPDATE users SET session=null WHERE session='%s'" % (data['session_id']))

    def insert_cropdetail(self, data):
        cropdetail = """INSERT INTO cropdetail (u_id, crop_name, detail,place,expected_qty,Category,state) VALUES ( '%s', '%s', '%s', '%s', '%s', '%s', '%s')""" % (data['farmer_id'], data['cropname'], data['detail'], data['place'], data['qty'], data['category'], data['state']);
        self.cr.execute(cropdetail)

    def insert_activity(self, data, result):
        print(result)
        stage_activity = """INSERT INTO stage_activity (cropdetail_id,cropname,stage,start_date, end_date,price,sequence,description,finish_note) VALUES (%s,'%s', %s, '%s', '%s', '%s', '%s', '%s', '%s')""" % (result,data['cropname'],data['stage'],data['start_date'], data['end_date'], data['price'], data['sequence'], data['description'], data['Finish_note']);
        self.cr.execute(stage_activity)

    def get_crop_id(self, cropname):
        print(cropname)
        self.cr.execute("SELECT id FROM cropdetail WHERE crop_name='%s'" % (cropname))
        return self.cr.fetchone()

    def crop_booking(self, data):
        crop_book = """INSERT INTO crop_book (u_id, name, address, mobile, qty, dat, status ) VALUES ('%s', '%s', '%s', '%s', '%s','%s', '%s')""" % (data['user_id'], data['name'], data['address'], data['mobile'], data['qty'], data['date'], 'pending');
        self.cr.execute(crop_book) 

    def booking_detail(self):
        self.cr.execute("SELECT * From crop_book")
        return self.cr.fetchall()

    def approve(self, data):
        self.cr.execute("UPDATE crop_book SET status='confirm' WHERE b_id=%s" % (data['b_id']))

    # def cancel(self, data):
    #     self.cr.execute("DELETE crop_book WHERE b_id=%s" % (data['b_id']))

    def order_details(self):
        self.cr.execute("SELECT * From crop_book" )
        return self.cr.fetchall()

    def crop_details(self):
        self.cr.execute("SELECT * From cropdetail" )
        return self.cr.fetchall()

    def view_stage_details(self, data):
        self.cr.execute("SELECT * FROM stage_activity WHERE cropdetail_id= %s" %(data['cropdetail_id']))
        return self.cr.fetchall()

    def booking_status(self):
        self.cr.execute("SELECT * From crop_book")
        return self.cr.fetchall()
#         SELECT cropdetail.expected_qty, stage_activity.cropname, stage_activity.stage,stage_activity.start_date,stage_activity.end_date,stage_activity.price,stage_activity.sequence,stage_activity.description,stage_activity.finish_note
# FROM stage_activity 
# INNER JOIN cropdetail ON stage_activity.cropdetail_id=cropdetail.id;
