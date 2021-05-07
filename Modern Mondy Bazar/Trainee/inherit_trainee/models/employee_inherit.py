from odoo import api, fields, models

class employee_inherit(models.model):
	_name = 'employee_inherit'
	_description = 'employee inheritance'
	_inherit = 'employee'

	update_new = fields.Char(string="Update New")
