import Layout from "../components/Layout";

export default function RedirectPage() {
  return (
    <Layout title="Redirect page">
        <p className="font-mono text-bold">Redirect origin page</p>
    </Layout>
  );
};

export async function getServerSideProps() {
    return {
        redirect: {
            permanent: false,
            destination: "/redirect-destination-page",
        }
    }
}
