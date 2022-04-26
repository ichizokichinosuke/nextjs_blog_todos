import Auth from '../components/Auth';
import Layout from '../components/Layout';
import { generatedRssFeed } from "../lib/feed";

export default function Home({}) {
  return (
    <Layout title="Login">
      <Auth />
    </Layout>
  );
};

export async function getStaticProps() {
  generatedRssFeed();
  return {
    props: {}
  };
};