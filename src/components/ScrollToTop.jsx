import { useEffect, useState } from "react";
import rocket from "../assets/rocket.png"
import { animateScroll as scroll } from "react-scroll";

const ScrollToTop = ({darkTheme}) => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (window.scrollY > 0) {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    } else {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);
  return (
    <div
        className={`scrollToTop ${showScroll ? 'show' : 'hide'} ${darkTheme?'scroll-dark':'scroll-light'}`}
        onClick={scrollTop}
      >
        <img src={rocket} alt="rocket" />
      </div>

  )
}

export default ScrollToTop