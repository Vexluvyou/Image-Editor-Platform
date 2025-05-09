"use client"

// import { auth } from "@clerk/nextjs";
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
import { Search } from "@/components/shared/Search";


// const Profile = async ({ searchParams }: SearchParamProps) => {
const Profile = () => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  // const page = Number(searchParams?.page) || 1;

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

      <section className="profile">

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
            {/* <h2 className="h2-bold text-dark-600">{images?.data.length}</h2> */}
          </div>
        </div>

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
          <div className="mt-2">
            <Button
              onClick={() => router.push("/subscriptions/manage-subscription")}
              className="subscription-button">
              Check Plans
            </Button>
          </div>
        </div>

      </section>

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