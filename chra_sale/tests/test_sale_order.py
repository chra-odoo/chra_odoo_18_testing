# -*- coding: utf-8 -*-

from odoo.fields import Command
from odoo.tests import tagged

from odoo.addons.sale.tests.common import SaleCommon

# we are inheriting from the SaleCommon class, which is a base class for all sale tests
@tagged('post_install', '-at_install')
class TestSaleOrderActionConfirm(SaleCommon):
    """Test cases for sale.order action_confirm override."""

    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        # Create a product for testing
        cls.test_product = cls.env['product.product'].create({
            'name': 'Test Product',
            'type': 'consu',  # 'consu' for Goods (replaces 'product' in Odoo 18)
            'list_price': 100.0,
        })

    def test_action_confirm_changes_state_to_sale(self):
        """Test that action_confirm changes order state from 'draft' to 'sale'."""
        order = self.env['sale.order'].create({
            'partner_id': self.partner.id,
            'order_line': [
                Command.create({
                    'product_id': self.test_product.id,
                    'product_uom_qty': 1.0,
                }),
            ],
        })
        
        # Verify initial state
        self.assertEqual(order.state, 'draft', 'Order should start in draft state')
        
        # Confirm the order
        order.action_confirm()
        
        # Verify state changed to 'sale'
        self.assertEqual(order.state, 'sale', 'Order state should be "sale" after confirmation')
