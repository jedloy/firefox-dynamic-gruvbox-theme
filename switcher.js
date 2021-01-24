var toggleThemeButton = document.getElementById('theme-toggle-button');

function handleThemeResponse(message) {
    if (message === "day") {
        toggleThemeButton.value = "Dark";
    } else {
        toggleThemeButton.value = "Light";
    }
}

function getTheme() {
    var sending = browser.runtime.sendMessage({greeting: "getTheme"});
    sending.then(handleThemeResponse);
}

function sendToggleThemeMessage() {
    var sending = browser.runtime.sendMessage({greeting: "toggleTheme"});
    sending.then(handleThemeResponse);
}

getTheme();
toggleThemeButton.addEventListener("click", sendToggleThemeMessage);

