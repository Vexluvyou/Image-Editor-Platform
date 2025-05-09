'use client';

import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "@/components/shared/Header";

const ManageSubscription = () => {
  const router = useRouter();

  // const planName = "Start Up Plan";
  // const price = "$29.99";

  return (
    <div className="manage-subscription">

      <Header title="Manage Subscription"
        subtitle="Purchase of Monthly Package" />

      {/* <Header
        title="Manage Subscription"
        subtitle={`Purchase of the ${planName} – ${price}`}
      /> */}

      {/* <Header 
      title="Manage Subscription"
      subtitle={
        <div className="flex flex-col">
          <span className="text-2xl font-bold">$29.99</span>
          <span className="text-sm text-gray-600">Purchase of the</span>
        </div>
      }
    /> */}

      <div className="flex flex-col md:flex-row mt-12 gap-6">
        <section className="billing-summary bg-gray-50 shadow-md p-6 rounded-xl flex-1">
          <h3 className="text-gray-800 font-bold text-lg">Details</h3>

          {/* <div className="grid md:grid-cols-2 gap-6">  */}
          <div className="grid gap-6">
            <p className="mt-2">Billing date:
              <strong> </strong></p>
            <p className="mt-1">Payment method:
              <strong> </strong></p>
            <p className="mt-1">Subscription ID:
              <code className="text-sm break-all"> sub_01jfttgqmhvbh0r46vzjaq4r3e</code></p>
          </div>
        </section>

        <section className="billing-summary bg-gray-50 shadow-md p-6 rounded-xl flex-1">
          <div>
            <h3 className="text-gray-800 font-bold text-lg">Products</h3>
            <p className="mt-2">
              Start up </p>

            {/* <span className="text-sm text-gray-500 mt-4 mb-4">May 5, 2025 – Jun 5, 2025</span>
              <span className="p-1 bg-green-200 rounded-sm flex-1 text-green-600 text-sm font-medium">Recurring payment</span> */}

            <div className="mt-2">
              <span className="text-sm text-gray-500">May 5, 2025 – Jun 5, 2025</span>
            </div>
            <div className="mt-2">
              <span className="p-1 bg-green-200 rounded-sm flex-1 text-green-600 text-sm font-medium">Recurring payment</span>
            </div>

            <div className="mt-4">

              <hr className="my-2 border-t border-gray-300" />

              <p className="mt-4">Subtotal: $29.99</p>
              <p>Tax: $3.00</p>

              <hr className="my-4 border-t border-gray-300" />

              <p className="font-bold">Total (Inc. tax): $32.99</p>
            </div>

          </div>
        </section>
      </div>




      <div className="mt-8 p-4 bg-gray-50 shadow-md rounded-xl flex items-center justify-between">
        <div>
          <p className="font-semibold">
            Monthly</p>
          <p className="text-gray-600 text-sm mt-2 mb-2">
            $32.99/month</p>

          <span className=" p-1 bg-green-200 rounded-sm flex-1 text-green-600 text-sm">
            ● Active</span>

        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded-md">
          Cancel Subscription</button>
      </div>



    </div>
  );
};

export default ManageSubscription;
