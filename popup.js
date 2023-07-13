document.addEventListener("DOMContentLoaded", function () {
  var runScriptBtn = document.getElementById("runScriptBtn");
  runScriptBtn.addEventListener("click", function () {
    var inputNumber = document.getElementById("inputNumber").value;
    chrome.tabs.executeScript({ file: "inject.js" }, function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { number: inputNumber });
      });
    });
  });
});
