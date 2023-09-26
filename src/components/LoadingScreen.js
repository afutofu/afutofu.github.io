import React, { useRef, useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { TimelineLite, TimelineMax, Power3 } from "gsap";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import Logo from "./Logo";

const LoadingScreenComp = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #151515;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  margin: 0;
  overflow: hidden;
`;

const WhiteScreen = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5000px;
  height: 5000px;
  background-color: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
`;

const LoadingScreen = ({ isLoading }) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [mounted, setMounted] = useState(false);
  let logo = useRef(null);
  let whiteScreen = useRef(null);

  const logoEnter = () => {
    let tl = new TimelineLite();

    tl.from(logo, {
      scale: 0,
      duration: 1,
      ease: Power3.easeOut,
    });

    return tl;
  };

  // const logoScaleOutIn = () => {
  //   let tl = new TimelineMax();

  //   const scaleTime = 0.8;

  //   tl.to(logo, {
  //     scale: 0.6,
  //     duration: scaleTime,
  //   }).to(logo, {
  //     scale: 1,
  //     duration: scaleTime,
  //   });

  //   return tl;
  // };

  const logoRotate = () => {
    let tl = new TimelineMax({ repeat: 0, repeatDelay: 0.02 });

    const rotateTime = 1.1;

    tl.to(logo, {
      rotate: 360,
      transformOrigin: "50% 55%",
      duration: rotateTime,
      ease: Power3.easeInOut,
    });

    return tl;
  };

  const logoScaleDownToZero = () => {
    let tl = new TimelineLite();

    tl.to(logo, {
      scale: 0,
      duration: 0.5,
      ease: Power3.easeIn,
    });

    return tl;
  };

  const whiteScreenEnter = () => {
    let tl = new TimelineLite();

    tl.to(whiteScreen, {
      opacity: 1,
      duration: 0.7,
      ease: Power3.easeInOut,
    });

    return tl;
  };

  const showScrollBar = (html, body, root) => {
    let tl = new TimelineLite();

    tl.from(html, {
      overflow: "hidden",
      duration: 0,
    })
      .from(body, {
        overflow: "hidden",
        duration: 0,
      })
      .from(root, {
        overflow: "hidden",
        duration: 0,
      });
    return tl;
  };

  const onComplete = useCallback(
    (html, body, root) => {
      enableBodyScroll(html);
      enableBodyScroll(body);
      enableBodyScroll(root);
      setAnimationComplete(true);
      isLoading(false);
    },
    [isLoading]
  );

  useEffect(() => {
    let html = document.querySelector("html");
    let body = document.querySelector("body");
    let root = document.querySelector("#root");
    disableBodyScroll(html);
    disableBodyScroll(body);
    disableBodyScroll(root);

    setMounted(true);
    const master = new TimelineLite({
      paused: true,
      onComplete,
      onCompleteParams: [html, body, root],
    });
    master.add(logoEnter(), "+=1");
    // master.add(logoScaleOutIn(), "-=0.2");
    master.add(logoRotate(), "-=0.2");
    master.add(logoScaleDownToZero());
    master.add(whiteScreenEnter(), "+=0.3");
    master.add(showScrollBar(html, body, root));
    // master.seek(4);
    master.play();
  }, [onComplete]);

  if (!animationComplete) {
    return (
      <LoadingScreenComp>
        <Logo ref={(el) => (logo = el)} size={mounted ? 70 : 0} />
        <WhiteScreen ref={(el) => (whiteScreen = el)} />
      </LoadingScreenComp>
    );
  }

  return null;
};

export default LoadingScreen;
