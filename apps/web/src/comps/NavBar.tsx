import React from "react";
import Link from "next/link";
import config from "@/config";
import ThemePicker from "@/comps/ThemePicker";

function NavBar({
  title = config.title,
  github = config.github,
  showHome = true,
}: {
  showHome?: boolean;
  title?: string;
  github?: string;
}) {
  return (
    <nav className="navbar bg-base-100 relative z-10">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">{title}</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {showHome && (
            <li>
              <Link href="/">Home</Link>
            </li>
          )}
          <li>
            <Link href={github}>Github</Link>
          </li>
          <li>
            <Link href={config.yrobot}>@yrobot</Link>
          </li>
          <li>
            <ThemePicker />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
