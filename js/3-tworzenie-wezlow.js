let btn = document.createElement('button');
console.log(btn);

let textBtn = document.createTextNode('Click me');
console.log(textBtn);

let classBtn = document.createAttribute('class');
console.log(classBtn);

classBtn.value = 'btn';
console.log(classBtn);

document.body.appendChild(btn);
btn.appendChild(textBtn);
btn.setAttributeNode(classBtn);

btn.setAttribute('id', 'button');

//let paragraph = document.createElement('p');
//paragraph.setAttribute('class', 'paragraph');
//document.body.appendChild(paragraph);
//paragraph.innerText = 'tekst do wpisania';

//usuwam Node typu atrybut
btn.removeAttributeNode(classBtn);

//usuwam atrybut
btn.removeAttribute('id');

//usuwam element
document.body.removeChild(btn);

//let rodzic = document.getElementById('rodzic');
//let parFirst = document.getElementById('parFirst');
document.getElementById('sectionFirst').removeChild(document.getElementById('parFirst'));