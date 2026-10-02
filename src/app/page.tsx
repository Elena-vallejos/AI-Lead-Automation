import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { PipelineDemo } from "@/components/PipelineDemo";
import { Expert } from "@/components/Expert";
import { BookCall } from "@/components/BookCall";
import { Benefits } from "@/components/Benefits";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Services />
        <HowItWorks />
        <PipelineDemo />
        <Expert />
        <BookCall />
        <Benefits />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
