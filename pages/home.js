import Head from "next/head";
import Footer from "../components/footer";
import Card from "../components/card";
import styles from "../styles/Home.module.css";

import useSWR from "swr";

export default function Home() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR("/api/hello", fetcher);
  console.log("🚀 ~ file: index.js ~ line 10 ~ Home ~ data", data);

  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;
  // return <div>hello {data.name}!</div>;

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className="min-h-screen py-0 px-2 flex flex-col justify-center items-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-1 px-0 py-20 flex-col justify-center items-center">
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">{data.name}!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>

        <div className="flex items-center justify-center flex-wrap max-w-3xl mt-12 ">
          <Card url="https://nextjs.org/docs">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </Card>
          <Card url="https://nextjs.org/learn">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </Card>
          <Card url="https://github.com/vercel/next.js/tree/master/examples">
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </Card>

          <Card url="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <h3>Deploy &rarr;</h3>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
