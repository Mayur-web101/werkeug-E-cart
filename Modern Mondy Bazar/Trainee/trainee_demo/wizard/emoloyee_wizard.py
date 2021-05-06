from odoo import api, fields, models


class Employee(models.TransientModel):
	_name = 'employee.wizard'

	company_id=fields.Many2one('emlpoyee.company')

	def add_compnay(self):
 		ids = self.context.get('active_ids')
 		self.env['employee.list'].browse(ids).write({'company_id': self.company_id})