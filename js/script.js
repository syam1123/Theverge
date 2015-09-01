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
    var back = document.getElementById("back");
    if(back.style.display == "block"){
        menu.style.left = "-250px";
        back.style.display = "none";
    }
}
