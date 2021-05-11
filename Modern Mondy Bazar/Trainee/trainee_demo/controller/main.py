from odoo import http
from odoo.http import request


class main(http.Controller):

	@http.route('/mypath', type="http", website=True)
	def mypath(self, **kwargs):
		employees = request.env['employee'].search([])
		return request.render('trainee_demo.employee_form_view', {'employees':employees})