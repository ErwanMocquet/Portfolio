import { useEffect, useState } from "react"
import ProjectItem from "../Components/projectItem";

export default function ProjectPage() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://react-api.frenchindenmark.dk/wp-json/wp/v2/posts?_embed");
            const data = await response.json();
            console.log(data);
            setProjects(data);
        }
        getData();
    }, []);

    return(
        <section className="page">
            <h1 className="titles">My projects</h1>
            <section>
                {projects.map(project => (
                    <ProjectItem key={project.id} project={project} />
                ))}
            </section>
        </section>
    )
}