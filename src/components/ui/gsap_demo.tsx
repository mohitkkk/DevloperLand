"use client";

import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother"; // Use the proper bonus plugins
import "../../app/Experience.css"; // For styles

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  useEffect(() => {
    // Dynamically import ScrollSmoother only when in browser (client-side)
    let ScrollSmoother;
    
    // Ensure the code runs only on the client-side
    if (typeof window !== "undefined") {
      import("gsap/ScrollSmoother").then((module) => {
        ScrollSmoother = module.default;

        // Initialize ScrollSmoother after import
        if (ScrollSmoother) {
          ScrollSmoother.create({
            content: "#content",
            smooth: 1.2,
          });
        }
      });
    }

    const experience = new ExperienceComponent();
  }, []);

  return (
    <>
      <div id="content" className="content">
        <p>
          Here's some text with <span>highlighted</span> parts.
        </p>
      </div>
      <div data-app-container className="three-container"></div>
    </>
  );
}

class ExperienceComponent {
  options: { containerSelector: string };
  container: any;
  clock: THREE.Clock;
  time: number;
  renderer: any;
  camera: any;
  scene: any;
  controls: any;
  meshes: any[];

  constructor(options = { containerSelector: "[data-app-container]" }) {
    this.options = options;
    this.container = document.querySelector(this.options.containerSelector);
    this.clock = new THREE.Clock();
    this.time = 0;
    this.renderer = null;
    this.camera = null;
    this.scene = null;
    this.controls = null;
    this.meshes = [];
    this.init();
  }

  init = () => {
    this.createApp();
    this.createItems();
    this.update();
  };

  createApp = () => {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
    this.container.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(75, this.container.offsetWidth / this.container.offsetHeight, 0.1, 1000);
    this.camera.position.z = 5;

    this.scene = new THREE.Scene();
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    window.addEventListener("resize", () => {
      this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
      this.camera.aspect = this.container.offsetWidth / this.container.offsetHeight;
      this.camera.updateProjectionMatrix();
    });
  };

  createItems = () => {
    let geometry = new THREE.BoxGeometry();
    let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    let cube = new THREE.Mesh(geometry, material);
    this.scene.add(cube);
    this.meshes.push(cube);
  };

  update = () => {
    requestAnimationFrame(this.update);
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  };
}
