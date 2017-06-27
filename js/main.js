/**
 * Created by gumidung on 6/19/17.
 */


$(function () {
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function(event) {
                // On-page links
                if (
                        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                        &&
                        location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000, function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                }
            });


    new WOW().init();

    $(".tourBlock.tourBlock03").click(function () {
        $('#tourBlockModal03').modal({
            show: 'false'
        });
    })

    $(".tourBlock.tourBlock01").click(function () {
        $('#tourBlockModal01').modal({
            show: 'false'
        });
    })

    $(".tourBlock.tourBlock02").click(function () {
        $('#tourBlockModal02').modal({
            show: 'false'
        });
    })

    $(".sectionDetailHead .block_right").click(function () {
        $('#snowPeak').modal({
            show: 'false'
        });
    })

    $(".sectionTime .timeBtnWrap .btnTerm").click(function () {
        $('#rulesForm').modal({
            show: 'false'
        });
    })

    $(".btnMoreQuestion").click(function () {
        $('#questionForm').modal({
            show: 'false'
        });
    })

    $(".sectionDetailLinkWrap .detailBtnFaq").click(function () {
        $('#frfForm').modal({
            show: 'false'
        });
    })

    $(".sectionDetailLinkWrap .detailBtnTerm").click(function () {
        $('#rulesRfrForm').modal({
            show: 'false'
        });
    })

    $(".tourBlockModal .modalBtn").click(function () {

        $(this).parents(".tourBlockModal").find(".close").click();
        $('#rulesForm').modal({
            show: 'false'
        });

        setTimeout(function () {
            $("body").addClass("modal-open");

        },500);

    })


    $(".scrollTopPopup").click(function () {
        $(this).parents(".popupScrollUp").animate({ scrollTop: 0 }, 'slow');
    })



});