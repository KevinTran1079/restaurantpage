const createContact = () => {
    const container = document.getElementById("content");
    
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    const sections = [
        {
            icon: "📍",
            title: "Address",
            content: ["Roasted Roots Coffee Co.", "123 Riverbend Avenue", "Winnipeg, MB R3L 0Y2"]
        },
        {
            icon: "📞",
            title: "Phone",
            content: ["(204) 555-3421"]
        },
        {
            icon: "📧",
            title: "Email",
            content: ["hello@roastedroots.ca"]
        },
        {
            icon: "🕒",
            title: "Hours",
            content: ["Mon–Fri: 7:00am – 6:00pm", "Sat–Sun: 8:00am – 5:00pm"]
        }
    ];

    sections.forEach(section => {
        const sectionDiv = document.createElement("div");
        sectionDiv.classList.add("contact-section");

        const titleDiv = document.createElement("div");
        titleDiv.classList.add("contact-title");
        titleDiv.textContent = `${section.icon} ${section.title}`;

        const contentDiv = document.createElement("div");
        contentDiv.classList.add("contact-content");
        
        section.content.forEach(line => {
            const p = document.createElement("p");
            p.textContent = line;
            contentDiv.appendChild(p);
        });

        sectionDiv.appendChild(titleDiv);
        sectionDiv.appendChild(contentDiv);
        contactContainer.appendChild(sectionDiv);
    });

    container.appendChild(contactContainer);
    
};

export default createContact;
