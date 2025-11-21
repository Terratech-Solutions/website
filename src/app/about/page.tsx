import Consultation from '@/app/(home)/components/Consultation';
import Community from '@/app/about/components/Community';
import Innovation from '@/app/about/components/Innovation';
import SetsUp from '@/app/about/components/SetsUp';
import Started from '@/app/about/components/Started';
import Title from '@/app/about/components/Title';
import { Metadata } from 'next';
import { aboutMeta } from '../../data/meta.json';

export const metadata: Metadata = {
  title: aboutMeta.title,
  description: aboutMeta.description,
};

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
