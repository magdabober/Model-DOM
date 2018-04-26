document.addEventListener('DOMContentLoaded', function() {
    hoverService();
    showParent ();
//    hideParent();
    changeBorder();
});
    
function hoverService() {
    let linki = document.getElementsByClassName('link');
    for(let i=0; i<linki.length; i++) {
//        linki[i].addEventListener('mouseover', function() {
//            this.style.color = 'red';
//        });
//        
//         linki[i].addEventListener('mouseout', function() {
//            this.style.color = 'green';
//        });
        
        linki[i].addEventListener('click', function(event) {
            event.preventDefault();
            this.style.color = 'pink';
        });
    };
}

function showParent () {
    document.getElementById('click').addEventListener('click', function(event) {
       console.log(event.type); document.getElementById('rodzic').style.display = 'block';
    });
}

function hideParent() {
    document.getElementById('rodzic').style.display = 'none';
}

function changeBorder(){
    let inputy = document.querySelectorAll('#formularz form input');
    
    for(let i=0; i<inputy.length; i++) {
        inputy[i].addEventListener('focus', function() {
            this.style.border = '3px solid green';
        });
    };
}

document.addEventListener('keydown', hideParent);
document.removeEventListener('keydown', hideParent);



                   
                          