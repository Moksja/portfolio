document.addEventListener("DOMContentLoaded", function() {
    addCrossEtc();
    addIcons();
});

// // AJOUT ELEMENTS
function addIcons() {
    let container = document.getElementsByClassName("navIcons")[0];

    let imagePaths = [
        "images/iconsNav/about.png",
        "images/iconsNav/skills.png",
        "images/iconsNav/projects.png",
        "images/iconsNav/contact.png"
    ];
    let pagesLinks = [
        "About.html",
        "Skills.html",
        "Projects.html",
        "Contact.html"
    ]
    let tags = [
        "À propos",
        "Compétences",
        "Projets",
        "Contact"
    ]

    for (let i = 0; i < 4; i++) {
        let iconContainer = document.createElement("div");
        let link = document.createElement("a");
        let img = document.createElement("img");
        let tag = document.createElement("h4");

        link.href = pagesLinks[i];
        img.className = "img" + i;
        img.src = imagePaths[i];
        container.appendChild(iconContainer);
        iconContainer.className = "iconContainer";
        iconContainer.appendChild(link);
        link.appendChild(img);
        link.appendChild(tag);
        tag.textContent = tags[i];
    }
}
function addCrossEtc() {
    let container = document.getElementsByClassName("titleBar")[0];

    let symbols = [
        "images/others/small.png",
        "images/others/big.png",
        "images/others/close.png"
    ]

    for (let i = 0; i < 3; i++) {
        let symbol = document.createElement("img");

        container.appendChild(symbol);
        symbol.className = "symb";
        symbol.src = symbols[i];
    }
}
