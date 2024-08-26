import { cn } from "@/lib/utils";
import Button from "../components/Button";
import Hero from "../components/Hero";
import Team from "./Team";

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
      <Team />
    </main>
  );
}
