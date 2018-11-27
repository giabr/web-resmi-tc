// Porfolio filter
$("#gallery-flters li").click(function () {
    $("#gallery-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    var selectedFilter = $(this).data("filter");
    $("#gallery-wrapper").fadeTo(100, 0);

    $(".gallery-item").fadeOut().css('transform', 'scale(0)');

    setTimeout(function () {
        $(selectedFilter).fadeIn(100).css('transform', 'scale(1)');
        $("#gallery-wrapper").fadeTo(300, 1);
    }, 300);
});