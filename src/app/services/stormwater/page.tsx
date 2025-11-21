import Advanced from '@/app/services/sinkholes/components/Advanced';
import Sinkhole from '@/app/services/sinkholes/components/Sinkhole';
import Solution from '@/app/services/sinkholes/components/Solution';
import Title from '@/app/services/sinkholes/components/Title';
import Warnings from '@/app/services/sinkholes/components/Warnings';

const Stormwater = () => {
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

export default Stormwater;
