$(document).ready(function () {
    // Activate Carousel
    $("#video").carousel();

    // Enable Carousel Indicators
    $(".item1").click(function () {
        $("#video").carousel(0);
    });
    $(".item2").click(function () {
        $("#video").carousel(1);
    });
    $(".item3").click(function () {
        $("#video").carousel(2);
    });
    $(".item4").click(function () {
        $("#video").carousel(3);
    });

    // Enable Carousel Controls
    $(".left").click(function () {
        $("#video").carousel("prev");
    });
    $(".right").click(function () {
        $("#video").carousel("next");
    });
});