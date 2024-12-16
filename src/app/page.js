import FAQs from "@/components/FAQ's";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroTitle from "@/components/HeroTitle";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <div className="max-w-[1118px] w-full px-9">
        <HeroTitle />
        <TechStack />
        <Features />
        <Skills />
        <FAQs />
      </div>
      <Footer />
    </main>
  );
}
