import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import ValueProp from "@/components/ValueProp/ValueProp";
import Projects from "@/components/Projects/Projects";
import Form from "@/components/Form/Form";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <ValueProp></ValueProp>
      <Projects></Projects>
      <Form></Form>
      <Footer></Footer>
    </div>
  );
}
