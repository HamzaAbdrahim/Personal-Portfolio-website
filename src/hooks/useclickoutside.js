import { useEffect, useRef } from 'react';



const useClickOutside = (onClickOutside) => {
  const ref = useRef(null);

  const handleClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onClickOutside(event);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, []);

  return ref;
};

export default useClickOutside;