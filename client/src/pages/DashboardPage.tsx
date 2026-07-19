import UrlInputSection from '../components/UrlInputSection';
import FeatureTabs from '../components/FeatureTabs';
import ChatPanel from '../components/ChatPanel';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

export default function DashboardPage() {
  
  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1 px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <header className="mb-6">
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Chat With a YouTube Video
            </h1>

            <p className="mt-1 text-sm text-slate-500 sm:text-base">
              Add a YouTube video and ask questions about its content.
            </p>
          </header>

          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
            {/* Left section — 50% width */}
            <aside className="flex min-w-0 flex-col gap-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                <UrlInputSection />
                
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                <FeatureTabs />
              </div>
            </aside>

            {/* Right section — 50% width */}
            <section className="h-162.2 min-w-0 overflow-hidden relative bottom-20">
              <Outlet />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}