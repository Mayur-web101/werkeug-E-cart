from odoo import api, fields, models

class Student(models.Model):
    _name = 'employee.list'
    _description = 'employee List'

    first_name = fields.Char('First Name')
    last_name = fields.Char('Last Name')