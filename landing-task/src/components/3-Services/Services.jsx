import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faPaintBrush, faComments } from "@fortawesome/free-solid-svg-icons";
import "../../Styles/Services.css";

const services = [
  {
    icon: faLaptopCode,
    title: "Web Development",
    desc: "Modern and fast web apps.",
  },
  {
    icon: faPaintBrush,
    title: "UI/UX Design",
    desc: "Clean and user-friendly interfaces.",
    class:'active',
  },
  {
    icon: faComments,
    title: "Consulting",
    desc: "Technical guidance and solutions.",
  },
];

export default function Services() {
  return (
    <section className="services-section fade-up" id="services">
      <h2 className="text">Services</h2>
      <div className="services-grid">
        {services.map((s) => (
          <div key={s.title} className={`service-card ${s.class}`}>
            <div className="service-icon">
              <FontAwesomeIcon icon={s.icon} size="2x" />
            </div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
