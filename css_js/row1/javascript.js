$(window).on("load resize", function () {
    $(".row1_region > .row > div.row1_right > div:nth-child(2) ").html("<span></span>");
    let widthOfCol = $(".row1_region .row1_right").innerWidth();
    // let distanceFromTop = $(".row1_region .row1_right > div:nth-child(1)").innerHeight();
    
    let widthAndDistanceOfEachCircle = 
        document.querySelector(".row1_region > .row > div.row1_right > div:nth-child(2) > span:nth-child(1)").offsetWidth * 1.5;
    let numOfCircle = Math.floor(widthOfCol / widthAndDistanceOfEachCircle) ;
    // console.log(numOfCircle);
    for (let i = 0; i < numOfCircle; i++){
        let circle = document.createElement("SPAN");
        if (i == numOfCircle - 1) {
            $(circle).css("margin-right", 0);
        }
        $(".row1_region > .row > div.row1_right > div:nth-child(2) ").append(circle);
    }
    let widthOfSpanCircle = $(".row1_region > .row > div.row1_right > div:nth-child(2) > span:first-child").innerWidth();
    $(".row1_region > .row > div.row1_right > div:nth-child(2) ").css("width", (widthOfCol + widthOfSpanCircle) + "px");
});

$(window).on("load " ,function () {
    // Create vertival line (div) element,
    let verticalLineEl = document.createElement("DIV");
    verticalLineEl.classList = ["vertical_line"];
    // Calculate the height of vertical line
    let verticalLineHeight =  $(".row1_region .row1_right ul").outerHeight(true);
    // set Height of verticalLineEl
    verticalLineEl.style.height = (verticalLineHeight - 20) + "px";
    document.querySelector(".row1_region > .row > div.row1_right > div:nth-child(3)").append(verticalLineEl);
    // Set height of .row_right
    $(".row1_region > .row > div.row1_right ")
        .css("min-height", (
            (window.innerWidth <= 575 ? "unset" : ($(".row1_region > .row > div:first-child").innerHeight() + "px"))
        ));
})