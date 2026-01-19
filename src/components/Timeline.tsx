import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>CAREER HISTORY:</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - Present"
            iconStyle={{ background: '#6001ef', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">CVS Caremark</h3>
            <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
            <h4 className="vertical-timeline-element-subtitle">Senior Data Engineer</h4>
            <p>
              <ul>
                <li>Ingested and consumed PII and PHI data in GCP Composer to develop reporting applications for stakeholders.</li>
                <li>Optimized BigQuery semantic layer for scanning through 1 billion rows to efficiently retrieve data with 15s latency.</li>
                <li>Lead development and optimization of Tableau dashboards to derive new metrics, rapid insights and business value </li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2024"
            iconStyle={{ background: '#6001ef', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">DataKitchen</h3>
            <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
            <h4 className="vertical-timeline-element-subtitle">Senior Data Engineer</h4>
            <p>
              <ul>
                <li>Partnered in requirements gathering with stakeholders of varying tech expertise and formulated implementation plans</li>
                <li>Lead Agile project implementation efforts across enterprise teams to deliver value and drive adoption of DataKitchen</li>
                <li>Developed automated data pipelines to extract, transform and load raw data to store it in cloud data warehouses</li>
                <li>Automated data testing and monitoring of data pipelines using technologies like Python, SQL and Kubernetes</li>
                <li>Orchestrated existing analytic assets via Docker and API’s, by leveraging cloud services like AWS, GCP and Azure</li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: '#6001ef', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">TripAdvisor</h3>
            <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
            <h4 className="vertical-timeline-element-subtitle">Data Infrastructure Analyst</h4>
            <p>
              <ul>
                <li>Documented tracking events related to user behavior for Flights, Cars and Cruise pages on the TripAdvisor website</li>
                <li>Collaborated with business users to identify KPIs and documented specs for teams to implement new tracking events</li>
                <li>Designed and scheduled workflows in Presto to transform raw clickstream data for cached Flight fare analysis</li>
                <li>Automated monthly reports to quantify total number of paid and unpaid clicks that support partner invoicing</li>
                <li>Spearheaded development and maintenance of “Ready-To-Use” tables to support power users and ad-hoc analysis</li>
              </ul>
            </p>          
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2020"
            iconStyle={{ background: '#6001ef', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Athena IT Solutions</h3>
            <h4 className="vertical-timeline-element-subtitle">Maynard, MA</h4>
            <h4 className="vertical-timeline-element-subtitle">Business Intelligence Analyst</h4>
            <p>
              <ul>
                <li>Collaborated on Change Data Capture for over 600 tables across 7 lines of business, for malpractice insurance data</li>
                <li>Streamlined capture of Type-2 SCD by designing templates to reduce development time by approx. 90 percent</li>
                <li>Staged raw data from Salesforce to MS SQL Server and pushed transformed and conformed data back into SFDC</li>
                <li>Automated orchestration and scheduling of several Talend jobs in Talend Server while also enabling CI/CD</li>
                <li>Visualized critical KPIs to inform cross selling of insurance products to prospective and existing customers</li>
              </ul>
            </p>          
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;