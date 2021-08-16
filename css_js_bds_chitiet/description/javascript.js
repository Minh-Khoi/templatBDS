// set Max Height of .row:nth-child(3)
$(window).on("load resize", () => {
    let lines = document.querySelectorAll(".description .row:nth-child(3) > div");
    let heightOfAllLine = 0;
    for (let line of lines) {
        heightOfAllLine += line.offsetHeight;
    }
    let height = (screen.width <= 768) ? heightOfAllLine : Math.ceil(heightOfAllLine * 0.6);
    $(".description .row:nth-child(3)").css("max-height", height+ "px");
})