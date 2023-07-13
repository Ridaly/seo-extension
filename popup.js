document.addEventListener("DOMContentLoaded", function () {
  var runScriptBtn = document.getElementById("runScriptBtn");
  runScriptBtn.addEventListener("click", function () {
    chrome.tabs.executeScript({ file: "inject.js" });
  });
});
