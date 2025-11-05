import Advanced from "@/app/services/components/Advanced";
import Sinkhole from "@/app/services/components/Sinkhole";
import Solution from "@/app/services/components/Solution";
import Title from "@/app/services/components/Title";
import Warnings from "@/app/services/components/Warnings";

const Contact = () => {
  return (
    <div>
      <Title />
      <Warnings />
      <Sinkhole />
      <Advanced />
      <Solution />
    </div>
  );
};

export default Contact;
