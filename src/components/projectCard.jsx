import React from 'react';
import '../styles/card/projectCard.css'; // Asegúrate de tener estilos adecuados para la tarjeta
// Importa un ícono de tecnología (ej. un cohete para lanzamiento)
import { RocketLaunch } from 'lucide-react'; 

function ProjectCard({ title, description, technologies, link }) {
    return (
        <div className="project-card">
            <div className="card-icon-header">
                {/* Ícono representativo de tecnología */}
                <RocketLaunch size={32} color="#10b981" /> 
                <h3>{title}</h3>
            </div>
            
            <p className="description">{description}</p>

            <div className="tech-stack">
                {technologies.map((tech, index) => (
                    // Muestra cada tecnología como un 'tag'
                    <span key={index} className="tech-tag">{tech}</span>
                ))}
            </div>

            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                Ver Proyecto →
            </a>
        </div>
    );
}

export default ProjectCard;