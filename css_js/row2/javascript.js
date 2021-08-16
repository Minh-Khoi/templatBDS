$(window).on("load ", function () {
    if (window.innerWidth <= 1184 && window.innerWidth > 991) {
        console.log("fucj");
        $(".row2_region .row:nth-child(2) > div").removeClass("col-lg-6");
    }
})