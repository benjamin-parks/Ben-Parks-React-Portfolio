import Projects from "../components/Projects";

export default function Home() {
    return (
    <>
        <div>
            <h1>Welcome!</h1>
            <p>My name is Ben, and I'm a web development student! Below are some of the projects that I've worked on within the last 6 months (newest first) that I am proud enough to share.</p>
        </div>
        <div>
            <Projects/>
        </div>
    </>
    );
}