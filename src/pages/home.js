
import coffee_bg from "../images/coffee-bg.jpg";
import './home.css';

const createHome = () => {
    const content = document.getElementById("content");
    const bodyBox = document.createElement("div");
    bodyBox.classList.add("home-content");

    bodyBox.innerHTML = `
        <h1>Brewed to perfection.<br>Every Time.</h1>
    `;

    content.appendChild(bodyBox);
};

export default createHome;
