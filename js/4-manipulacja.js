document.getElementById('parFirst').innerHTML = '<p id="paragraf">12345</p>';

document.getElementById('paragraf').innerText = '<p>67890</p>';

document.getElementById('paragraf').outerHTML = '<span>outer HTML</span>';

document.getElementById('parFirst').id = 'parSecond';

//document.getElementById('sectionFirst').className = 'blue';
document.getElementById('sectionFirst').classList.add('blue');
document.getElementById('sectionFirst').classList.remove('sekcja-pierwsza');

document.getElementById('sectionFirst').style.backgroundColor = 'limegreen';

let linki = document.getElementsByClassName('link');

//console.log(linki);

for(let i=0; i<linki.length; i++) {
    linki[i].style.color = 'red';
}


