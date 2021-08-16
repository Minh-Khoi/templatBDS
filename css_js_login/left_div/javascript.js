$(window).on("load resize", () => {
    if (window.innerHeight > window.innerWidth) {
        $(".left_div").css({"display": "none",});
    } else {
        $(".left_div").css({"display": "block",});
    }
})