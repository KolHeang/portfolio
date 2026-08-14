"use client";

import Link from "next/link";

export default function OfflinePage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12 relative overflow-hidden bg-[#0B1120] text-slate-100">
      {/* Background glowing gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-lg w-full text-center border border-slate-800/80 bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-2xl shadow-emerald-500/5">
        {/* Offline Icon */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
          <svg
            className="w-10 h-10 animate-pulse"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.75}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3l18 18M8.535 8.535A8.966 8.966 0 0112 7.828c3.18 0 6.06 1.48 7.915 3.79M16.89 16.89A8.963 8.963 0 0112 18.172c-2.486 0-4.757-.91-6.5-2.422M1.42 9A12.94 12.94 0 0112 5.078c3.23 0 6.225 1.096 8.65 2.94M5.636 5.636L4 4m14.364 14.364l1.636 1.636"
            />
          </svg>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
          You are currently offline
        </h1>

        <p className="text-slate-400 text-sm sm:text-base mb-8 leading-relaxed">
          It looks like you’ve lost internet connectivity. Don&apos;t worry—any cached portfolio pages and assets remain available.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-semibold hover:opacity-95 active:scale-[0.98] transition-all shadow-lg shadow-emerald-500/20"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Try Reconnecting
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-slate-700 bg-slate-800/60 hover:bg-slate-800 text-slate-200 font-medium transition-all"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}
