{
    'name': 'trainee_demo',
    'version': '1.0',
    'category': 'test',
    'sequence': 5,
    'summary': 'trainee_demo',
    'depends': ['base'],

    'description': """
            module for trainee
            """,

    'data' : [
        # 'security/student_security.xml',
          'security/ir.model.access.csv',
        # 'data/student_data.xml',
         'views/web_templet.xml',
        # 'data/data.xml',
        # 'controllers/template.xml',
        # 'controllers/assests.xml',
 
        # 'wizard/student_wizard.xml',
        # 'report/st_report.xml',
    ],

    'application' : True

}