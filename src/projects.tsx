
import { useState } from 'react';

const Projects = () => {
    const projectList = [
        { id: 1, name: "Project 1", description: "This is the first project." },
        { id: 2, name: "Project 2", description: "This is the second project." },
        { id: 3, name: "Project 3", description: "This is the third project." },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-6">My Projects</h1>
            <ul className="space-y-4">
                {projectList.map((project) => (
                    <li key={project.id} className="p-4 border rounded shadow">
                        <h2 className="text-xl font-semibold">{project.name}</h2>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;