{
    'name': 'Student',
    'version': '1.0',
    'category': 'Trainee Demo',
    'sequence': 5,
    'summary': 'Trainee demo module',
    'depends': ['base', 'website'],

    'description': """
            module for trainee demo
            """,

    'data' : [
        'security/student_security.xml',
        'security/ir.model.access.csv',
        'data/student_data.xml',
        'views/st_view.xml',
        'views/templates.xml',
        'wizard/student_wizard.xml',
        'report/st_report.xml',
    ],

    'application' : True

}