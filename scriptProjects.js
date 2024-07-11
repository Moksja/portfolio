document.addEventListener("DOMContentLoaded", function() {
    addWindow();
    addIcons();
    addProjectsContainer();
    addTabs();

    document.getElementById("Code").click();
    addcraftsCarousel();
    initializeCarousel();

    specialImages();
    addGameCard();

    addCodeCard();
});

let currentIndex = 0;

// AJOUT ELEMENTS
function addWindow() {
    let container = document.getElementsByClassName("windowContainer")[0];
    let addRectangle = document.createElement("div");

    container.appendChild(addRectangle);
    addRectangle.className = "window";

    addTitleBar();
    addCrossEtc();
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
function addProjectsContainer() {
    let container = document.getElementsByClassName("window")[0];
    let projectsContainer = document.createElement("div");

    container.appendChild(projectsContainer);
    projectsContainer.id = "projectsContainer";
}

// TABS
let tabsTitles = [
    "Code",
    "Games",
    "Crafts"
]
function addTabs() {
    let container = document.getElementById("projectsContainer");
    let tab = document.createElement("div");
    container.appendChild(tab);
    tab.className = "tabsContainer";

    for (let i = 0; i < 3; i++) {
        let button = document.createElement("div");
        tab.appendChild(button);
        button.className = "tablinks";
        button.id = tabsTitles[i];
        button.innerText = tabsTitles[i];

        let tabContent = document.createElement("div");
        let tabTitle = document.createElement("div");
        tabTitle.innerText = tabsTitles[i];

        container.appendChild(tabContent);
        tabContent.id = tabsTitles[i] + "Content";
        tabContent.className = "tabcontent";

        button.addEventListener("click", function(event) {
            openTab(event, tabContent);
        });
    }
}
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    tabName.style.display = "block";
    evt.currentTarget.className += " active";
}

//CRAFT CAROUSEL
let craftsImagesList = [
    "images/crafts/draw1.png",
    "images/crafts/draw2.jpg",
    "images/crafts/draw3.png",
    "images/crafts/draw4.png",
    "images/crafts/draw5.png",
    "images/crafts/draw6.png",
    "images/crafts/hoppip.png",
    "images/crafts/turtle.png"
];
function addcraftsCarousel() {
    let container = document.getElementById("CraftsContent");
    let carousel = document.createElement("div");
    let previousBtn = document.createElement("button");
    let nextBtn = document.createElement("button");
    let list = document.createElement("ul");

    container.appendChild(carousel);
    carousel.id = "craftCarousel";
    carousel.appendChild(previousBtn);
    previousBtn.className = "btn";
    previousBtn.id = "previousBtnCraft";
    previousBtn.innerHTML = "&#10096";

    carousel.appendChild(list);
    list.className = "slide";
    list.id = "craftSlide";

    carousel.appendChild(nextBtn);
    nextBtn.className = "btn";
    nextBtn.id = "nextBtnCraft";
    nextBtn.innerHTML = "&#10097";

    addImagesCraft();
}
function addImagesCraft() {
    let container = document.getElementById("craftSlide");

    craftsImagesList.forEach((src,index) => {
        let item = document.createElement("li");
        let image = document.createElement("img");
        container.appendChild(item);
        item.appendChild(image);
        item.className = "craftsList";
        image.className = "craftImg";
        image.src = src;
        image.id = "draw"+index;
    });


    document.getElementById("craftSlide").style.width = `${30 * craftsImagesList.length}%`;
    document.getElementById("craftSlide").style.transform = `translateX(${-100 / craftsImagesList.length}%)`;

    updateActiveImage();
}
function updateActiveImage() {
    let items = document.querySelectorAll(".craftsList");
    items.forEach((item, index) => {
        if (index === currentIndex) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
    let offset = -currentIndex * (100 / craftsImagesList.length);
    document.getElementById("craftSlide").style.transition = "transform 0.5s ease";
    document.getElementById("craftSlide").style.transform = `translateX(${offset}%)`;
}
function initializeCarousel() {
    document.getElementById("previousBtnCraft").addEventListener("click", function() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = craftsImagesList.length - 2;
            document.getElementById("craftSlide").style.transition = "none";
            updateActiveImage();
            setTimeout(() => {
                document.getElementById("craftSlide").style.transition = "transform 0.5s ease";
                currentIndex--;
                updateActiveImage();
            }, 50);
        } else {
            updateActiveImage();
        }
    });

    document.getElementById("nextBtnCraft").addEventListener("click", function() {
        currentIndex++;
        if (currentIndex >= craftsImagesList.length-2) {
            currentIndex = craftsImagesList.length-(craftsImagesList.length+1);
            document.getElementById("craftSlide").style.transition = "none";
            updateActiveImage();
            setTimeout(() => {
                document.getElementById("craftSlide").style.transition = "transform 0.5s ease";
                currentIndex++;
                updateActiveImage();
            }, 50);
        } else {
            updateActiveImage();
        }
    });
}
function specialImages() {
    let image = document.getElementById("draw6");
    let hoverSrc = "images/crafts/alternatives/hoppip2.png";
    let originalSrc = "images/crafts/hoppip.png";

    image.addEventListener("mouseover", function() {
        image.src = hoverSrc;
    });

    image.addEventListener("mouseout", function() {
        image.src = originalSrc;
    });
}

//GAMES 
class Game {
    constructor(img, title, url) {
        this.img = img;
        this.title = title; 
        this.url = url; 
    }
}
let gamesList = [
    new Game("images/games/yur/yur1.png", "Yur-E's Brain", "https://doriens.itch.io/yur-es-brain"),
    new Game("images/games/1991/1991A.png", "1991 - Un été sans fin", ""),
    new Game("images/games/laugh/shall1.png", "Thou Shall Laugh","https://amiralprostate666.itch.io/tho-shall-laugh"),
    new Game("images/games/yokai/yo1.png", "Yokai", ""),
    new Game("images/games/avenir/avenir1.png", "À venir", "")
]
function addGameCard() {
    let container = document.querySelector("#GamesContent");

    for (i=0; i<gamesList.length; i++) {
        let card = document.createElement("div");
        container.appendChild(card);
        card.className = "gameCard";
        card.id = "card"+i;

        let img = document.createElement("img");
        let gameDescr = document.createElement("div");
        let title = document.createElement("h2");
        let descr = document.createElement("div");

        card.appendChild(img);
        card.appendChild(gameDescr);
        gameDescr.id = "gameDescr"+i;
        img.className = "gameImg";
        img.id = "gameImg"+i;
        card.appendChild(gameDescr);
        gameDescr.className = "gameDescr";

        gameDescr.appendChild(title);
        title.className = "gameTitle";
        title.textContent = gamesList[i].title;
        gameDescr.appendChild(descr);
        descr.id = "gameDescr"+i;
        descr.textContent = "";
}

    addLinks();
    addGameDescription();
    addPictures();
}
function addLinks() {
    let yuri = document.querySelector("#card0");
    let laugh = document.querySelector("#card2");

    yuri.addEventListener("click", function() {
        window.open(gamesList[0].url, '_blank');
    }); 
    laugh.addEventListener("click", function() {
        window.open(gamesList[2].url, '_blank');
    }); 

    yuri.style.cursor = "pointer";
    laugh.style.cursor = "pointer";
}
function addGameDescription() {
    let container1 = document.querySelector("#gameDescr0");
    let descriptions1 = [
        "Jeu conçu lors de la Scientific Game Jam 2023.", 
        "Le but était de vulgariser le concept de Learning Machine et de Boîte Noire : face à diverses menaces, le joueur donne ses instructions à un petit robot. Plus il agit, plus il débloque de nouveaux comportements possibles, sans pour autant savoir préciséement comment le robot réagira ...",
        "Mes rôles : Game Designer (rôle partagé), Coordination, Aide-Graphiste"
    ] 
    descriptions1.forEach(description => {
        let desc = document.createElement("div");
        container1.appendChild(desc);
        desc.innerText = description;
        desc.className = "gameDescription";
    });

    let container2 = document.querySelector("#gameDescr1");
    let descriptions2 = [
        "Jeu conçu lors d'une Game Jam entre amis (Sept. 2023).", 
        "C'est un point-and-click dans une ambiance enfantiine et mélancolique, qui raconte l'histoire d'un scientifique essayant de modifier la fin de ses vacances d'été 1991.",
        "Mes rôles : Game Designer (rôle partagé), Coordination, Aide-Graphiste, Montage vidéo"
    ] 
    descriptions2.forEach(description => {
        let desc = document.createElement("div");
        container2.appendChild(desc);
        desc.innerText = description;
        desc.className = "gameDescription";
    });

    let container3 = document.querySelector("#gameDescr2");
    let descriptions3 = [
        "Jeu conçu lors de la Global Game Jam (Janv. 2024).", 
        "Le joueur incarne un jeune page qui, pour plaire au Roi, doit réussir à rire de la manière attendue.",
        "Jouable uniquement au micro, le but est de produire, en rythme, des éclats de rire qui correspondent à la durée et à l'intensité attendues (aléatoire).",
        "Mes rôles : Game Designer (rôle partagé), Coordination, Aide-Graphiste, Montage vidéo"
    ] 
    descriptions3.forEach(description => {
        let desc = document.createElement("div");
        container3.appendChild(desc);
        desc.innerText = description;
        desc.className = "gameDescription";
    });

    let container4 = document.querySelector("#gameDescr3");
    let descriptions4 = [
        "Jeu conçu pour l'enterrement de jeune fille d'une amie (août 2023).", 
        "Les joueurs sont divisés en 3 équipes, et incarnent une femme importante dans l'histoire du Japon (Scientifiques, Artistes, Combatantes, Militantes).",
        "Les joueurs de même type s'affrontent lors d'épreuves propres à leur spécificité (construire la plus haute tour en papier; guider leur équipe qui avance à l'aveugle, peindre le drapeau de leur clan, compétition d'énigmes, etc.).",
        "Chaque équipe représente un clan, que l'Empereur a mis en concurrence : le clan qui arrivera à assurer la domination sur les Terres du Nord sera officialisé, les autres dissous. Le but a été qu'au fur et à mesure de l'avancement dans l'histoire, les équipes décident de mettre fin à leur rivalité, et à la destruction des Terres du Nord.",
        "Mes rôles : Game Designer (rôle partagé), Graphiste"
    ] 
    descriptions4.forEach(description => {
        let desc = document.createElement("div");
        container4.appendChild(desc);
        desc.innerText = description;
        desc.className = "gameDescription";
    });

    let container5 = document.querySelector("#gameDescr4");
    let descriptions5 = [
        "Jeu mixte ambiance/numérique en cours de conception.", 
        "Dans un univers cyberpunk, les joueurs devront saboter l'Ordinateur Central, tout en identifiant les saboteurs au sein de leur équipe.",
        "Sous forme de visual novel, ils devront se mettre d'accord, jouer pour l'intérêt général ... Ou bien s'en sortir individuellement en bluffant.",
        "Mes rôles : Game Designer (rôle partagé), Graphiste, Montage Vidéo, Programmation (Rôle Partagé)"
    ] 
    descriptions5.forEach(description => {
        let desc = document.createElement("div");
        container5.appendChild(desc);
        desc.innerText = description;
        desc.className = "gameDescription";
    });
}
function addPictures() {
    picturesYur();
    pictures1991();
    picturesLaugh();
    picturesYokai();
    picturesAvenir();
}

function picturesYur() {
    let picturesYur = [
        "images/games/yur/yur1.png",
        "images/games/yur/yur2.png",
        "images/games/yur/yur3.png"
    ];
    let container = document.getElementById("gameImg0");
    let currentIndex = 0;
    container.src = picturesYur[0];

    function changeImage() {
        container.src = picturesYur[currentIndex];
        currentIndex++;
        if (currentIndex >= picturesYur.length) {
            currentIndex = 0;
        }
    }

    setInterval(changeImage, 2500);
}
function pictures1991() {
    let pictures1991 = [
        "images/games/1991/1991A.png",
        "images/games/1991/1991B.png",
        "images/games/1991/1991C.png"
    ];
    let container = document.getElementById("gameImg1");
    let currentIndex = 0;
    container.src = pictures1991[0];

    function changeImage() {
        container.src = pictures1991[currentIndex];
        currentIndex++;
        if (currentIndex >= pictures1991.length) {
            currentIndex = 0;
        }
    }

    setInterval(changeImage, 2500);
}
function picturesLaugh() {
    let picturesLaugh = [
        "images/games/laugh/shall1.png",
        "images/games/laugh/shall2.png",
        "images/games/laugh/shall3.png"
    ]
    let container = document.getElementById("gameImg2");
    let currentIndex = 0;
    container.src = picturesLaugh[0];

    function changeImage() {
        container.src = picturesLaugh[currentIndex];
        currentIndex++;
        if (currentIndex >= picturesLaugh.length) {
            currentIndex = 0;
        }
    }

    setInterval(changeImage, 2500);
}
function picturesYokai() {
    let picturesYokai = [
        "images/games/yokai/yo1.png",
        "images/games/yokai/yo2.png",
        "images/games/yokai/yo3.png",
        "images/games/yokai/yo4.png",
        "images/games/yokai/yo5.png",
        "images/games/yokai/yo6.png",
        "images/games/yokai/yo7.png"
    ]
    let container = document.getElementById("gameImg3");
    let currentIndex = 0;
    container.src = picturesYokai[0];

    function changeImage() {
        container.src = picturesYokai[currentIndex];
        currentIndex++;
        if (currentIndex >= picturesYokai.length) {
            currentIndex = 0;
        }
    }

    setInterval(changeImage, 2500);
}
function picturesAvenir() {
    let picturesAvenir = [
        "images/games/avenir/avenir1.png"
    ]
    let container = document.getElementById("gameImg4");
    let currentIndex = 0;
    container.src = picturesAvenir[0];

    function changeImage() {
        container.src = picturesAvenir[currentIndex];
        currentIndex++;
        if (currentIndex >= picturesAvenir.length) {
            currentIndex = 0;
        }
    }

    setInterval(changeImage, 2500);
}

//CODE
class CodeProject {
    constructor(img, title, url) {
        this.img = img;
        this.title = title; 
        this.url = url; 
    }
}
let codeProjectsList = [
    new CodeProject("images/codes/css.png", "Entraînement CSS", "https://moksja.github.io/css-menus/#"),
    new CodeProject("images/codes/neko.png", "Neko Sagashi", "https://moksja.github.io/nekoSagashi/"),
    new CodeProject("images/codes/chatons.png", "Chaton Totem", "https://moksja.github.io/catotem/index.html"),
    new CodeProject("images/codes/animal/animal2.png", "Animal Totem", "https://moksja.github.io/animaltotem/"),
    new CodeProject("images/codes/portfolio.png", "Portfolio",""),
    new CodeProject("images/games/avenir/avenir1.png", "À venir", "")
]
function addCodeCard() {
    let container = document.querySelector("#CodeContent");

    for (i=0; i<codeProjectsList.length; i++) {
        let card = document.createElement("div");
        container.appendChild(card);
        card.className = "gameCard";
        card.id = "codeCard"+i;

        let img = document.createElement("img");
        let codeDescr = document.createElement("div");
        let title = document.createElement("h2");
        let descr = document.createElement("div");

        card.appendChild(img);
        card.appendChild(codeDescr);
        codeDescr.id = "codeDescr"+i;
        img.className = "codeImg";
        img.id = "codeImg"+i;
        img.src = codeProjectsList[i].img;

        card.appendChild(codeDescr);
        codeDescr.className = "codeDescr";
        codeDescr.appendChild(title);
        title.className = "gameTitle";
        title.textContent = codeProjectsList[i].title;
        codeDescr.appendChild(descr);
        descr.id = "codeDescr"+i;
        descr.textContent = "";

        let link = codeProjectsList[i].url;
        if (link != "") {
            card.addEventListener("click", function() {
                window.open(link, '_blank');
            }); 
            card.style.cursor = "pointer";
        };   
}
    addCodeDescription();
}

function addCodeDescription() {
    let container1 = document.getElementById("codeDescr0");
    let descriptions1 = [
        "Responsive CSS",
        "Petits exercices pour m'améliorer avec CSS et tester plusieurs fonctionnalités.", 
        "En cours."
    ] 
    descriptions1.forEach(description => {
        let desc = document.createElement("div");
        container1.appendChild(desc);
        desc.innerText = description;
        desc.className = "gameDescription";
    });

    let container2 = document.querySelector("#codeDescr1");
    let descriptions2 = [
        "Jeu de rapidité - En cours de programmation", 
        "Petit jeu dont l'objectif est de retrouver les 3 chatons parmi tous ceux à l'écran. ",
        "La grille de chat est randomisée à partir d'une liste plus grande. Quand on clique sur un chaton, s'il est parmi ceux à retrouver, il disparaît et on gagne des points, sinon, on en perd et il reste affiché. Il y a également un chronomètre.",
        "À rajouter : On gagne les points restants au chronomètre lorsqu'on a trouvé les 3 chatons. Il manque également un menu, des écrans de victoire/défaite et un meilleur design global. Idéalement, je voudrais implémenter plusieurs niveaux de difficulté."
    ] 
    descriptions2.forEach(description => {
        let desc = document.createElement("div");
        container2.appendChild(desc);
        desc.innerText = description;
        desc.className = "gameDescription";
    });
    
    let container3 = document.getElementById("codeDescr2");
    let descriptions3 = [
        "Quel chaton es-tu aujourd'hui ?",
        "Programme d'entraînement : Randomization.", 
        "C'est mon premier programme. À chaque itération, l'algorithme choisit un objet au hasard."
    ] 
    descriptions3.forEach(description => {
        let desc = document.createElement("div");
        container3.appendChild(desc);
        desc.innerText = description;
        desc.className = "gameDescription";
    });

    let container4 = document.querySelector("#codeDescr3");
    let descriptions4 = [
        "Quel est ton animal totem ?", 
        "Programme de reconnaissance d'images reposant sur l'utilisation de Teachable Machine. ",
        "J'ai entraîné le programme avec 5 animaux, et via la caméra, l'algorithme choisit celui qui nous ressemble le plus, notre totem.",
        "Le traitement de l'image prend un peu de temps, et la classe Axolot semble sortir plus souvent, c'est sans doute dû à l'apparence des animaux choisis, difficile à retrouver dans les visages humains."
    ] 
    descriptions4.forEach(description => {
        let desc = document.createElement("div");
        container4.appendChild(desc);
        desc.innerText = description;
        desc.className = "gameDescription";
    });

    let container5 = document.querySelector("#codeDescr4");
    let descriptions5 = [
        "Site conçu en ~1semaine, avec pour objectif de montrer mon envie d'apprendre et ma capacité à être autonome."
    ] 
    descriptions5.forEach(description => {
        let desc = document.createElement("div");
        container5.appendChild(desc);
        desc.innerText = description;
        desc.className = "gameDescription";
    });

    let container6 = document.querySelector("#codeDescr5");
    let descriptions6 = [
        "Un jeu d'ambiance en ligne, conçu avec un ami pour nos proches. Sous forme de visual novel à choix multiples et divers mini-jeux."
    ] 
    descriptions6.forEach(description => {
        let desc = document.createElement("div");
        container6.appendChild(desc);
        desc.innerText = description;
        desc.className = "gameDescription";
    });
}
