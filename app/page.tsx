import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StarRow from "@/components/StarRow";
import PrayerTimes from "@/components/PrayerTimes";
import About from "@/components/About";
import Events from "@/components/Events";
import Donate from "@/components/Donate";
import LocationContact from "@/components/LocationContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* <StarRow variant="light" /> */}
      <PrayerTimes />
      {/* <StarRow variant="dark" /> */}
      {/* <About /> */}
      {/* <Events /> */}
      {/* <Donate /> */}
      <LocationContact />
      <Footer />
    </>
  );
}
