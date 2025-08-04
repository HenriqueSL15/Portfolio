import { AboutMe } from "@/components/AboutMe";
import { Header } from "@/components/Header";
import { Technologies } from "@/components/Technologies";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-20 items-center w-full mb-96">
      <Header />
      <AboutMe />
      <Technologies />
      <Education />
      <Projects />
    </div>
  );
}
