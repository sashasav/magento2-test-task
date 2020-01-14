define([
    'jquery',
    'jquery/ui',
    'mage/translate'
], function ($) {
    'use strict';

    $.widget( "Smile.discountPrice", {
        options: {},

        _create: function() {
            var productWrapper = $(this.element),
                oldPrice = productWrapper.find('[data-price-type="oldPrice"]').attr('data-price-amount'),
                finallPrice = productWrapper.find('[data-price-type="finalPrice"]').attr('data-price-amount'),
                discount = (oldPrice - finallPrice) / oldPrice * 100,
                discountLabel = $('<span class="discount-label"></span>');

            if (oldPrice) {
                productWrapper.append(discountLabel.text($.mage.__('Discount -%1%').replace('%1', discount)));
            }
        }
    });

    return $.Smile.discountPrice;
});
