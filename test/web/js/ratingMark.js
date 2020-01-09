define([
    'jquery',
    'jquery/ui'
], function ($) {
    'use strict';

    $.widget( "Smile.ratingMark", {
        options: {
            decimalsNum: '10',
            numToFixed: '1'
        },

        _create: function() {
            var element = $(this.element),
                decimalsNum = this.options.decimalsNum,
                numToFixed = this.options.numToFixed,
                ratingMark = element.find('.ratingMark'),
                ratingMarkNum = parseInt(ratingMark.html());

            ratingMark.html((Math.round(ratingMarkNum / 20 * decimalsNum) / decimalsNum).toFixed(numToFixed));
        }
    });

    return $.Smile.ratingMark;
});
