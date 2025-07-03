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
          <h2 className="text-2xl font-bold">Skills</h2>
          <p className="text-muted-foreground">My technical skills will be listed here.</p>
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
              <div className="text-xl font-extrabold text-amber-900 flex items-center gap-2">
                Blog <span className="text-base">↗</span>
              </div>
              <div className="inline-block bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">medium</div>
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
