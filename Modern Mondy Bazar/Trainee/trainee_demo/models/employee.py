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
    image = fields.Binary(string="Image", attachment=True)
    company_id=fields.Many2one('emlpoyee.company', string="company")
    hobbies_id=fields.Many2many('employee.hobbies')

class company(models.Model):

    _name = 'emlpoyee.company'
    _description = 'employee company_list'

    company_name=fields.Char('Company Name')
    Address=fields.Char('Address')
    emp_record = fields.One2many('employee.list','company_id',string="employee_record")

class Hobbies(models.Model):
	_name='employee.hobbies'

	emp_Hobbies=fields.Char(string="Hobbies")

