import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-12 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-2xl font-bold text-brand-600 dark:text-brand-500">
              Bernwy
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              © 2025 Bernwy. All Rights Reserved.
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              Suite 4189, 601 International House, 223 Regent Street, London W1B 2QD, England
            </p>
          </div>
          
          <div className="flex gap-6 text-sm font-medium text-brand-600 dark:text-brand-400">
            <Link to="#" className="hover:underline">Privacy Policy</Link>
            <Link to="#" className="hover:underline">Terms of Service</Link>
            <Link to="#" className="hover:underline">Support</Link>
            <Link to="#" className="hover:underline">API Docs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
