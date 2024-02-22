import { auth, clerkClient } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { OrgDetails, SessionDetails, UserDetails } from "./details";
import Link from "next/link";
import { useState } from "react";

export default async function DashboardPage() {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  const user = await clerkClient.users.getUser(userId);

  return (
    <div className="px-8 py-12 sm:py-16 md:px-20">
      {user && (
        <>
          <h1 className="text-3xl font-semibold text-black">
            👋 Hi, {user.firstName || `Stranger`}
          </h1>
          <div className="grid gap-4 mt-8 lg:grid-cols-3">
          {user.imageUrl && (
                <div className="px-8 py-2">
                  <dd className="mt-1 text-sm text-gray-600 sm:mt-0 sm:col-span-2">
                    <img
                      src={user.imageUrl}
                      className="rounded-full w-48 h-48"
                    />
                  </dd>
                </div>
              )}
              <div className="text-3xl">
              <div>{user.firstName} {user.lastName}</div>
              <div>{user.emailAddresses.map((email) => (
                    <div key={email.id} className="flex gap-2 mb-1">
                      {email.emailAddress}
                      {user.primaryEmailAddressId === email.id && (
                        <span className="text-3xl bg-primary-50 text-primary-700 rounded-2xl px-2 font-medium pt-[2px]">
                          Patient
                        </span>
                      )}
                    </div>
                  ))} </div>
              </div>
            {/* <UserDetails /> */}
          </div>
        </>
      )}
    </div>
  );
}
