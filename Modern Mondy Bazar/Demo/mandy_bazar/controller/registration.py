from odoo import http
from odoo.http import request


class PrintServiceRegistration(http.Controller):

    @http.route('/reg/form/', auth='public', csrf=False)
    def registration_form(self):
        return request.render('print_service.registration_form')