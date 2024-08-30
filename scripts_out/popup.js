"use strict";
tf_onPopupLoad();
///// GETTING STARTED
function tf_onPopupLoad() {
    browser.tabs.executeScript(undefined, {
        file: "./scripts_out/parser.js"
    });
}
