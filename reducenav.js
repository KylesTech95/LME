const header = document.getElementById('header')
const hr = document.querySelector('hr.header-hr')
const logo = {
    img:document.querySelector('.logo-img'),
    para:document.querySelector('#logo-container>p'),
    container:document.getElementById('logo-container')
}
export default function reduceNav(){
    // logo.img.classList.add('no-display')
    logo.img.classList.add('to-right')
    logo.para.classList.add('no-display')
    header.classList.add('reduced-height')
    header.classList.remove('regular-height')
    header.classList.add('header-scroll-down')
    logo.container.classList.remove('logo-start')
    logo.container.classList.add('logo-container-scroll-down')
    hr.classList.add('lower-hr')
}