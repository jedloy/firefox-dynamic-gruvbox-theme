var currentTheme = 'none';

var dark0 = "#171717";
var dark1 = "#272727";
var light0 = "#E9D9B0";
var light1 = "#F9E9C0";

const dayTheme = {
    colors: {
        toolbar: light0,
        frame: light0,
        tab_background_separator: light0,
        tab_background_text: dark1,
        toolbar_field_highlight: dark0,
        toolbar_field_highlight_text: light1,
        toolbar_field: light0,
        toolbar_field_text: dark1,
        toolbar_field_focus: light1,
        toolbar_field_text_focus: dark0,
        toolbar_field_border: light1,
        toolbar_field_border_focus: light0,
        tab_loading: light0,
        tab_text: dark1,
        tab_selected: light1,
        tab_line: dark0,
        button_background_active: light1,
        button_background_hover: light1,
        toolbar_top_separator: light0,
        toolbar_vertical_separator: light0,
        toolbar_bottom_separator: light0,
        toolbar_field_separator: light0,
        popup_highlight: light1,
        popup_highlight_text: dark0,
        popup: light0,
        popup_text: dark1,
        popup_border: light0,
        ntp_background: light0,
        ntp_text: dark0,
        toolbar: light0,
        bookmark_text: dark0,
        sidebar_border: light1,
        sidebar: light0,
        sidebar_text: dark1,
        sidebar_highlight: light1,
        sidebar_highlight_text: dark0,
        bookmark_text: dark1,
        icons: dark1,
        icons_attention: dark0
    }
};

const nightTheme = {
    colors: {
        toolbar: dark0,
        frame: dark0,
        tab_background_separator: dark0,
        tab_background_text: light1,
        toolbar_field_highlight: light0,
        toolbar_field_highlight_text: dark1,
        toolbar_field: dark0,
        toolbar_field_text: light1,
        toolbar_field_focus: dark1,
        toolbar_field_text_focus: light0,
        toolbar_field_border: dark1,
        toolbar_field_border_focus: dark0,
        tab_loading: dark0,
        tab_text: light1,
        tab_selected: dark1,
        tab_line: light0,
        button_background_active: dark1,
        button_background_hover: dark1,
        toolbar_top_separator: dark0,
        toolbar_vertical_separator: dark0,
        toolbar_bottom_separator: dark0,
        toolbar_field_separator: dark0,
        popup_highlight: dark1,
        popup_highlight_text: light0,
        popup: dark0,
        popup_text: light1,
        popup_border: dark0,
        ntp_background: dark0,
        ntp_text: light0,
        toolbar: dark0,
        bookmark_text: light0,
        sidebar_border: dark1,
        sidebar: dark0,
        sidebar_text: light1,
        sidebar_highlight: dark1,
        sidebar_highlight_text: light0,
        bookmark_text: light1,
        icons: light1,
        icons_attention: light0
    }
};

function setTheme(theme) {
    currentTheme = theme;
    browser.theme.update(theme);
}

function toggleTheme() {
    if (currentTheme === dayTheme) {
        setTheme(nightTheme);
    } else {
        setTheme(dayTheme);
    }
}

function setInitialTheme() {
    var now = new Date().getHours();
    if (now >= 7 && now <= 18) {
        setTheme(dayTheme);
    } else {
        setTheme(nightTheme);
    }
}

setInitialTheme();

browser.browserAction.onClicked.addListener(toggleTheme);
