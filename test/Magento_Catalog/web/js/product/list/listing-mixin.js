define([
    'jquery',
    'jquery/ui',
    'owl'
], function ($) {
    'use strict';

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
                        items:1
                    },
                    640:{
                        items:3
                    },
                    768:{
                        items:4
                    },
                    1024:{
                        items:5
                    },
                    1280:{
                        items:6
                    }
                }
            });
        }
    };

    return function (target) {
        return target.extend(mixin);
    };
});
