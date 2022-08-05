const theme = 'theme';
const dataTheme = 'data-theme';
const themeTab = '.theme-tab';
const switcherBtn = '.switcher-btn';
const dark = 'dark';
const light = 'light';
const open = 'open';
const active = 'active';

const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const isVisible = 'is-visible';

const dataFilter = '[data-filter]';
const portfolioData = '[data-item]';


const root = document.documentElement;

const dataItemValue = ["web", "web", "web", "ui", "app", "app", "app", "ui"];
const dataOpenValue = ["web-1", "web-2", "web-3", "ui-1", "app-1", "app-2", "app-3", "ui-2"];
const portfolioLinkTitles = ["Web Development", "Web Development", "Web Development", "UI Design", "App Development", "App Development", "App Development", "UI Design"];
const portfolioLinkDescriptions = ["Food Website", "Skate Website", "Eating Website", "Cool Design", "Game App", "Gambling App", "Money App", "Fantastic Design"];


const popupHeaderValue = ["Web Project 1", "Web Project 2", "Web Project 3", "UI Design 1", "App Project 1", "App Project 2", "App Project 3", "UI Design 2"];




/* Theme */
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

/* Portfolio */
const filterLink = document.querySelectorAll(dataFilter);
const portfolioItems = document.querySelectorAll(portfolioData);
const searchBox = document.querySelector('#search');

/* Modal */
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);



// const createPortfolioCard = (dataItem, dataOpen, imageNum, title, description) => {
//     const portfolioCard = document.createElement("div");
//     const cardBody = document.createElement("div");
//     const portfolioIcon = document.createElement("img");
//     const portfolioLink = document.createElement("a");
//     const portfolioLinkTitle = document.createElement("div");
//     const portfolioLinkDescription = document.createElement("h3");

//     portfolioCard.setAttribute("class", "portfolio-card");
//     portfolioCard.setAttribute("data-item", dataItem);
//     portfolioCard.setAttribute("data-open", dataOpen);
//     cardBody.setAttribute("class", "card-body");
//     portfolioIcon.setAttribute("src", `./assets/images/portfolio-${imageNum}.jpg`);
//     portfolioIcon.setAttribute("alt", "portfolio icon");
//     portfolioLink.setAttribute("href", "#");
//     portfolioLink.setAttribute("class", "card-popup-box");
//     portfolioLinkTitle.innerHTML = title;
//     portfolioLinkDescription.innerHTML = description;

//     portfolioLink.appendChild(portfolioLinkTitle);
//     portfolioLink.appendChild(portfolioLinkDescription);
//     cardBody.appendChild(portfolioIcon);
//     cardBody.appendChild(portfolioLink);
//     portfolioCard.appendChild(cardBody);

//     document.querySelector(".portfolio-grid").appendChild(portfolioCard);
// }

// for (let i = 0; i < dataItemValue.length; i++) {
//     createPortfolioCard(dataItemValue[i], dataOpenValue[i], i + 1, portfolioLinkTitles[i],
//         portfolioLinkDescriptions[i]);
// }


// const createPopupCard = (dataOpen, header, imageNum) => {
//     const modalCard = document.createElement("div");
//     const modalDialog = document.createElement("div");
//     const modalHeader = document.createElement("header");
//     const headerTitle = document.createElement("h3");
//     const modalIcon = document.createElement("i");
//     const modalBody = document.createElement("div");
//     const imgWrapper = document.createElement("div");
//     const imgSrc = document.createElement("img");
//     const textWrapper = document.createElement("div");
//     const title = document.createElement("p");
//     const titleStrong = document.createElement("strong");
//     const paraOne = document.createElement("p");
//     const paraTwo = document.createElement("p");

//     const titleValue = "My first awesome website";
//     const firstPValue = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
//     const secondPValue = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";



//     modalCard.setAttribute("id", dataOpen);
//     modalCard.setAttribute("class", "modal");
//     modalCard.setAttribute("data-animation", "slideInOutTop");
//     modalDialog.setAttribute("class", "modal-dialog");
//     modalHeader.setAttribute("class", "modal-header");
//     modalIcon.setAttribute("class", "fas fa-times");
//     modalIcon.setAttribute("data-close", "");
//     modalBody.setAttribute("class", "modal-body");
//     imgWrapper.setAttribute("class", "img-wrapper");
//     imgSrc.setAttribute("src", `./assets/images/portfolio-${imageNum}.jpg`);
//     textWrapper.setAttribute("class", "text-wrapper");
//     headerTitle.innerHTML = header;
//     titleStrong.innerHTML = titleValue;
//     paraOne.innerHTML = firstPValue;
//     paraTwo.innerHTML = secondPValue;

//     modalHeader.appendChild(headerTitle);
//     modalHeader.appendChild(modalIcon);
//     modalBody.appendChild(imgWrapper);
//     imgWrapper.appendChild(imgSrc);
//     textWrapper.appendChild(title);
//     title.appendChild(titleStrong);
//     textWrapper.appendChild(paraOne);
//     textWrapper.appendChild(paraTwo);

//     document.querySelector(".site-wrapper").appendChild(modalCard);


// }

// for (let i = 0; i < dataOpenValue.length; i++) {
//     createPopupCard(dataOpenValue[i], popupHeaderValue[i], i + 1);
// }





function setActive(elm, selector) {
    if (document.querySelector(`${selector}.${active}`) !== null) {
        document.querySelector(`${selector}.${active}`).classList.remove(active);
    }
    elm.classList.add(active);
}

const setTheme = (val) => {
    if (val === dark) {
        root.setAttribute(dataTheme, dark);
        localStorage.setItem(theme, dark);
    } else {
        root.setAttribute(dataTheme, light);
        localStorage.setItem(theme, light);
    }
}

if (currentTheme) {
    root.setAttribute(dataTheme, currentTheme);
    switcher.forEach((btn) => {
        btn.classList.remove(active);
    });

    if (currentTheme === dark) {
        switcher[1].classList.add(active);
    } else {
        switcher[0].classList.add(active);
    }
}

toggleTheme.addEventListener('click', function() {
    const tab = this.parentElement.parentElement;
    if (!tab.className.includes(open)) {
        tab.classList.add(open);
    } else {
        tab.classList.remove(open);
    }
});

for (const elm of switcher) {
    elm.addEventListener('click', function() {
        const toggle = this.dataset.toggle;
        //set active state
        setActive(elm, switcherBtn);
        setTheme(toggle);
    })
}

searchBox.addEventListener('keyup', (e) => {
    const searchInput = e.target.value.toLowerCase().trim();
    portfolioItems.forEach((card) => {
        if (card.dataset.item.includes(searchInput)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    })
});

for (const link of filterLink) {
    link.addEventListener('click', function() {
        setActive(link, '.filter-link');
        const filter = this.dataset.filter;
        portfolioItems.forEach((card) => {
            if (filter === 'all') {
                card.style.display = 'block';
            } else if (card.dataset.item === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        })
    })
}




// Modal/Full Site Modal "open buttons"
for (const elm of openModal) {
    elm.addEventListener('click', function() {
        const modalId = this.dataset.open;
        document.getElementById(modalId).classList.add(isVisible);
    })
}

for (const elm of closeModal) {
    elm.addEventListener('click', function() {
        this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    })
}


// Modal
document.addEventListener('click', (e) => {
    if (e.target === document.querySelector('.modal.is-visible')) {
        document.querySelector('.modal.is-visible').classList.remove(isVisible);
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
        document.querySelector('.modal.is-visible').classList.remove(isVisible);
    }
});
