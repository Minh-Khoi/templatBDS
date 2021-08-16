$(".navbar .form-inline img, .navbar .form-inline button").click(function (e) { 
    e.preventDefault();
    var targetForID = this.getAttribute("data-forid");
    var scriptTag = document.getElementById(targetForID);
    console.log(this);
    //create Container of the Collapse DOM
    var collapseContainer = (!document.querySelector("nav #" + targetForID + "_container")) ? document.createElement("DIV")
        : document.querySelector("nav #" + targetForID + "_container");
    $(collapseContainer).addClass("collapsed_dom");
    collapseContainer.id = targetForID+"_container";
    collapseContainer.style.display = (collapseContainer.style.display == "block") ? "none" : "block";
    collapseContainer.style.position = "absolute";
    collapseContainer.style.top = ($(e.target).offset().top+ e.target.offsetHeight +20) + "px";
    collapseContainer.style.right = (window.innerWidth - $(e.target).offset().left - e.target.offsetHeight) + "px";
    collapseContainer.style.backgroundColor = "white";
    collapseContainer.style.zIndex = "1000";
    $(collapseContainer).find(".media-right,.media-left").css("vertical-align", "middle");
    // create indent div
    var indentIMG = (!document.querySelector("nav #" + targetForID + "_container")) ? document.createElement("IMG")
        : document.querySelector("nav #" + targetForID + "_img");
    $(indentIMG).addClass("collapse_img");
    indentIMG.id = targetForID + "_img";
    indentIMG.style.display = (indentIMG.style.display == "block") ? "none" : "block";
    indentIMG.style.position = "absolute";
    // console.log(($(e.target).offset().top + e.target.offsetHeight).toString()+" px");
    indentIMG.style.top = ($(e.target).offset().top + e.target.offsetHeight) + "px";
    indentIMG.style.right = (window.innerWidth - $(e.target).offset().left - e.target.offsetWidth*0.75) + "px";
    indentIMG.src = "./images/datxanh_1/fucku2.png";
    indentIMG.style.backgroundPosition = "right top";
    indentIMG.style.height = "20px";
    indentIMG.style.width = "20px";
    indentIMG.style.zIndex = "1000";

    collapseContainer.innerHTML = scriptTag.innerHTML;
    document.querySelector("nav").appendChild(indentIMG);
    document.querySelector("nav").appendChild(collapseContainer);
    // console.log((collapseContainer));
});

$(".navbar .navbar-collapse ul li, .navbar .navbar-brand").click(function (ev) { 
    ev.preventDefault();
    $(".navbar .navbar-collapse ul li").removeClass("active");
    if ($(this).prop("tagName") == "A") {
        $(".navbar .navbar-collapse ul li:first-child").addClass("active");
    } else {
            $(this).addClass("active");
    }
});