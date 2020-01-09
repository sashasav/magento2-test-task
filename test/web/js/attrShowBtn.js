define([
    'jquery',
    'jquery/ui',
    'mage/translate'
], function ($) {
    'use strict';

    $.widget( "Smile.attrShowBtn", {
        options: {
            maxAttrs: '7'
        },

        _create: function() {
            var element = $(this.element),
                maxAttrs = this.options.maxAttrs,
                attrTable = $('.data.table.additional-attributes tbody > tr'),
                isHidden = true,
                arrAttrTable = attrTable.slice(maxAttrs);

            if (attrTable.length > maxAttrs) {
                $(arrAttrTable).each(function () {
                    $(this).addClass('attrHide');
                });

                element.click(function () {
                    if(isHidden) {
                        isHidden = false;
                        $(arrAttrTable).removeClass('attrHide').addClass('attrShow');
                        element.text($.mage.__('Show less specifications')).addClass('arrowUp');
                    } else {
                        isHidden = true;
                        $(arrAttrTable).removeClass('attrShow').addClass('attrHide');
                        element.text($.mage.__('Show all specifications')).removeClass('arrowUp');
                    }
                });
            }
        }
    });

    return $.Smile.attrShowBtn;
});
