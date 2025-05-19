'use client';

// import Image from "next/image";
// import { AppKey } from "@/lib/services/key";
// import { UserBoxProps } from "@/lib/services/my-app";
// import { useEffect, useState } from "react";

import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type Subscription = {
  subscription_billing_date: string;
  subscription_id: string;

};

type PaymentMethod = {
  card: {
    type: string;
    last4: string;
  };
};

const subscriptionStatus = "active"; // or "inactive"

const subscription: Subscription = {
  subscription_billing_date: "2025-05-05T00:00:00Z",
  subscription_id: "sub_01jfttgqmhvbh0r46vzjaq4r3e",
};

const payment_method: PaymentMethod = {
  card: {
    type: "visa", // or 'mastercard', 'amex', etc.
    last4: "4242",
  },
};

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const ManageSubscription = () => {

  // Display profile
  // const [user, setUser] = useState<UserBoxProps>();
  // useEffect(() => {
  //   const username = localStorage.getItem(AppKey.username); // or AppKey.username
  //   const email = localStorage.getItem(AppKey.email);       // or AppKey.email
  //   setUser({
  //     username: username || 'Guest0001',
  //     email: email || 'Guest0001@gmail.com',
  //   });
  // }, []);

  const router = useRouter();
  return (

    // Main Container
    <div className="manage-subscription">
      <Header
        title="Manage Subscription"
        subtitle="Purchase of Monthly Package"
      />

      {/* User Info */}
      {/* <div className="mt-8 p-4 shadow-md rounded-xl flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold text-lg">
            U
          </div>
          <div>
            <p className="text-black font-semibold">{user?.username}</p>
            <p className="text-sm text-gray-600">{user?.email}</p>
          </div>
        </div>
      </div> */}

      {/* Detail and Product Container */}
      <div className="flex flex-col md:flex-row mt-12 gap-6">
        {/* Details Card Section */}
        <section className="billing-summary bg-gray-50 shadow-md p-6 rounded-xl flex-1">
          <h3 className="text-gray-800 font-bold text-xl">
            Details</h3>
          <div className="grid gap-6 mt-4">
            {/* Billing Date */}
            <div>
              <p className="text-sm text-gray-600 mb-1">
                Billing date</p>
              <p className="text-black font-semibold">{formatDate(subscription.subscription_billing_date)}</p>
            </div>
            {/* Payment Method */}
            <div>
              <p className="text-sm text-gray-600 mb-1">
                Payment method</p>
              <div className="flex items-center gap-2">
                <div
                  className={`text-white px-2 py-1 rounded text-sm font-semibold ${payment_method.card.type === "visa"
                    ? "bg-purple-600"
                    : payment_method.card.type === "mastercard"
                      ? "bg-purple-600"
                      : "bg-gray-600"
                    }`}
                >
                  {payment_method.card.type.toUpperCase()}
                </div>
                <p className="text-black font-semibold">
                  **** **** **** {payment_method.card.last4}</p>
              </div>
            </div>
            {/* Subscription ID */}
            <div>
              <p className="text-sm text-gray-600 mb-1">
                Subscription ID</p>
              <p className="text-black break-words">
                {subscription.subscription_id}
              </p>
            </div>
          </div>
        </section>
        {/* Products Card Section */}
        <section className="billing-summary bg-gray-50 shadow-md p-6 rounded-xl flex-1">
          <h3 className="text-gray-800 font-bold text-lg">
            Products</h3>
          {/* Package */}
          <div className="flex justify-between mt-4">
            <p className="text-sm text-gray-600 mb-1">Package</p>
            <p className="text-black font-semibold">
              Monthly</p>
          </div>
          {/* Subscription Ended Date */}
          <div className="flex justify-between mt-2">
            <p className="text-sm text-gray-600 mb-1">Your Subscription Ended On</p>
            {/* <span className="text-black font-semibold"> */}
            <span className="text-sm text-black font-bold">
              May 5, 2025 – Jun 5, 2025
            </span>
          </div>
          {/* Current Subscription */}
          <div className="flex justify-between mt-2">
            <div className="mt-2">
              <span className="px-2 py-1 bg-green-200 rounded-sm flex-1 text-green-600 text-sm font-medium">
                Recurring payment
              </span>
            </div>
            <div >
              <p className="text-black font-semibold">
                $ 9.99</p>
              <p className="text-sm text-gray-600 mb-1">
                Tax: 10%</p>
            </div>
          </div>
          {/* Subtotal, Tax and Total Price */}
          <div className="mt-4">
            {/* First Line */}
            <hr className="my-2 border-t border-gray-300" />
            {/* Subtotal */}
            <div className="flex justify-between mt-4">
              <p className="text-black font-sm">Subtotal:</p>
              <p className="text-gray-600  font-semibold">$29.99</p>
            </div>
            {/* Tax */}
            <div className="flex justify-between">
              <p className="text-black font-sm">Tax:</p>
              <p className="text-gray-600  font-semibold">$3.00</p>
            </div>
            {/* Second Line */}
            <hr className="my-2 border-t border-gray-300" />
            {/* Total Price */}
            <div className="flex justify-between">
              <p className="text-black font-sm">Total (Inc. tax):</p>
              <p className="text-black font-bold">$32.99</p>
            </div>
          </div>
        </section>
      </div>

      {/* Plans and Cancel Subscription Section */}
      <div className="mt-8 p-4 bg-gray-50 shadow-md rounded-xl flex items-center justify-between">
        <div>
          <p className="text-gray-800 font-bold text-lg">Monthly</p>
          <p className="text-gray-600 text-sm mt-2 mb-2">$32.99/month</p>
          {/* Active or Not Active Subscription Status */}
          <span
            className={`px-2 py-1 rounded-sm flex-1 text-sm font-medium ${subscriptionStatus === "active"
              ? "bg-green-200 text-green-600"
              : "bg-red-200 text-red-600"
              }`}
          >
            ● {subscriptionStatus === "active" ? "Active" : "Not Active"}
          </span>
        </div>

        {/* Button Cancel Subscription */}
        <Button
          type="button"
          className="bg-red-600 text-white px-4 py-2 rounded-md"
          onClick={() => router.push("/subscriptions/cancel-subscription")}
        >
          Cancel Subscription
        </Button>
      </div>
    </div>
  );
};

export default ManageSubscription;


// --- OLD LAYOUT ---
// 'use client';

// import { ReactNode } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import Header from "@/components/shared/Header";

// const ManageSubscription = () => {
//   const router = useRouter();

//   // const planName = "Start Up Plan";
//   // const price = "$29.99";

//   return (
//     <div className="manage-subscription">

//       <Header title="Manage Subscription"
//         subtitle="Purchase of Monthly Package" />

//       {/* <Header
//         title="Manage Subscription"
//         subtitle={`Purchase of the ${planName} – ${price}`}
//       /> */}

//       {/* <Header
//       title="Manage Subscription"
//       subtitle={
//         <div className="flex flex-col">
//           <span className="text-2xl font-bold">$29.99</span>
//           <span className="text-sm text-gray-600">Purchase of the</span>
//         </div>
//       }
//     /> */}

//       <div className="flex flex-col md:flex-row mt-12 gap-6">
//         <section className="billing-summary bg-gray-50 shadow-md p-6 rounded-xl flex-1">
//           <h3 className="text-gray-800 font-bold text-lg">Details</h3>

//           {/* <div className="grid md:grid-cols-2 gap-6">  */}
//           <div className="grid gap-6">
//             <p className="mt-2">Billing date:
//               <strong> </strong></p>

//             <p className="mt-1">
//               Payment method:
//               <span className="flex items-center gap-2 mt-1">
//                 <Image
//                   src="/assets/icons/visa.png"
//                   alt="coins"
//                   width={50}
//                   height={50}
//                   className="size-9 md:size-12"
//                 />
//                 <strong>fffffffffff</strong>
//               </span>
//             </p>

//             <p className="mt-1">Subscription ID:
//               <code className="text-sm break-all"> sub_01jfttgqmhvbh0r46vzjaq4r3e</code></p>
//           </div>
//         </section>

//         <section className="billing-summary bg-gray-50 shadow-md p-6 rounded-xl flex-1">
//           <div>
//             <h3 className="text-gray-800 font-bold text-lg">Products</h3>
//             <p className="mt-2">
//               Start up </p>

//             {/* <span className="text-sm text-gray-500 mt-4 mb-4">May 5, 2025 – Jun 5, 2025</span>
//               <span className="p-1 bg-green-200 rounded-sm flex-1 text-green-600 text-sm font-medium">Recurring payment</span> */}

//             <div className="mt-2">
//               <span className="text-sm text-gray-500">May 5, 2025 – Jun 5, 2025</span>
//             </div>
//             <div className="mt-2">
//               <span className="p-1 bg-green-200 rounded-sm flex-1 text-green-600 text-sm font-medium">Recurring payment</span>
//             </div>

//             <div className="mt-4">

//               <hr className="my-2 border-t border-gray-300" />

//               <p className="mt-4">Subtotal: $29.99</p>
//               <p>Tax: $3.00</p>

//               <hr className="my-4 border-t border-gray-300" />

//               <p className="font-bold">Total (Inc. tax): $32.99</p>
//             </div>

//           </div>
//         </section>
//       </div>

//       <div className="mt-8 p-4 bg-gray-50 shadow-md rounded-xl flex items-center justify-between">
//         <div>
//           <p className="font-semibold">
//             Monthly</p>
//           <p className="text-gray-600 text-sm mt-2 mb-2">
//             $32.99/month</p>

//           <span className=" p-1 bg-green-200 rounded-sm flex-1 text-green-600 text-sm">
//             ● Active</span>

//         </div>
//         <button className="bg-red-600 text-white px-4 py-2 rounded-md">
//           Cancel Subscription</button>
//       </div>



//     </div>
//   );
// };

// export default ManageSubscription;


