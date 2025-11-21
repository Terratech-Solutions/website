import Advanced from '@/app/services/sinkholes/components/Advanced';
import Sinkhole from '@/app/services/sinkholes/components/Sinkhole';
import Solution from '@/app/services/sinkholes/components/Solution';
import Title from '@/app/services/sinkholes/components/Title';
import Warnings from '@/app/services/sinkholes/components/Warnings';
import { sinkholesMeta } from '../../../data/meta.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: servicesData.meta.title ?? 'Sinkhole Repair',
  description: servicesData.meta.description ?? 'Expert sinkhole remediation services.',
};

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
