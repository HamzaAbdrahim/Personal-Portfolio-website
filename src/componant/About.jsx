import assets from "../assets/imges";
import styles from "../style";
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, 
  });

  useEffect(() => {
    if (inView) {
      setIsLoaded(true);
    }
  }, [inView]);

  return (
    <div ref={ref} id="about" className={`p-5 lg:py-24 lg:px-20 text-center ${isLoaded ? 'transition-transform duration-1000 delay-200 transform translate-x-0' : 'transform -translate-x-full'}`}>
      <h1 className={`${styles.heading3} px-5 py-1.5 !text-[1.400rem] bg-[#E5E7EB] rounded-xl mb-4 w-fit mx-auto text-Gray_600`}>About me</h1>
      <div className="grid grid-cols-1 items-center justify-center lg:grid-cols-2">
        <div className="max-w-[25rem] my-10 lg:mb-0 mx-auto md:m-0  md:h-[30rem] bg-[#E5E7EB] relative">
          <img src={assets.Pictwo} alt="myimg" className="md:absolute hover:left-0 hover:top-0 duration-500 cursor-pointer ease-linear left-0 md:left-10 top-0 md:top-10" />
        </div>
        <div className="text-center lg:text-left 2xl:mx-auto">
          <h1 className={`${styles.heading3} mb-6`}>Curious about me? Here you have it:</h1>
          <p className={`${styles.Body1} !leading-10 max-w-3xl capitalize`}>
          I'm Hamza Abd Rahim, a 19-year-old front-end developer specializing in react.js. With a focus on creating exceptional digital experiences, I strive to build fast, accessible, and visually captivating websites. With one year of experience, I have the ability to bring ideas to life, whether it's a personal portfolio, an e-commerce platform, or any other type of website. I'm passionate about blending my technical skills with a touch of creativity to deliver high-quality results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;