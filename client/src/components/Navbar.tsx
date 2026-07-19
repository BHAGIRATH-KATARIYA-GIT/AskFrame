import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-100 bg-white/80 px-6 py-4 backdrop-blur-md md:px-12">
      <NavLink to={"/"}>
        <div className="flex cursor-pointer items-center space-x-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-lg font-bold text-white shadow-md shadow-indigo-200">
            AF
          </div>

          <span className="text-xl font-bold tracking-tight text-slate-900">
            AskFrame
          </span>
        </div>
      </NavLink>

      <nav className="hidden items-center space-x-8 md:flex">
        <Link
          to="/"
          className="border-b-2 border-indigo-600 pb-1 pt-0.5 text-sm font-semibold text-indigo-600"
        >
          Home
        </Link>

        <Link
          to="/"
          className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-800"
          onClick={() => {
            document
              .getElementById("features")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Features
        </Link>

        <Link
          to="/dashboard"
          className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-800"
        >
          Dashboard
        </Link>
      </nav>

      <div className="hidden items-center space-x-4 md:flex">
        <button className="px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 ">
          Log In
        </button>

        <button className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-100 transition-colors hover:bg-indigo-700">
          Start Asking
        </button>
      </div>
    </header>
  );
}
