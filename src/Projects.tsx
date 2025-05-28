
import { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
const Projects = () => {
    const projectList = [
        { id: 1, name: "Project 1", description: "This is the first project." },
        { id: 2, name: "Project 2", description: "This is the second project." },
        { id: 3, name: "Project 3", description: "This is the third project." },
    ];

    return (
        // <div className="top-0 flex flex-col items-center justify-center min-h-screen">
        //     <h1 className="text-3xl font-bold mb-6">My Projects</h1>
        //     <ul className="space-y-4">
        //         {projectList.map((project) => (
        //             <li key={project.id} className="p-4 border rounded shadow">
        //                 <h2 className="text-xl font-semibold">{project.name}</h2>
        //                 <p>{project.description}</p>
        //             </li>
        //         ))}
        //     </ul>
        // </div>
        <div className="flex flex-col">
            <h1 className="text-3xl font-bold">My Projects</h1>
            <div className="px-20">
                <Card className="w-80">
                    <CardHeader className="text-3xl font-bold">Project 1</CardHeader>
                    <CardDescription>Project 1 description</CardDescription>
                    <CardContent>the content</CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Projects;