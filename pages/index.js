import Layout from "../components/layout/Layout";
import Hero from "../components/hero/Hero";
import AboutMe from "../components/about-me/AboutMe";

export default function Home() {
  return (
    <Layout home>
      <Hero />
      <AboutMe />
    </Layout>
  );
}
