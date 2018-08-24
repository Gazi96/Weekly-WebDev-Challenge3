"use strict";

start();

function start(){
    menu();
}

function menu(){
    const mobileMenu = document.getElementsByClassName("header__menu--mobile")[0];
    const menu = document.getElementsByClassName("header__menu")[0];
    const listMenu = menu.getElementsByClassName("list")[0];
    
    mobileMenu.addEventListener("click", function(){
        listMenu.classList.toggle("showMenu");  
    });
}