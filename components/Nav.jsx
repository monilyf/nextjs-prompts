import Link from "next/link";
import Image from "next/image";
// import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders} from 'next-auth/react'

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image src="/logo.png" width={32} height={32}/>
      </Link>
    </nav>
  )
};

export default Nav;
// flex-between w-full mb-16 pt-3