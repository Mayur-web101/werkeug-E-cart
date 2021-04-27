from odoo import http
from odoo.http import request


class main(http.Controller):

    @http.route('/home', type="http")
    def home(self, **kwargs):
        return request.render('mandy_bazar.home')


    @http.route('/login', type="http")
    def login(self, **kwargs):
        return request.render('mandy_bazar.login') 

    @http.route('/signup', type="http")
    def signup(self, **kwargs):
        return request.render('mandy_bazar.signup') 

    @http.route('/signup_client', type="http")
    def signup_client(self, **kwargs):
        return request.render('mandy_bazar.signup_client')

    @http.route('/signup_submit', type="http", method="POST", csrf=False)
    def signup_submit(self, **kwargs):
        # import pdb; pdb.set_trace()
        request.env['farmer'].create({
            'role': "farmer",
            'email': kwargs.get("email"),
            'password': kwargs.get("password"),
            'mobile_no': kwargs.get("mobno"),
            })
        return http.local_redirect('/login')