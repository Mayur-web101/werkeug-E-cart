from odoo import api, fields, models


class employee_update(models.TransientModel):
	_name = 'employee.update'
	_description = "employee_update"

	company_id = fields.Many2one("company",string="company_id")

	def update_compnay(self):
		self.env['employee'].browse(self._context.get("active_ids")).update({"company_id":self.company_id})
    	
