//caly dokument (lacznie z doctype)
console.log(document);

//od html
console.log(document.documentElement);

let paragraf = document.getElementById('paragraf-1');
console.log(paragraf);

console.log(typeof paragraf);

let linki = document.getElementsByClassName('link');
console.log(linki);
console.log(typeof linki);

let spany = document.getElementsByTagName('span');
console.log(spany);
console.log(typeof spany);

//spany.forEach(function(element,index) {
//    console.log('Numer indeksu to: '+ index + 'element to: '+element);
//})

for(let i=0; i<spany.length; i++) {
    console.log('Numer indeksu to: '+ i + 'element to: ' + spany[i]);
}

