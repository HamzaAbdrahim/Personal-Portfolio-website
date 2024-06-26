import React, { Suspense, useEffect, useState } from 'react';
import styles from '../style';
import Inbutton from './Inbutton';
import assets from '../assets/imges';
import Loding from './Loding';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const CvLink = "https://drive.google.com/file/d/1XATYUtxfa5ST7B5BbQx0VYrahhajYLfi/view?usp=sharing";

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleProjectClick = () => {
    // Scroll to the project section
    const projectSection = document.getElementById('projectSection');
    projectSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Suspense fallback={<Loding />}>
      <div
      id='home'
        className={` min-h-[90vh] gap-10 container mt-10 lg:mt-0 flex flex-col-reverse xl:flex-row justify-center items-center xl:justify-between lg:flex-row`}
        style={{
          opacity: isLoaded ? 1 : 0,
          transform: `translateY(${isLoaded ? '0' : '20px'})`,
          transition: 'opacity 1s ease-in, transform 0.5s ease-out',
        }}
      >
        <div>
          <h1 className={`${styles.heading1} dark:text-white mb-2`}>
            Hi👋, I'm <span className="underline">Hamza</span>
          </h1>
          <p className={`${styles.Body1} text-Gray_600 dark:text-white max-w-3xl my-10`}>
            Coding user interfaces has never been just a job for me; instead, it's a constant source
            of challenges that drive me to grow and learn. It has transformed me into an individual
            who is always eager to explore and adopt new technologies.
          </p>
          <div className="inline-flex gap-4">
            <Inbutton name="Download CV" 
            link = {CvLink} />
            <button onClick={handleProjectClick} className='!bg-transparent !text-xl !font-bold 
             underline duration-200 ease-in-out hover:scale-125 active:bg-black dark:text-white bg-Gray_900'>
            See My Project
            </button>
          </div>
        </div>
        <div className="w-72 h-80 dark:bg-gray_dark_200  bg-[#E5E7EB] relative">
          <img
            src={assets.Pic}
            alt="myimg"
            className="absolute hover:right-0 hover:bottom-0 duration-500 cursor-pointer ease-linear  right-10 w-[18rem] object-cover h-80 bottom-10"
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      </div>
    </Suspense>
  );
};

export default Hero;