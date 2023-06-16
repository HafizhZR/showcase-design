import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProfilePostCard from "@/components/ProfilePostCard";
import Link from "next/link";

const ExplorePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-24">
        <h1 className="text-primary text-3xl font-bold mb-6">
          Find inspiration from our{" "}
          <span className="text-secondary">Best Designs </span>for your project
        </h1>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="grid sm:grid-cols-5 gap-4 py-5">
          <Link href="/posts/detail">
            <ProfilePostCard />
          </Link>
          <Link href="/posts/detail">
            <ProfilePostCard />
          </Link>
          <Link href="/posts/detail">
            <ProfilePostCard />
          </Link>
          <Link href="/posts/detail">
            <ProfilePostCard />
          </Link>
          <Link href="/posts/detail">
            <ProfilePostCard />
          </Link>
          <Link href="/posts/detail">
            <ProfilePostCard />
          </Link>
          <Link href="/posts/detail">
            <ProfilePostCard />
          </Link>
          <Link href="/posts/detail">
            <ProfilePostCard />
          </Link>
          <Link href="/posts/detail">
            <ProfilePostCard />
          </Link>
          <Link href="/posts/detail">
            <ProfilePostCard />
          </Link>
          <Link href="/posts/detail">
            <ProfilePostCard />
          </Link>
          <Link href="/posts/detail">
            <ProfilePostCard />
          </Link>
          <Link href="/posts/detail">
            <ProfilePostCard />
          </Link>
          <Link href="/posts/detail">
            <ProfilePostCard />
          </Link>
          <Link href="/posts/detail">
            <ProfilePostCard />
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ExplorePage;
