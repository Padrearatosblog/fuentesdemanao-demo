const links = document.querySelectorAll("nav a");

links.forEach(link => {

link.addEventListener("click", e => {

e.preventDefault();

document.querySelector(link.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
});

});

});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){
header.classList.add("scrolled");
}else{
header.classList.remove("scrolled");
}

});