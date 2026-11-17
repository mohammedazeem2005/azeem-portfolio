import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { PolaroidStrip } from "@/components/about/polaroid-strip";
import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: "About Mohammed Azeem K M — aspiring software engineer, full-stack developer based in Coimbatore, Tamil Nadu.",
  path: "/about",
});

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-312 pt-40 sm:pt-56">
        <PolaroidStrip />
      </section>

      <section className="mx-auto w-full max-w-160 px-6 pt-20 pb-16 sm:px-10 sm:pt-28 sm:pb-24">
        <FadeIn delay={0.5}>
          <div className="rounded-4xl border border-foreground/5 bg-foreground/1.5 p-8 sm:p-12 dark:bg-foreground/3">
            <h1 className="font-serif text-[1.75rem] font-medium tracking-tight text-foreground sm:text-[2rem]">
              Hello! I&rsquo;m <span className="border-b border-foreground/30 pb-0.5">Mohammed Azeem</span>.
            </h1>
            <div className="mt-8 space-y-6 text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[18px]">
              <p>
                An <strong className="font-semibold text-foreground">aspiring software engineer</strong> passionate about building scalable, real-world web applications. With a strong foundation in <strong className="font-semibold text-foreground">full-stack development</strong> using the MERN stack, I thrive on solving complex problems through clean, maintainable code.
              </p>
              <p>
                I&rsquo;m driven by a desire to create <strong className="font-semibold text-foreground">meaningful digital solutions</strong> — from dynamic restaurant platforms with real-time order tracking to hospital management systems with role-based access control. Every project I take on reflects my commitment to <strong className="font-semibold text-foreground">technical excellence and user impact</strong>.
              </p>
              <p>
                Currently pursuing my <strong className="font-semibold text-foreground">M.Tech in Computer Science and Engineering (Integrated 5 years)</strong> at Sri Ramakrishna Engineering College, Coimbatore, I am actively seeking opportunities to contribute to innovative teams and grow as a full-stack developer in the industry.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-[40rem] px-6 pb-20 sm:px-10 sm:pb-28">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-10">
            <Experience />
            <Education />
            <Skills />
            <Stack />
          </div>
        </FadeIn>
      </section>

      <ContactCard />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
