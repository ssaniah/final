function toggleDetail(e){
    const target=$(e.target)

    if($(target).hasClass("active")){
        $(target).html("more info").removeClass("active")
    } else {
        $(target.html("less info").addClass("active"))
    }

    const item =$(target).parents(".about-exp-item")
    const detail=$(item).children(".about-exp-item-detail")
    $(detail).slideToggle()
}

function onFormSubmit(e){
    e.pareventDefault()
    const email=$("#inp_email")
    const subject=$("#inp_subject")
    const message=$("#inp_message")

    if(!$(email).vall()){
        alert("email is required")
    }else if (!$(subject).vall()){
        alert("subject is required")
    }else if (!$(message).vall()){
        alert("message is required")
    }else{
        alert("form submitted")
        $(email).vall("")
        $(subject).vall("")
        $(message).vall("")
    }
}