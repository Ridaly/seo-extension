async function runPaaScript(limit) {
  const qs = [];
  const container = document.querySelector('div[jsname="N760b"]');

  // LETS GET ALL THE ONES THAT SHOW AT START
  let paas;

  paas = getPAAS();

  function getPAAS() {
    return Array.from(container.querySelectorAll('div[jsname="yEVEwb"]'));
  }

  let clicks = 0;
  for (let i = 0; i < limit; i++) {
    if (!paas[i]) {
      try {
        while (!paas[i]) {
          if (i === clicks) throw new Error("No more PAAs");
          // get next element to click
          const nextQuestionToOpen = paas[clicks];
          // get btn & click it
          const btn = nextQuestionToOpen.querySelector(".dnXCYb");
          btn.click();
          clicks++;
          // wait a bit
          await randomSleep();
          paas = getPAAS();
        }
      } catch (e) {
        console.log(e);
        break;
      }
    }
    const qEl = paas[i].querySelector(".CSkcDe");
    const aEls = Array.from(paas[i].querySelectorAll(".wDYxhc"));
    let url, urlEl;
    try {
      const urlChildEl = paas[i].querySelector(".LC20lb");
      if (urlChildEl) {
        urlEl = urlChildEl.parentNode;
      } else {
        const urlParent = paas[i].querySelector(".Xv4xee");
        if (urlParent) {
          urlEl = urlParent.querySelector("a");
        }
      }
      url = urlEl.href;
    } catch (e) {
      console.log(e);
    }

    const q = getText(qEl).trim();
    const a = aEls
      .map((el) => getText(el))
      .join("\n")
      .trim();
    const aHtml = aEls
      .map((el) => el.innerHTML)
      .join("\n")
      .trim();

    qs.push({
      q,
      a,
      aHtml,
      url,
    });
  }

  console.log(qs);
  generateAndDownloadJSON(qs);
}

function getText(el) {
  return el.innerText || el.textContent;
}
async function randomSleep(min = 600, max = 1300) {
  return await sleep(randomIntFromInterval(min, max));
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateAndDownloadJSON(jsonData) {
  // Convert the JSON data to a Blob
  const blob = new Blob([JSON.stringify(jsonData, null, 2)], {
    type: "application/json",
  });

  // Create a temporary URL for the Blob
  const url = URL.createObjectURL(blob);

  // Create a link element
  const link = document.createElement("a");
  link.href = url;
  link.download = "data.json";
  link.style.display = "none";

  // Append the link to the document
  document.body.appendChild(link);

  // Simulate a click event to trigger the download
  link.click();

  // Clean up the temporary URL and link element
  URL.revokeObjectURL(url);
  document.body.removeChild(link);
}
