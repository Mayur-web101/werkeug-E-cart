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

class client(models.Model):
    _name = 'client'
    _description = "clients detail"

    # order_id = fields.Many2one('orders', string="orders")
    role = fields.Selection([('client', 'Client')], string="Role")
    email = fields.Char(string="Email id")
    name = fields.Char(string="Name")
    mobile_no = fields.Char(string="mobile_no")
    password = fields.Char(string="password")
    address = fields.Char(string="Address") 

class crop_registration(models.Model):
    _name = 'crop_registration'
    _description = "crop detail"

    # order_id = fields.Many2one('orders', string="orders")
    farmer_id = fields.Many2one('farmer', string="farmer_id")
    crop_name = fields.Char(string="crop_name")
    detail = fields.Char(string="detail")
    place = fields.Char(string="place")
    expected_qty = fields.Char(string="expected_qty")
    category = fields.Char(string="Category")
    state = fields.Char(string="state") 

class crop_registration(models.Model):
    _name = 'crop_registration'
    _description = "crop detail"

    # order_id = fields.Many2one('orders', string="orders")
    farmer_id = fields.Many2one('farmer', string="farmer_id")
    crop_name = fields.Char(string="crop_name")
    detail = fields.Char(string="detail")
    place = fields.Char(string="place")
    expected_qty = fields.Char(string="expected_qty")
    category = fields.Char(string="Category")
    state = fields.Char(string="state") 

class stage_activity_detail(models.Model):
    _name = 'stage_activity_detail'
    _description = "stage detail"

    # order_id = fields.Many2one('orders', string="orders")
    farmer_id = fields.Many2one('farmer', string="farmer_id")
    crop_id = fields.Many2one('crop_registration', string="crop_id")
    cropname = fields.Char(string="cropname")
    stage = fields.Char(string="stage")
    start_date = fields.Char(string="start_date")
    end_date = fields.Char(string="end_date")
    price = fields.Integer(string="price")
    sequence = fields.Integer(string="sequence") 
    video = fields.Char(string="video")
    images = fields.Char(string="images")
    description = fields.Char(string="description") 
    finish_note = fields.Char(string="finish_note")
