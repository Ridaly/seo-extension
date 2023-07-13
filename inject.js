const qs = [];
const qsExtractLimit = 5;

const container = document.querySelector('div[jsname="N760b"]');

// LETS GET ALL THE ONES THAT SHOW AT START
let paas;

paas = Array.from(container.querySelectorAll('div[jsname="yEVEwb"]'));
for (let i = 0; i < paas.length; i++) {
  if (!paas[i]) {
    // find last element
    // click it
    // wait a bit
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
