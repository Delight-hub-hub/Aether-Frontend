import React from 'react';

const ProjectCard = ({ project }) => {
  const { title, description, image, link, tech } = project;
  return (
    <a href={link || '#'} target="_blank" rel="noreferrer" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
      <div style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 8px 24px rgba(11,22,40,0.08)', background: 'white' }}>
        <div style={{ height: 140, background: image ? `url(${image}) center/cover no-repeat` : '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {!image && <div style={{ fontSize: 40 }}>📁</div>}
        </div>
        <div style={{ padding: 14 }}>
          <h3 style={{ margin: 0, fontSize: 18 }}>{title}</h3>
          <p style={{ marginTop: 8, marginBottom: 8, color: '#4b5563' }}>{description}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <small style={{ color: '#6b7280' }}>{tech}</small>
            <div style={{ color: '#0b2545', fontWeight: 600 }}>View</div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default function ProjectsSection({ projects }) {
  const defaultProjects = Array.from({ length: 6 }).map((_, i) => ({
    title: `Client Project ${i + 1}`,
    description: 'Delivered software solution for an active business workflow.',
    image: '',
    link: '#',
    tech: 'React • Vite'
  }));

  const list = projects && projects.length ? projects : defaultProjects;

  return (
    <section id="ongoing-projects" style={{ padding: '48px 20px', background: 'linear-gradient(180deg,#f8fafc,transparent)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <h2 style={{ fontSize: 28, marginBottom: 8 }}>Ongoing Projects</h2>
        <p style={{ color: '#6b7280', marginBottom: 20 }}>Recent client projects and active internal platform work.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 18 }}>
          {list.map((p, idx) => (
            <ProjectCard key={idx} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
