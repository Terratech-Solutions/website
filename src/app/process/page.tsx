import Consultation from '@/app/(home)/components/Consultation';
import Approach from '@/app/process/components/Approach';
import Injection from '@/app/process/components/Injection';
import Innovative from '@/app/process/components/Innovative';

const Process = () => {
  return (
    <div>
      <Injection />
      <Innovative />
      <Approach />
      <Consultation />
    </div>
  );
};

export default Process;
