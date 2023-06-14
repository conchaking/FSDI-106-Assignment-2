

// togleImportant
let isImportant = false;
let isVisible = true;

function toggleImportant() {
    const nonImportantIcon = "fa-regular fa-face-rolling-eyes";
    const importantIcon = "fa-solid fa-face-grin-beam-sweat";

    if(!isImportant) {
    $("#iImportant").removeClass(nonImportantIcon).addClass(importantIcon);
    isImportant = true;
    
    }
    else {
        $("#iImportant").removeClass(importantIcon).addClass(nonImportantIcon);
        isImportant = false;
    } 
}  



function saveTask(){
    console.log("Saving Task...");
}

function hideDetails(){
    const panel = $(".info");
    if(isVisible) {
        panel.hide();
        isVisible = false;
    }
    else {
        panel.show();
        isVisible = true;
    }
}

function init() {
    console.log("Task manager");

    $("#btnSave").click(saveTask);
    $("#iImportant").click(toggleImportant);
    $("#btnHide").click(hideDetails);
}

// load data
// hook events

window.onload = init;