import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Projects = () => {
    const projectList = [
        { id: 1, name: "Spotify Insights", description: "This is the first project." },
        { id: 2, name: "PriceHunt", description: "This is the second project." },
        { id: 3, name: "Emergency Dashboard", description: "This is the third project." },
        { id: 4, name: "MadJack", description: "This is the fourth project." },
        { id: 5, name: "DestroyerX", description: "This is the fifth project." },
    ];

    // https://github.com/wesbos/hot-tips/tree/main/remix-ticket
    // https://github.com/simeydotme/pokemon-cards-css
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
            <h1 className="text-3xl font-bold py-10">My Projects</h1>
            <div className="px-20 flex justify-center flex-wrap gap-6">
                {projectList.map((project) => (
                    <Card className="w-1/4 h-40" key={project.id}>
                        <CardHeader><CardTitle className="text-3xl font-bold">{project.name}</CardTitle></CardHeader>
                        <CardDescription></CardDescription>
                        <CardContent>{project.description}</CardContent>
                    </Card>
                ))}
                {/* <Card className="w-80">
                    <CardHeader className="text-3xl font-bold">Project 1</CardHeader>
                    <CardDescription>Project 1 description</CardDescription>
                    <CardContent>the content</CardContent>
                </Card> */}
            </div>
        </div>
    );
};

export default Projects;