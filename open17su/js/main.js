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

    var ua = navigator.userAgent;
    var is_native_android = ((ua.indexOf('Mozilla/5.0') > -1 && ua.indexOf('Android ') > -1 && ua.indexOf('AppleWebKit') > -1) && (ua.indexOf('Version') > -1));

    if(is_native_android) {
        $("body").addClass("nativeAndroid");
    }

    var getCheck = $(".rulesForm .formBtnWrap .checkboxStyle input[type='checkbox']");
    getCheck.on("click", function () {
        if($(this).is(":checked")) {
            $(".rulesForm .formBtn").attr("href", "http://fmd.docomo-de.net/445/toPENQ_campaignMLOpt_auto.jsp?detail_id=0000012232&entry_count=1").addClass("active");
            $(".rulesForm .formBtn").attr("target","_blank");
        } else {
            $(".rulesForm .formBtn").removeAttr("href").removeClass("active");
            $(".rulesForm .formBtn").removeAttr("target");
        }
    });

    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent) || navigator.userAgent.indexOf("Trident/") > -1 ){
        $("body").addClass("ie");
    }

    $("#rulesForm .close").on("click",function () {
        $(".rulesForm .formBtn").removeAttr("href").removeClass("active");
        $(".rulesForm .formBtn").removeAttr("target");
        getCheck.prop('checked', false);
    });

    $(".modal .close").on("click",function () {
        $("html").removeClass("modal-open");
    })
    
    $("html body").mouseup(function(e)
    {
        if($("#rulesForm").hasClass("in")) {
            var container = $("#rulesForm .modal-dialog");

            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0)
            {
                $(".rulesForm .formBtn").removeAttr("href").removeClass("active");
                $(".rulesForm .formBtn").removeAttr("target");
                getCheck.prop('checked', false);
                $("html").removeClass("modal-open");
            }
        }

    });


    if(isIE() == 9) {
        $("body").addClass("ie9");
    }

});

function isIE () {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}