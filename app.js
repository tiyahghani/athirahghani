//navbar stick on top while scrolling
window.onscroll = function () {
  stickNavbar();
};

var navbar = document.querySelector(".navbar");
var navbarOffset = navbar.offsetTop;

function stickNavbar() {
  if (window.pageYOffset >= navbarOffset) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

//scrolling animation after clicking on navbar
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

function smoothScroll(e) {
  e.preventDefault();

  const targetId = this.getAttribute("href").substring(1);
  const targetSection = document.getElementById(targetId);
  const offsetTop = targetSection.offsetTop;

  window.scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}

//hamburger menu in smaller screen
const burgerMenu = document.querySelector(".burger-menu");
const navLinks2 = document.querySelector(".nav-area");

//hamburger menu to x with animation
burgerMenu.addEventListener("click", () => {
  navLinks2.classList.toggle("active");
  burgerMenu.classList.toggle("active");
});

// hightlight navbar section when clicked or scrolling
function setActive(element) {
  const links = document.querySelectorAll("nav a");
  links.forEach((link) => link.classList.remove("active"));
  element.classList.add("active");
}

document.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  let scrollPosition = window.scrollY;

  sections.forEach((section) => {
    const top = section.offsetTop - 50;
    const bottom = top + section.clientHeight;

    if (scrollPosition >= top && scrollPosition < bottom) {
      const id = section.id;
      const activeLink = document.querySelector(`nav a[href="#${id}"]`);
      setActive(activeLink);
    }
  });
});

var typed = new Typed(".typing-text", {
  strings: ["Backend Development", "Web Development"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 25,
  backDelay: 500,
});

function openLink(url) {
  window.open(url, "_blank");
}

const projects = [
  {
    title: "Project 1",
    description: "Description of Project 1",
    link: "https://project1.com",
    image: "tiyah.jpg",
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    link: "https://project2.com",
    image: "tiyah.jpg",
  },
  // Add more projects as needed
];

// Function to create project cards
function createProjectCard(project) {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  const image = document.createElement("img");
  image.src = project.image;
  image.alt = project.title;

  const title = document.createElement("h2");
  title.textContent = project.title;

  const description = document.createElement("p");
  description.textContent = project.description;

  const link = document.createElement("a");
  link.href = project.link;
  link.textContent = "View Project";
  link.target = "_blank"; // Open link in a new tab

  projectCard.appendChild(image);
  projectCard.appendChild(title);
  projectCard.appendChild(description);
  projectCard.appendChild(link);

  return projectCard;
}

// Function to display projects
function displayProjects() {
  const projectsContainer = document.getElementById("projectsContainer");

  projects.forEach((project) => {
    const projectCard = createProjectCard(project);
    projectsContainer.appendChild(projectCard);
  });
}

// Display the projects when the page loads
window.onload = displayProjects;
