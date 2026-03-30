import React from "react";
import TypewriterText from "./TypewriterText";

function Hero() {
  return (
    <div id="Hero" className="container py-5" style={{minHeight :"100vh", overflow: "hidden",scrollMarginTop:"80px"}}>
      <div className="row">
        <div className="col-12 col-md-10 col-lg-8 mx-auto text-center text-md-start">
          <p  data-aos="fade-in"
            data-aos-duration="800"
             className="mt-5" style={{ fontWeight: "700", fontSize: "1rem", color:"#6366f1" }}>
            Hello!
          </p>
          <h1  data-aos="fade-up"
            data-aos-duration="900"
            data-aos-delay="150" style={{ fontWeight: "700", fontSize: "clamp(2rem, 5vw, 4rem)",marginBottom: "1.5rem" }}>
            I'm <span style={{color: " #8b5cf6"}}> Aryan <br></br>
             Arya. </span>
          </h1>
           <TypewriterText/> 
          <h1 data-aos="zoom-in"
            data-aos-duration="700"
            data-aos-delay="250" className="mb-5" style={{ fontWeight: "700", fontSize: "4rem", color: " #8b5cf6" }}>
            Front-end Developer
          </h1>
          <a data-aos="fade-right"
            data-aos-duration="700"
            data-aos-delay="350"
            href="https://www.linkedin.com/in/aryan-610492330"
            className="p-3 me-3 mt-3 d-inline-block"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
              border: "2px solid #6366f1",
              borderRadius: "30px",
              backgroundColor :"#6366f1",
            }}
          >
            LINKEDIN
          </a>
          <a data-aos="fade-left"
            data-aos-duration="700"
            data-aos-delay="400"
            href="https://github.com/Aryanarya01"
            className="p-3 me-3 mt-3 d-inline-block"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
              border: "2px solid #fff",
              borderRadius: "30px",
              backgroundColor :"#030712",
            }}
          >
            GITHUB
          </a>
          
        </div>
      </div>
    </div>
  );
}

export default Hero;
