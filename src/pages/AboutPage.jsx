import profilePic from "../assets/profile.jpeg";

export default function About() {
    return (
        <>
        
        <div>
            <h1>About Ben</h1>
        </div>
        <div style={{display:"flex"}}>
            <div style={{width:"50%"}}>
                <p>
                    I am a full-stack web developer with a passion for creating beautiful, user-friendly applications. I have experience with HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I am also a FAA licensed drone pilot that has years of experience as a geospatial analyst in Agricultural Analysis.
                    <br />
                    <br />
                    <br />
                    I'm also an avid waterfowl hunter and duck call maker. I have a passion for the outdoors and enjoys spending time with his family and friends when I'm not typing away in of VS Code.
                </p>
            </div>
            <div>
                <img style={{width:"80%", marginLeft: "80px"}} src={profilePic} alt="Ben in his natural element"/>
            </div>
        </div>
        </>
    );
}