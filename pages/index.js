import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPostsForHome, getAllServices } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Services from "../components/Services";
import ContactUs from "../components/ContactUs";
import Service24 from "../components/Service24";
export default function Index({ preview, allServices }) {
  return (
    <>
      {/* <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout> */}
      <div>
        <Navbar />
        <Home />
        <Services services={allServices} />
        <Service24 />
        <ContactUs />
      </div>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allServices = await getAllServices();
  return {
    props: { preview, allServices },
    revalidate: 1,
  };
}
