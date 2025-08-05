import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import About from "@/components/About";
import CustomWork from "@/components/CustomWork";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <About />
      <CustomWork />
      <Testimonials />
    </main>
  );
}
