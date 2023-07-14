document.addEventListener("DOMContentLoaded", function () {
  var runScriptBtn = document.getElementById("runScriptBtn");
  runScriptBtn.addEventListener("click", async function () {
    var inputNumber = document.getElementById("inputNumber").value;
    const tab = await getActiveTab();
    chrome.scripting.executeScript(
      {
        target: {
          tabId: tab.id,
        },
        files: ["inject.js"],
      },
      () => {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          args: [parseInt(inputNumber)],
          func: (...args) => runPaaScript(...args),
        });
      }
    );
  });
});

function getActiveTab() {
  return new Promise((r, reject) => {
    chrome.tabs.query(
      {
        active: true,
        lastFocusedWindow: true,
      },
      (tabs) => {
        if (tabs.length) {
          r(tabs[0]);
        } else {
          chrome.tabs.query({}, (tabs) => {
            if (tabs.length) {
              if (tabs.length === 1) {
                r(tabs[0]);
              } else if (tabs.find((i) => i.active)) {
                r(tabs.find((i) => i.active));
              } else {
                reject("No tab found");
              }
            } else {
              reject("No tab found");
            }
          });
        }
      }
    );
  });
}
