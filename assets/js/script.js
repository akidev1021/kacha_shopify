var over_menu = document.getElementsByClassName("overlay-content");
function openNav() {
    document.getElementById("myNav").style.width = "350px";
    over_menu[ 0 ].style.display = "block";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    over_menu[ 0 ].style.display = "none";

}


var select_all = document.getElementById("all_checked");
var checkboxes = document.getElementsByTagName("input");

select_all.onclick = function () {
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[ i ].type == "checkbox") {
            checkboxes[ i ].checked = select_all.checked;
        }
    }
    if (select_all.checked) {
        select_all.value = "Unselect All";
    } else {
        select_all.value = "Select All";
    }
}


function category(evt, kacha_list) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[ i ].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[ i ].className = tablinks[ i ].className.replace(" active", "");
    }
    document.getElementById(kacha_list).style.display = "block";
    evt.currentTarget.className += " active";
}

const select = document.getElementById("a");
select.addEventListener("change", function () {
    select.classList.add("selected");
});

