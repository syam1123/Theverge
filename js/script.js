function show_menu() {
    var menu = document.getElementById("hidden_menu");
    var back = document.getElementById("back");
    if(menu.style.left >= "-250px"){
        menu.style.left = "0";
        back.style.display = "block";
    }
    else{
        menu.style.left = "-250px";
        back.style.display = "none";
    }
}
function hide() {
    var menu = document.getElementById("hidden_menu");
    var notif = document.getElementById("hidden_notif");
    var back = document.getElementById("back");
    if(back.style.display == "block"){
        menu.style.left = "-250px";
        back.style.display = "none";
        notif.style.right = "-250px";
    }
}
function show_notification(){
    var notif = document.getElementById("hidden_notif");
    var back = document.getElementById("back");
    if(notif.style.right >= "-250px"){
        notif.style.right = "0";
        back.style.display = "block";
    }
    else{
        notif.style.right = "-250px";
        back.style.display = "none";
    }
}
