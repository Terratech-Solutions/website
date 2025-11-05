import Consultation from "@/app/(home)/components/Consultation";
import Expertise from "@/app/(home)/components/Expertise";
import Introducing from "@/app/(home)/components/Introducing";
import Solutions from "@/app/(home)/components/Solutions.";
import Techniques from "@/app/(home)/components/Techniques";
import WhyUs from "@/app/(home)/components/WhyUs";

const Home = () => {
  return (
    <div>
      <Introducing />
      <Techniques />
      <WhyUs />
      <Expertise />
      <Solutions />
      <Consultation />
    </div>
  );
};

export default Home;
