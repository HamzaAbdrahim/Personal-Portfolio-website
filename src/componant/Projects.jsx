import React, { useEffect, useRef } from 'react';
import { projects } from '../content';
import styles from '../style';
import { useInView } from 'react-intersection-observer';
import assets from '../assets/imges';

const Projects = (prop) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      document.querySelectorAll('.project-item').forEach((el) => {
        el.classList.add('fade-in');
      });
    }
  }, [inView]);

  return (
    <div id="projectSection"  className={`p-5 lg:py-10 lg:px-20 text-center `}>
      <h1 className={`${styles.heading3} px-5 py-1.5 bg-[#E5E7EB] rounded-xl mb-4 w-fit mx-auto text-Gray_600`}>
        Projects
      </h1>
      <p className={`${styles.heading2} mb-12`}>Some of the noteworthy projects I have built:</p>
      <div id='projects' className="grid grid-cols-1 gap-12" ref={ref}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-item w-fit flex flex-col  ${index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"} cursor-pointer transform translate-x-0 duration-700 ease-in-out mx-auto shadow-xl rounded-xl items-start justify-center`}
          >
            <div className="p-4 lg:p-12 select-none cursor-pointer h-full w-full hover:-translate-y-5 duration-700 ease-in-out">
              <a target='_blank' href={project.live}>
              <img src={project.img} className='rounded-xl object-contain' alt="img" />
              </a>
            </div>
            <div className="p-4 mx-auto  text-center lg:p-20 lg:text-left">
              <h1 className={`${styles.Subtitle}`}>{project.titel}</h1>
              <p className={`${styles.Body1} my-6 max-w-6xl lowercase`}>{project.discrption}</p>
              <div className={`my-10 ${styles.flexitems} gap-4`} >
                {project.tech_work_with.map((item) => (
                  <span className='rounded-xl bg-[#e5e7eb] px-5 py-1 text-[#4B5563] font-Inter text-lg not-italic font-medium leading-5'>{item}</span>
                ))}
              </div>
              <div className="inline-flex gap-4">
                <a  target="_blank" className = {`${styles.flexCenter} p-3 duration-200 ease-linear hover:scale-125 rounded-full bg-Gray_100 shadow-xl`}  rel="noopener noreferrer"  href={project.live}>
                  <img src={assets.live} alt="live" />
                </a>
                <a target="_blank"  className = {`${styles.flexCenter} p-3 duration-200 ease-linear hover:scale-125 rounded-full bg-Gray_100 shadow-xl`} rel="noopener noreferrer" href={project.githublink}>
                  <img src={assets.github} alt="githublink" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
