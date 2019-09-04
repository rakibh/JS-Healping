/*----------------------------------------------------------
                    Dropdown menu show mouseover
-----------------------------------------------------------*/

$(".dropdown-menu").css('margin-top', 0);
$(".dropdown")
    .mouseover(function () {
        $(this).addClass('show').attr('aria-expanded', "true");
        $(this).find('.dropdown-menu').addClass('show');
    })
    .mouseout(function () {
        $(this).removeClass('show').attr('aria-expanded', "false");
        $(this).find('.dropdown-menu').removeClass('show');
    });


/*----------------------------------------------------------
        Dropdown menu show mouseover with slide effect
-----------------------------------------------------------*/

// Add slideDown animation to Bootstrap dropdown when expanding.
$('.dropdown').mouseover(function () {
    $(this).toggleClass('current').find('.dropdown-menu').stop().slideDown('fast');
});

// Add slideUp animation to Bootstrap dropdown when collapsing.
$('.dropdown').mouseout(function () {
    $(this).toggleClass('current').find('.dropdown-menu').stop().slideUp('fast');
});

