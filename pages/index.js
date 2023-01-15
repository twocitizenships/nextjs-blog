import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <p>
          yes hello - I'm interested in Bitcoin and the Lightning Network.  Working on <a href="https://github.com/twocitizenships/oranges" style={{ color: 'orange' }}>oranges</a> linking bitcoin and the physical world.  Most recently a software engineer at{" "}
          <a href="https://strike.me">Strike</a>. 
          <pre>
          Reach
          out on <a href="https://twitter.com/twocitizenships">Twitter</a> or <a href="https://github.com/twocitizenships">GitHub</a>.
          </pre>
        </p>
      </section>
    </Layout>
  );
}
