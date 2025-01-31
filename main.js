import scroll from "./scroll.js";
import load from "./load.js";
window.onload = load
window.onscroll = scroll;
const letters = [...document.querySelectorAll('#logo-container>h1')]; // array of letters (LME)
const logocontainer = document.querySelector('#logo-container');
const header = document.getElementById('header')
let halfheader = header.clientHeight/2;
let takeoff = window.scrollY > halfheader;
// configure logo
for(let i = 0; i < letters.length; i ++){
    setTimeout(()=>{
        letters[i].classList.remove('no-display')
        if(i==letters.length - 1 && !takeoff){
            letters.push(document.querySelector('#logo-container>p'))
            letters[i+1].classList.remove('no-display')
        }
    },350*(i+1))
}
// logo container onmouseover function
// logocontainer.onmouseover = logoHover
// logocontainer.onmouseout = logoHoverOut
