import { AxiosError } from "axios";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Table from "~/components/table";
import { fetchData } from "~/utils/fetchData";

const Home: NextPage = () => {
  const [data, setData] = useState()

  useEffect(() => {
    fetchData()
      .then((p) => {
        const sortedData = p.sort(function (a, b) {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
        setData(sortedData)
      })
      .catch((e: Error | AxiosError) => console.log(e));
  }, []);
  
  console.log("🚀 « data:", data)
  return (
    <>
      <Head>
        <title>HN Feed</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            HN Feed
          </h1>
          <Table data={data} />
        </div>
      </main>
    </>
  );
};

export default Home;
