import React, { useState, useEffect , Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from '../style';
import assets from "../assets/imges"
import Loding from './Loding';

const Gitintach = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showEmailNotification, setShowEmailNotification] = useState(false);
  const [showNumberNotification, setShowNumberNotification] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,  
  });
  useEffect(() => {
    if (inView) {
      setIsLoaded(true);
    }
  }, [inView]);
  const handleSendEmail = () => {
    const email = 'essh4014@gmail.com';
    window.location.href = `mailto:${email}`;
  };
  const handleCopyEmail = () => {
    const email = 'essh4014@gmail.com';
    navigator.clipboard.writeText(email);
    setShowEmailNotification(true);
    setTimeout(() => {
      setShowEmailNotification(false);
    }, 2000) 
  };

  const handleCopyNumber = () => {
    const phoneNumber = '+213 669 114 950';
    navigator.clipboard.writeText(phoneNumber);
    setShowNumberNotification(true);
    setTimeout(() => {
      setShowNumberNotification(false);
    }, 2000); 
  };

  return (
    <Suspense fallback={<Loding />}>
    <div id='contact' className={`py-5 md:py-10 text-center ${isLoaded ? 'transition-opacity duration-1000 delay-200  ease-in-out' : 'opacity-0'}`}>
      <h1 className={`${styles.heading3} px-5 py-1.5 bg-[#E5E7EB] rounded-xl mb-4 w-fit mx-auto text-Gray_600 capitalize`}>Contact Information</h1>
      <div ref={ref} className={`grid grid-cols-1 place-items-center my-12`}>
        <div className='inline-flex gap-5 mb-8'>
          <img src={assets.mail} onClick = {handleSendEmail} alt="mail" className='cursor-pointer' />
          <h1 className={`${styles.heading2} !font-semibold`}>essh4014@gmail.com</h1>
          <img src={assets.copy} alt="copy" className='cursor-pointer' onClick={handleCopyEmail} />
        </div>
        <div className='inline-flex gap-5 mb-4'>
          <img src={assets.call} alt="mail" className='cursor-pointer' onClick={handleCopyNumber} />
          <h1 className={`${styles.heading2} !font-semibold`}>+213 669 114 950</h1>
          <img src={assets.copy} alt="copy" className='cursor-pointer' onClick={handleCopyNumber} />
        </div>
      </div>
      {showEmailNotification && 
        <p className="bg-[#10B981] py-2 px-5 rounded-lg text-2xl capitalize text-white fixed left-1/2 top-5 transform -translate-x-1/2">Email copied!</p>}
      {showNumberNotification && 
        <p className="bg-[#10B981] py-2 px-5 rounded-lg text-2xl capitalize text-white fixed left-1/2 top-5 transform -translate-x-1/2">Number copied!</p>}
    </div>
    </Suspense>
  );
};

export default Gitintach;