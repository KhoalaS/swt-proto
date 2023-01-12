const date = new Date();
const t = date.toLocaleDateString().split(".").reverse().join("-");
console.log(t);
console.log(new Date(t));
