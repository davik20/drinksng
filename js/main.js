jQuery(document).ready(function (jQuery) {

    if (jQuery('.delivery-instructions-check').length > 0) {
        jQuery('.delivery-instructions-check').click(function () {
            if (jQuery(this).prop("checked") == true) {
                jQuery(this).parents('.additional-info').find('.additional-info-box').removeClass('hide').addClass('show');
            } else if (jQuery(this).prop("checked") == false) {
                jQuery(this).parents('.additional-info').find('.additional-info-box').removeClass('show').addClass('hide');

            }
        });
    }

    if (jQuery('.password-field').length > 0) {
        jQuery('.password-field').strengthify({
            zxcvbn: 'https://cdn.rawgit.com/dropbox/zxcvbn/master/dist/zxcvbn.js',
            /*titles: [
                'Weakest',
                'Weak',
                'So-so',
                'Good',
                'Perfect'
              ],
            $addAfter:jQuery('#new-password'),*/
            tilesOptions: {
                tooltip: true,
                element: true
            },
            drawBars: true,
            drawTitles: true
        })
    }

    if (jQuery('select.form-control').length > 0) {
        jQuery("select.form-control").selectmenu();
    }

    if (jQuery('#add-delivery').length > 0) {
        jQuery('#add-delivery').click(function () {
            event.preventDefault()
            jQuery('#add-new-delivery').addClass('active show');
            jQuery('#logistic-list').removeClass('active show');
        })

        jQuery('#logistic-tab').click(function () {
            event.preventDefault()
            jQuery('#logistic-list').addClass('active show');
            jQuery('#add-new-delivery').removeClass('active show');
        })
    }

    if (jQuery('.cart-page .qty-cont').length > 0) {
        jQuery('.cart-page .qty-cont .btn').click(function () {
            if (jQuery('.cart-page .extra-action .update').is(':disabled')) {
                if (jQuery(this).hasClass('btn-subtract')) {
                    if (jQuery('.cart-page .qty-cont input').val() > 1) {
                        jQuery('.cart-page .extra-action .update').prop("disabled", false);
                    }
                } else {
                    jQuery('.cart-page .extra-action .update').prop("disabled", false);
                }
            }
        })
    }

    if (jQuery('.brands ul').length > 0) {
        jQuery('.brands ul').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            variableWidth: true,
            centerPadding: '60px',
            autoplay: true,
            autoplaySpeed: 8000,
            arrows: false
        });
    }

    if (jQuery('.sidebar').length > 0) {
        var myCollapsible = document.getElementById('multiCollapseExample1')
        jQuery('.collapse').on('hidden.bs.collapse', function () {})
    }

    if (jQuery('.filter-list').length > 0) {
        jQuery('.filter-list').click(function () {
            if (jQuery(this).hasClass('open')) {
                jQuery(this).removeClass('open')
            } else {
                jQuery(this).addClass('open')
            }
        })
    }


    if (jQuery('.cart-price-info').length > 0) {
        jQuery('.cart-price-info .delivery-type .tabs').click(function () {
            // jQuery('.filter-list').removeClass('open')
            // jQuery(this).addClass('open')
            // jQuery('.link-holder').attr('class', 'link-holder')
            jQuery('.filter-list').removeClass('shipping')
            jQuery('.link-holder').removeClass('shipping pickup')
            jQuery('.link-holder').addClass(jQuery(this).attr('data-parent'))
        })
    }

    if (jQuery('header.secondry').length > 0) {
        jQuery(".dropdown").hover(function () {
            var dropdownMenu = jQuery(this).children(".dropdown-menu");
            if (dropdownMenu.is(":visible")) {
                dropdownMenu.parent().toggleClass("open");
            }
        });
    }


    if (jQuery('.prod_list-grid-lg').length > 0) {
        jQuery('.prod_list-grid-lg .row').slick({
            slidesToShow: 1,
            mobileFirst: true,
            infinite: false,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: 'unslick'
                }
            ]
        });
    }

    if (jQuery('.prod_promo').length > 0) {
        jQuery('.prod_promo .row').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            mobileFirst: true,
            autoplay: true,
            autoplaySpeed: 8000,
            infinite: false,
            responsive: [
                {
                    breakpoint: 767.98,
                    settings: 'unslick'
                }
            ]
        });
    }


    if (jQuery('.related').length > 0) {
        jQuery('.related .prod-main-cont .row').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            mobileFirst: true,
            infinite: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 740,
                    settings: {
                        variableWidth: true,
                        slidesToScroll: 1,
                        infinite: false
                    }
                }, {
                    breakpoint: 500,
                    settings: {
                        variableWidth: true,
                        slidesToScroll: 1,
                        infinite: false
                    }
                }, {
                    breakpoint: 200,
                    settings: {
                        variableWidth: true,
                        slidesToScroll: 1,
                        infinite: false
                    }
                }
            ]
        });
    }


    if (jQuery('.faq-page').length > 0) {
        jQuery('.faq-page .faq-topics-row').slick({
            slidesToShow: 7,
            slidesToScroll: 1,
            mobileFirst: true,
            infinite: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 740,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 280,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }


    if (jQuery('.xzoom-thumbs').length > 0) {
        jQuery('.xzoom-thumbs').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            mobileFirst: true,
            infinite: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
            ]
        });
    }

    if (jQuery('.home-about .p-cont').length > 0) {
        jQuery('.home-about a.readmore').live('click', function () {
            event.preventDefault();
            jQuery('.home-about .p-cont').css('height', 'auto');
            if (jQuery('.home-about a.readmore').text() == 'read more') {
                jQuery('.home-about a.readmore').text('').text('close');
            } else {
                jQuery('.home-about a.readmore').text('').text('read more');
                jQuery('.home-about .p-cont').css('height', 90);
            }
        })
    }

    if (jQuery('article').length > 0) {
        jQuery('article').readmore({speed: 75, collapsedHeight: 50, moreLink: '<a href="#">Read more</a>', lessLink: '<a href="#">Close</a>'});
    }

    if (jQuery('#cbp-spmenu').length > 0) {
        var menuLeft = $('#cbp-spmenu').slideMenu({position: 'left', submenuLinkAfter: '<span> > </span>', backLinkBefore: '<span class="back"><span> ← </span> Back to </span>'});

        jQuery('.slide-menu .nav-cat li:first a').live('click', function () {
            menuLeft.back();
        })
    }

    if (jQuery('.store-list').length > 0) {
        jQuery('.modal.store-popup .store-list ul li a').click(function () {
            event.preventDefault();
            jQuery('.modal.store-popup .store-list ul li').removeClass('active')
            jQuery(this).parent().addClass('active');
        })
    }

    if (jQuery('.xzoom').length > 0) {
        jQuery(".xzoom").xzoom({tint: '#333', Xoffset: 15, mposition: 'inside'});
    }

    if (jQuery('.input-counter').length > 0) {
        var options = {
            selectors: {
                addButtonSelector: '.btn-add',
                subtractButtonSelector: '.btn-subtract',
                inputSelector: '.counter'
            },
            settings: {
                checkValue: true,
                isReadOnly: true
            }
        };

        jQuery(".input-counter").inputCounter(options);
    }


    if (jQuery('.amount-progress').length > 0) {
        var stepsSlider = document.getElementById('amount-progress');
        var input0 = document.getElementById('min-amount');
        var input1 = document.getElementById('max-amount');
        var inputs = [input0, input1];

        noUiSlider.create(stepsSlider, {
            start: [
                1000, 5000
            ],
            connect: true,
            // tooltips: [true, wNumb({decimals: 1})],
            range: {
                'min': [500],
                '10%': [
                    500, 1000
                ],
                '20%': [
                    1000, 1500
                ],
                '30%': [
                    1500, 2000
                ],
                '40%': [
                    2500, 3000
                ],
                '50%': [
                    3500, 4000
                ],
                '60%': [
                    4500, 5000
                ],
                '60%': [
                    5500, 6000
                ],
                '70%': [
                    6500, 7000
                ],
                'max': 100000
            }
        });

        stepsSlider.noUiSlider.on('update', function (values, handle) {
            inputs[handle].value = values[handle];
        });

        inputs.forEach(function (input, handle) {

            input.addEventListener('change', function () {
                stepsSlider.noUiSlider.setHandle(handle, this.value);
            });

            input.addEventListener('keydown', function (e) {

                var values = stepsSlider.noUiSlider.get();
                var value = Number(values[handle]);

                // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
                var steps = stepsSlider.noUiSlider.steps();

                // [down, up]
                var step = steps[handle];

                var position;

                // 13 is enter,
                // 38 is key up,
                // 40 is key down.
                switch (e.which) {

                    case 13: stepsSlider.noUiSlider.setHandle(handle, this.value);
                        break;

                    case 38:

                        // Get step to go increase slider value (up)
                        position = step[1];

                        // false = no step is set
                        if (position === false) {
                            position = 1;
                        }

                        // null = edge of slider
                        if (position !== null) {
                            stepsSlider.noUiSlider.setHandle(handle, value + position);
                        }

                        break;

                    case 40: position = step[0];

                        if (position === false) {
                            position = 1;
                        }

                        if (position !== null) {
                            stepsSlider.noUiSlider.setHandle(handle, value - position);
                        }

                        break;
                }
            });
        });
    }

    mobileView();
    checkout()
    pickupOption('#storePopup input[name=pickupLocationRadio]', '#storePopup #pickup');
    pickupOption('#storePopup input[name=deliveryLocationRadio]', '#storePopup #delivery');

});

function checkout() {
    if (jQuery('input[name=checkoutType]').length > 0) {
        jQuery('input[name=checkoutType]').on('change', function () {
            if (this.checked) {
                if (jQuery(this).val() == 'login') {
                    jQuery('#login-details .holder').removeClass('d-none')
                    jQuery('#billing-details .holder').addClass('d-none')
                    jQuery('#billing-details .holder').removeClass('done').addClass('prev')
                } else {
                    jQuery('#login-details .holder').addClass('d-none')
                    jQuery('#billing-details .holder').removeClass('d-none')
                    jQuery('#billing-details .holder').removeClass('prev').addClass('done')
                }
            }
        })

        jQuery('input[name=createAccount]').on('change', function () {
            if (this.checked) {
                jQuery('#checkout-createAccount').removeClass('d-none')
            } else {
                jQuery('#checkout-createAccount').addClass('d-none')
            }
        })
    }

    jQuery('.next').click(function () {})
}

function pickupOption(field, cont) {
    if (jQuery(field).length > 0) {
        jQuery(field).on('change', function () {
            if (this.checked) {
                jQuery(cont + ' label.store').removeClass('active');
                jQuery(this).parents('label.store').addClass('active');
                // jQuery(cont+' .btn-bottom-container .btn').removeClass('disabled');
            }
        })
    }
}

function mobileView() {
    if (jQuery('.home-about .p-cont').length > 0) {
        if ($(window).width() < 768) {
            jQuery('.home-about .p-cont').css('height', 90);
            jQuery('.home-about a.readmore').text('').text('read more');
        } else {
            jQuery('.home-about .p-cont').css('height', 'auto');
        }
    }

    if (jQuery('.sticky').length > 0) {
        if ($(window).width() < 768) {
            var div_cont = $('.sticky').offset().top;
            var window_top = $(window).scrollTop() + $(window).height();

            if (div_cont >= window_top) {
                jQuery('.sticky .proceed-btn').removeClass('passed')
            } else {
                jQuery('.sticky .proceed-btn').addClass('passed')
            }
        }
    }

    if (jQuery('footer ul li a').length > 0) {
        if ($(window).width() < 575.98) {
            if (!(jQuery('footer ul').hasClass('mobile-collapse'))) {
                if (jQuery('footer ul').hasClass('show')) {
                    jQuery('footer ul').addClass('mobile-collapse');
                    jQuery('footer ul').removeClass('show');
                    jQuery('footer .multi-collapse').removeClass('show');
                }
            }
        } else {
            jQuery('footer ul').removeClass('mobile-collapse');
            jQuery('footer ul').addClass('show');
            jQuery('footer .multi-collapse').addClass('show');
        }
    }
}

jQuery(window).on('resize scroll', function () {
    mobileView();
});
