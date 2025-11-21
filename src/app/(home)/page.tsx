import Consultation from '@/app/(home)/components/Consultation';
import Expertise from '@/app/(home)/components/Expertise';
import Introducing from '@/app/(home)/components/Introducing';
import Solutions from '@/app/(home)/components/Solutions';
import WhyUs from '@/app/(home)/components/WhyUs';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { homeMeta } from '../../data/meta.json';

const Techniques = dynamic(() => import('@/app/(home)/components/Techniques'));

export const metadata: Metadata = {
  title: homeMeta.title ?? 'Home',
  description: homeMeta.description ?? 'Welcome to Terratech.',
};

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
