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
          <p className="text-muted-foreground">My blog posts will appear here.</p>
        </div>
      )
    },
    github: {
      title: "GitHub",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">GitHub</h2>
          <p className="text-muted-foreground">My GitHub repositories and contributions will be shown here.</p>
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
          <nav className="mb-8">
            <div className="flex items-center space-x-4">
              <Button 
                variant={activeSection === "about" ? "default" : "ghost"} 
                size="sm"
                onClick={() => setActiveSection("about")}
              >
                about me!
              </Button>
              <Button 
                variant={activeSection === "projects" ? "default" : "ghost"} 
                size="sm"
                onClick={() => setActiveSection("projects")}
              >
                projects
              </Button>
              <Button 
                variant={activeSection === "skills" ? "default" : "ghost"} 
                size="sm"
                onClick={() => setActiveSection("skills")}
              >
                skills
              </Button>
              <Button 
                variant={activeSection === "blog" ? "default" : "ghost"} 
                size="sm"
                onClick={() => setActiveSection("blog")}
              >
                blog
              </Button>
              <Button 
                variant={activeSection === "github" ? "default" : "ghost"} 
                size="sm"
                onClick={() => setActiveSection("github")}
              >
                github
              </Button>
              <Button variant="outline" size="sm">theme</Button>
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
