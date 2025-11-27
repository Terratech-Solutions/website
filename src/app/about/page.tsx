import Consultation from '@/app/(home)/components/Consultation';
import Community from '@/app/about/components/Community';
import Innovation from '@/app/about/components/Innovation';
import SetsUp from '@/app/about/components/SetsUp';
import Started from '@/app/about/components/Started';
import Title from '@/app/about/components/Title';
import type { Metadata } from 'next';
import page from '@/data/about.json';

export const generateMetadata = (): Metadata => page.meta

const About = () => {
  return (
    <div>
      <Title />
      <Started />
      <SetsUp />
      <Innovation />
      <Community />
      <Consultation />
    </div>
  );
};

export default About;
