"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  const sections = {
    about: {
      title: "About Me",
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">hi!</h2>
          <p className="text-lg font-bold text-muted-foreground">
            I call myself an analytics engineer (i'm trying to be one, atleast).
          </p>
          <div className="text-black font-semibold">
            Some (fun?) facts about me:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>I love cows & I will own a few one day. Dream pets.</li>
              <li>The ultimate dream is to work within the intersection of media & tech!</li>
              <li>SQL is my favorite programming language.</li>
              <li>My life depends on my Notion.</li>
            </ul>
          </div>
          <p className="text-lg text-muted-foreground font-semibold mt-4">
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
            <div className="text-base italic text-blue-600 font-semibold mb-2">let's make data work for us!</div>
            <div className="space-y-2">
              <a
                href="mailto:medhaa.prodduturi@gmail.com?subject=Hello%20Medha&body=Hi%20Medha%2C%20..."
                className="block text-blue-600 italic text-sm font-semibold hover:underline"
              >
                medhaa.prodduturi@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/medha-prodduturi/"
                className="block text-blue-600 italic text-sm font-semibold hover:underline"
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
          <h2 className="text-2xl font-bold">Projects</h2>
          <p className="text-muted-foreground">My projects will be displayed here.</p>
        </div>
      )
    },
    skills: {
      title: "Skills",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">some of my skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-3 py-1 rounded">Python</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-3 py-1 rounded">SQL Server</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-3 py-1 rounded">Postgre</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-3 py-1 rounded">mySQL</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-3 py-1 rounded">Tableau</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-3 py-1 rounded">Lucidchart</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-3 py-1 rounded">Airflow</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-3 py-1 rounded">BigQuery</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-3 py-1 rounded">ETL</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-3 py-1 rounded">CI/CD</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-3 py-1 rounded">Azure Data Factory</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-3 py-1 rounded">Azure DevOps</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-3 py-1 rounded">GIT</span>
            <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-3 py-1 rounded">Agile</span>
          </div>
          <div className="mt-12">
            <h3 className="text-lg font-bold mb-2">Certifications</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 w-full">
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
          <h2 className="text-2xl font-bold">some stuff i wrote</h2>
          <p className="text-muted-foreground">i should probably pick this up again :3</p>
          <button
            type="button"
            onClick={() => window.open('https://medium.com/@medhaa.prodduturi', 'blogPopup', 'width=800,height=600')}
            className="block max-w-md rounded-lg overflow-hidden shadow-lg border border-amber-200 hover:shadow-xl transition-shadow bg-white text-left w-full"
            style={{ textDecoration: 'none' }}
          >
            <img
              src="/blog-thumbnail.png"
              alt="Blog Thumbnail"
              className="w-full h-40 object-cover bg-white"
              draggable="false"
            />
            <div className="p-4">
              <div className="text-base font-extrabold text-amber-900 flex items-center gap-2">
                Blog <span className="text-base">↗</span>
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
      <main className="max-w-[65ch] mx-auto px-5 py-8">
        {/* Header with Name and Navigation */}
        <div className="pt-2 pb-2">
          <h1 className="text-3xl font-bold mb-2">medha 🐮🐻</h1>
          
          {/* Compact Navigation */}
          <nav className="mb-1">
            <div className="flex items-center space-x-2 pl-0.5">
              <Button 
                variant="ghost"
                size="default"
                onClick={() => setActiveSection("about")}
                className={`text-lg px-2 py-1 rounded-none font-extrabold ${
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
                className={`text-lg px-2 py-1 rounded-none font-extrabold ${
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
                className={`text-lg px-2 py-1 rounded-none font-extrabold ${
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
                className={`text-lg px-2 py-1 rounded-none font-extrabold ${
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
                className="text-lg px-2 py-1 rounded-none font-extrabold text-amber-900 hover:bg-amber-50 inline-flex items-center"
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
