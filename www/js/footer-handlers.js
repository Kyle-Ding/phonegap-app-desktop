function addNewProjectOverlay(evt) {
    global.jQuery("#createOpenProjectOverlay").hide();
    global.jQuery("#newProjectOverlay").show();
    global.jQuery("#overlay-bg").show();    
}

function addProjectOverlay(evt) {
    console.log("addProjectOverlay - plus click handler");
    global.jQuery("#createOpenProjectOverlay").show();
    global.jQuery("#overlay-bg").show();
}

function removeProjectOverlay(evt) {
    console.log("removeProjectOverlay - minus click handler");
    global.jQuery("#removeProjectOverlay").show();
    global.jQuery("#overlay-bg").show();
}

function settingsOverlay(evt) {
    console.log("settingsOverlay - settings click handler");
    // prepopulate port number from localStorage
    global.jQuery("#portNumber").val(localStorage.portNumber);
    global.jQuery("#settingsOverlay").show();
    global.jQuery("#overlay-bg").show();
}

function toggleLog(evt) {
    console.log("toggleLog - log click handler");    
    if (global.jQuery("#serverLogOverlay").is(":visible")) {
        global.jQuery("#serverLogOverlay").hide();
        global.jQuery("#overlay-bg").hide();
    } else {
        global.jQuery("#serverLogOverlay").show();
        global.jQuery("#overlay-bg").show();
    }
}

function overlayBackgroundHandler(evt) {
    console.log("overlayBackgroundHandler - click handler");
    
    if (global.jQuery("#createOpenProjectOverlay").is(":visible")) {
        global.jQuery("#createOpenProjectOverlay").hide();
        global.jQuery("#overlay-bg").hide();        
    }
}