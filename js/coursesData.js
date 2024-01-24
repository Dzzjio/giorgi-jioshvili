const coursesContainer = document.querySelector(".courses-container");

const data = [
  {
    id: 0,
    title: "iOS Development",
    registration: "რეგისტრაცია დასრულებულია",
    img: "./img/iosDev.webp",
  },
  {
    id: 1,
    title: "React",
    registration: "რეგისტრაცია დასრულებულია",
    img: "./img/react.webp",
  },
  {
    id: 2,
    title: "Intro to Python",
    registration: "რეგისტრაცია დასრულებულია",
    img: "./img/introPython.webp",
  },
  {
    id: 3,
    title: "Advanced Python",
    registration: "რეგისტრაცია დასრულებულია",
    img: "./img/advancedPython.webp",
  },
  {
    id: 4,
    title: "Advanced Cybersecurity Course",
    registration: "რეგისტრაცია დასრულებულია",
    img: "./img/cyber.webp",
  },
  {
    id: 5,
    title: "ToT - Training of Trainers",
    registration: "რეგისტრაცია დასრულებულია",
    img: "./img/tot.webp",
  },
  {
    id: 6,
    title: "Blockchain",
    registration: "რეგისტრაცია დასრულებულია",
    img: "./img/blockchain.webp",
  },
  {
    id: 7,
    title: "DevOps",
    registration: "რეგისტრაცია დასრულებულია",
    img: "./img/devops.webp",
  },
  {
    id: 8,
    title: "Information Security Governance",
    registration: "რეგისტრაცია დასრულებულია",
    img: "./img/isg.webp",
  },
];

data.forEach((course) => {
  const html = `
     <div class="course">
       <img src="${course.img}" alt="${course.title}">
      <div>
        <h4>${course.title}</h4>
        <p>${course.registration}</p>
        <a class="main-blue" href="#"><img src="img/arrow.svg"><span>კურსის დეტალები</span></a>
      </div>
     </div>
   `;
  coursesContainer.insertAdjacentHTML("beforeend", html);
});
