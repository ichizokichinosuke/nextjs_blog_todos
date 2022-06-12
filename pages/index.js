import Link from 'next/link';
import Auth from '../components/Auth';
import Layout from '../components/Layout';
import { generatedRssFeed } from "../lib/feed";

export default function Home() {
  return (
    <Layout title="Login">
      <Auth />
      <Link href="/redirect-origin-page">
        <p className='mt-5 cursor-pointer font-mono text-bold'>Redirect</p>
      </Link>
      <Link href="/no-exist-page">
        <p className='mt-5 cursor-pointer font-mono text-bold'>Raise 404 Error</p>
      </Link>
      <Link href="/raise-server-error-page">
        <p className='mt-5 cursor-pointer font-mono text-bold'>Raise 500 Error</p>
      </Link>

    </Layout>
  );
};

export async function getStaticProps() {
  generatedRssFeed();
  return {
    props: {}
  };
};