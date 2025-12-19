import "../../Styles/Projects.css";

const projects = [
  {
    title: "Project One",
    desc: "A modern web application built with React and Vite.",
    image: "../img/pro1.jfif", 
  },
  {
    title: "Project Two",
    desc: "UI/UX design for a tech startup landing page.",
    image: "../img/pro2.jfif", 
  },
  {
    title: "Project Three",
    desc: "Consulting platform for businesses with analytics dashboard.",
    image: "../img/pro3.jfif", 
  },
  {
    title: "Project Four",
    desc: "Mobile responsive e-commerce website with payment gateway.",
  image: "../img/pro4.png", 
  },
];

export default function Projects() {
  return (
    <section className="projects-section fade-up" id="projects services">
      <h2 className="text">Our Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.title} className="project-card">
            <img src={p.image} alt={p.title} loading="lazy"/>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
