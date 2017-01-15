function blockHeightAdaptive(block, maxHeight, minHeight) {
    if ($(window).height() >= minHeight && $(window).height() < maxHeight) {
        jQuery(block).css("height", "" + $(window).height() + "px");
    }
    else if ($(window).height() < minHeight) {
        jQuery(block).css("height", "" + minHeight + "px");
    }
    else {
        jQuery(block).css("height", "" + maxHeight + "px");
    }
}


/*scrollTo('#logo', '#kozub-block');*/
function scrollTo(element, anchor) {
    $(element).click(function () {
        var destination = $(anchor).offset().top-80;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 500);
        return false;
    });

}
