"use strict"
document.querySelector(".btn-menu").addEventListener("click", toggleMenu);

function toggleMenu(){
     document.querySelector(".navegacion").classList.toggle("show");
}


document.addEventListener("DOMContentLoaded", function () {
     const toggleButton = document.getElementById("toggleMenu");
     const menu = document.getElementById("menu2");
 
     toggleButton.addEventListener("click", function () {
         if (menu.style.display === "block") {
             menu.style.display = "none";
         } else {
             menu.style.display = "block";
         }
     });
 });