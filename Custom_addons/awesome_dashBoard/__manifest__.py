{
    "name" : "Awesome Dashboard",
    "version" : "2.0",
    "license" : "LGPL-3",
    "depends" : ["web"],
    "data" : [
        "views/dashboard_page.xml",
        "views/dashboard_menu.xml",
    ],
    "assets" : {
        "web.assets_backend": [
            "awesome_dashBoard/static/src/components/*.js",
            "awesome_dashBoard/static/src/components/*.xml",
            "awesome_dashBoard/static/src/components/*.scss",
        ]
    },
    "installable" : True,
    "application" : True
}