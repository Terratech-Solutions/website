import Consultation from '@/app/(home)/components/Consultation';
import { buildPageMetadata } from '@/app/metadata';
import Approach from '@/app/process/components/Approach';
import Injection from '@/app/process/components/Injection';
import Innovative from '@/app/process/components/Innovative';
import page from '@/data/process.json';
import type { Metadata } from 'next';

export const generateMetadata = (): Metadata => buildPageMetadata(page.meta);

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
