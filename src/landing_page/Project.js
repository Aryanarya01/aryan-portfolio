 

//                   with aos

import React, { useEffect } from "react";
import AOS from "aos";

function Project() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);
  const ProjectCard = ({ project, delay }) => {
  return (
    <div className="col" data-aos="fade-up" data-aos-delay={delay}>
      <div
        className="card"
        style={{
          width: "100%",
          maxWidth:"22rem",
          height: "33rem",
          marginTop: "3rem",
          backgroundColor: "#111827",
          border: "1px solid #1F2937",
          borderRadius: "15px",
        }}
      >
        <div className="card-body">
          <img
            src={project.image}
            className="card-img-top mb-3"
            alt=""
            style={{ height: "40%", width: "100%" }}
          />

          <h5 style={{ fontWeight: "800", color: "#fff" }}>
            {project.title}
          </h5>

          <p style={{ color: "#9CA3AF" }}>{project.desc}</p>

          <div className="my-3">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="py-1 px-3 rounded-pill"
                style={{
                  fontWeight: "700",
                  fontSize: "12px",
                  color: "#9CA3AF",
                  backgroundColor: "#1f2937",
                  marginRight: "6px",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            style={{ textDecoration: "none", color: "#FBBF24" }}
          >
            🚀 Live Demo →
          </a>
        </div>
      </div>
    </div>
  );
};

const projects = [
  {
  title: "SkillSphere",
  desc: "A full-stack freelance marketplace platform where clients can post jobs, freelancers can submit proposals, chat in real-time, manage portfolios, and receive live notifications.",
  image: "/media/SkillSphere.png",
  tech: ["React.js","MongoDB", "Socket.io"],
  link: "https://github.com/Aryanarya01/SkillSphere",
},
  {
    title: "ProConnect - Professional Networking Platform",
    desc: "A full-stack LinkedIn-inspired platform with user profiles, connections, post sharing, work & education sections, and resume upload/download functionality.",
    image: "/media/linkedIn.png",
    tech: ["Next.js", "Node.js", "MongoDB"],
    link: "https://linked-in-lovat.vercel.app/",
  },
  {
    title: "QuickBite – Food Ordering App",
    desc: "A full-stack food ordering platform with secure authentication, dynamic cart functionality, and real-time order management using REST APIs.",
    image: "/media/Quickbite.png",
    tech: ["React.js", "Node.js", "MongoDB"],
    link: "https://quickbite-black.vercel.app/",
  },
  {
    title: "Zerodha Clone – Trading Platform",
    desc: "A full-stack trading platform with authentication, portfolio tracking, and a separate dashboard interface.",
    image: "/media/Zerodha.png",
    tech: ["React.js", "Node.js", "MongoDB"],
    link: "https://github.com/Aryanarya01/Zerodha",
  },
  {
    title: "Rental Booking App",
    desc: "A full-stack vacation rental platform to browse, list, and book stays. Built using MVC architecture with Node.js, Express, and MongoDB.",
    image: "/media/wonder.png",
    tech: ["Node.js", "Express.js", "MongoDB"],
    link: "https://github.com/Aryanarya01/Wanderlust-Project",
  },
  {
    title: "Portfolio Website",
    desc: "A portfolio website with smooth UI and interactive sections.",
    image: "/media/port.png",
    tech: ["React", "JavaScript", "Bootstrap"],
    link: "#",
  },
   {
    title: "Auth Notes App",
    desc: "A secure notes application with user authentication, allowing users to create, manage, and store personal notes safely.",
    image: "/media/Auth.png",
    tech: ["React.js", "Node.js", "JWT"],
    link: "https://github.com/Aryanarya01/Auth-notes-app",
  },
  
  
];

  return (
    <div
      id="Project"
      className="container"
      style={{ minHeight: "100vh", scrollMarginTop: "80px" }}
    >
      <div className="row">
        <h2
          className="text-center mb-10"
          style={{ fontWeight: "800", fontSize: "2.5rem" }}
          data-aos="fade-up"
        >
          Featured Projects
        </h2>
 
   
  {projects.map((project, index) => (
    <div key={index} className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
      <ProjectCard project={project} delay={index * 300} />
    </div>
  ))}
</div>
         
      </div>
     
  );
}

export default Project;
