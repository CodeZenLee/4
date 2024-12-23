import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import HorizontalScroll from "@/components/HorizontalScroll/HorizontalScroll"
import Projects from "@/components/Projects/Projects";
import Form from "@/components/Form/Form";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <HorizontalScroll></HorizontalScroll>
      <Projects></Projects>
      <Form></Form>
      <Footer></Footer>
    </div>
  );
}
