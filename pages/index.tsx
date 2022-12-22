import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import PageContainer from "../components/UI/PageContainer";
import TopSection from "../components/TopSection.tsx/TopSection";
import BookCard from "../components/BookCard/BookCard";
import BookingSteps from "../components/BookingSteps/BookingSteps";
import AboutUs from "../components/AboutUs/AboutUs";
import CarsList from "../components/CarsList/CarsList";
import Testimonials from "../components/Testimonials/Testimonials";
import Subscribe from "../components/Subscribe/Subscribe";
import Blogs from "../components/Blogs/Blogs";

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
        <BookingSteps />
        <AboutUs />
        <CarsList />
        <Testimonials />
        <Subscribe />
        <Blogs />
      </PageContainer>
    </Fragment>
  );
}
