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
                email varchar  NOT NULL,
                password varchar NOT NULL,
                session varchar,
                mobile_no varchar NOT NULL
            );'''
            self.cr.execute(users);
        else:
	    self.create_connection(self.db_name)
            cropdetail = '''CREATE TABLE IF NOT EXISTS cropdetail(
                id SERIAL PRIMARY KEY,
                crop_name varchar  NOT NULL,
                detail varchar NOT NULL,
                place varchar,
                expected_qty varchar NOT NULL,
                Category varchar NOT NULL,
                state varchar
            );'''
            self.cr.execute(cropdetail);
            self.create_connection(self.db_name)

            self.create_connection(self.db_name)

    def create_connection(self, db_name):
        self.connection = psycopg2.connect(user="postgres", password="postgres", host="127.0.0.1", port="5432", database=db_name)
        self.connection.autocommit = True
        self.cr = self.connection.cursor()

    def create_user(self, data):
        users = """INSERT INTO users (email, password, mobile_no) VALUES ('%s', '%s', '%s')""" % (data['email'], data['password'], data['mobileno']);
        self.cr.execute(users)

    def user_exists(self, data):
        self.cr.execute("SELECT id FROM users WHERE email='%s' and password='%s'" % (data['email'], data['password']))
        return self.cr.fetchone()

    def create_user_session(self, session_id, user_id):
        self.cr.execute("UPDATE users set session='%s' where id=%s" % (session_id, user_id))

    def session_validate(self, data):
        self.cr.execute("SELECT id FROM users WHERE session='%s'" % (data['session_id']))
        return self.cr.fetchone()
   def user_logout(self, data):
        self.cr.execute("UPDATE users SET session=null WHERE session='%s'" % (data['session_id']))

    def insert_cropdetail(self, data):
        cropdetail = """INSERT INTO cropdetail (crop_name, detail,place,expected_qty,Category,state) VALUES ('%s', '%s', '%s', '%s', '%s', '%s')""" % (data['cropname'], data['detail'], data['place'], data['qty'], data['category'], data['state']);
        self.cr.execute(cropdetail)
        
