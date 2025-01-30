import scroll from "./scroll.js";
window.onscroll = scroll;
const letters = [...document.querySelectorAll('#logo-container>h1')]; // array of letters (LME)
const logocontainer = document.querySelector('#logo-container');
// configure logo
for(let i = 0; i < letters.length; i ++){
    setTimeout(()=>{
        letters[i].classList.remove('no-display')
        if(i==letters.length - 1){
            letters.push(document.querySelector('#logo-container>p'))
            letters[i+1].classList.remove('no-display')
        }
    },350*(i+1))
}

// logo container onmouseover function
logocontainer.onmouseover = logoHover
logocontainer.onmouseout = logoHoverOut
function logoHover(e){
    const img = e.currentTarget.children[e.currentTarget.children.length-1]
    img.classList.add('invert-bg')
}
// logo container onmouseout function
function logoHoverOut(e){
    const img = e.currentTarget.children[e.currentTarget.children.length-1]
    img.classList.remove('invert-bg')
}