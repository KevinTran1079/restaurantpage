import createHome from './home';
import createMenu from './menu';

const contentBox = document.getElementById("content");

const homeBtn = document.getElementById("homeBtn");
const aboutBtn = document.getElementById("aboutBtn");
const menuBtn = document.getElementById("menuBtn");
const contactBtn = document.getElementById("contactBtn");


const clearHTML = () => {
    contentBox.innerHTML = '';
}

homeBtn.addEventListener("click", () => {
    clearHTML();
    createHome();
})

aboutBtn.addEventListener("click", () => {
    clearHTML();
    createAbout();
});

menuBtn.addEventListener("click", () => {
    clearHTML();
    createMenu();
});

contactBtn.addEventListener("click", () => {
    
});

createHome();

