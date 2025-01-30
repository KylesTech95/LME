const header = document.getElementById('header')
const hr = document.querySelector('hr.header-hr')

const logo = {
    img:document.querySelector('.logo-img'),
    para:document.querySelector('#logo-container>p'),
    container:document.getElementById('logo-container')
}
export default function restoreNav(){
    logo.img.classList.remove('no-display')
    logo.para.classList.remove('no-display')
    header.classList.remove('reduced-height')
    header.classList.add('regular-height')
    hr.classList.remove('lower-hr')
    header.classList.remove('header-scroll-down')
    logo.container.classList.remove('logo-container-scroll-down')
    logo.container.classList.add('logo-start')
}