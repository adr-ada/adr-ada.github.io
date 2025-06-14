import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Projects = () => {
    const projectList = [
        { id: 1, name: "Spotify Insights", description: "Designed and built an interactive web application to summarize users' Spotify data, providing personalized insight into their listening habits. Integrated the Spotify API to fetch real-time data. Built a mini player to enhance user engagement." },
        { id: 2, name: "PriceHunt", description: "Worked in a group of 5 to develop a full-stack android application, enabling users to save and compare prices of various items. Designed a user-friendly interface. Implemented a hybrid backend using Java and Kotlin. Incorporated Agile practices to promote iterative and incremental development." },
        { id: 3, name: "Emergency Dashboard", description: "Build a Reach-based web application to simluate an emergency communication system, with a focus on frontend development. Collaborated with a group of 5 members, using GIT for version control and conducting code reviews to maintain high-quality development standards. Utilized the DOM for efficient local data management. Deployed the application using Vercel. " },
        { id: 4, name: "MadJack", description: "Collaborated in a group of 4 to create a black jack web game for Mountain Madness 2025 hackathon. Handled game implementation with JavaScript. Adopted Extreme Programming practices for rapid and efficient development. " },
        { id: 5, name: "DestroyerX", description: "Led a team of 4 novice developers to design a 2-D space-themed game in Unity for FallHacks 2024 hackathon. Mentored the group in Unity and Git. Managed version control using GitHub to ensure continous collaboration" },
    ];

    // https://github.com/wesbos/hot-tips/tree/main/remix-ticket
    // https://github.com/simeydotme/pokemon-cards-css
    return (
        <div className="flex flex-col">
            <h1 className="text-3xl font-bold py-10">My Projects</h1>
            <div className="px-20 flex justify-center flex-wrap gap-6">
                {projectList.map((project) => (
                    <Card className="min-w-min md:w-1/4 min-h-72 h-fit" key={project.id}>
                        <CardHeader><CardTitle className="text-3xl font-bold">{project.name}</CardTitle></CardHeader>
                        <CardDescription></CardDescription>
                        <CardContent>{project.description}</CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Projects;