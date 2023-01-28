const s = "6,60 9,30";
const wSplit = s.split(" ");
const rep = wSplit.map((elem) => elem.replace(",", "."));
console.log(rep);

const sTrans = rep.join(",");
console.log("prices:[" + sTrans + "]");

let t = "askdjas"
console.log(t.slice(0,-1))
