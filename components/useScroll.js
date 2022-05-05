import React from "react";
const useScroll = () => {
  const [isMoved, setIsMoved] = React.useState(false);

  React.useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 50 ? setIsMoved(true) : setIsMoved(false);
    };
    window.addEventListener("scroll", scrollHandler);
    scrollHandler();

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return { isMoved };
};

export default useScroll;
