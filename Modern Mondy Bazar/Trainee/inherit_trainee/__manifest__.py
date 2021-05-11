{
    'name': 'inherit_trainee',
    'version': '1.0',
    'category': 'test',
    'sequence': 5,
    'summary': 'inherit trainee_demo',
    'depends': ['trainee_demo'],

    'description': """
            module for trainee
            """,

    'data' : [
          # 'security/ir.model.access.csv',
          'view/employee_inherit.xml',
          # 'wizard/emoloyee_wizard.xml',
          # 'report/employee_report.xml',
    ],

    'application' : True

}
