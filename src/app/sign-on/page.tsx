"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { ClerkProvider, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
const LoginPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  const router = useRouter();

  useEffect(() => {
    const role = user?.publicMetadata.role;

    if (role) {
      router.push(`/${role}`);
    }
  }, [user, router]);

  return (
    <SignIn.Root>
      <SignIn.Step
        name="start"
        className="bg-white p-12 rounded-md shadow-2xl flex flex-col gap-2"
      >
        Hello
      </SignIn.Step>
    </SignIn.Root>
  );
};

export default LoginPage;
