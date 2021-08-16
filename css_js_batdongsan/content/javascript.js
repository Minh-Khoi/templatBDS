// make the div which is the first of row is located nearby the left edge (margin-left==0). Another ones set margin-left==auto
$(window).on("load resize", () => {
    let divsList = document.querySelectorAll(".content .row > div ");
    for (let i = 0; i < divsList.length; i++){
        let colsPerRow = (window.innerWidth > 992) ? 3 : (window.innerWidth < 768 ? 1 : 2);
        if (i % colsPerRow != 0) {
            $(" .content .row > div:nth-child(" + (i+1) + ")").css("margin-left", "auto");
        } else {
            $(" .content .row > div:nth-child(" + (i+1) + ")").css("margin-left", 0);
        }
    }
})

// decrease 10% the width of the div
$(window).on("load ", () => {
    let currentWidth = $(".content .row > div:first-child").innerWidth();
    $(".content .row > div").css("flex-basis", (currentWidth*0.9)+"px");
})