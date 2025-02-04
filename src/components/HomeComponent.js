import React, { useEffect, useState, useRef, lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/home.css";
import ProjectsComponent from "./ProjectsComponent";
import ContactComponent from "./ContactComponent";
import FooterComponent from "./Footer";
const LazyLoadedComponent = lazy(() => import("./AboutComponent"));

export default function HomeComponent() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projRef = useRef(null);
  const contRef = useRef(null);
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsComponentVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "100px",
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);
  const handleHomeScroll = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScroll = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleProjScroll = () => {
    projRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleContScroll = () => {
    contRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="main-home container-fluid" ref={homeRef}>
        <div className="abt">
          <h1 className="mainName">
            Hello, I'm <span className="name">Rithvik Arelli</span>
          </h1>
          <button className="heading-cta heading-bt" onClick={handleScroll}>
            VIEW MY WORK
            <img
              width="40"
              height="35"
              src="/arrow.png"
              alt="long-arrow-down"
            />
          </button>
        </div>
      </div>

      <div className="navigation">
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <button className="nav-link item" onClick={handleHomeScroll}>
              Home
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link item" onClick={handleScroll}>
              About
            </button>
          </li>

          <li className="nav-item">
            <button className="nav-link item" onClick={handleProjScroll}>
              Projects
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link item" onClick={handleContScroll}>
              Contact
            </button>
          </li>
        </ul>
      </div>

      <div className="abt-div container-fluid" ref={aboutRef}>
        <h1 className="heading abt-heading">About</h1>
        {isComponentVisible ? (
          <Suspense fallback={<div className="emptyDiv"></div>}>
            <LazyLoadedComponent />
          </Suspense>
        ) : (
          <div className="emptyDiv"></div>
        )}
      </div>
      <div className="abt-div container-fluid" ref={projRef}>
        <ProjectsComponent></ProjectsComponent>
      </div>
      <div className="abt-div container-fluid" ref={contRef}>
        <ContactComponent></ContactComponent>
      </div>

      <div className="abt-div container-fluid">
        <FooterComponent></FooterComponent>
      </div>
    </div>
  );
}
