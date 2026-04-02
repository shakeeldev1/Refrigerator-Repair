import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Automatically scroll to the very top of the page when the route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Optional: remove this if you want an instant jump instead of a smooth scroll
    });
  }, [pathname]);

  return null; // This component doesn't render anything visually
}