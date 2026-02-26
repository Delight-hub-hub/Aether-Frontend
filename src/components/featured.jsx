import React from "react";
import brick from "../assets/brick.png";
import quiz from "../assets/quiz.png";
import diamond from "../assets/diamond.jpg";



const featuredProjects = [
  {
    title: "SaaS Analytics Dashboard",
    description: "A secure, multi-tenant analytics dashboard for product teams with role-based access and real-time metrics.",
    image: brick,
    link: "#",
    tech: "React • Node • PostgreSQL"
  },
  {
    title: "E‑commerce Platform",
    description: "Custom commerce platform with payment integrations, order management, and conversion optimizations.",
    image: quiz,
    link: "#",
    tech: "Next.js • Stripe • MySQL"
  },
  {
    title: "Mobile Backend & APIs",
    description: "Scalable backend and API gateway supporting mobile apps and third-party integrations for high throughput.",
    image: diamond,
    link: "#",
    tech: "Node • Docker • Kubernetes"
  }
];

const ProjectCard = ({ project }) => {
  const { title, description, image, link, tech, onClick } = project;

  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  const isExternal = link && link.startsWith("http");

  return (
    <a href={link || '#'} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noreferrer' : undefined} onClick={handleClick} style={{ display: 'block', textDecoration: 'none', color: 'inherit', height: '100%' }}>
      <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 8px 24px rgba(11,22,40,0.08)', background: 'white', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ height: 140, background: image ? `url(${image}) center/cover no-repeat` : '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {!image && <div style={{ fontSize: 40 }}>📁</div>}
        </div>
        <div style={{ padding: 14, display: 'flex', flexDirection: 'column', flex: 1 }}>
          <h3 style={{ margin: 0, fontSize: 18 }}>{title}</h3>
          <p style={{ marginTop: 8, marginBottom: 8, color: '#4b5563', flex: 1 }}>{description}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
            <small style={{ color: '#6b7280' }}>{tech}</small>
            <div style={{ color: '#0b2545', fontWeight: 600 }}>View</div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default function Featured() {
  return (
    <section id="recent-projects" style={{ padding: '48px 20px', background: 'linear-gradient(180deg,#f8fafc,transparent)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontSize: 28, marginBottom: 8 }}>Recent Projects</h2>
        <p style={{ color: '#6b7280', marginBottom: 20 }}>A selection of recent work — click any card to view details.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 18, alignItems: 'stretch', gridAutoRows: '1fr' }}>
          {featuredProjects.map((p, idx) => (
            <ProjectCard key={idx} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
