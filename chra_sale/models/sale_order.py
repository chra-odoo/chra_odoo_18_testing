# -*- coding: utf-8 -*-

from odoo import models


class SaleOrder(models.Model):
    _inherit = 'sale.order'

    def action_confirm(self):
        """Override action_confirm for breakpoint testing."""
        # Call the parent method to maintain original behavior
        return super().action_confirm()
