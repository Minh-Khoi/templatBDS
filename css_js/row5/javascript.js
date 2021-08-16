$(window).on("load resize", () => {
    let divAbsoluteSelector = ".row5_ > .row:last-child .div_absolute";
    let heightOfParent = $(".row5_ > .row:last-child > div:first-child").innerHeight();
    let widthOfParent = $(".row5_ > .row:last-child > div:first-child").innerWidth();
    // console.log(divAbsoluteSelector + ":first-child");
    $(divAbsoluteSelector + ":first-of-type").css({
        "top": "0",
        "left": "0.5em",
        "width": (widthOfParent - 16) + "px",
        "height": "100%",
        "border-top" : "1px dotted black"
    });
    $(divAbsoluteSelector + ":nth-of-type(2)").css({
        "top": "0",
        "left": "0.5em",
        "width": (widthOfParent - 16) + "px",
        "height": "100%",
        "border-bottom" : "1px dotted black"
    });
    $(divAbsoluteSelector + ":nth-of-type(3)").css({
        "top": "0",
        "left": "0",
        "width": "100%",
        "height":( heightOfParent-16) + "px",
        "border-right" : "1px dotted black"
    });

})