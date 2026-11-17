import {
  ArrowRight,
  Utensils,
  Heart,
  Leaf,
  GraduationCap,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  accentColor: string;
  techBadges: string[];
};

const PROJECTS: Project[] = [
  {
    id: "restaurant",
    icon: Utensils,
    iconLabel: "Online Restaurant Web App",
    title:
      "Full-stack restaurant platform with real-time order tracking and admin dashboard.",
    description:
      "Built a complete restaurant solution with customer and admin roles, JWT authentication, real-time order tracking and notifications via WebSockets, REST APIs, sales reporting, inventory management, and dynamic menu control.",
    meta: "Full-Stack Developer, 2024",
    accentColor: "#FF6B35",
    techBadges: ["Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Socket.io"],
  },
  {
    id: "hospital",
    icon: Heart,
    iconLabel: "Hospital Management System",
    title:
      "Role-based hospital system for managing patients, doctors, and appointments.",
    description:
      "Developed a comprehensive hospital management system using the MERN stack with modular database schemas, appointment-conflict prevention, and role-based access control for records and scheduling.",
    meta: "Full-Stack Developer, 2024",
    accentColor: "#E74C3C",
    techBadges: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    id: "herbal-garden",
    icon: Leaf,
    iconLabel: "Virtual Herbal Garden",
    title:
      "An immersive 3D virtual herbal garden selected for SIH college-level nomination.",
    description:
      "Built with Three.js as part of a six-member team during a 36-hour hackathon. The project was selected for the Smart India Hackathon (SIH) college-level nomination, delivering an interactive 3D experience for herbal exploration.",
    meta: "Team Project — SIH Hackathon, 2024",
    accentColor: "#27AE60",
    techBadges: ["Three.js", "JavaScript", "WebGL"],
  },
  {
    id: "student-records",
    icon: GraduationCap,
    iconLabel: "Student Record Management System",
    title:
      "A MERN stack application for managing student academic records efficiently.",
    description:
      "Developed a full-featured student record management application using the MERN stack, enabling efficient storage, retrieval, and management of student academic data with a clean, responsive interface.",
    meta: "Full-Stack Developer, 2023",
    accentColor: "#2980B9",
    techBadges: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              My projects
            </h2>
            <p className="max-w-[33ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              Real-world applications built with modern full-stack technologies,
              from idea to deployment.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              View all projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;
  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      <article className="project-card flex cursor-pointer flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 sm:p-3.5">
        <header className="flex items-center gap-2.5 px-1 pt-2">
          <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
            <Icon className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
          </span>
          <span className="text-sm font-medium tracking-tight text-foreground">
            {project.iconLabel}
          </span>
        </header>

        {/* Colored tech banner instead of image */}
        <div
          className="ring-foreground/5 relative w-full overflow-hidden rounded-2xl ring-1"
          style={{ aspectRatio: "16/7", background: `${project.accentColor}18` }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
            <div
              className="inline-flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{ backgroundColor: `${project.accentColor}30` }}
            >
              <span style={{ color: project.accentColor }}>
                <Icon
                  className="h-7 w-7"
                  aria-hidden="true"
                />
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-1.5">
              {project.techBadges.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-tight"
                  style={{
                    backgroundColor: `${project.accentColor}20`,
                    color: project.accentColor,
                    border: `1px solid ${project.accentColor}30`,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 px-1 pb-1">
          <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
            {project.title}
          </h3>
          <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
            {project.description}
          </p>
        </div>

        <p className="px-1 pb-2 text-[12px] tracking-tight text-foreground/50">
          {project.meta}
        </p>
      </article>
    </FadeIn>
  );
}
