//set image hover of the ".main_body > .row > .left .main_tabs:nth-child(3) > .row > div:nth-child(3) img[alt="tailieu"] " element
$(".main_body > .row > .left .main_tabs:nth-child(3) > .row > div:nth-child(3) img[alt='tailieu']").on("mouseover", (ev) => {
    // console.log(Number($(ev.target).css("padding-top").replace("px","")));
    let imgUnder = ev.target;
    let imgUnderWidth = imgUnder.offsetWidth - Number($(imgUnder).css("padding-top").replace("px", ""));
    let imgUnderHeight = imgUnder.offsetHeight - Number($(imgUnder).css("padding-right").replace("px", ""));
    let searchIcon = document.querySelector(".main_body > .row > .left .main_tabs:nth-child(3) > .row > div:nth-child(3) .hover_img");
    $(searchIcon).css({
        "width": imgUnderWidth +"px",
        "height": imgUnderHeight + "px",
        "top": $(imgUnder).css("padding-top"),
        "left": imgUnder.offsetLeft + 'px',
        "display": "inline-block"
    });
})
// Handle click event for the elements: ".main_body > .row > .left .main_tabs:nth-child(3) > .row >div div "
$(".main_body > .row > .left .main_tabs:nth-child(3) > .row >div div").on("click", function (ev) {
    $('.main_body > .row > .left .main_tabs:nth-child(3) > .row >div div').removeClass("active");
    let clicked = ev.target;
    console.log(clicked);
    $(clicked).addClass("active");
});

// set background color of ".main_body > .row > .left .main_tabs:nth-child(5) > .row > p:not(:last-child)" element
$(window).on('load', () => {
    let listOfP = Array.from(document.querySelectorAll(".main_body > .row > .left .main_tabs:nth-child(5) > .row > p:not(:last-child)"));
    for (let i in listOfP) {
        if (i % 2 == 0) {
            $(listOfP[i]).css("background-color", "#f7f7f7");
        }
    }
})

// Set vertical line for the first side-tabs element.
$(window).on("load ", function () {
    // Create vertival line (div) element,
    let verticalLineEl = document.createElement("DIV");
    verticalLineEl.classList = ["vertical_line"];
    // Calculate the height of vertical line
    let verticalLineHeight =  $(".main_body > .row > .right > .side-tab:first-child > div:last-child ul").outerHeight(true);
    // set Height of verticalLineEl
    verticalLineEl.style.height = (verticalLineHeight - 20) + "px";
    document.querySelector(".main_body > .row > .right > .side-tab:first-child > div:last-child").append(verticalLineEl);
    // Set height of .row_right
    $(".main_body > .row > .right > .side-tab:first-child  ")
        .css("min-height", (
            (window.innerWidth <= 575 ? "unset" : "max-content")
        ));

});

// Set color of stars in .danhgia_tuvanvien
$(window).on("load", function () {
    let starIsClicked = false;
    let listStars =
        document.querySelectorAll(".main_body > .row > .right > .side-tab:nth-child(2) > .danhgia_tuvanvien > div > .stars img");
    let indexOfStarClicked = null;
    $(".main_body > .row > .right > .side-tab:nth-child(2) > .danhgia_tuvanvien > div > .stars img").each(function (index, element) {
        // element in the jq event handler below is NOT "THIS"
        $(element).hover( function () {
            // console.log(index);
            for (let j = 0; j <= index; j++){
                listStars[j].src = "./images/bds_chitiet/yellow-start.png";
            }
        }, () => {
            for (let j = 0; j <= 4; j++){
                if ( j > indexOfStarClicked || indexOfStarClicked==null) {
                    listStars[j].src = "./images/bds_chitiet/non-color-start.png";
                }
            }
        });

        $(element).on("click", function () {
            // console.log(index);
            for (let j = 0; j <= index; j++){
                listStars[j].src = "./images/bds_chitiet/yellow-start.png";
            }
            starIsClicked = !starIsClicked;
            indexOfStarClicked = index;
        });
    });

    // Handle the click event on the background or the title of ".dangky_tuvanvien"
    $(".main_body > .row > .right > .side-tab:nth-child(2) > .danhgia_tuvanvien").on("click", function (ev) {
        let targetDOM = ev.target;
        if (targetDOM.tagName != 'IMG' && !$(targetDOM).hasClass("btn")) {
            for (let j = 0; j <= 4; j++){
                listStars[j].src = "./images/bds_chitiet/non-color-start.png";
            }
            indexOfStarClicked = null;
            starIsClicked = false;
        }
    });
});
