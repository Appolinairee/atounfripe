var notificationBtn = document.getElementById('notificationBtn');
var notification = document.querySelector('.notification');

var btnMenu = document.getElementById('btnMenu');
var btnMenuC = document.getElementById('btnMenuC');
var menu = document.getElementById('menu');
var menuC = document.getElementById('menuC');
var lignes = document.querySelectorAll('.lignes');
var lignesC = document.querySelectorAll('.lignesC');

notificationBtn.addEventListener('click',  function () {
    notification.classList.add('closedNoti');
});

btnMenu.addEventListener('click', function(){
    menu.classList.toggle('activeMenu1');
    console.log('dhbf');
    if(btnMenu.className == 'fa fa-bars'){
        btnMenu.className = 'fa fa-times';
    }else{
        btnMenu.className = 'fa fa-bars';
    }
});

btnMenuC.addEventListener('click', function(){
    menuC.classList.toggle('activeMenu2');

    if(btnMenuC.className == 'fa fa-list-alt'){
        btnMenuC.className = 'fa fa-times';
    }else{
        btnMenuC.className = 'fa fa-list-alt';
    }
});

for (let i = 0; i < lignes.length; i++) {
    lignes[i].addEventListener('click', function(){
        lignes[i].classList.toggle('activeSousMenu');       

        for (let j = 0; j < lignes.length; j++) {
           if (i != j) {
          lignes[j].classList.remove('activeSousMenu');
          };  
        }
    });  
}

for (let i = 0; i < lignesC.length; i++) {
    lignesC[i].addEventListener('click', function(){
        lignesC[i].classList.toggle('activeSousMenu');       
        
        for (let j = 0; j < lignesC.length; j++) {
           if (i != j) {
          lignesC[j].classList.remove('activeSousMenu');
          };  
        }
    });  
}

/*-----------------
GESTION MODE NUIT
------------------*/

let modeNuitBtn = document.querySelectorAll('.modeNuitBtn');
let modeNuit = document.querySelectorAll('.modeNuit');

for (let i = 0; i < modeNuitBtn.length; i++) {
    modeNuitBtn[i].addEventListener('click', function () {
        for (let j = 0; j < modeNuit.length; j++) {
            modeNuit[j].classList.toggle('modeNuitActive');
        }
    });             
}