const qs = [];

RunScript(10);

async function RunScript(limit) {
  const container = document.querySelector('div[jsname="N760b"]');

  // LETS GET ALL THE ONES THAT SHOW AT START
  let paas;

  paas = getPAAS();

  function getPAAS() {
    return Array.from(container.querySelectorAll('div[jsname="yEVEwb"]'));
  }
  for (let i = 0; i < limit; i++) {
    if (!paas[i]) {
      try {
        // find last element
        const lastEl = paas[i - 1];
        // get btn & click it
        const btn = lastEl.querySelector(".dnXCYb");
        btn.click();
        // wait a bit
        await randomSleep();
        paas = getPAAS();
        if (!paas[i]) {
          console.log("not found new elements");
          break;
        }
      } catch (e) {
        console.log(e);
        break;
      }
    }
    const qEl = paas[i].querySelector(".CSkcDe");
    const aEl = paas[i].querySelector(".wDYxhc");
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

    const q = getText(qEl);
    const a = getText(aEl);
    const aHtml = aEl.innerHTML;

    qs.push({
      q,
      a,
      aHtml,
      url,
    });
  }

  console.log(qs);
}

function getText(el) {
  return el.innerText || el.textContent;
}

// container -> div[jsname="N760b"]
// paas -> div[jsname="yEVEwb"]
// btns -> .dnXCYb
// q -> .CSkcDe
// active
// a -> .wDYxhc
// child url -> .LC20lb | LC20lb MBeuO DKV0Md
// el.scrollIntoView(true)
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
