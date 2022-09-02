import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

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
        <p>yes hello - I'm interested in Bitcoin and the Lightning network.   
        <br></br>
        Currently a software engineer at <a href="https://strike.me">Strike</a> + working on a side project leveraging the Lightning network to support independent media.
        </p>
        <p>
        <h2 className={utilStyles.headingLg}>Contacts</h2>
        </p>
        <p>
          <a href="https://twitter.com/twocitizenships">Twitter</a>
        </p>
        <p>
          <a href="https://github.com/twocitizenships">Github</a>
        </p>
        <p>
          <a href="mailto:twocitizenships@gmail.com">Email</a>
        </p>
        <h2 className={utilStyles.headingLg}>Onchain</h2>
        <img src="images/address.jpeg" style={{height: "144px", width: "144px"}} alt="Bitcoin Onchain Address"></img>
      </section>
      
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section> */}
    </Layout>
  );
}
