import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faOpenai } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCog, faLineChart, faCodeMerge, faFan, faRobot } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faEye } from "@fortawesome/free-regular-svg-icons";

const labelsFirst = [
    "GCP",
    "AWS",
    "Azure",
    "Databricks",
    "Python",
    "SQL",
    "PySpark",
    "Tableau"
];

const labelsSecond = [
    "Airflow",
    "Git",
    "GitHub Actions",
    "Docker",
    "Shell",
    "ELK"
];

const labelsThird = [
    "Model Context Protocol",
    "Google AI Studio",
    "OpenAI",
    "Claude Code"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>EXPERTISE:</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <FontAwesomeIcon icon={faCog} size="3x"/>
                    <FontAwesomeIcon icon={faLineChart} size="3x"/>
                    <h3>Full Stack Data Engineering</h3>
                    <p>Architected a wide variety of end-to-end data engineering solutions covering storage, transformation and reporting, across all major cloud platforms.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faFan} size="3x"/>
                    <FontAwesomeIcon icon={faCodeMerge} size="3x"/>
                    <FontAwesomeIcon icon={faEye} size="3x"/>
                    <h3>DataOps, Automation & Observability</h3>
                    <p>Implemented DataOps & CI/CD best practices to enable automated and reliable builds while also incorporating observability frameworks for alerting.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <FontAwesomeIcon icon={faGoogle} size="3x"/>
                    <FontAwesomeIcon icon={faOpenai} size="3x"/>
                    <h3>GenAI & LLM Augmentation</h3>
                    <p>Keeping pace with latest advancements in GenAI by building custom tools and microservices to augment LLM capabilities</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;