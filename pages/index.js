import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header';

export default function Home() {
  return (
    <div className='md:container md:mx-auto'>
      <Header />
    </div>
  );
}
