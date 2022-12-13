import Head from "next/head";
import Image from "next/image";
import PageContainer from "../components/UI/PageContainer";
import TopSection from "../components/HomePage/TopSection";
import BookCard from "../components/HomePage/BookCard";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageContainer>
        <TopSection />
        <BookCard />
      </PageContainer>
    </Fragment>
  );
}
