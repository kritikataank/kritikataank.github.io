import React from 'react';
import { PROFILE } from '../data/profile';

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

        <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-[#494e52]">
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

      {/* Education Section - Vertical Line Timeline format matching Experience */}
      <section>
        <h2 className="academic-heading">Education</h2>
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#e1e4e8] ml-2 sm:ml-3 space-y-6 my-4">
          {PROFILE.educationList.map((edu, idx) => (
            <div key={idx} className="relative text-sm">
              {/* Timeline Node Dot matching Experience page (empty circle with ring) */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 bg-white border-2 border-[#121417] rounded-full ring-4 ring-white" />

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                <h3 className="font-bold text-base text-[#121417] leading-snug">
                  {edu.degree}
                </h3>
                <span className="font-mono text-xs text-[#586069] shrink-0 mt-0.5 sm:mt-0">
                  {edu.period}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#494e52] mb-1.5">
                <span className="font-medium text-[#121417]">{edu.institution}</span>
                <span className="text-[#9ca3af]">·</span>
                <span className="text-[#586069]">{edu.location}</span>
                <span className="text-[#9ca3af]">·</span>
                <span className="font-bold text-[#121417] px-2 py-0.5 bg-[#f6f8fa] border border-[#e1e4e8] rounded-xs text-xs">
                  {edu.grade}
                </span>
              </div>

              {edu.details && edu.details.length > 0 && (
                <ul className="list-disc pl-5 mt-2 space-y-1 text-xs sm:text-sm text-[#586069]">
                  {edu.details.map((detail, dIdx) => (
                    <li key={dIdx} className="leading-relaxed">
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
