import React, { useEffect, useState } from 'react';
import './Projects.css';
import { Container } from 'react-bootstrap';
import SingleProject from '../SingleProject/SingleProject';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("/projects.json")
            .then(response => response.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <>
            <Container className="my-5">
                <div className="service-h4 position-relative d-flex align-items-center justify-content-center">
                    <h1 className="display-1 text-uppercase text-white" >Project</h1>
                    <h1 className="position-absolute text-uppercase text-primary">Project Area</h1>
                </div>
                <div className="row">
                    {
                        projects.map(project => <SingleProject
                            key={project.key}
                            project={project}
                        />)
                    }
                </div>
            </Container>
        </>
    );
};

export default Projects;