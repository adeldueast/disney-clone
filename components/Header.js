import React from "react";
import Image from "next/image";
import {
  HomeIcon,
  SearchIcon,
  PlusIcon,
  StarIcon,
} from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { signIn, signOut, useSession, getSession } from "next-auth/client";

function Header() {
  const [session, loading] = useSession();
  const router = useRouter();

  return (
    <header className="sticky bg-[#040714] top-0 z-[1000] h-[72px] flex items-center px-10  py-6 md:px-12">
      <Image
        src="/images/logo.svg"
        width={80}
        height={80}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />

      {session && (
        <div className="hidden ml-10 md:flex items-center space-x-6">
          <a className="header-link group">
            <HomeIcon className="h-4" />
            <span className="span">Home</span>
          </a>
          <a className="header-link group">
            <SearchIcon className="h-4" />
            <span className="span">Search</span>
          </a>
          <a className="header-link group">
            <PlusIcon className="h-4" />
            <span className="span">Watchlist</span>
          </a>
          <a className="header-link group">
            <StarIcon className="h-4" />
            <span className="span">Originals</span>
          </a>
          <a className="header-link group">
            <img src="/images/movie-icon.svg" alt="" className="h-5" />
            <span className="span">Movies</span>
          </a>
          <a className="header-link group">
            <img src="/images/series-icon.svg" alt="" className="h-5" />
            <span className="span">Series</span>
          </a>
        </div>
      )}

      {!session ? (
        <button
          onClick={signIn}
          className="ml-auto px-4 py-1.5 uppercase  border rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-300"
        >
          Login
        </button>
      ) : (
        <div className="ml-auto border-2 rounded-full  w-14 h-14 cursor-pointer">
          <Image
            onClick={signOut}
            width={56}
            height={56}
            objectFit="cover"
            src={session.user.image}
            className="rounded-full"
          />
        </div>
      )}
    </header>
  );
}

export default Header;
