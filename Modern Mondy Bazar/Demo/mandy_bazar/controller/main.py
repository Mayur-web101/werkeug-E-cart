from odoo import http
from odoo.http import request


class Main(http.Controller):

    @http.route('/mypath', type="http", website=True)
    def mypath(self, **kwargs):
        students = request.env['student'].sudo().search([])
        return request.render('mandy_bazar.portal_farmer_index', {'students': students})

    @http.route('/create_student', type="http")
    def create_student(self, **kwargs):
        return request.render('mandy_bazar.create_student')
