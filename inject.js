const qs = [];

const container = document.querySelector('div[jsname="N760b"]');

// LETS GET ALL THE ONES THAT SHOW AT START
let paas;

paas = Array.from(container.querySelectorAll('div[jsname="yEVEwb"]'));

for (let i = 0; i < paas.length; i++) {
  const qEl = paas[i].querySelector(".CSkcDe");
  const aEl = paas[i].querySelector(".wDYxhc");
  const urlChildEl = paas[i].querySelector(".LC20lb");
  const urlEl = urlChildEl.parentNode;
  const q = getText(qEl);
  const a = getText(aEl);
  const aHtml = aEl.innerHTML;
  const url = urlEl.href;

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
