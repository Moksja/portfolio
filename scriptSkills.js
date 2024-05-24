document.addEventListener('DOMContentLoaded', function() {
    addWindow();
    addSkillsContainer();
    skillsHeader();
    addTimeline();
    textCodeEffect();
    addHobbiesDetails()
    getHobbyDescription();
  });

//AJOUT ELEMENTS
function addWindow() {
    let container = document.getElementsByClassName("windowContainer")[0];
    let addRectangle = document.createElement("div");

    container.appendChild(addRectangle);
    addRectangle.className = "window";

    addIcons();
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

function addSkillsContainer() {
    let container = document.getElementsByClassName("window")[0];
    let skillsContainer = document.createElement("div");
    let skillsHeader = document.createElement("div");
    let skillsDetail = document.createElement("div");
    let historyDetail = document.createElement("div");
    let hobbiesDetail = document.createElement("div");

    container.appendChild(skillsContainer);
    skillsContainer.id = "skillsContainer";
    skillsContainer.appendChild(skillsHeader);
    skillsHeader.id = "skillsHeader";
    skillsContainer.appendChild(skillsDetail);
    skillsDetail.id = "skillsDetail";
    skillsContainer.appendChild(historyDetail);
    historyDetail.id = "historyDetail";
    skillsContainer.appendChild(hobbiesDetail);
    hobbiesDetail.id = "hobbiesDetail";
}
function skillsHeader() {
    let container = document.getElementById("skillsHeader");
    let profilePic = document.createElement("img");
    let textContainer1 = document.createElement("div");
    let title = document.createElement("h1");
    let subtitle = document.createElement("h3");

    container.appendChild(profilePic);
    profilePic.id="skillsPp";
    profilePic.src="images/others/profilePic2.png"
    container.appendChild(textContainer1);
    textContainer1.className = "skillsHeaderTextContainer"
    textContainer1.appendChild(title);
    title.id = "skillsTitle";
    title.textContent = "Ioana Acu, Développeuse Full-Stack Junior";
    textContainer1.appendChild(subtitle);
    subtitle.id = "skillsSubtitle";
    subtitle.textContent = "En recherche d'alternance - Septembre 2024 - 3semaines/mois - Simplon";

    skillsDetail()
}

function skillsDetail() {
    let container = document.getElementById("skillsDetail");
    let code = document.createElement("div");
    let outils = document.createElement("div");
    let softSkills = document.createElement("div");

    container.appendChild(code);
    code.id = "code";
    code.className = "skillDetailContainer";
    container.appendChild(outils);
    outils.id = "outils";
    outils.className = "skillDetailContainer";
    container.appendChild(softSkills);
    softSkills.id = "softSkills";
    softSkills.className = "skillDetailContainer";

    let skillsTitles = [
        "Code",
        "Outils",
        "Skills"
    ];

    let skillDetailContainers = document.querySelectorAll(".skillDetailContainer");

    for (let i = 0; i < skillDetailContainers.length; i++) {
        let skillDetailContainer = skillDetailContainers[i];
        let title = document.createElement("div");
        let gaugesContainer = document.createElement("div");
        skillDetailContainer.appendChild(title);
        title.className = "skillDetailTitle";
        title.textContent = skillsTitles[i];
        skillDetailContainer.appendChild(gaugesContainer);
        gaugesContainer.id = "gaugesContainer";
    };
    eachSkill();
}

function eachSkill() {
    class CodeSkill {
        constructor(name, value) {
            this.name = name;
            this.value = value; 
        }}
    class ToolSkill {
        constructor(name, value) {
            this.name = name;
            this.value = value; 
        }}
    class Skill {
        constructor(name, value) {
            this.name = name;
            this.value = value; 
        }}
    let codeSkillsList = [
        new CodeSkill("HTML","35"),
        new CodeSkill("CSS", "15"),
        new CodeSkill("JavaScript", "25"),
        new CodeSkill("Swift", "30")
    ];
    let toolsSkillsList = [
        new ToolSkill("Photoshop & Illustrator","80"),
        new ToolSkill("Adobe AfterEffects & Camtasia", "25"),
        new ToolSkill("Outils de collaboration", "80"),
        new ToolSkill("Figma", "40"),
        new ToolSkill("GitHub", "10")
    ]
    let skillsList = [
        new Skill("Autonomie", "80"),
        new Skill("Rigueur", "80"),
        new Skill("Organisation", "70"),
        new Skill("Anticipation", "70"),
        new Skill("Communication", "70"),
        new Skill("Collaboration", "80"),
        new Skill("Polyvalence", "90")
    ];

    codeSkillsList.forEach(skill => {
        let container = document.getElementById("code");
        let title = document.createElement("h5");
        let bar = document.createElement("div");
        let darkBar = document.createElement("div");

        container.appendChild(title);
        container.appendChild(bar);
        title.textContent = skill.name;
        bar.className = "skillBar";
        bar.id = skill.name; 
        bar.appendChild(darkBar);
        darkBar.className = "darkSkillBar";
        darkBar.style.width = skill.value + "%";
    });

    toolsSkillsList.forEach(skill => {
        let container = document.getElementById("outils");
        let title = document.createElement("h5");
        let bar = document.createElement("div");
        let darkBar = document.createElement("div");

        container.appendChild(title);
        container.appendChild(bar);
        title.textContent = skill.name;
        bar.className = "skillBar";
        bar.id = skill.name; 
        bar.appendChild(darkBar);
        darkBar.className = "darkSkillBar";
        darkBar.style.width = skill.value + "%";
    });

    skillsList.forEach(skill => {
        let container = document.getElementById("softSkills");
        let title = document.createElement("h5");
        let bar = document.createElement("div");
        let darkBar = document.createElement("div");

        container.appendChild(title);
        container.appendChild(bar);
        title.textContent = skill.name;
        bar.className = "skillBar";
        bar.id = skill.name; 
        bar.appendChild(darkBar);
        darkBar.className = "darkSkillBar";
        darkBar.style.width = skill.value + "%";
    });

    let container = document.getElementById("code");
    let shortTextCode = document.createElement("div");

    container.appendChild(shortTextCode);
    shortTextCode.id = "shortTextCode";
    shortTextCode.textContent = "Je me forme et pratique régulièrement";
}

function addTimeline() {
    let container = document.getElementById("historyDetail");
    let historyTitle = document.createElement("div");
    let historyBar = document.createElement("div");
    let circlesDiv = document.createElement("div");

    container.appendChild(historyTitle);
    historyTitle.textContent = "Mon parcours";
    historyTitle.className = "skillDetailTitle";
    container.appendChild(historyBar);
    historyBar.id = "historyBar";
    historyBar.appendChild(circlesDiv);
    circlesDiv.id = "circlesDiv";

    dateContainers();
}

function dateContainers() {
    class Date { 
        constructor(name, year, image, description) {
            this.name = name;
            this.year = year;
            this.image = image;
            this.description = description;
        }
    }
    let dates = [
        new Date("Début","1989","none","Née à Galati, en Roumanie."),
            new Date("Départ", "1998", "none", "Arrivée en France."),
            new Date("Japon", "2013", "none", "Année d'études à Tokyo suite à ma licence en langue et civilisation japonaises."),
            new Date("FLE", "2017", "none", "Master Français Langue Étrangère : mes premières années en tant que prof."),
            new Date("Changement de plan", "2020", "none", "Suite au Covid, j'ai dû annuler mon projet de Working Holliday au Japon. C'est comme ça que j'ai commencé un Master en Création de Ressources Numériques."),
            new Date("Compagnie du Code", "2021", "none", "D'abord stagiaire, alternante et enfin en CDI. Un mélange d'ingénierie pédagogique, d'animation ludique, et de gestion de projet, mais pas que. C'est là que mon intérêt pour le code s'est réveillé."),
            new Date("Nouveau départ", "Janv. 2024", "none","Après 2 formations en Swift avec Simplon, j'ai continué à apprendre à programmer, et à imaginer des petits projets ludiques."),
            new Date("À venir", "Sept. 2024", "non", "Début de ma formation Dev Full-Stack avec Simplon, et surtout, de mon alternance, que j'ai hâte de commencer !")
    ];
    let container = document.getElementById("circlesDiv");

    for (i=0; i < dates.length; i++) {
        let circleInfoContainer = document.createElement("div");
        let circle = document.createElement("div");
        let dateCircle = document.createElement("div");
        let dateTitle = document.createElement("h5");
        let dateYear = document.createElement("h6");
        let dateDescription = document.createElement("div");

        container.appendChild(circleInfoContainer);
        circleInfoContainer.className = "circleInfoContainers";
        circleInfoContainer.id = "circleInfoContainer"+i;
        circleInfoContainer.appendChild(circle);
        circle.className = "circles";
        circleInfoContainer.appendChild(dateCircle);
        dateCircle.className = "dateCircle";
        circleInfoContainer.appendChild(dateTitle);
        dateTitle.className = "dateTitle";
        circleInfoContainer.appendChild(dateYear);
        dateYear.className = "dateYear";
        circleInfoContainer.appendChild(dateDescription);
        dateDescription.textContent = dates[i].description;
        dateDescription.className = "descriptionDates";
        dateDescription.id = "dateDescription"+i;


        dateTitle.textContent = dates[i].name;
        dateYear.textContent = dates[i].year;
    }
}

function addHobbiesDetails() {
    let container = document.getElementById("hobbiesDetail");
    let title = document.createElement("div");
    let iconsContainer = document.createElement("div");

    let hobbiesDescriptions = [
        "Ces dernières années, je lis surtout de la SF.",
        "J'aime la couture, le tricot et le crochet. Ces derniers mois, je m'essaye également aux machines FabLab.",
        "J'aime bien le Pixel Art, mais pas que. Récemment, j'ai commencé à bidouiller sur Blender 3D.",
        "J'aime jouer aux jeux, mais j'aime aussi les concevoir : jeux d'ambiance pour les amis, Game Jams, ...",
    ]
    let hobbiesIcons = [
        "images/hobbiesIcons/reading.png",
        "images/hobbiesIcons/crafts.png",
        "images/hobbiesIcons/graphism.png",
        "images/hobbiesIcons/games.png"
    ]

    container.appendChild(title);
    title.textContent = "Loisirs";
    title.className = "skillDetailTitle";
    container.appendChild(iconsContainer);
    iconsContainer.id = "hobbiesIconsContainer";
    let hobbyDescription = document.createElement("div");

    for (i=0; i<4; i++) {
        let container = document.getElementById("hobbiesIconsContainer");
        let hobby = document.createElement("div");
        let hobbyIcon = document.createElement("img");
        

        container.appendChild(hobby);
        hobby.id = "hobby"+i;
        hobby.className = "hobbyConainer";
        hobby.appendChild(hobbyIcon);
        hobbyIcon.className = "hobbiesIcons";
        hobbyIcon.src = hobbiesIcons[i];
        hobbyIcon.setAttribute("data-attribute",hobbiesDescriptions[i]);
        console.log(hobbyIcon.dataset);
        
    }
    container.appendChild(hobbyDescription);
    hobbyDescription.id = "hobbyDescription";
}

function getHobbyDescription() {
    let images = document.querySelectorAll(".hobbiesIcons");
    let description = document.getElementById("hobbyDescription");
    description.style.visibility = "hidden";

    images.forEach(image => {
        image.addEventListener("mouseenter", () => {
            let imageDescription = image.getAttribute("data-attribute");
            description.innerText = imageDescription;
            description.style.visibility = "visible";
        });

        image.addEventListener("mouseleave", () => {
            description.style.visibility = "hidden";
        });
    });
}


//EFFET TEXTE REPRIS
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function textCodeEffect() {
    let header = document.querySelector("#shortTextCode"); 
    header.setAttribute("data-value", header.textContent); 

    let interval = null;
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        header.innerText = header.dataset.value
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return header.dataset.value[index];
                }

                return index > iteration && index < iteration + 5 ? letters[Math.floor(Math.random() * 26)] : "";
            })
            .join("");

        if (iteration >= header.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 10);
}