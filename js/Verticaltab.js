function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click(function(){return false; });

// //sondos Trying
// document.redirect("/products/Machinetools");
window.redirect("/products/Machinetools");



function openCategory(evt, categoryName) {
    var i, tabcontent_H, tablinks_H;
    tabcontent_H = document.getElementsByClassName("tabcontent_H");
    for (i = 0; i < tabcontent_H.length; i++) {
        tabcontent_H[i].style.display = "none";
    }
    tablinks_H = document.getElementsByClassName("tablinks_H");
    for (i = 0; i < tablinks_H.length; i++) {
        tablinks_H[i].className = tablinks_H[i].className.replace(" active", "");
    }
    document.getElementById(categoryName).style.display = "block";
    evt.currentTarget.className += " active";
    
// //sondos Trying
// document.redirect("/products/Machinetools");
// window.redirect("/products/Machinetools");
    
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// //sondos Trying
// document.redirect("/products/Machinetools");
// window.redirect("/products/Machinetools");