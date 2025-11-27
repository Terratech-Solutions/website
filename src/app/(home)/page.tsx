import Consultation from '@/app/(home)/components/Consultation';
import Expertise from '@/app/(home)/components/Expertise';
import Introducing from '@/app/(home)/components/Introducing';
import Solutions from '@/app/(home)/components/Solutions';
import WhyUs from '@/app/(home)/components/WhyUs';
import { buildPageMetadata } from '@/app/metadata';
import dynamic from 'next/dynamic';
import page from '@/data/home.json';
import type { Metadata } from 'next';

const Techniques = dynamic(() => import('@/app/(home)/components/Techniques'));

export const generateMetadata = (): Metadata =>  buildPageMetadata(page.meta);

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
