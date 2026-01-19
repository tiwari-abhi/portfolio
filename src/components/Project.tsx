import React from "react";
import matillionlogo from '../assets/images/matillion_logo.png';
import awslogo from '../assets/images/aws_logo.png';
import azurelogo from '../assets/images/azure_logo.png';
import mcplogo from '../assets/images/mcp_logo.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>PERSONAL PROJECTS:</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://pypi.org/project/pymatillion/" target="_blank" rel="noreferrer">
                <img src={matillionlogo} className="zoom" alt="thumbnail" width="50%" style={{ backgroundColor: '#f8f9fa', padding: '10px' }}/>
                </a>
                <a href="https://pypi.org/project/pymatillion/" target="_blank" rel="noreferrer"><h2>Open Source Python Library</h2></a>
                <ul>
                    <li>Published open-source Python library to interface with Matillion REST API</li>
                    <li>Implemented unit tests in PyTest to validate API responses & code coverage</li>
                    <li>Configured CI/CD processes to release, run tests and publish documentation</li>
                </ul>
            </div>
            <div className="project">
                <a href="https://github.com/tiwari-abhi/MCPServerExample" target="_blank" rel="noreferrer">
                <img src={mcplogo} className="zoom" alt="thumbnail" width="50%" style={{ backgroundColor: '#f8f9fa', padding: '10px' }}/>
                </a>
                <a href="https://github.com/tiwari-abhi/MCPServerExample" target="_blank" rel="noreferrer"><h2>LLM Enrichment with MCP</h2></a>
                <ul>
                    <li>Architected multi-modal MCP server to retrieve image or random world fact</li>
                    <li>Created MCP to elicit user response to select from 60+ languages & offer fact</li>
                    <li>Fetched high-quality image for user specified city & offered alternatives</li>
                    <li>Built in observability & error handling mechanisms while also reporting progress</li>
                </ul>
            </div>
            <div className="project">
                <img src={awslogo} className="zoom" alt="thumbnail" width="50%" style={{ backgroundColor: '#f8f9fa', padding: '10px', filter: 'grayscale(100%)' }}/>
                <h2>Event Driven Data Pipeline</h2>
                <ul>
                    <li>Designed event-driven AWS pipeline to load and transform raw sales data</li>
                    <li>Configured event monitor on bucket to notify EventBridge for new data</li>
                    <li>Built AWS Lambda functions to process events & trigger warehouse build</li>
                    <li>Loaded fact and dimensions for monthly sales & inventory reporting</li>
                </ul>
            </div>
            <div className="project">
                <img src={azurelogo} className="zoom" alt="thumbnail" width="50%" style={{ backgroundColor: '#f8f9fa', padding: '10px', filter: 'grayscale(100%)' }}/>
                <h2>Serverless Price Prediction Pipeline in Azure</h2>
                <ul>
                    <li>Scraped Airbnb rental prices in NYC & orchestrated code using Cloud Functions</li>
                    <li>Ingested raw files in Blob Storage to populate and query Databricks Metastore</li>
                    <li>Transformed and selected features in PySpark jobs and saved parquetted data</li>
                    <li>Visualized parquetted geo-spatial data on an interactive dashboard in PowerBI</li>
                </ul>
            </div>
        </div>
    </div>
    );
}

export default Project;