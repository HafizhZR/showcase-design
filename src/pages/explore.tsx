import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import ProfilePic from "@/assets/profile-pic.png";
import { useSession } from 'next-auth/react';

const ExplorePage: React.FC = () => {
  const { data } = useSession();
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://be-test-deploy.vercel.app/design");
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-24">
        <h1 className="text-primary text-3xl font-bold mb-6 text-center">
          Find inspiration from our{" "}
          <span className="text-secondary">Best Designs </span>for your project
        </h1>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-5">
          {posts.map((post) => (
            <Link href={`/posts/detail/`} key={post._id}>
              <div className="flex flex-col max-w-[150px] lg:max-w-[160px] h-[175px] lg:h-[200px] rounded-lg shadow-xl">
                <Image
                  src={`data:image/png;base64,${post.thumbnail_design}`}
                  width={1000}
                  height={1000}
                  alt="post-image"
                  className="w-full h-[120.85px] object-cover rounded-t-lg rounded-r-lg rounded-b-none"
                />
                <div className="flex flex-row items-center gap-1 px-2 pt-2">
                  <Image
                    src={ProfilePic}
                    alt="profile-pic"
                    className="rounded-full w-4"
                  />
                  <span className="text-[12px] font-medium">
                  {data?.user?.name}
                  </span>
                </div>
                <p className="text-[14px] font-bold px-2">{post.judul_design}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ExplorePage;