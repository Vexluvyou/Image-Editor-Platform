"use client"

import { getUserImages } from "@/lib/actions/image.actions";
import { getUserById } from "@/lib/actions/user.actions";
import { Collection } from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";


import Image from "next/image";
import Header from "@/components/shared/Header";

// import { redirect, useRouter, } from "next/navigation";
import { redirect, useRouter, useSearchParams, } from "next/navigation";
import { AppKey } from "@/lib/services/key";
import { useEffect, useState } from "react";
import { UserBoxProps } from "@/lib/services/my-app";
// import { Search } from "@/components/shared/Search";


// const Profile = async ({ searchParams }: SearchParamProps) => {
const Profile = () => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  
  const [user, setUser] = useState<UserBoxProps>();


  useEffect(() => {
    const username = localStorage.getItem(AppKey.username); // or AppKey.username
    const email = localStorage.getItem(AppKey.email);       // or AppKey.email

    setUser({
      username: username || 'Guest0001',
      email: email || 'Guest0001@gmail.com',
    });
  }, []);
  const router = useRouter();

  // const { userId } = auth();

  // if (!userId) redirect("/sign-in");

  // const user = await getUserById(userId);
  // const images = await getUserImages({ page, userId: user._id });

  // const [user, setUser] = useState<UserBoxProps>({ userId: "", username: "" }); // Initialize user with fallback values
  // const router = useRouter();

  // Check User Login
  // useEffect(() => {
  //     const userId = localStorage.getItem(AppKey.userId) || "";  
  //     const username = localStorage.getItem(AppKey.username) || ""; 
  //     if (userId && username) {
  //       setUser({ userId, username });
  //     } else {
  //       // router.push("/sign-in");
  //       router.replace("/sign-in");
  //     }
  //   }, [router]);

  return (
    <>
      <Header title="Profile" />

      <div className="mt-8 p-4 shadow-md rounded-xl flex items-center justify-between">

        {/* Left: Subscription Info */}
        {/* <div>
          <p className="font-semibold">Monthly</p>
          <p className="text-gray-600 text-sm mt-2 mb-2">$32.99/month</p>
          <span className="p-1 bg-green-200 rounded-sm flex-1 text-green-600 text-sm">
            ● Active
          </span>
        </div> */}

        {/* Right: User Info */}
        <div className="flex items-center gap-4">
          {/* Profile Icon */}
          <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold text-lg">
            U
          </div>
          {/* Username & Email */}
          <div>
            <p className="text-black font-semibold">{user?.username}</p>
            <p className="text-sm text-gray-600">{user?.email}</p>
          </div>
        </div>
      </div>


      {/* Image and Subscription Section */}
      <section className="profile">
        
        {/* Image Manipulation */}
        <div className="profile-image-manipulation">
          <p className="p-14-medium md:p-16-medium">IMAGE MANIPULATION DONE</p>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src="/assets/icons/photo.svg"
              alt="coins"
              width={50}
              height={50}
              className="size-9 md:size-12"
            />
            <h2 className="h2-bold text-dark-600">0</h2>
            {/* <h2 className="h2-bold text-dark-600">{images?.data.length}</h2> */}
          </div>
        </div>

        {/* Subscription Plan */}
        <div className="profile-balance">
          <p className="p-14-medium md:p-16-medium">SUBSCRIPTION PLANS</p>
          <div className="mt-4 flex items-center gap-4">
            <Image
              src="/assets/icons/crown.png"
              alt="coins"
              width={50}
              height={50}
              className="size-9 md:size-12"
            />
            {/* <h2 className="h2-bold text-dark-600">{user.creditBalance}</h2> */}
          </div>

          {/* Check Plans Button */}
          <div className="mt-2">
            <Button
              onClick={() => router.push("/subscriptions/manage-subscription")}
              className="subscription-button">
              Check Plans
            </Button>
          </div>
        </div>

      </section>

      {/* Recenly Section */}
      <section className="mt-8 md:mt-4">

        <div>
          <Collection

          // hasSearch={true}
          // images={images?.data}
          // totalPages={images?.totalPages}
          // page={page}
          />
        </div>



      </section>


    </>
  );
};

export default Profile;