from odoo import api, fields, models

class employee_inherit(models.Model):
	_name = 'employee.inherit'
	_description = 'employee inheritance'
	_inherit = 'employee'

	Address = fields.Char(string="Address")

