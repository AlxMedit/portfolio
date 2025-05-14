import React from 'react';
import { FaReact, FaNode, FaPhp, FaGithub, FaPlay } from 'react-icons/fa'; // Agrega FaPlay
import { SiAstro, SiTailwindcss } from 'react-icons/si';
import './global.css';

export default function Card({ title, description, stacks, demoLink, repoLink, image }) {
    return (
        <div className="pokemon-card">
            <div className="card-header">
                <div className="card-title">{title}</div>
                <div className="card-stacks">
                    {stacks.includes('React') && <FaReact />}
                    {stacks.includes('Node.js') && <FaNode />}
                    {stacks.includes('PHP') && <FaPhp />}
                    {stacks.includes('Tailwind') && <SiTailwindcss />}
                    {stacks.includes('Astro') && <SiAstro />}
                </div>
            </div>

            <div className="card-body">
                <div className="card-image">
                    <img src={image} alt={title} />
                </div>

                <div className="card-description">
                    <h3>Descripción</h3>
                    <p>{description}</p>
                </div>

                <div className="card-demo">
                    <a href={demoLink} target="_blank" rel="noopener noreferrer" className="demo-link">
                        <FaPlay /> Demo
                    </a>
                    <a href={repoLink} target="_blank" rel="noopener noreferrer" className="repo-link">
                        <FaGithub /> Código
                    </a>
                </div>
            </div>
        </div>
    );
}
