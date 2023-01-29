const s = "6,60 9,30";
const wSplit = s.split(" ");
const rep = wSplit.map((elem) => elem.replace(",", "."));
console.log(rep);

const sTrans = rep.join(",");
console.log("prices:[" + sTrans + "]");

let t = "2s";
const reg = new RegExp("[^0-9]", "g")
t = t.replaceAll(reg, "");
console.log(t);
