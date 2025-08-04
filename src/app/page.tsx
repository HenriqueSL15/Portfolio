import { AboutMe } from "@/components/AboutMe";
import { Header } from "@/components/Header";
import { Technologies } from "@/components/Technologies";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-20 items-center w-full ">
      <Header />
      <AboutMe />
      <Technologies />
    </div>
  );
}
