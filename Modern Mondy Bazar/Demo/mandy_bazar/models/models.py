from odoo import  fields, models
class Student(models.Model):
    _name = 'student'
    _description = "Student Details"

    name = fields.Char(string="Name")
    birthday = fields.Date(string="Birthday", required=True)
    age = fields.Integer(compute="calculate_age", store=True)
    email = fields.Char(string="Email id")
    address = fields.Char(string="Address", translate=True)
    gender = fields.Selection([('male', 'Male'), ('female', 'Female')], default="male")
    maths = fields.Integer()
    physics = fields.Integer()
    chemistry = fields.Integer()
    total = fields.Integer(string="Total")
    average = fields.Float()
    total_compute = fields.Integer(compute="_compute_total", store=True)
    sem_fee = fields.Integer(string="Fee per semester")
    enrollment_no = fields.Integer(string="Enrollment number")
    branch = fields.Char(string="Branch")
    contact_no = fields.Char(string="Contact_no")