define([
    'jquery',
    'owl',
    'domReady!',
    'mage/translate'
], function ($) {

//
// add +/- buttons product
//

    $('.field.qty .control input').parent().prepend('<button class="btn-plus">+</button>').append('<button class="btn-minus">-</button>');

    $('.btn-minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });

    $('.btn-plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

//
//  add owl classes for carousel
//
    $('.block.related .products.list.items.product-items').addClass('owl-carousel owl-theme');

    $('.owl-carousel').owlCarousel({
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
            }
        }
    });

//
//    show/hide function for attributes table
//

    // var attrTable = $('.data.table.additional-attributes tbody > tr'),
    //     btnShowHide = $('#tableShowHide'),
    //     isHidden = true,
    //     arrAttrTable = attrTable.slice(7);
    //
    // if (attrTable.length > 7) {
    //     $(arrAttrTable).each(function () {
    //         $(this).hide();
    //     });
    //
    //     btnShowHide.click(function () {
    //         if(isHidden) {
    //             isHidden = false;
    //             $(arrAttrTable).show();
    //         } else {
    //             isHidden = true;
    //             $(arrAttrTable).hide();
    //         }
    //     });
    // }

//
//    show/hide btn for description
//

    var descPWrapper = $('.product.attribute.description'),
        descP = descPWrapper.eq(1).find('.value > p'),
        descClosed = false;

    descPWrapper.eq(1).prepend("<h4>" + $.mage.__('Product description') + "</h4>").append('<button class="descShowHide btnShowHide" id="descShowHide">' + $.mage.__('More') + '</button>');

    if (descP.length > 2) {
        if (!descClosed) {
            descP.each(function (i, el) {
                if (i >= 2) {
                    $(el).addClass('hide-desc-p').hide();
                }
            });
            descClosed = true;

        } else {
            $('#descShowHide').hide();
        }
    }

    $('#descShowHide').on('click', function () {
        if (descClosed) {
            $('.hide-desc-p').show();
            descClosed = false;
        } else {
            $('.hide-desc-p').hide();
            descClosed = true;
        }
    });

//
//    show/hide block review-add
//

    var blockReviewAdd = $('.block.review-add'),
        blockReviewAddIsClosed = false,
        reviewAddBtn = $('#review-add');

    blockReviewAdd.prepend('<button class="reviewAddShowHide" id="reviewAddShowHide">X</button>');

    if (!blockReviewAddIsClosed) {
        blockReviewAdd.hide();
        blockReviewAddIsClosed = true;
    }

    reviewAddBtn.on('click', function () {
        if (blockReviewAddIsClosed) {
            blockReviewAdd.show();
            blockReviewAddIsClosed = false;
        }
    });

    $('#reviewAddShowHide').on('click', function () {
        if (!blockReviewAddIsClosed) {
            blockReviewAdd.hide();
            blockReviewAddIsClosed = true;
        }
    });
});
