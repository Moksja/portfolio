document.addEventListener('DOMContentLoaded', function() {
    addWindow();
    addIcons();
    addTitleBar();
    addCrossEtc();
    aboutContainer()
  });

//AJOUT ELEMENTS
function addWindow() {
    let container = document.getElementsByClassName("windowContainer")[0];
    let addRectangle = document.createElement("div");

    container.appendChild(addRectangle);
    addRectangle.className = "window";
}
function addTitleBar() {
    let container = document.getElementsByClassName("window")[0];
    let addTitleBar = document.createElement("div");

    container.appendChild(addTitleBar);
    addTitleBar.className = "titleBar";
}
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

    for ( i = 0; i < 4 ; i ++) {
        let iconContainer = document.createElement("div");
        let link = document.createElement("a");
        let img = document.createElement("img");
        let tag = document.createElement("h4");
        


        link.href = pagesLinks[i];
        img.className= "img" + i;
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

    for (i=0; i < 3; i++) {
        let symbol = document.createElement("img");

        container.appendChild(symbol);
        symbol.className = "symb";
        symbol.src = symbols[i];
    }
}

function aboutContainer() {
    let container = document.getElementsByClassName("window")[0];
    let windowContent = document.createElement("div");
    let textContainer = document.createElement("div");
    let profilePic = document.createElement("img");

    container.appendChild(windowContent);
    windowContent.className = "windowContent";
    windowContent.appendChild(textContainer);
    windowContent.appendChild(profilePic);
    textContainer.className = "aboutTextContainer";
    profilePic.id = "profilePic";
    profilePic.src = "images/others/profilePic2.png";

    addWindowContent();
}

//CONTENU WINDOW + TXT
function addWindowContent() {
    let container = document.getElementsByClassName("aboutTextContainer")[0];
    let titleContainer = document.createElement("div");
    let header1 = document.createElement("h1");
    let header2 = document.createElement("h3");
    let paragraph1 = document.createElement("p");
    let paragraph2 = document.createElement("p");
    let paragraph3 = document.createElement("p");

    container.appendChild(titleContainer);
    titleContainer.id = "titleContainer";
    titleContainer.appendChild(header1);
    titleContainer.appendChild(header2);
    container.appendChild(paragraph1);
    container.appendChild(paragraph2);
    container.appendChild(paragraph3);
    header1.textContent=(""); 
    header2.textContent=("");
    paragraph1.id="p1";
    paragraph2.id="p2";
    paragraph3.id="p3";
    paragraph2.textContent=("");
    paragraph3.textContent=("");

    let complementaryText = document.createElement("div");
    container.appendChild(complementaryText);
    complementaryText.id = "complementaryText";
}
let headerContent = "Ioana Acu, Développeuse Full-Stack Junior";
let subHeaderContent = "En recherche d'alternance - Sept. 2024 à Sept. 2025 - 3semaines/mois - Simplon";
let about1 = "En découvrant la programmation, j’ai apprécié  les défis propres à la logique algorithmique, mais aussi la possibilité d’y réinvestir mes compétences.";
let about2 = "Autonome, rigoureuse et passionnée de résolution de problèmes, j’ai hâte de découvrir ce métier.";
let about3 = "C'est à la Compagnie du Code que j'ai découvert la programmation, en animant des ateliers d'initiation au code via des outils ludiques de programmation par blocs. En faisant découvrir aux jeunes l'algorithmie et les métiers du numérique, j'ai moi-même eu envie d'évoluer dans univers.";
let about4 = "Lors de mes deux formation en Swift (Apple Fundation Program, chez Simplon), cet intérêt pour le code s'est renforcé. J'ai aimé les défis que ces sessions m'ont proposés, et la gymnastique mentale attendue. J'ai également été heureuse de voir que mes connaissances en graphisme et en gestion de projet m'ont été utiles.";
let about5 = "Aujourd'hui, je suis à la recherche d'une alternance afin de continuer à développer mes compétences dans un contexte professionnel. Autonome dans mon apprentissage, et forte de mes précédentes expériences dans l'ingénierie pédagogique et la gestion de projet, je pense être en mesure de rapidement intégrer une équipe de développeur et développeuses.";     

//EFFETS TXT
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.addEventListener("DOMContentLoaded", function() {
    randomLettersHeader();
    randomLettersSubHeader();

    setTimeout(() => {
        writeP1();
        setTimeout(() => {
           writeP2(); 
        }, 2500);
    }, 1800);
});
function randomLettersHeader() {
    let header = document.querySelector("h1");
    header.setAttribute("data-value", headerContent);

    let interval = null;
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        header.innerText = "";
        header.innerText = header.dataset.value
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return header.dataset.value[index];
                }

                return index > iteration && index < iteration + 10 ? letters[Math.floor(Math.random() * 26)] : "";
            })
            .join("");

        if (iteration >= header.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 5);
}
function randomLettersSubHeader() {
    let subHeader = document.querySelector("h3");
    subHeader.setAttribute("data-value", subHeaderContent);

    let interval = null;
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        subHeader.innerText = "";
        subHeader.innerText = subHeader.dataset.value
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return subHeader.dataset.value[index];
                }

                return index > iteration && index < iteration + 10 ? letters[Math.floor(Math.random() * 26)] : "";
            })
            .join("");

        if (iteration >= subHeader.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 5);
}
function writeP1() {
    let p1 = document.getElementById("p1");
    p1.setAttribute("data-value", about1);

    let interval = null;
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        p1.textContent = "";
        p1.innerText = p1.dataset.value
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return p1.dataset.value[index];
                }

                return index >= iteration && index < iteration ? letters[Math.floor(Math.random() * 26)] : "";
            })
            .join("");

        if (iteration >= p1.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 5);
}
function writeP2() {
    let p2 = document.getElementById("p2");
    p2.setAttribute("data-value", about2);

    let interval = null;
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        p2.textContent = "";
        p2.innerText = p2.dataset.value
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return p2.dataset.value[index];
                }

                return index >= iteration && index < iteration ? letters[Math.floor(Math.random() * 26)] : "";
            })
            .join("");

        if (iteration >= p2.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 5);

    let button = "images/others/nextButton.png";
    let img = document.createElement("img");
    let container = document.getElementsByClassName("aboutTextContainer")[0];

    setTimeout(() => {
        container.appendChild(img);
        img.src = button;
        img.id = "nextButton";

        img.addEventListener("click", function() {
            img.style.display = "none";
            writeP3();
            setTimeout(() => { 
                setTimeout(() => {
                    writeP4(); 
                    setTimeout(() => {
                        writeP5(); 
                    }, 5500); 
                }, 2500); 
            }, 2000);
        });
    }, 2000);
    
}
function writeP3() {
    let p1 = document.getElementById("p1");
    p1.setAttribute("data-value", about3);
    let p2 = document.getElementById("p2");
    p2.textContent = "";

    let interval = null;
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        p1.textContent = "";
        p1.innerText = p1.dataset.value
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return p1.dataset.value[index];
                }

                return index >= iteration && index < iteration ? letters[Math.floor(Math.random() * 26)] : "";
            })
            .join("");

        if (iteration >= p1.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 5);
}
function writeP4() {
    let p2 = document.getElementById("p2");
    p2.setAttribute("data-value", about4);

    let interval = null;
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        p2.textContent = "";
        p2.innerText = p2.dataset.value
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return p2.dataset.value[index];
                }

                return index >= iteration && index < iteration ? letters[Math.floor(Math.random() * 26)] : "";
            })
            .join("");

        if (iteration >= p2.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 5);
}
function writeP5() {
    let p3 = document.getElementById("p3");
    p3.setAttribute("data-value", about5);

    let interval = null;
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        p3.textContent = "";
        p3.innerText = p3.dataset.value
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return p3.dataset.value[index];
                }

                return index >= iteration && index < iteration ? letters[Math.floor(Math.random() * 26)] : "";
            })
            .join("");

        if (iteration >= p3.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 5);
}

//TEXTE COMPLEMENTAIRE
function addComplement() {
    let container = document.getElementById("complementaryText");

    let sentences = [
        "C'est à la Compagnie du Code que j'ai découvert la programmation, en animant des ateliers d'initiation au code via des outils ludiques de programmation par blocs. En faisant découvrir aux jeunes l'algorithmie et les métiers du numérique, j'ai moi-même eu envie de découvrir cet univers.",
        "Lors de mes deux formation en Swift (Apple Fundation Program, chez Simplon), cet intérêt pour le code s'est renforcé. J'ai aimé les défis que ces sessions m'ont proposés, et la gymnastique mentale attendue. J'ai également été heureuse de voir que mes connaissances en graphisme et en gestion de projet m'ont été utiles.",
        "Aujourd'hui, je suis à la recherche d'une alternance afin de continuer à développer mes compétences dans un contexte professionnel. Autonome dans mon apprentissage, et forte de mes précédentes expériences dans l'ingénierie pédagogique et la gestion de projet, je pense être en mesure de rapidement intégrer une équipe de développeur et développeuses."
    ]

    for (i=0 ; i<sentences.length; i++) {
        let complementaryParagraph = document.createElement("p");
        container.appendChild(complementaryParagraph);
        complementaryParagraph.textContent = sentences[i];
    }
}
