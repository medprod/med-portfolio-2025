
"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { GitHubCalendar } from "react-github-calendar";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('activeSection');
    if (stored) setActiveSection(stored);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem('activeSection', activeSection);
  }, [activeSection, hydrated]);

  const [flippedBuilds, setFlippedBuilds] = useState<Record<number, boolean>>({});
  const toggleBuildFlip = (i: number) =>
    setFlippedBuilds((prev) => ({ ...prev, [i]: !prev[i] }));

  const sections = {
    about: {
      title: "About Me",
      content: (
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold">hi!</h2>
          <p className="text-base sm:text-lg font-bold text-muted-foreground">
            I am an analytics engineer.
          </p>
          <div className="text-black font-semibold text-sm sm:text-base">
            I am currently exploring how AI changes the way analytics engineering gets done, using it alongside dbt and Snowflake to build faster, cleaner, end-to-end workflows. I also dabble in Looker when a viz needs to exist. Here are some random (fun?) facts about me:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>I love cows & I will own a few one day. Dream pets.</li>
              <li>The ultimate dream is to work within the intersection of media & tech!</li>
              <li>SQL is my favorite language to work with.</li>
              <li>NYC is my dream city.</li>
            </ul>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground font-semibold mt-4">
            I keep track of projects I work on {' '}
            <button
              type="button"
              onClick={() => setActiveSection('projects')}
              className="underline hover:text-amber-900"
              style={{ color: 'inherit' }}
            >
              here
            </button>. Check them out!
          </p>
          <div className="mt-6">
            <div className="text-sm sm:text-base italic text-blue-600 font-semibold mb-2">let&apos;s make data work for us!</div>
            <div className="space-y-2">
              <a
                href="mailto:medhaa.prodduturi@gmail.com?subject=Hello%20Medha&body=Hi%20Medha%2C%20..."
                className="block text-blue-600 italic text-xs sm:text-sm font-semibold hover:underline"
              >
                medhaa.prodduturi@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/medha-prodduturi/"
                className="block text-blue-600 italic text-xs sm:text-sm font-semibold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                @medha-prodduturi <span className="align-super">↗</span>
              </a>
            </div>
          </div>

        </div>
      )
    },
    projects: {
      title: "Projects",
      content: (() => {
        const projectList: { href: string; title: string; description: string; image?: string; alt?: string }[] = [
          {
            href: "https://github.com/medprod/media-analytics",
            title: "media analytics",
            description: "analyzing the shift from traditional to digital media consumption.",
            image: "/media-analytics.png",
            alt: "Media Analytics ETL Pipeline Diagram",
          },
          {
            href: "https://dataprep-app.vercel.app/",
            title: "interview prep app",
            description: "personal data interview prep app — SQL, Python, cheat sheets, and curated practice links.",
            image: "/dataprep.png",
            alt: "DataPrep App Screenshot",
          },
          {
            href: "https://github.com/medprod/cheap-flights-alert-system",
            title: "cheap flights alert system",
            description: "python-based alert system that monitors and notifies on cheap flight deals.",
            image: "/flights.png",
            alt: "Cheap Flights Alert Email Notifications",
          },
          {
            href: "https://github.com/medprod/adv.dbms",
            title: "advance dbms",
            description: "repo of implementation of advance dbms concepts",
            image: "/dbms.png",
            alt: "Advance Database Management Project Thumbnail",
          },
          {
            href: "https://github.com/medprod/affairs-etl",
            title: "affairs ETL",
            description: "an end-to-end workflow analyzing extramartial affairs.",
            image: "/affairs.png",
            alt: "Affairs ETL Project Thumbnail",
          },
          {
            href: "https://github.com/medprod/erd-agent",
            title: "erd agent",
            description: "LLM agent that generates an ERD diagram based on the database description.",
            image: "/erd-agent.png",
            alt: "ERD Agent Project Thumbnail",
          },
          {
            href: "https://github.com/medprod/data-analysis-visualization-projects",
            title: "data-viz",
            description: "on-going analysis repo to play around with datasets",
            image: "/dataviz.png",
            alt: "Data Visualization Project Thumbnail",
          },
          {
            href: "https://github.com/medprod/8-week-sql",
            title: "eight-week-sql",
            description: "8 Week SQL Challenge",
            image: "/8weeksql.png",
            alt: "8 Week SQL Challenge Project Thumbnail",
          },
          {
            href: "https://github.com/medprod/Shell-AI-Agent-Build-1",
            title: "shell ai agent",
            description: "my first ai agent. reads the file, writes in the file, and executes shell command.",
            image: "/shell.png",
            alt: "Shell AI Agent Project Thumbnail",
          },
          {
            href: "https://github.com/medprod/Aptly",
            title: "Aptly DB",
            description: "a database with SQL Server for an apartment tracking system.",
            image: "/aptly.png",
            alt: "Aptly Database Project Thumbnail",
          },
          {
            href: "https://github.com/medprod/redfin-analytics",
            title: "redfin-etl-pipeline",
            description: "ETL process using apache airflow and amazon S3 bucket",
            image: "/redfin.png",
            alt: "Redfin ETL Pipeline Project Thumbnail",
          },
          {
            href: "https://github.com/medprod/data-visualization-R",
            title: "economist-plot",
            description: "Recreating a plot from The Economist using R programming.",
            image: "/rplot.png",
            alt: "Economist Plot Project Thumbnail",
          },
          {
            href: "https://github.com/medprod/prj-data-mining",
            title: "data-mining-repo",
            description: "a repo of ml algorithms",
            image: "/ml.png",
            alt: "Data Mining Repository Thumbnail",
          },
          {
            href: "https://github.com/medprod/gcp-projects/tree/main/GCP%20PR1%20-%20Employee%20Retention%20Program",
            title: "churn-prediction-GCP",
            description: "predicting employee churn.",
            image: "/churn.png",
            alt: "Employee Churn Prediction GCP Project Thumbnail",
          },
          {
            href: "https://github.com/medprod/OpenWeather-Airflow",
            title: "openweather-etl",
            description: "used OpenWeather Map API and applied transformations for data modeling, orchestrating an ETL process with Apache Airflow",
            image: "/openweather.png",
            alt: "OpenWeather ETL Project Thumbnail",
          },
          {
            href: "https://github.com/medprod/analysis-of-a-financial-time-series",
            title: "time-series",
            description: "Implemented 3 different models - the ARMA model, ARIMA model, and the SARIMA model - to find the best time series model for stock prediction.",
            image: "/time-series.png",
            alt: "Time Series Analysis Project Thumbnail",
          },
          {
            href: "https://github.com/medprod/word-co-occurrence",
            title: "word-co-occurrences",
            description: "Determining if word co-occurrence in text files is fluke or real.",
            image: "/word-co-occur.png",
            alt: "Word Co-occurrence Project Thumbnail",
          },
        ];

        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3">personal contributions</h3>
              <div className="overflow-x-auto">
                <GitHubCalendar
                  username="medprod"
                  colorScheme="light"
                  theme={{
                    light: ["#ebebeb", "#fcd34d", "#f59e0b", "#b45309", "#78350f"],
                    dark: ["#ebebeb", "#fcd34d", "#f59e0b", "#b45309", "#78350f"],
                  }}
                  fontSize={12}
                  blockSize={11}
                  blockMargin={3}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 w-full">
            {projectList.map((p) => (
              <a
                key={p.href}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
                style={{ textDecoration: 'none' }}
              >
                <Card className="bg-white shadow-none rounded-none p-2 h-full flex flex-col">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.alt}
                      className="w-full h-28 object-cover bg-white shrink-0"
                      draggable={false}
                    />
                  ) : (
                    <div className="w-full h-28 bg-amber-100 flex items-center justify-center shrink-0">
                      <span className="text-amber-900 text-xs font-bold uppercase tracking-wide">{p.title}</span>
                    </div>
                  )}
                  <div className="p-2 pb-1 flex flex-col flex-1">
                    <div className="text-base sm:text-lg font-extrabold flex items-center gap-2 text-amber-900">
                      {p.title} <span className="text-sm sm:text-base">↗</span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 mb-0">{p.description}</div>
                  </div>
                </Card>
              </a>
            ))}
            </div>
          </div>
        );
      })()
    },
    inflight: {
      title: "In-flight",
      content: (
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold">the current stack</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">Python</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">SQL</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">MySQL</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">SQL Server</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">PostgreSQL</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">Oracle</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">Snowflake</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">dbt</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">LookML</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">BigQuery</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">Prefect</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">Airflow</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">Looker</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">Tableau</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">Lucidchart</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">Git</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">VS Code</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">Azure DevOps</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">Asana</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">Jira</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">Claude</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">Perplexity</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">GitHub Copilot</span>
          </div>
          <div className="mt-8">
            <h3 className="text-base sm:text-lg font-bold mb-3">work contributions</h3>
            <div className="overflow-x-auto">
              <GitHubCalendar
                username="medohs"
                colorScheme="light"
                theme={{
                  light: ["#ebebeb", "#fcd34d", "#f59e0b", "#b45309", "#78350f"],
                  dark: ["#ebebeb", "#fcd34d", "#f59e0b", "#b45309", "#78350f"],
                }}
                fontSize={12}
                blockSize={11}
                blockMargin={3}
              />
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-base sm:text-lg font-bold mb-4">what i&apos;m building right now</h3>
            <p className="text-xs text-muted-foreground mb-4 italic">click a card to see what i learned</p>
            <div className="space-y-4">
              {[
                {
                  title: "pairing with ai",
                  body: "been wiring up MCP servers into claude code so the agent i work with has context from the tools i live in every day. built custom skills and end-to-end workflows for the repetitive parts of my work, so i can spend more time on the questions that actually need a person.",
                  impact: "dev cycle on dbt work down ~85%.",
                  learned: "context is more than half the work. the model is the easy part.",
                  visual: (
                    <svg viewBox="0 0 240 50" className="w-full h-14" xmlns="http://www.w3.org/2000/svg">
                      <rect x="4" y="13" width="38" height="24" rx="3" fill="#fef3c7" stroke="#92400e" strokeWidth="1.5"/>
                      <text x="23" y="29" textAnchor="middle" fontSize="11" fill="#92400e" fontWeight="700">me</text>
                      <path d="M42 25 L72 25" stroke="#92400e" strokeWidth="1.5"/>
                      <path d="M68 21 L74 25 L68 29" fill="none" stroke="#92400e" strokeWidth="1.5"/>
                      <rect x="76" y="13" width="46" height="24" rx="3" fill="#fcd34d" stroke="#92400e" strokeWidth="1.5"/>
                      <text x="99" y="29" textAnchor="middle" fontSize="11" fill="#92400e" fontWeight="700">agent</text>
                      <path d="M122 20 L154 20" stroke="#92400e" strokeWidth="1.5"/>
                      <path d="M150 17 L156 20 L150 23" fill="none" stroke="#92400e" strokeWidth="1.5"/>
                      <path d="M154 30 L122 30" stroke="#92400e" strokeWidth="1.5"/>
                      <path d="M126 27 L120 30 L126 33" fill="none" stroke="#92400e" strokeWidth="1.5"/>
                      <rect x="158" y="13" width="78" height="24" rx="3" fill="#fef3c7" stroke="#92400e" strokeWidth="1.5"/>
                      <text x="197" y="29" textAnchor="middle" fontSize="11" fill="#92400e" fontWeight="700">mcp servers</text>
                    </svg>
                  ),
                },
                {
                  title: "single source of truth",
                  body: "inherited a world where finance, mkt, and ops were each reporting on slightly different versions of \"the truth.\" spent months stitching everything into one semantic layer in dbt + looker + snowflake so users can finally argue about strategy instead of arguing about numbers.",
                  impact: "~100 business users on one governed semantic layer.",
                  learned: "governance isn't really a data problem. it's a people one, with a data layer underneath.",
                  visual: (
                    <svg viewBox="0 0 240 50" className="w-full h-14" xmlns="http://www.w3.org/2000/svg">
                      {["finance", "marketing", "retention", "ops"].map((label, idx) => {
                        const y = 1 + idx * 11;
                        return (
                          <g key={label}>
                            <rect x="6" y={y} width="68" height="10" rx="2" fill="#fef3c7" stroke="#92400e" strokeWidth="1"/>
                            <text x="40" y={y + 7.5} textAnchor="middle" fontSize="8" fill="#92400e" fontWeight="600">{label}</text>
                            <path d={`M74 ${y + 5} Q 120 ${y + 5} 158 25`} stroke="#92400e" strokeWidth="1" fill="none"/>
                          </g>
                        );
                      })}
                      <rect x="158" y="13" width="78" height="24" rx="3" fill="#fcd34d" stroke="#92400e" strokeWidth="1.5"/>
                      <text x="197" y="29" textAnchor="middle" fontSize="11" fill="#92400e" fontWeight="700">one truth</text>
                    </svg>
                  ),
                },
                {
                  title: "killing the excel ritual",
                  body: "replaced a manual excel-based marketing scorecard review with a real ELT pipeline orchestrated by prefect. swapped human pass/fail judgment for clear automated checks anyone can read.",
                  impact: "QA time per campaign cut 90%, automating workload equivalent to 5 analysts.",
                  learned: "automation works when non-technical stakeholders still feel in control of the outcome.",
                  visual: (
                    <svg viewBox="0 0 240 50" className="w-full h-14" xmlns="http://www.w3.org/2000/svg">
                      <rect x="6" y="10" width="46" height="32" fill="#fef3c7" stroke="#92400e" strokeWidth="1.5"/>
                      <line x1="20" y1="10" x2="20" y2="42" stroke="#92400e" strokeWidth="0.8"/>
                      <line x1="36" y1="10" x2="36" y2="42" stroke="#92400e" strokeWidth="0.8"/>
                      <line x1="6" y1="20" x2="52" y2="20" stroke="#92400e" strokeWidth="0.8"/>
                      <line x1="6" y1="32" x2="52" y2="32" stroke="#92400e" strokeWidth="0.8"/>
                      <path d="M11 16 L46 36" stroke="#dc2626" strokeWidth="2.5"/>
                      <path d="M46 16 L11 36" stroke="#dc2626" strokeWidth="2.5"/>
                      <path d="M56 26 L86 26" stroke="#92400e" strokeWidth="1.5"/>
                      <path d="M82 23 L88 26 L82 29" fill="none" stroke="#92400e" strokeWidth="1.5"/>
                      <rect x="90" y="16" width="48" height="20" rx="2" fill="#fcd34d" stroke="#92400e" strokeWidth="1.5"/>
                      <text x="114" y="29" textAnchor="middle" fontSize="10" fill="#92400e" fontWeight="600">extract</text>
                      <line x1="138" y1="26" x2="144" y2="26" stroke="#92400e" strokeWidth="1"/>
                      <rect x="144" y="16" width="60" height="20" rx="2" fill="#fcd34d" stroke="#92400e" strokeWidth="1.5"/>
                      <text x="174" y="29" textAnchor="middle" fontSize="10" fill="#92400e" fontWeight="600">transform</text>
                      <line x1="204" y1="26" x2="208" y2="26" stroke="#92400e" strokeWidth="1"/>
                      <rect x="208" y="16" width="28" height="20" rx="2" fill="#fcd34d" stroke="#92400e" strokeWidth="1.5"/>
                      <text x="222" y="29" textAnchor="middle" fontSize="10" fill="#92400e" fontWeight="600">load</text>
                    </svg>
                  ),
                },
                {
                  title: "catching pipelines before they break",
                  body: "built monitoring on top of our snowflake + dbt models because i was tired of finding out about broken pipelines from the BI team. now alerts fire before anyone has to ask.",
                  impact: "100+ snowflake/dbt models monitored, undetected pipeline delays down ~75%.",
                  learned: "stakeholders trust the data layer when it tells them something is wrong, not when it pretends nothing ever is.",
                  visual: (
                    <svg viewBox="0 0 240 50" className="w-full h-14" xmlns="http://www.w3.org/2000/svg">
                      <line x1="14" y1="36" x2="226" y2="36" stroke="#92400e" strokeWidth="1.5"/>
                      {[30, 75, 120, 165, 210].map((cx, idx) => (
                        <circle key={idx} cx={cx} cy="36" r="6" fill={idx === 2 ? "#dc2626" : "#fcd34d"} stroke="#92400e" strokeWidth="1.5"/>
                      ))}
                      <g transform="translate(110, 6)">
                        <line x1="10" y1="0" x2="10" y2="3" stroke="#92400e" strokeWidth="1.5"/>
                        <path d="M3 14 L17 14 L15 7 Q 15 3 10 3 Q 5 3 5 7 Z" fill="#fcd34d" stroke="#92400e" strokeWidth="1.5"/>
                        <circle cx="10" cy="16" r="2" fill="#92400e"/>
                      </g>
                      <line x1="120" y1="22" x2="120" y2="30" stroke="#92400e" strokeWidth="1" strokeDasharray="2,2"/>
                    </svg>
                  ),
                },
                {
                  title: "untangling lookml",
                  body: "inherited a tangle of 80+ lookml views with PDT logic glued on top, slowly suffocating dashboard load times. migrated everything into modular dbt models with testing and ci/cd.",
                  impact: "80+ lookml views refactored, query perf and dashboard loads up ~70%, serving analytics on 2M+ customers.",
                  learned: "dashboards rot in predictable ways. the fix is usually deletion, not optimization.",
                  visual: (
                    <svg viewBox="0 0 240 50" className="w-full h-14" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 12 Q 30 5 50 18 T 90 30 T 30 38 T 90 42" stroke="#92400e" strokeWidth="1.2" fill="none"/>
                      <path d="M10 22 Q 40 35 70 15 T 30 28 T 90 22" stroke="#92400e" strokeWidth="1.2" fill="none"/>
                      <path d="M10 32 Q 25 18 55 30 T 90 12 T 30 18" stroke="#92400e" strokeWidth="1.2" fill="none"/>
                      <path d="M100 25 L138 25" stroke="#92400e" strokeWidth="1.5"/>
                      <path d="M135 22 L140 25 L135 28" fill="none" stroke="#92400e" strokeWidth="1.5"/>
                      {[10, 19, 28, 37].map((y, idx) => (
                        <rect key={idx} x="148" y={y} width="86" height="6" rx="1.5" fill={idx % 2 === 0 ? "#fcd34d" : "#fef3c7"} stroke="#92400e" strokeWidth="1"/>
                      ))}
                    </svg>
                  ),
                },
              ].map((item, i) => {
                const isFlipped = !!flippedBuilds[i];
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => toggleBuildFlip(i)}
                    className="w-full text-left [perspective:1200px] cursor-pointer group"
                    aria-pressed={isFlipped}
                    aria-label={`${item.title} — click to ${isFlipped ? "hide" : "show"} what i learned`}
                  >
                    <div
                      className={`relative w-full min-h-[270px] sm:min-h-[240px] [transform-style:preserve-3d] transition-transform duration-500 ${
                        isFlipped ? "[transform:rotateY(180deg)]" : ""
                      }`}
                    >
                      {/* Front */}
                      <div className="absolute inset-0 [backface-visibility:hidden] bg-white border border-amber-200 group-hover:border-amber-400 p-4 flex flex-col gap-3">
                        <div className="bg-amber-50 border border-amber-100 rounded px-2 py-1">
                          {item.visual}
                        </div>
                        <div className="flex gap-3 sm:gap-4 flex-1">
                          <span className="text-amber-900 font-extrabold text-base sm:text-lg shrink-0 w-8">
                            {String(i + 1).padStart(2, "0")}.
                          </span>
                          <div className="text-sm sm:text-base text-black font-medium space-y-1 flex-1">
                            <p className="font-extrabold text-amber-900">{item.title}</p>
                            <p>{item.body}</p>
                          </div>
                        </div>
                      </div>
                      {/* Back */}
                      <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-amber-100 border border-amber-300 p-4 flex flex-col justify-center gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-wide text-amber-900/70 font-bold mb-2">impact</p>
                          <p className="text-sm sm:text-base text-amber-900 font-semibold">{item.impact}</p>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wide text-amber-900/70 font-bold mb-2">what i learned</p>
                          <p className="text-sm sm:text-base text-amber-900 font-semibold italic">{item.learned}</p>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )
    },
    etc: {
      title: "Etc.",
      content: (
        <div className="space-y-10">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">education</h2>
            <div className="border-2 border-amber-300 bg-amber-50 p-4 sm:p-5 flex items-start gap-4">
              <img
                src="/bu-logo.png"
                alt="Boston University Logo"
                className="w-20 h-20 object-contain shrink-0"
                draggable="false"
              />
              <div className="space-y-3 flex-1 min-w-0">
                <div>
                  <div className="text-lg sm:text-xl font-extrabold text-amber-900">Boston University</div>
                  <div className="text-sm font-semibold text-amber-800">Master of Science, Database Management and Business Intelligence</div>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wide text-amber-900/60 mb-2">Coursework</div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Database Design & Implementation",
                      "Information Systems Analysis & Design",
                      "Data Mining",
                      "Adv. Database Management",
                      "Data Security",
                      "Data Warehousing",
                    ].map((c) => (
                      <span
                        key={c}
                        className="bg-white border border-amber-300 text-amber-900 text-xs font-semibold px-2 py-0.5 rounded"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">why media + tech?</h2>

            <div className="flex flex-col sm:flex-row-reverse gap-5 sm:gap-6 items-start">
            <div className="w-full sm:w-1/3 shrink-0 -rotate-1 shadow-lg">
              <svg viewBox="0 0 200 280" className="w-full h-auto block" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="196" height="276" fill="#fef9e7" stroke="#92400e" strokeWidth="1.5"/>
                <text x="100" y="30" textAnchor="middle" fontSize="22" fill="#451a03" fontWeight="900" fontFamily="Georgia, serif" letterSpacing="3">THE ECHO</text>
                <line x1="8" y1="40" x2="192" y2="40" stroke="#92400e" strokeWidth="1.5"/>
                <line x1="8" y1="43" x2="192" y2="43" stroke="#92400e" strokeWidth="0.5"/>
                <text x="10" y="54" fontSize="6.5" fill="#92400e" fontWeight="700">VOL. I · ISSUE 1</text>
                <text x="100" y="54" textAnchor="middle" fontSize="6.5" fill="#92400e" fontWeight="700" fontStyle="italic">— student edition —</text>
                <text x="190" y="54" textAnchor="end" fontSize="6.5" fill="#92400e" fontWeight="700">DAILY</text>
                <line x1="8" y1="60" x2="192" y2="60" stroke="#92400e" strokeWidth="0.5"/>
                <text x="100" y="80" textAnchor="middle" fontSize="14" fill="#451a03" fontWeight="900" fontFamily="Georgia, serif">WHERE STORY</text>
                <text x="100" y="96" textAnchor="middle" fontSize="14" fill="#451a03" fontWeight="900" fontFamily="Georgia, serif">MEETS CODE</text>
                <text x="100" y="110" textAnchor="middle" fontSize="7.5" fill="#92400e" fontStyle="italic">a quiet love affair with newsrooms</text>
                <rect x="15" y="120" width="170" height="64" fill="#fcd34d" stroke="#92400e" strokeWidth="1"/>
                <circle cx="55" cy="142" r="8" fill="#fef3c7" stroke="#92400e" strokeWidth="0.8"/>
                <path d="M85 168 L105 132 L125 168 Z" fill="#fef3c7" stroke="#92400e" strokeWidth="0.8"/>
                <line x1="15" y1="190" x2="185" y2="190" stroke="#92400e" strokeWidth="0.5"/>
                <text x="100" y="198" textAnchor="middle" fontSize="5.5" fill="#92400e" fontStyle="italic">— from the front page —</text>
                {[210, 217, 224, 231, 238, 245, 252, 259].map((y, idx) => {
                  const x2 = idx === 7 ? 150 : 192;
                  return <line key={idx} x1="8" y1={y} x2={x2} y2={y} stroke="#92400e" strokeWidth="0.5"/>;
                })}
                <line x1="8" y1="266" x2="192" y2="266" stroke="#92400e" strokeWidth="0.5"/>
                <text x="100" y="274" textAnchor="middle" fontSize="6" fill="#92400e" fontStyle="italic">founded &amp; edited by m. prodduturi</text>
              </svg>
            </div>

            <p className="text-sm sm:text-base text-black font-medium leading-relaxed flex-1">
              i&apos;ve been in newsrooms since high school, where i was editor in chief of the school paper. in college i founded a student newspaper called <span className="font-extrabold text-amber-900">The Echo</span>, which gave me my first real newsroom to run and the first time i got to braid my computer science background into something i was genuinely passionate about (journalism &amp; media). through that, i picked up a strong appreciation for the quiet machinery of publishing: workflows, audience engagement, how student readers actually move through what we put out. the intersection of media and tech has been pulling at me ever since.
            </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">my blogs!</h2>
            <p className="text-muted-foreground mb-4">i should probably pick this up again :3</p>
            <button
              type="button"
              onClick={() => window.open('https://medium.com/@medhaa.prodduturi', 'blogPopup', 'width=800,height=600')}
              className="block max-w-full sm:max-w-md rounded-lg overflow-hidden shadow-lg border border-amber-200 hover:shadow-xl transition-shadow bg-white text-left w-full"
              style={{ textDecoration: 'none' }}
            >
              <img
                src="/blog-thumbnail.png"
                alt="Blog Thumbnail"
                className="w-full h-32 sm:h-40 object-cover bg-white"
                draggable="false"
              />
              <div className="p-3 sm:p-4">
                <div className="text-sm sm:text-base font-extrabold text-amber-900 flex items-center gap-2">
                  Blog <span className="text-sm sm:text-base">↗</span>
                </div>
                <div className="inline-block bg-amber-900 text-white text-xs font-bold px-2 py-1 rounded">medium</div>
              </div>
            </button>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="max-w-[65ch] mx-auto px-4 sm:px-5 py-6 sm:py-8">
        {/* Header with Name and Navigation */}
        <div className="pt-2 pb-2">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">medha 🐮🐻</h1>
        </div>

        {/* Compact Navigation */}
        <nav className="mb-1">
          <div className="flex flex-wrap items-center gap-1 sm:gap-2 pl-0.5">
            <Button 
              variant="ghost"
              size="default"
              onClick={() => setActiveSection("about")}
              className={`text-sm sm:text-lg px-1 sm:px-2 py-1 rounded-none font-extrabold ${
                activeSection === "about" 
                  ? "text-white bg-amber-800 underline decoration-2" 
                  : "text-amber-900 hover:bg-amber-50"
              }`}
            >
              about me!
            </Button>
            <Button
              variant="ghost"
              size="default"
              onClick={() => setActiveSection("inflight")}
              className={`text-sm sm:text-lg px-1 sm:px-2 py-1 rounded-none font-extrabold ${
                activeSection === "inflight"
                  ? "text-white bg-amber-800 underline decoration-2"
                  : "text-amber-900 hover:bg-amber-50"
              }`}
            >
              in-flight
            </Button>
            <Button
              variant="ghost"
              size="default"
              onClick={() => setActiveSection("projects")}
              className={`text-sm sm:text-lg px-1 sm:px-2 py-1 rounded-none font-extrabold ${
                activeSection === "projects"
                  ? "text-white bg-amber-800 underline decoration-2"
                  : "text-amber-900 hover:bg-amber-50"
              }`}
            >
              projects
            </Button>
            <Button 
              variant="ghost"
              size="default"
              onClick={() => setActiveSection("etc")}
              className={`text-sm sm:text-lg px-1 sm:px-2 py-1 rounded-none font-extrabold ${
                activeSection === "etc"
                  ? "text-white bg-amber-800 underline decoration-2"
                  : "text-amber-900 hover:bg-amber-50"
              }`}
            >
              etc.
            </Button>
            <button
              type="button"
              onClick={() => window.open('https://github.com/medprod', 'githubPopup', 'width=800,height=600')}
              className="text-sm sm:text-lg px-1 sm:px-2 py-1 rounded-none font-extrabold text-amber-900 hover:bg-amber-50 inline-flex items-center"
            >
              github
            </button>
          </div>
        </nav>

        {/* Dynamic Content Section */}
        <div className="pt-6 pb-2 min-h-[400px]">
          {hydrated && sections[activeSection as keyof typeof sections]?.content}
        </div>
      </main>
    </div>
  );
}
