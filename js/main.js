const sideBtn = document.querySelector('.nav-btn');
const sideMenu = document.querySelector('.sidebar_menu');
const closeMenu = document.querySelector('.sidebar_menu-close')


function btnOpen(e){
    e.preventDefault();
    console.log(e)
    sideMenu.classList.add("active");
      
}

function btnClose(e){
    e.preventDefault();
    sideMenu.classList.remove('active')
}

sideBtn.addEventListener('click',btnOpen)
closeMenu.addEventListener('click',btnClose)
console.log(sideMenu);