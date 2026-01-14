# -*- coding: utf-8 -*-

{
    "name": "Odoo 18 Tutorial",
    "version": "18.0.1.0.0",
    "author": "CHRA",
    "category": "Tutorial",
    "license": "LGPL-3",
    "summary": "Odoo 18 Tutorial Module",
    "description": """
        Odoo 18 Tutorial Module
        ========================
        
        This is a custom tutorial module for learning Odoo 18 development.
    """,
    "depends": ["sale_management"],
    "data": [],
    "demo": [],
    "assets": {
        "web.assets_backend": [
            "chra_sale/static/src/components/**/*",
        ],
    },
}
