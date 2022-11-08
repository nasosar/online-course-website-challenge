
/*animação do scroll*/

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  /*animação click do ícone do menu mobile*/
  function menuIconClick(x) {
    x.classList.toggle("change");
  }
  
  
  /*animçao para ativar/desativar menu mobile */
const menuIcon = document.querySelector('.menuicon');
const menu = document.querySelector('.mobilelist');
/*const menuLinks = document.querySelectorAll('.mobilelinks'); */

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('mobilelistactive');
});


  /*animção para ampliar os sub-tens em "cursos" e deixar o fundo do item preto */
  const cursoClick = document.querySelector('.linkcurso');
  
  cursoClick.addEventListener('click', () => {
    const subLinks = document.querySelector('.subcurso');
    subLinks.classList.toggle('sublinkActive');
    cursoClick.classList.toggle('cursoBlack');
  }); 


