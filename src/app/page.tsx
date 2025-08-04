import { AboutMe } from "@/components/AboutMe";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center w-full ">
      <Header />
      <AboutMe />
    </div>
  );
}
