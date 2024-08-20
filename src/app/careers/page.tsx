import { cn } from "@/lib/utils";
import Button from "../components/Button";
import Hero from "../components/Hero";

// https://cdn.prod.website-files.com/6511efa00919fb9000588f9a/651c5e48c3da94331fbe4ba3_career-cover-img.webp

export default function CareersPage() {
  return (
    <main>
      <Hero
        backgroundColor="green"
        backgroundImageUrl="651c5e48c3da94331fbe4ba3_career-cover-img.webp"
        headlineText="Join the group"
      >
        <Button>All Vacancies</Button>
      </Hero>
    </main>
  );
}
