import Link from "next/link";
import Layout from "../components/Layout";

export default function RaiseServerErrorPage() {
    return (
        <Layout title="Raise Server Error Page">
            <p className="font-mono text-bold">return server side error</p>
            <Link href="/main-page">
                <div className="flex cursor-pointer mt-12">
                <svg
                    className="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                    ></path>
                </svg>
                <span>Back to Top page</span>
                </div>
            </Link>
        </Layout>

    );
};

export async function getServerSideProps({ res }) {
    res.StatusCode = 500;
    // throw new Error('Internal Server Error');
    return {
        props: {}
    }
}

