export default function openMenu(action) {
    let menu = document.getElementById("menu").style
    if(action === "open") menu.transform = window.getComputedStyle(document.documentElement).getPropertyValue("--menu-open")
    else if(action === "close") menu.transform = window.getComputedStyle(document.documentElement).getPropertyValue("--menu-closed")
}