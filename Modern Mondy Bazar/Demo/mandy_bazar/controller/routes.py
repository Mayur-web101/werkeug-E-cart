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
@http.route('/client_signup_submit', type="http", method="POST", csrf=False)
    def client_signup_submit(self, **kwargs):
        # print(kwargs)
        # import pdb; pdb.set_trace()
        request.env['client'].create({
            'role': "client",
            'email': kwargs.get("email"),
            'name': kwargs.get("fname"),
            'password': kwargs.get("password"),
            'address': kwargs.get("address"),
            'mobile_no': kwargs.get("mobno"),
            })
        return http.local_redirect('/login')

    @http.route('/farmer_crop_registartion', type="http")
    def farmer_crop_registartion(self, **kwargs):
        return request.render('mandy_bazar.farmer_crop_registartion')

    @http.route('/crop_registartion', type="http", method="POST", csrf=False)
    def crop_registartion(self, **kwargs):
        # print(kwargs)
        # import pdb; pdb.set_trace()
        request.env['crop_registration'].create({
            'farmer_id': kwargs.get("farmer_id"),
            'crop_name': kwargs.get("cropname"),
            'detail': kwargs.get("detail"),
            'place': kwargs.get("place"),
            'expected_qty': kwargs.get("qty"),
            'category': kwargs.get("category"),
            'state': kwargs.get("state"),
            })

        return http.local_redirect('/farmer_crop_registartion')

    @http.route('/stage_activity', type="http")
    def stage_activity(self, **kwargs):
        return request.render('mandy_bazar.stage_activity')
    
    @http.route('/stage_activity_add', type="http", method="POST", csrf=False)
    def stage_activity_add(self, **kwargs):
        # print(kwargs)
        # import pdb; pdb.set_trace()
        request.env['crop_registration'].create({
            'farmer_id': kwargs.get("farmer_id"),
            'crop_id': kwargs.get("crop_id"),
            'cropname': kwargs.get("cropname"),
            'stage': kwargs.get("stage"),
            'start_date': kwargs.get("start_date"),
            'end_date': kwargs.get("end_date"),
            'price': kwargs.get("price"),
            'sequence': kwargs.get("sequence"),
            'video': kwargs.get("video"),
            'images': kwargs.get("images"),
            'description': kwargs.get("description"),
            'finish_note': kwargs.get("Finish_note"),
            })

        return http.local_redirect('/stage_activity_add')
