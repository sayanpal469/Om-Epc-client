import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useActiveLink = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const { pathname } = location;
    setActiveLink(pathname);
    console.log(pathname);
  }, [location]);

  return activeLink;
};

export default useActiveLink;
