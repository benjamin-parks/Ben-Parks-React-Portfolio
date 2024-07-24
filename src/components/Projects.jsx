import React from 'react';
import ProjectCard from './UI/ProjectCard';
import imageAnnotator from '../assets/image-annotator.png';
import pawsAndClaws from '../assets/paws-and-claws.png';
import pwaTextEditor from '../assets/text-editor.png';
import readme from '../assets/readme.png';

const projects = [
    {
        title: "Image Binary Annotator",
        image: imageAnnotator,
        github: "https://github.com/benjamin-parks/Image-Binary-Classifier",
        deployed: "https://image-binary-classifier.onrender.com/"
    },
    {
        title: "PWA Text Editor",
        image: pwaTextEditor,
        github: "https://github.com/benjamin-parks/Text-Editor-PWA-BParks",
        deployed: "https://text-editor-pwa-bparks.onrender.com"
    },
    {
        title: "Paws and Claws Animal Adoption",
        image: pawsAndClaws,
        github: "https://github.com/benjamin-parks/Project-2-Animal-Adoption-App",
        deployed: "https://project-2-animal-adoption-app.onrender.com"
    },
    {
        title: "README Generator",
        image: readme,
        github: "https://github.com/benjamin-parks/Automated-README-BParks",
        deployed: ""
    }
]

export default function Projects() {
    return (
      <div>
        <h1>Projects</h1>
        <div style={{display:"flex", flexWrap: "wrap", color: "gray"}}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              github={project.github}
              deployed={project.deployed}
            />
          ))}
        </div>
      </div>
    );
  }