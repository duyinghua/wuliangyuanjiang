$(function () {
    $('#iview').iView({
        pauseTime: 5000,
        pauseOnHover: true,
        directionNav: false,
        directionNavHide: false,
        controlNav: true,
        controlNavNextPrev: false,
        controlNavThumbs: true,
        controlNavHoverOpacity: 1,
        timer: "Bar",
        timerDiameter: 120,
        timerPadding: 3,
        timerStroke: 4,
        timerBarStroke: 0,
        timerColor: "#0F0",
        timerPosition: "bottom-right",
        timerX: 15,
        timerY: 20
    });

    var $mask = $("#mask");
    $(".painting").bind("click", function () {
        $mask.fadeIn(function () {

            $('.scrollpane').jScrollPane();
        });
    });
    $("#mask .close").bind("click", function () {
        $mask.fadeOut();
    });
    $('.scrollpane').jScrollPane();
});