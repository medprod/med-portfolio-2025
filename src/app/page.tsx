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
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="text-lg text-muted-foreground">
            Hi, I'm med. I'm a full-stack developer passionate about creating meaningful digital experiences.
          </p>
          <p className="text-muted-foreground">
            This is a placeholder portfolio. Content coming soon.
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
          <h2 className="text-2xl font-bold">Blog</h2>
          <p className="text-muted-foreground">i should really start writing more :3</p>
          <a
            href="https://medium.com/@medhaa.prodduturi"
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-md rounded-lg overflow-hidden shadow-lg border border-amber-200 hover:shadow-xl transition-shadow bg-white"
            style={{ textDecoration: 'none' }}
          >
            <img
              src="https://placehold.co/600x200/EEE/31343C?text=Blog+Thumbnail"
              alt="Blog Thumbnail"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <div className="text-xl font-extrabold text-amber-900 flex items-center gap-2">
                Blog <span className="text-base">↗</span>
              </div>
              <div className="inline-block bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">medium</div>
            </div>
          </a>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content */}
      <main className="max-w-[65ch] mx-auto px-5 py-8">
        {/* Header with Name and Navigation */}
        <div className="py-8">
          <h1 className="text-3xl font-bold mb-6">med</h1>
          
          {/* Compact Navigation */}
          <nav className="mb-2">
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
              <a 
                href="https://github.com/medprod" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg px-2 py-1 rounded-none font-extrabold text-amber-900 hover:bg-amber-50 inline-flex items-center"
              >
                github
              </a>
            </div>
          </nav>
        </div>

        {/* Dynamic Content Section */}
        <div className="py-8">
          {sections[activeSection as keyof typeof sections]?.content}
        </div>
      </main>
    </div>
  );
}
