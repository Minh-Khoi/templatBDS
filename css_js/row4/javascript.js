// Set height property of all image elements in .container.row4_
$(window).on("load", function () {
    let imageHeight = $(".row4_ .row .subrow2 > div:first-child > img ").innerHeight();
    // console.log(imageHeight);
    $(".row4_ .row .subrow2 > div:not(:first-child) > img ").css("height", imageHeight+"px");
    $(" .row4_ > .row > div:last-child >img ").css({
        "height": (imageHeight * 1.25) + "px",
        "width": "100%"
    });
})

// Set margin top of the last div (.row4_ .row > div:last-child)
$(window).on("load", () => {
    let headingLineHeight = $(".row4_ .row .subrow1 ").innerHeight();
    $(".row4_ > .row > div:last-child").css("margin-top", headingLineHeight + "px");
})