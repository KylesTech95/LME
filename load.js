const header = document.getElementById('header')
import reduceNav from "./reducenav.js";

export default function load(e){
let halfheader = header.clientHeight/2;
let takeoff = window.scrollY > halfheader;
if(takeoff){
    reduceNav()
}
}