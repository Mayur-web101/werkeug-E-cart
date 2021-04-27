from odoo import  fields, models

class farmer(models.Model):
    _name = 'farmer'
    _description = "farmer detail"

    # order_id = fields.Many2one('orders', string="orders")
    role = fields.Selection([('farmer', 'Faramer')], string="Role")
    email = fields.Char(string="Email id")
    name = fields.Char(string="Name")
    mobile_no = fields.Char(string="mobile_no")
    password = fields.Char(string="password")
