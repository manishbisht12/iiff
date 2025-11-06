import React from 'react';
import './participate.css';
import frame17 from '../assets/image 50.png'

const contentData = [
  {
    id: 1,
    title: 'Pan-India Student Participation & Innovations Exposure',
    description:
      'Over 800 students from across India will converge to explore and build entrepreneurial opportunities in the food sector, bringing academic learning with industry challenges. A unique mix of students from food science, technology, agriculture, and business backgrounds.',
  },
  {
    id: 2,
    title: 'One-Stage, All-Stakeholder Ecosystem',
    description:
      'For the first time, the entire Indian food ecosystem will converge on a single platform—bringing together entrepreneurs, incubators, policymakers, investors, agritech leaders, food processors, marketing experts, and packaging innovators. Participants will gain direct access to guidance, mentorship, and high-value partnership opportunities.',
  },
  {
    id: 3,
    title: 'Gap Analysis & Startup Readiness Learning',
    description:
      'Students will learn to identify gaps in the current food value chain, from farm to fork. Sessions are designed to provide startup launch blueprints, covering ideation, market validation, branding, regulatory compliance, and scalability.',
  },
  {
    id: 4,
    title: 'Live Problem Statements from Industry',
    description:
      'Industry leaders will share real-world challenges, enabling students to work on live case studies and propose viable business solutions—encouraging practical problem-solving and innovation.',
  },
  {
    id: 5,
    title: 'Year-Round Mentorship & Tracking Portal',
    description:
      'Launch of a dedicated digital portal post-event to provide: Continuous mentorship, Learning modules (finance, branding, compliance, sustainability), Startup registration support, Progress tracking to measure how many students turn ideas into ventures.',
  },
  {
    id: 6,
    title: 'Annual Cohort-Based Guidance & Recognition',
    description:
      'Participants will be part of a national foodpreneur cohort, with access to funding alerts, pitch contests, incubation programs, and networking opportunities. Best performing alumni to be showcased annually as IIFF Startup Success Stories.',
  },
  {
    id: 7,
    title: 'Follow-Up Action Plan with Thematic Focus',
    description:
      "The festival doesn't end in three days—monthly themes (e.g., clean label foods, food waste reduction, nutraceuticals, smart packaging, millets-based businesses) will guide year-round activities and challenges, ensuring consistent engagement and development.",
  },
  {
    id: 8,
    title: 'Government–Industry–Academia Convergence',
    description:
      'Supported by Ministry of Food Processing Industries and Ministry of Skill Development and Entrepreneurship, giving participants a rare opportunity to understand policy frameworks and government schemes.',
  },
  {
    id: 9,
    title: 'Student-to-Startup Tracking Model',
    description:
      'A long-term tracking framework will record how many students register startups, reach revenue milestones, or secure incubation/funding support.',
  },
  {
    id: 10,
    title: "A Launchpad for India's Future Foodpreneurs",
    description:
      "IIFF aims to ignite India's youth to not just seek jobs, but to become job creators in the vital and evolving food sector.",
  },
  {
    id: 11,
    title: '',
    description: 'It is not a one-time event, but the starting point of a movement.',
  },
];

const Participate = () => {
  return (
    <div className="outer">
      <div className="page">
        <div className="head-logo">
          <div className="head">Why Participate in India International Foodpreneurship Festival (IIFF)?</div>
          <div className="logo">
            <img src={frame17} alt="Theme Line" className="themes-image" />
          </div>
        </div>

        <div className="All_content">
          {contentData.map(({ id, title, description }) => (
            <div key={id} className={`content${id}`}>
              {title && (
                <h3 className="content-title">
                  <span className="content-id">{id}.</span>{' '}
                  <span className="content-heading">{title}</span>
                </h3>
              )}
              <p className="content-description">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Participate;
