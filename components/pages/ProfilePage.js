import Layout from "../layout/Layout";
import Hero from "../hero/Hero";
import AboutMe from "../about-me/AboutMe";

export default function ProfilePage({ profileInfo }) {
  const {
    name,
    title,
    picture,
    email,
    phone,
    website,
    greetings,
    links,
  } = profileInfo;
  const heroProps = { name, title, links };
  const aboutMeProps = { picture, name, email, phone, website, greetings };

  return (
    <Layout>
      <Hero {...heroProps} />
      <AboutMe {...aboutMeProps} />
    </Layout>
  );
}
