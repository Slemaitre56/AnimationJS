const wrapper = document.getElementById("wrapper");
let tableau = ["./image/slide5.jpg", "./image/slide4.jpg", "./image/slide3.jpg", "./image/slide2.jpg", "./image/slide1.png","./image/slide6.jpg","./image/slide7.jpg"];
wrapper.innerHTML = "<img src='"+ tableau[0] +"'>";
let image =0;

let flecheD = document.getElementById("nextBtn").addEventListener('click', droite);
// on retire -1 car la première image du slide est tableau[0].
function droite() {
    if (image >= tableau.length-1) {
        image =0
    } 
    else{
        image++
        
    }
    wrapper.innerHTML = "<img src='"+tableau[image]+"'>";
    
};


let flecheG = document.getElementById("prevBtn").addEventListener('click', gauche);

function gauche() {
    if (image>0) {
        image--
    }else{
        image = tableau.length-1;
    } 
    wrapper.innerHTML = "<img src='"+tableau[image]+"'>";   
};

function autorun(){
    setInterval("droite(1)", 5000);
}

