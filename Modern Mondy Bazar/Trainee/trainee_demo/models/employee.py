from odoo import api, fields, models

class Student(models.Model):
    _name = 'employee.list'
    _description = 'employee List'

    first_name = fields.Char('First Name')
    last_name = fields.Char('Last Name')
    mobile=fields.Char('Mobile')
    gender=fields.Selection([('male','Male'),('female','Female'),('others','Others')],string='Gender')
    emp_dob=fields.Date(string="Date of Birth")
    age=fields.Char(string='Age')
    designation=fields.Char(string='designation')
    salary=fields.Char(string='salary')
