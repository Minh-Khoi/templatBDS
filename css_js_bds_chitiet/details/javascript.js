// Set the class ".active" on the nav
$(".details .row > .col-12:first-child .nav > div ").on("click", (e) => {
    $(".details .row > .col-12:first-child .nav > div ").removeClass("active");
    // add class active
    $(e.target).parent().addClass("active");
    // Display the none-display detail div according to the href of anchor tag
    let idDetails = $(e.target).attr("href").slice(1);
    $(".details .row > .col-12:first-child > .data_details#"+idDetails).css("display", "block");
})

// Set toggled displaying of some data_details divs when the "three_dots" clicked
$(".details .row > .col-12:first-child > img[alt=three_dots]").on("click", () => {
    let detailsToggled = Array.from(document.querySelectorAll(".details .row > .col-12:first-child > .data_details"));
    //the detailsToggled must be popped the first three elements
    detailsToggled = detailsToggled.filter((div, ind) => {
        return ind >= 3;
    });
    // console.log(detailsToggled);
    let makingAppear = false;
    for (let div1 of detailsToggled) {
        // console.log($(div).css("display"));
        if ($(div1).css("display") == "none") {
            makingAppear = true;
            break;
        }
    }
    for (let div2 of detailsToggled) {
        $(div2).css("display", (makingAppear)? "block": "none");
    }
})

// Set content of element ".details .row > .col-12:last-child > .tabs_side > div > div:last-child > h6"
// which have two-line content always fixed the width of element (by omit the overflowed words)
$(window).on("load resize", (e) => {
    console.log(e.type);
    $(".details .row > .col-12:last-child > .tabs_side:nth-child(2) > div > div:last-child > p:first-child")
                                                                                        .each(function (index, element) {
        // element == this
        let copiedElement = null;
        if ($(element).parent().find("h6.hiddenCopiedEl").length == 0) {
            copiedElement = document.createElement("h6");
            copiedElement.innerHTML = element.innerHTML;
            $(copiedElement).addClass("hiddenCopiedEl");
            copiedElement.style.display = "none";
            $(element).parent().append(copiedElement);
        } else {
            copiedElement = $(element).parent().find("h6.hiddenCopiedEl")[0];
            element.innerHTML = copiedElement.innerHTML;
        }
        
        // truncate content 
        let wordsArray = copiedElement.innerHTML.split(" ");
        while (element.scrollHeight > element.offsetHeight) {
            wordsArray.pop();
            element.innerHTML = wordsArray.join(" ")+ " ...";
        } 
    });
})