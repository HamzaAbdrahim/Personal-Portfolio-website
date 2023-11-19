import assets from "../assets/imges"
import { skills } from "../content"
import styles from "../style"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState , useEffect, Suspense } from "react";
import Loding from "./Loding";


const Skills = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Suspense fallback={<Loding />}>
    <div id="techstack" className={`p-5 lg:py-24 lg:px-20 text-center `}>
      <h1 className={`${styles.heading3} px-5 py-1.5 bg-[#E5E7EB] rounded-xl mb-4 w-fit mx-auto text-Gray_600`}>My Tech Stack</h1>
      <p className={`${styles.heading2} `}> Technologies I’ve been working with recently</p>
      <div className={`my-20 mx-auto ${isLoaded ? 'transition-opacity duration-500 ease-in-out' : ''}`}>
      <Slider {...settings}>
        {skills.map(skill => (
          <div key={skill.id} className={`${styles.flexCenter} flex-col`} >
            <img className="w-28 h-28 mx-auto"  src={skill.img} alt="" />
            <p className={`${styles.Subtitle} cursor-pointer hover:bg-${skill.color} duration-300 ease-in-out capitalize
             hover:text-white py-1 px-4 bg-[#E5E7EB] mt-4 !text-Gray_600`}>{skill.titel}</p>
          </div>
        ))}
        </Slider>
      </div>

    </div>
    </Suspense>
  )
}

export default Skills