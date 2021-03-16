export default function toggle_accordion(id, btn) {
    id = document.getElementById(id);
    btn = document.getElementById(btn);
    if (id) {
        if (id.style.maxHeight === "0px") {
            id.style.maxHeight = id.scrollHeight + "px";
            btn.innerHTML = "See less";
        } else {
            id.style.maxHeight = "0px";
            btn.innerHTML = "See more";
        }
    }
}