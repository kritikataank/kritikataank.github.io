import React from 'react';
import { PROFILE, TECHNICAL_SKILLS } from '../data/profile';
import { RESEARCH_THEMES } from '../data/researchThemes';

interface AboutPageProps {
  onNavigateTab: (tab: any) => void;
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <div className="space-y-6 text-[#2e343b]">
      {/* Biography */}
      <section>
        <p className="text-[15px] leading-relaxed text-[#2e343b]">
          I am an <strong className="text-[#121417]">Associate Software Engineer</strong> at <strong className="text-[#121417]">Nokia Solutions and Networks</strong>. I completed my Bachelor of Engineering in Computer Science and Engineering from <strong className="text-[#121417]">Sri Venkateshwara College of Engineering</strong> (VTU) with a CGPA of <strong className="text-[#121417]">9.27/10</strong>.
        </p>

        <p className="text-[15px] leading-relaxed text-[#2e343b] mt-3">
          At Nokia, I develop transport-layer protocols and critical functionality for carrier-grade network infrastructure, while also engineering internal <strong className="text-[#121417]">fault-resolution AI agents</strong> and <strong className="text-[#121417]">Transport AI/ML frameworks</strong> for telemetry data ingestion and low-latency inference serving.
        </p>

        <p className="text-[15px] leading-relaxed text-[#2e343b] mt-3">
          I am an aspiring machine learning researcher preparing for graduate research. My academic research interests center on developing trustworthy, interpretable, and mathematically grounded machine learning systems — specifically within:
        </p>

        <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-[#4b5563]">
          <li>
            <strong className="text-[#121417]">Explainable AI (XAI) & Trustworthy AI:</strong> Faithfulness and local attribution fidelity in deep models (e.g., LIME, InceptionV3).
          </li>
          <li>
            <strong className="text-[#121417]">Deep Reinforcement Learning:</strong> Autonomous decision making, DQN/Double DQN algorithms, and adaptive pathfinding in continuous/3D obstacle spaces.
          </li>
          <li>
            <strong className="text-[#121417]">Causal Machine Learning & Probabilistic Models:</strong> Moving beyond empirical risk minimization to invariant representations under distribution shift.
          </li>
          <li>
            <strong className="text-[#121417]">NLP & Agentic Systems:</strong> Transformer fine-tuning, Model Context Protocol (MCP), and human-in-the-loop agentic architectures.
          </li>
        </ul>
      </section>

      {/* Research Interests in About page */}
      <section>
        <h2 className="academic-heading">Research Interests</h2>
        <div className="space-y-3">
          {RESEARCH_THEMES.map((theme) => (
            <div key={theme.id} className="text-sm">
              <h4 className="font-bold text-[#121417] mb-0.5">
                {theme.title}
              </h4>
              <p className="text-[#4b5563] leading-relaxed text-xs sm:text-sm">
                {theme.shortDescription}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills */}
      <section>
        <h2 className="academic-heading">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          {TECHNICAL_SKILLS.map((grp) => (
            <div key={grp.category} className="p-2.5 bg-[#f9fafb] border border-[#e5e7eb] rounded-xs">
              <h4 className="font-bold text-xs uppercase text-[#121417] mb-1">
                {grp.category}
              </h4>
              <p className="text-xs text-[#4b5563] leading-normal font-sans">
                {grp.skills.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
