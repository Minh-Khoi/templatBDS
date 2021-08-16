$(window).on("load", () => {
    $(".right_form > div").css("display", "none");
    let login_with = new URL(window.location.href).searchParams.get("login_with");
    if (!login_with) {
        $(".right_form > div.form_default").css("display", "block");
    } else if (login_with == "phone"){
        $(".right_form > div.form_sdt_1").css("display", "block");
    } else if (login_with == "token"){
        $(".right_form > div.form_sdt_token").css("display", "block");
        $(".right_form > div.form_sdt_token > p > span").html(new URL(window.location.href).searchParams.get("phone"));
    }
})