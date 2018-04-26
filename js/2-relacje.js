let dziecko = document.getElementById ('dziecko');
console.log(dziecko);
console.log(dziecko.parentElement);
console.log(dziecko.parentNode);

let rodzic = document.getElementById ('rodzic');
console.log(rodzic);
console.log(rodzic.childNodes);
console.log(rodzic.childNodes[1]);
console.log(rodzic.children);

console.log(rodzic.firstElementChild);
console.log(rodzic.firstChild);


let link = document.getElementById('link');
//console.log(document.getElementById('link').nextElementSibling);
console.log(link.previousElementSibling);
console.log(link.previousSibling.nodeType);

console.log(link.nextElementSibling);
console.log(link.nextSibling.nodeType);
