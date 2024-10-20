"use client";
import { useEffect } from 'react';
import gsap from 'gsap';
import '../../app/preloader.css'; // Import the specific CSS file

const Preloader: React.FC = () => {
  useEffect(() => {
    const select = (s: string) => document.querySelector(s);
    const container = select('#container');
    const seg = select('.seg');
    const allSegs: Element[] = [];

    if (!container || !seg) return;

    gsap.set('svg', {
      visibility: 'visible',
    });

    let num = 360 / 15;
    let duration = 0.25;
    allSegs.push(seg);

    for (let i = 1; i < num - 8; i++) {
      let clone = seg.cloneNode(true) as Element;
      container.appendChild(clone);
      gsap.set(clone, {
        rotation: i * 15,
        svgOrigin: '400 300',
      });
      allSegs.push(clone);
    }

    let mainTl = gsap.timeline({});
    allSegs.forEach((item, count) => {
      let tl = gsap.timeline();
      tl.to(item, {
        rotation: '-=120',
        svgOrigin: '400 300',
        repeat: -1,
        repeatRefresh: true,
        ease: 'sine.inOut',
        repeatDelay: (num - 10) * duration,
      });
      mainTl.add(tl, count * duration);
    });

    gsap.to(container, {
      duration: 1,
      rotation: 360,
      svgOrigin: '400 300',
      ease: 'linear',
      repeat: -1,
    });

    gsap.globalTimeline.timeScale(0.5);
  }, []);

  return (
    <div id="preloader-container"> {/* Applying the container ID */}
      <svg
        id="preloader-svg"  
        xmlns="http://www.w3.org/2000/svg"
        viewBox="200 150 400 300"
      >
        <defs>
          <g id="container" filter="url(#goo)">
            <path
              className="seg"
              d="M412.9,251.7c-4.1-1.1-8.5-1.7-12.9-1.7"
            />
          </g>
          <filter
            id="goo"
            colorInterpolationFilters="sRGB"
            filterUnits="objectBoundingBox"
            x="-100%"
            y="-100%"
            width="250%"
            height="250%"
          >
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9"
              result="cm"
            />
            <feBlend />
          </filter>
          <radialGradient
            id="grad"
            cx="400.5176"
            cy="298.0287"
            r="125.9247"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.39" style={{ stopColor: '#FF4F59' }} />
            <stop offset="0.45" style={{ stopColor: '#FFFC31' }} />
          </radialGradient>
        </defs>
        <g id="wrapper">
          <use
            x="20"
            y="20"
            xlinkHref="#container"
            fill="none"
            strokeWidth="20"
            strokeMiterlimit="10"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="#5B1E00"
            opacity="0.05"
          />
          <use
            xlinkHref="#container"
            fill="none"
            strokeWidth="20"
            strokeMiterlimit="10"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="url(#grad)"
          />
        </g>
      </svg>
    </div>
  );
};

export default Preloader;
