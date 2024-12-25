import Carousel from "@/components/Carousel";
import Event from "@/components/Event";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Subscribe from "@/components/Subscribe";
import WorkProcess from "@/components/WorkProcess";
import AdScrollBar from "../components/Stackholder";
export default function Home() {
  return (
    <>
      <Carousel />
      <Hero />
      <Explore />
      <Statistics />
      <WorkProcess />
      <Event />
      <AdScrollBar />
      <Subscribe />
    </>
  );
}
