import Auth from '../components/Auth'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout title="Login">
      <Auth />
    </Layout>
  );
}
