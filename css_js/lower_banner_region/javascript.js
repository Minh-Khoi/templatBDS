window.onload = () => {
    if (window.innerWidth < 768) {
        $(".lower_banner .row .col-xs-12").css("display", "none");
        var template = document.querySelector(".lower_banner script");
        $(".lower_banner .row").html(template.innerHTML);
    }

}