define([
    'jquery',
    'jquery/ui',
    'owl'
], function ($) {
    'use strict';

    // ko.virtualElements.allowedBindings.afterRender = true;

    var mixin = {
        sliderInitialization: function () {

            $('.block-viewed-products-grid .owl-carousel').owlCarousel({
                loop:false,
                margin:0,
                autoWidth:false,
                nav:true,
                dots:false,
                responsive:{
                    0:{
                        items:1,
                        nav:true
                    },
                    640:{
                        items:3,
                        nav:true
                    },
                    768:{
                        items:4,
                        nav:true
                    },
                    1024:{
                        items:5,
                        nav:true
                    },
                    1280:{
                        items:6,
                        nav:true
                    }
                }
            });
        }
    };

    return function (target) {
        return target.extend(mixin);
    };
});
