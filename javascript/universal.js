/*>>>GERAL DA PÁGINA<<<*/


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


/*>>>MENU MOBILE<<<*/

/*_função para animação click do ícone do menu mobile_*/
function menuIconClick(x) {
  x.classList.toggle("change");
}
  
  
/*_consts para animções internas do menu_*/
const menuIcon = document.querySelector('.menuicon');
const menu = document.querySelector('.mobilelist');
const cursoClick = document.querySelector('.linkcurso');
const subLinks = document.querySelector('.subcurso');

/*_função para fechar o submenu 'cursos' quando o menu principal for fechado_*/
function removeCursoClick() {
    if (!menu.classList.contains('mobilelistactive')) {
    subLinks.classList.remove('sublinkActive');
    cursoClick.classList.remove('cursoBlack');
  }
}

/*_função para abrir e fechar menu principal ao clicar no icone sanduíche_*/
menuIcon.addEventListener('click', () => {
  menu.classList.toggle('mobilelistactive');
  removeCursoClick(); 
});

/*_função para ampliar os sub-tens em "cursos" e deixar o fundo do item preto_*/  
cursoClick.addEventListener('click', () => { 
  subLinks.classList.toggle('sublinkActive');
  cursoClick.classList.toggle('cursoBlack');
}); 

