const createAbout = () => {
    const container = document.getElementById("content");
    
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");
    
    const aboutText = document.createElement("p");
    aboutText.classList.add("about-text");
    aboutText.textContent = "Nestled in the heart of Winnipeg, our coffee shop is where community and craft collide. We roast every batch of beans in-house with care, sourcing ethically from farms we know and trust. Whether you're here for your morning espresso or to unwind with a pour-over in the afternoon sun, we're proud to serve bold, beautifully balanced coffee that celebrates both local warmth and global flavor. Come for the coffee, stay for the conversation.";
    
    aboutContainer.appendChild(aboutText);
    container.appendChild(aboutContainer);
};

export default createAbout;
