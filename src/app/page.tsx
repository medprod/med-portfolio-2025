
"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Card } from "@/components/ui/card";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  const sections = {
    about: {
      title: "About Me",
      content: (
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold">hi!</h2>
          <p className="text-base sm:text-lg font-bold text-muted-foreground">
            I call myself an analytics engineer (i&apos;m trying to be one, atleast).
          </p>
          <div className="text-black font-semibold text-sm sm:text-base">
            I also love designing and implementing new databases. I&apos;ll happily map out ER diagrams and model data because that&apos;s where I get to be both logical and creative! Here are some random (fun?) facts about me:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>I love cows & I will own a few one day. Dream pets.</li>
              <li>The ultimate dream is to work within the intersection of media & tech!</li>
              <li>SQL is my favorite programming language.</li>
              <li>My life depends on my Notion.</li>
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
      content: (
        <div className="space-y-6">
          <h3 className="text-base sm:text-lg font-bold mb-4 underline">current projects <span role="img" aria-label="turtle">🐢</span></h3>
          <div className="space-y-6 sm:space-y-8 w-full">
            {/* New card row for advance database management - now first */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full">
              <div className="w-full sm:w-[48%] max-w-full">
                <a
                  href="https://github.com/medprod/adv.dbms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  style={{ textDecoration: 'none' }}
                >
                  <Card className="bg-white shadow-none rounded-none p-2">
                    <img
                      src="/dbms.png" // Placeholder image, replace if a more relevant one is available
                      alt="Advance Database Management Project Thumbnail"
                      className="w-full h-28 object-cover bg-white"
                      draggable="false"
                    />
                    <div className="p-2 pb-1">
                      <div className="text-base sm:text-lg font-extrabold flex items-center gap-2 text-amber-900">
                        advance database management <span className="text-sm sm:text-base">↗</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1 mb-0">repo of implementation of advance dbms concepts</div>
                    </div>
                  </Card>
                </a>
              </div>
              <div className="w-full sm:w-[48%] max-w-full sm:ml-auto">
                <Card className="bg-white shadow-none rounded-none p-2">
                  <div className="w-full h-28 bg-gray-100 flex items-center justify-center" style={{ minHeight: '7rem' }} />
                  <div className="p-2 pb-1">
                    <div className="text-base sm:text-lg font-extrabold flex items-center gap-2 text-amber-900">
                      extensive ETL
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 mb-0">coming soon.</div>
                  </div>
                </Card>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full">
              <div className="w-full sm:w-[48%] max-w-full">
                <a
                  href="https://github.com/medprod/erd-agent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  style={{ textDecoration: 'none' }}
                >
                  <Card className="bg-white shadow-none rounded-none p-2">
                    <img
                      src="/erd-agent.png"
                      alt="ERD Agent Project Thumbnail"
                      className="w-full h-28 object-cover bg-white"
                      draggable="false"
                    />
                    <div className="p-2 pb-1">
                      <div className="text-base sm:text-lg font-extrabold flex items-center gap-2 text-amber-900">
                        erd agent <span className="text-sm sm:text-base">↗</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1 mb-0">LLM agent that generates an ERD diagram based on the database description.</div>
                    </div>
                  </Card>
                </a>
              </div>
              <div className="w-full sm:w-[48%] max-w-full sm:ml-auto">
                <a
                  href="https://github.com/medprod/data-analysis-visualization-projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  style={{ textDecoration: 'none' }}
                >
                  <Card className="bg-white shadow-none rounded-none p-2">
                    <img
                      src="/dataviz.png"
                      alt="Data Visualization Project Thumbnail"
                      className="w-full h-28 object-cover bg-white"
                      draggable="false"
                    />
                    <div className="p-2 pb-1">
                      <div className="text-base sm:text-lg font-extrabold flex items-center gap-2 text-amber-900">
                        data-viz <span className="text-sm sm:text-base">↗</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1 mb-0">on-going analysis repo to play around with datasets</div>
                    </div>
                  </Card>
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full">
              <div className="w-full sm:w-[48%] max-w-full">
                <a
                  href="https://github.com/medprod/8-week-sql"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  style={{ textDecoration: 'none' }}
                >
                  <Card className="bg-white shadow-none rounded-none p-2">
                    <img
                      src="/8weeksql.png"
                      alt="8 Week SQL Challenge Project Thumbnail"
                      className="w-full h-28 object-cover bg-white"
                      draggable="false"
                    />
                    <div className="p-2 pb-1">
                      <div className="text-base sm:text-lg font-extrabold flex items-center gap-2 text-amber-900">
                        eight-week-sql <span className="text-sm sm:text-base">↗</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1 mb-0">8 Week SQL Challenge</div>
                    </div>
                  </Card>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-base sm:text-lg font-bold mb-4 underline">past projects <span role="img" aria-label="bunny">🐰</span></h3>
            <div className="space-y-6 sm:space-y-8 w-full">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full">
                <div className="w-full sm:w-[48%] max-w-full">
                  <a
                    href="https://github.com/medprod/Shell-AI-Agent-Build-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    style={{ textDecoration: 'none' }}
                  >
                    <Card className="bg-white shadow-none rounded-none p-2">
                      <img
                        src="/shell.png"
                        alt="Shell AI Agent Project Thumbnail"
                        className="w-full h-28 object-cover bg-white"
                        draggable="false"
                      />
                      <div className="p-2 pb-1">
                        <div className="text-base sm:text-lg font-extrabold flex items-center gap-2 text-amber-900">
                          shell ai agent <span className="text-sm sm:text-base">↗</span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1 mb-0">my first ai agent. reads the file, writes in the file, and executes shell command.</div>
                      </div>
                    </Card>
                  </a>
                </div>
                <div className="w-full sm:w-[48%] max-w-full sm:ml-auto">
                  <a
                    href="https://github.com/medprod/Aptly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    style={{ textDecoration: 'none' }}
                  >
                    <Card className="bg-white shadow-none rounded-none p-2">
                      <img
                        src="/aptly.png"
                        alt="Aptly Database Project Thumbnail"
                        className="w-full h-28 object-cover bg-white"
                        draggable="false"
                      />
                      <div className="p-2 pb-1">
                        <div className="text-base sm:text-lg font-extrabold flex items-center gap-2 text-amber-900">
                          Aptly DB <span className="text-sm sm:text-base">↗</span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1 mb-0">a database with SQL Server for an apartment tracking system.</div>
                      </div>
                    </Card>
                  </a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full">
                <div className="w-full sm:w-[48%] max-w-full">
                  <a
                    href="https://github.com/medprod/redfin-analytics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    style={{ textDecoration: 'none' }}
                  >
                    <Card className="bg-white shadow-none rounded-none p-2">
                      <img
                        src="/redfin.png"
                        alt="Redfin ETL Pipeline Project Thumbnail"
                        className="w-full h-28 object-cover bg-white"
                        draggable="false"
                      />
                      <div className="p-2 pb-1">
                        <div className="text-base sm:text-lg font-extrabold flex items-center gap-2 text-amber-900">
                          redfin-etl-pipeline <span className="text-sm sm:text-base">↗</span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1 mb-0">ETL process using apache airflow and amazon S3 bucket</div>
                      </div>
                    </Card>
                  </a>
                </div>
                <div className="w-full sm:w-[48%] max-w-full sm:ml-auto">
                  <a
                    href="https://github.com/medprod/data-visualization-R"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    style={{ textDecoration: 'none' }}
                  >
                    <Card className="bg-white shadow-none rounded-none p-2">
                      <img
                        src="/rplot.png"
                        alt="Economist Plot Project Thumbnail"
                        className="w-full h-28 object-cover bg-white"
                        draggable="false"
                      />
                      <div className="p-2 pb-1">
                        <div className="text-base sm:text-lg font-extrabold flex items-center gap-2 text-amber-900">
                          economist-plot <span className="text-sm sm:text-base">↗</span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1 mb-0">Recreating a plot from The Economist using R programming.</div>
                      </div>
                    </Card>
                  </a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full">
                <div className="w-full sm:w-[48%] max-w-full">
                  <a
                    href="https://github.com/medprod/prj-data-mining"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    style={{ textDecoration: 'none' }}
                  >
                    <Card className="bg-white shadow-none rounded-none p-2">
                      <img
                        src="/ml.png"
                        alt="Data Mining Repository Thumbnail"
                        className="w-full h-28 object-cover bg-white"
                        draggable="false"
                      />
                      <div className="p-2 pb-1">
                        <div className="text-base sm:text-lg font-extrabold flex items-center gap-2 text-amber-900">
                          data-mining-repo <span className="text-sm sm:text-base">↗</span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1 mb-0">a repo of ml algorithms</div>
                      </div>
                    </Card>
                  </a>
                </div>
                <div className="w-full sm:w-[48%] max-w-full sm:ml-auto">
                  <a
                    href="https://github.com/medprod/gcp-projects/tree/main/GCP%20PR1%20-%20Employee%20Retention%20Program"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    style={{ textDecoration: 'none' }}
                  >
                    <Card className="bg-white shadow-none rounded-none p-2">
                      <img
                        src="/churn.png"
                        alt="Employee Churn Prediction GCP Project Thumbnail"
                        className="w-full h-28 object-cover bg-white"
                        draggable="false"
                      />
                      <div className="p-2 pb-1">
                        <div className="text-base sm:text-lg font-extrabold flex items-center gap-2 text-amber-900">
                          churn-prediction-GCP <span className="text-sm sm:text-base">↗</span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1 mb-0">predicting employee churn.</div>
                      </div>
                    </Card>
                  </a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full">
                <div className="w-full sm:w-[48%] max-w-full">
                  <a
                    href="https://github.com/medprod/OpenWeather-Airflow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    style={{ textDecoration: 'none' }}
                  >
                    <Card className="bg-white shadow-none rounded-none p-2">
                      <img
                        src="/openweather.png"
                        alt="OpenWeather ETL Project Thumbnail"
                        className="w-full h-28 object-cover bg-white"
                        draggable="false"
                      />
                      <div className="p-2 pb-1">
                        <div className="text-base sm:text-lg font-extrabold flex items-center gap-2 text-amber-900">
                          openweather-etl <span className="text-sm sm:text-base">↗</span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1 mb-0">used OpenWeather Map API and applied transformations for data modeling, orchestrating an ETL process with Apache Airflow</div>
                      </div>
                    </Card>
                  </a>
                </div>
                <div className="w-full sm:w-[48%] max-w-full sm:ml-auto">
                  <a
                    href="https://github.com/medprod/analysis-of-a-financial-time-series"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    style={{ textDecoration: 'none' }}
                  >
                    <Card className="bg-white shadow-none rounded-none p-2">
                      <img
                        src="/time-series.png"
                        alt="Time Series Analysis Project Thumbnail"
                        className="w-full h-28 object-cover bg-white"
                        draggable="false"
                      />
                      <div className="p-2 pb-1">
                        <div className="text-base sm:text-lg font-extrabold flex items-center gap-2 text-amber-900">
                          time-series <span className="text-sm sm:text-base">↗</span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1 mb-0">Implemented 3 different models - the ARMA model, ARIMA model, and the SARIMA model - to find the best time series model for stock prediction.</div>
                      </div>
                    </Card>
                  </a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full">
                <div className="w-full sm:w-[48%] max-w-full">
                  <a
                    href="https://github.com/medprod/word-co-occurrence"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    style={{ textDecoration: 'none' }}
                  >
                    <Card className="bg-white shadow-none rounded-none p-2">
                      <img
                        src="/word-co-occur.png"
                        alt="Word Co-occurrence Project Thumbnail"
                        className="w-full h-28 object-cover bg-white"
                        draggable="false"
                      />
                      <div className="p-2 pb-1">
                        <div className="text-base sm:text-lg font-extrabold flex items-center gap-2 text-amber-900">
                          word-co-occurrences <span className="text-sm sm:text-base">↗</span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1 mb-0">Determining if word co-occurrence in text files is fluke or real.</div>
                      </div>
                    </Card>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    skills: {
      title: "Skills",
      content: (
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold">some of my skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">Python</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">SQL Server</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">Postgre</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">mySQL</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">Tableau</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">Lucidchart</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">Airflow</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">BigQuery</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">ETL</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">CI/CD</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">Azure Data Factory</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">Azure DevOps</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">GIT</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded">Agile</span>
          </div>
          <div className="mt-12">
            <h3 className="text-base sm:text-lg font-bold mb-2">Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-8 sm:gap-y-6 w-full">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="w-full overflow-hidden border bg-white justify-self-start"
                style={{ textDecoration: 'none' }}
              >
                <div className="relative">
                  <img
                    src="/ibm-thumbnail.png"
                    alt="IBM Certification Thumbnail"
                    className="w-full h-32 object-cover"
                    draggable="false"
                  />
                  <div className="absolute right-0 bottom-0 m-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-none shadow">in-progress</div>
                </div>
                <div className="p-4">
                  <div className="text-base font-extrabold flex items-center gap-2">
                    IBM Relational Database Administrator <span className="text-base">↗</span>
                  </div>
                  <div className="inline-block bg-amber-900 text-white text-xs font-bold px-2 py-1 rounded-none mt-2">IBM</div>
                </div>
              </a>
              <a
                href="https://www.hackerrank.com/certificates/15403e00ba99"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full overflow-hidden border bg-white"
                style={{ textDecoration: 'none' }}
              >
                <div className="relative">
                  <img
                    src="/sql-intermediate-thumbnail.png"
                    alt="SQL Intermediate Thumbnail"
                    className="w-full h-32 object-contain"
                    draggable="false"
                  />
                  <div className="absolute right-0 bottom-0 m-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-none shadow">completed</div>
                </div>
                <div className="p-4">
                  <div className="text-base font-extrabold flex items-center gap-2">
                    SQL Intermediate <span className="text-base">↗</span>
                  </div>
                  <div className="inline-block bg-amber-900 text-white text-xs font-bold px-2 py-1 rounded-none mt-2">HackerRank</div>
                </div>
              </a>
              <a
                href="https://coursera.org/share/6bc43bcbfd4e0e4182e1e04d3d3453d0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full overflow-hidden border bg-white"
                style={{ textDecoration: 'none' }}
              >
                <div className="relative">
                  <img
                    src="/duke-thumbnail.png"
                    alt="Spark, Hadoop, & Snowflake Thumbnail"
                    className="w-full h-32 object-contain"
                    draggable="false"
                  />
                  <div className="absolute right-0 bottom-0 m-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-none shadow">completed</div>
                </div>
                <div className="p-4">
                  <div className="text-base font-extrabold flex items-center gap-2">
                    Spark, Hadoop, & Snowflake for Data Engineering <span className="text-base">↗</span>
                  </div>
                  <div className="inline-block bg-amber-900 text-white text-xs font-bold px-2 py-1 rounded-none mt-2">Duke University</div>
                </div>
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="w-full overflow-hidden border bg-white justify-self-end"
                style={{ textDecoration: 'none' }}
              >
                <div className="relative">
                  <img
                    src="/google-thumbnail.png"
                    alt="Google Certification Thumbnail"
                    className="w-full h-32 object-cover"
                    draggable="false"
                  />
                  <div className="absolute right-0 bottom-0 m-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-none shadow">completed</div>
                </div>
                <div className="p-4">
                  <div className="text-base font-extrabold flex items-center gap-2">
                    Go Beyond the Numbers: Translate Data into Insights <span className="text-base">↗</span>
                  </div>
                  <div className="inline-block bg-amber-900 text-white text-xs font-bold px-2 py-1 rounded-none mt-2">Google</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      )
    },
    blog: {
      title: "Blog",
      content: (
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold">my blogs!</h2>
          <p className="text-muted-foreground">i should probably pick this up again :3</p>
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
                onClick={() => setActiveSection("skills")}
                className={`text-sm sm:text-lg px-1 sm:px-2 py-1 rounded-none font-extrabold ${
                  activeSection === "skills" 
                    ? "text-white bg-amber-800 underline decoration-2" 
                    : "text-amber-900 hover:bg-amber-50"
                }`}
              >
                skills
              </Button>
              <Button 
                variant="ghost"
                size="default"
                onClick={() => setActiveSection("blog")}
                className={`text-sm sm:text-lg px-1 sm:px-2 py-1 rounded-none font-extrabold ${
                  activeSection === "blog" 
                    ? "text-white bg-amber-800 underline decoration-2" 
                    : "text-amber-900 hover:bg-amber-50"
                }`}
              >
                blog
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
        </div>

        {/* Dynamic Content Section */}
        <div className="pt-6 pb-2">
          {sections[activeSection as keyof typeof sections]?.content}
        </div>
      </main>
    </div>
  );
}
