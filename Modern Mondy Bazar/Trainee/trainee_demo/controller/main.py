from odoo import http
from odoo.http import request


class main(http.Controller):

	@http.route('/home', type="http", website=True)
	def mypath(self, **kwargs):
		employees = request.env['employee'].search([])
		return request.render('trainee_demo.emp_template', {'employees':employees})

	@http.route('/create_employee', type="http", website=True)
	def create_employee(self, **kwargs):
		company = request.env['company'].search([])
		return request.render('trainee_demo.create_employee', {'company': company})

	@http.route('/submit_form', type="http", website=True)
	def submit_form(self, **kwargs):
		request.env['employee'].create(kwargs)
		return http.local_redirect('/home')

	@http.route('/delete/<model("employee"):emp>', type="http", website=True)
	def delete(self, emp, **kwargs):
		emp.unlink()
		return http.local_redirect('/home')
