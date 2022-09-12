/* eslint-disable react/prop-types */

import React from "react";
import lottie from "lottie-web";
import animation from "./loading.json";
import cx from 'clsx'
import styles from './animated.module.css'

function Animated({className}) {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#react-animation"),
      animationData: animation,
    });
  }, []);

  return (
      <div className={cx(styles['animated'],className)} id="react-animation" />
  )
}

export default Animated;
