import assets from "../assets/imges"

export const navlinks = [
  {
    id: "home",
    titel: "Home",
  },
  {
    id: "about",
    titel: "About",
  },
  {
    id: "techstack",
    titel: "Tech Stack",
  },
  {
    id: "projects",
    titel: "Projects",
  },
  {
    id:"contact",
    titel:"Contact"
  }
]


export const skills = [
  {
    id: 1,
    img:assets.html,
    titel: "html",
  },
  {
    id: 2,
    img:assets.css,
    titel: "css",

  },
  {
    id: 3,
    img:assets.javscript,
    titel: "javscript",
  },
  {
    id: 4,
    img:assets.react,
    titel: "React",
  },
  {
  id: 5,
  img:assets.tailwindcss,
  titel: "Tailwindcss",
},
{
  id: 6,
  img:assets.redux_tolkit,
  titel: "redux-tolkit",
},
{
  id: 7,
  img:assets.sass,
  titel: "Sass/Scss",
},
{
  id: 8,
  img:assets.typescript,
  titel: "Typescript",
},
{
  id: 9,
  img:assets.git,
  titel: "git",
},
{
  id: 10,
  img:assets.github,
  titel: "github",
},
]

export const projects = [
  {
    titel: "Clothes Shopping Website",
    discrption: "lothes Shopping Website is user-friendly platform that offers an online shopping experience for fashion enthusiasts.",
    live:"https://ecommerchijab.netlify.app/",
    githublink:"https://github.com/ess-maker/Clothes-Shopping-Website",
    img:assets.main_img,
    tech_work_with:["Scss" ,"React" , "Typescript" , "Axois" , 'ReduxTolkit']
  },
  {
    titel: "Flower Delivery",
    discrption: "Our flower delivery website uses React, Tailwind CSS, and the Context API for seamless browsing, customization, and secure ordering of a wide variety of flowers. With social media integration and excellent customer support, we make celebrating special moments with beautiful flowers effortless.",
    live:"https://64e1c0c6a489b63f3d34cf2f--lustrous-nougat-51ca11.netlify.app/",
    githublink:"https://github.com/ess-maker/Flower-Delivery-website-",
    img:assets.flower,
    tech_work_with:["Tailwend" ,"React" , "Git" , 'Figma' ]
  },
  {
    titel: "Dessert Store",
  discrption: "Build a website for a dessert store that showcase the desserts they sell. Include a login and signup page and handle validation on the front end. ",
    live:"https://storedessert.netlify.app/",
    githublink:"https://github.com/ess-maker/Desseret_store",
    img:assets.Picture,
    tech_work_with:["•Tailwend" ,"•React" , "Git" , 'Figma' ]
  }
]
