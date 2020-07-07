const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const slider2 = document.querySelector(".slider2");
const menuNav = document.querySelector('.menu-nav');
const headLine = document.querySelector('.headLine');



/*aller chercher TilelineMax sur internet et mettre son script ds index*/
const tl = new TimelineMax();
/*permet de tranformer la hauteur/larheur/scale/opacité de 0 à 80% doucement*/
tl.fromTo(hero,1.3,{height: "0%"}, {height:'80%', ease: Power2.easeInOut})
.fromTo(hero, 1.3, {width:"100%"},{width:"80%", ease: Power2.easeInOut})
.fromTo(slider, 1.4, {x:"-100%"},{x:"0%", ease: Power2.easeInOut})
.fromTo(menuNav, 0.5, {opacity:0, x:30},{opacity:1, x:0},"-=0.2")
.fromTo(headLine, 0.5, {opacity:0, x:30},{opacity:1, x:0},"-=0.2")
