var loader = document.querySelector('.loader');

window.addEventListener('load', function() {
    loader.classList.add('loaderOff');
});








// var adhesionBtn = document.querySelector('.adhesionBtn');
// var adhesionProgramme = document.querySelector('.adhesionProgramme');
// var adhesionOver = document.querySelector('.adhesionOver');
var notificationBtn = document.getElementById('notificationBtn');
var notification = document.querySelector('.notification');

var btnMenu = document.getElementById('btnMenu');
var btnMenuC = document.getElementById('btnMenuC');
var menu = document.getElementById('menu');
var menuC = document.getElementById('menuC');
var lignes = document.querySelectorAll('.lignes');
var lignesC = document.querySelectorAll('.lignesC');

// function closed () {
//     adhesionProgramme.classList.add('close');
//     adhesionOver.classList.add('close');
// }
// adhesionBtn.addEventListener('click',  closed);
// adhesionOver.addEventListener('click',  closed);

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

// GESTION DES PRODUITS DE LA PAGE D'ACCUEIL

let Tproduits = [
    [
        {
            natureStock: "Nouveau",
            image1: "jean9.jpg",
            image2 :"jean9.jpg",
            nom :"Jean bleu homme ",
            categorie :"Jeans",
            prixNouveau: '~2000F',
            prixAncien: '2500F'
        },
    
        {
            natureStock: "Meilleur",
            image1 :"t-shirt3.jpg",
            image2 :"t-shirt3.jpg",
            nom :"T-Shirt noir",
            categorie :"T-Shirt",
            prixNouveau: '~1000F',
            prixAncien: ''
        },
    
        {
            natureStock: " New ",
            image1 :"troisQuart1.jpeg",
            image2 :"troisQuart2.jpeg",
            nom :"3/4 Pantalon ",
            categorie :"3/4",
            prixNouveau: '1000F',
            prixAncien: '1200F'
        }
    ],

    [
    {
        natureStock: "Nouveau",
        image1: "jean1-1.jpg",
        image2 :"jean1-2.jpg",
        nom :"Jean bleu homme ",
        categorie :"Jeans",
        prixNouveau: '~1500F',
        prixAncien: '2500F'
    },

    {
        natureStock: " Meilleur",
        image1 :"pull-over.jpg",
        image2 :"pull-over.jpg",
        nom :"Pull-over ",
        categorie :"Pull",
        prixNouveau: '~1500F',
        prixAncien: ''
    },

    {
        natureStock: "Nouveau",
        image1 :"etalage4.jpg",
        image2 :"etalage4.jpg",
        nom :"Catégorie",
        categorie :"Jeans & Pantalons",
        prixNouveau: '~~1700F',
        prixAncien: '2000F'
    }
    ],

    [
        {
            natureStock: "Nouveau",
            image1 :"chemises.jpg",
            image2 :"chemises.jpg",
            nom :"Catégorie",
            categorie :"Chemises",
            prixNouveau: '~~1500F',
            prixAncien: ''
        },
    
        {
            natureStock: " Meilleur ",
            image1 :"jean4-1.jpg",
            image2 :"jean4-1.jpg",
            nom :"Jean cendre ",
            categorie :"Jeans",
            prixNouveau: '1500F',
            prixAncien: '2000F'
        },

        {
            natureStock: "Nouveau",
            image1 :"pull3-2.jpg",
            image2 :"pull3-1.jpg",
            nom :"Pull Cendre",
            categorie :"Pull Over",
            prixNouveau: '1000F',
            prixAncien: '1300F'
        }
    ], 

    [ 
            {
                natureStock: "Nouveau",
                image1 :"etalage3.jpg",
                image2 :"etalage2.jpg",
                nom :"pêle-mêle",
                categorie :"Etalage",
                prixNouveau: '~~',
                prixAncien: ''
            },
        
            {
                natureStock: "Meilleur",
                image1 :"t-shirt.jpg",
                image2 :"t-shirt.jpg",
                nom :"T-Shirt homme",
                categorie :"T-Shirt",
                prixNouveau: '1000F',
                prixAncien: ''
            },
        
            {
                natureStock: "Nouveau",
                image1 :"jean3-2.jpg",
                image2 :"jean3-1.jpg",
                nom :"Jeans noir ",
                categorie :"Jeans",
                prixNouveau: '2000F',
                prixAncien: '2500F'
            }
    ],

    [

        {
            natureStock: " Produit ",
            image1 :"jean7.jpg",
            image2 :"jean7.jpg",
            nom :"jEAN noir brillant ",
            categorie :"Jeans",
            prixNouveau: '2000F',
            prixAncien: '2500F'
        },
    
        {
            natureStock: " Nouveau ",
            image1 :"troisQuart2.jpg",
            image2 :"troisQuart2.jpg",
            nom :"3/4 Jeans",
            categorie :"3/4",
            prixNouveau: '1100F',
            prixAncien: ''
        },
    
        {
            natureStock: "Produit",
            image1 :"t-shirt4.jpg",
            image2 :"t-shirt4.jpg",
            nom :"t-shirt Bleu",
            categorie :"t-shirt",
            prixNouveau: '900F',
            prixAncien: ''
        },
    ],
   
    [

        {
            natureStock: " Produit ",
            image1 :"pull1-2.jpg",
            image2 :"pull1-1.jpg",
            nom :"Pull-Over ",
            categorie :"Pull",
            prixNouveau: '1000F',
            prixAncien: ''
        },
    
        {
            natureStock: " Nouveau ",
            image1 :"maillot.jpg",
            image2 :"maillot.jpg",
            nom :"Maillot ",
            categorie :"Habits",
            prixNouveau: '1000F',
            prixAncien: ''
        },
    
        {
            natureStock: "Produit",
            image1 :"pull2-2.jpg",
            image2 :"pull2-1.jpg",
            nom :"Pull-over",
            categorie :"Pull",
            prixNouveau: '1300F',
            prixAncien: ''
        },
    ]
];

let produits = document.querySelector('.produits');
let nbrProduits = 16;
let produit = document.querySelectorAll('.produit');
let angleHaut = document.querySelectorAll('.angle');
let imageProduits = document.querySelectorAll('.imageProduits');
let titleProduit = document.querySelectorAll('.titleProduit');
let nouveauPrix = document.querySelectorAll('.nouveauPrix');
let ancienPrix = document.querySelectorAll('.ancienPrix');

for (let i = 0; i < Tproduits.length; i++) {

    for (let j = 0; j < Tproduits[1].length; j++) {
        produits.innerHTML +=  "<div class='produit defilement'><div class='etoilesProduit'> <i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star-half-o'></i><i class='fa fa-star-o'></i><i class='fa fa-star-o'></i></div><div class='imageProduits'><img src='./img/"+ Tproduits[i][j].image1 + "'  alt='' class='imageProduit1'><img src='./img/" + Tproduits[i][j].image2 + "' alt='' class='imageProduit2'></div><p class='angle aVert'>" + Tproduits[i][j].natureStock + "</p><div class='titleProduit'><p>" + Tproduits[i][j].nom + "</p><h3>" + Tproduits[i][j].categorie + "</h3></div><div class='prix'><p>" + Tproduits[i][j].prixNouveau + "</p><p class='ancienPrix'>" +Tproduits[i][j].prixAncien + "</p></div><div class='optionProduit'><i class='fa fa-thumbs-o-up'></i><a href='https://wa.me/message/3QWQF7SATXLHM1'><i class='fa fa-whatsapp'></i></a>  </div></div>";
    }
}

var like = document.querySelectorAll('.fa-thumbs-o-up');

for (let i = 0; i < like.length; i++) {
   like[i].addEventListener('click', function () {
     like[i].className = ' fa fa-thumbs-up';
   })
    
}

// GESTION AUTOMATIQUE DU SCROLL X

let bannieres = document.querySelector('.bannieres');
let categories = document.querySelector('.categories');

let w = window.innerWidth;
function scrollFunction(nom, duree, lactance, nbrElement) {
    setInterval(() => {
       nom.scrollLeft += w;
        
        if (nom.scrollLeft > (w*nbrElement - lactance )){
            nom.scrollLeft = 0;
        }
    }, duree);
}
scrollFunction(bannieres, 7000, 500, 4);
// scrollFunction(categories, 3000, 0, 4);

// ANIMATION POUR L'APPARITION DES ELEMENTS
window.addEventListener('scroll', () =>{
    let defilement= document.querySelectorAll('.defilement');

   for (let i = 0; i < defilement.length; i++) {
      let elementPosition = defilement[i].getBoundingClientRect().top;
      let screenPosition = window.innerHeight;
      if (elementPosition < screenPosition) {
        defilement[i].classList.add('defilementActive');
    }  
   }
    
});


// BROUILLON
// function nombreAleatoire(min, max) {
//     let number  = Math.round(Math.random() *(max - min) + min);
//     return number;
// }

// function resultats() {
//     let search = document.getElementById('search');
//     let searchBouton = document.getElementById('searchBouton');
//     console.log('jngvgnijkgj,v');

//     if (search.value === "v") {
//         window.open('./essaiRecherche.html')
//     }
// }

