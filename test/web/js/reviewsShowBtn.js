define([
    'jquery',
    'jquery/ui'
], function ($) {
    'use strict';

    $.widget( "Smile.reviewsShowBtn", {
        options: {
            maxReviews: '3'
        },

        _create: function() {
            var element = $(this.element),
                maxReviews = this.options.maxReviews,
                reviews = $('.items.review-items > .item.review-item'),
                isShown = true,
                pager = $('.toolbar.review-toolbar');

            if (reviews.length > maxReviews) {
                reviews.each(function (i, el) {
                    if (i >= maxReviews) {
                        $(el).addClass('hide-reviews').hide();
                    }
                });
                $(pager).hide();
                isShown = false;
            } else {
                $('element').hide();
            }

            element.on('click', function () {
                if (!isShown) {
                    $('.hide-reviews').show();
                    $(pager).show();
                    isShown = true;
                    element.text($.mage.__('Show less reviews')).addClass('arrowUp');
                } else {
                    $('.hide-reviews').hide();
                    $(pager).hide();
                    isShown = false;
                    element.text($.mage.__('Show all reviews')).removeClass('arrowUp');
                }
            });
        }
    });

    return $.Smile.reviewsShowBtn;
});
