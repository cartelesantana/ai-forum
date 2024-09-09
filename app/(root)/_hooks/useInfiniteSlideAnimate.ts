import { animate, useMotionValue } from "framer-motion";
import React, { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

const useInfiniteSlideAnimate = () => {
  let [partnersRef, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 10,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return { partnersRef, xTranslation }
};

export default useInfiniteSlideAnimate;
