{
    "name" : "Awesome Dashboard",
    "version" : "1.0",
    "depends" : ["web"],
    "data" : [
        "views/counter.xml",
        "views/menu.xml",
    ],
    "assets" : {
        "web.assets_backend": [
            "awesome_owl/static/src/components/*.js",
            "awesome_owl/static/src/components/*.xml"
        ]
    },
    "installable" : True,
    "application" : True
}