function learn() {
    let name = document.getElementById('Nom').value;
    let gmail = document.getElementById('email').value;
    let pass = document.getElementById('password').value;

/* sauvegader les données dans une session la clé c'est le Nom et la valeur le name*/
    sessionStorage.setItem('Nom',name);
    sessionStorage.setItem('email', gmail);
    sessionStorage.setItem('password', pass);

}


window.onload = function(){
    let getCongrats = document.getElementById('congratulations').innerHTML = "Bienvenue Developeur";
  
     }

     /*Activation des liens dans la balise section*/
     let sections = document.querySelectorAll('section');
     let navLinks = document.querySelectorAll('header nav a');

     window.onscroll = () => {
        sections.forEach(sec => {  
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            };
        });

         /*sticky navbar*/
     let header = document.querySelector('header');
     header.classList.toggle('sticky', window.scrollY > 100);
};

         /*section luminosite*/

const inputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body");


inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody()

function updateBody(){
    if(inputEl.checked){
        bodyEl.style.background = "#1f242d";
    
    } else {
        bodyEl.style.background = "linear-gradient(to right, #1f242d,#323946, #0ef)";
    }
}
 
inputEl.addEventListener("input", ()=>{
    updateBody();
    updateLocalStorage()
})

function updateLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(inputEl.checked)
);
}