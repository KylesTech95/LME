const header = document.getElementById('header')
import reduceNav from "./reducenav.js";
import restoreNav from "./restorenav.js";
export default function scroll(e){
let base = 0;
let halfheader = header.clientHeight/2;
let takeoff = window.scrollY > halfheader;

// if scroll Y is past half of header
if(takeoff){
    console.log('target')
    reduceNav()
} else {
    restoreNav()
}
}