import Head from 'next/head';
import Image from 'next/image';
import { MainLayout } from '../components/layout';
import Header from '../components/header';

export default function About() {
  return <div className='md:container md:mx-auto'>About</div>;
}

About.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
