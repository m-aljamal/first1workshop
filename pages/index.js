import { getAllgellery, getAllPostsForHome, getAllServices } from "../lib/api";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Services from "../components/Services";
import ContactUs from "../components/ContactUs";
import Service24 from "../components/Service24";
import Gellery from "../components/Gellery";
import WhatWeDo from "../components/WhatWeDo";
import Footer from "../components/Footer";
export default function Index({ preview, allServices, gellery }) {
  return (
    <div>
      <Navbar />
      <Home />
      <Services services={allServices} />
      <Service24 />
      <WhatWeDo />
      
      <Gellery gellery={gellery} />
      <ContactUs />
      <Footer />
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  const allServices = await getAllServices();
  const gellery = await getAllgellery();
  return {
    props: { preview, allServices, gellery },
    revalidate: 1,
  };
}
