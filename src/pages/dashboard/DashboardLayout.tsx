import { Outlet, Link, useNavigate } from 'react-router-dom';
import { LogOut, LayoutDashboard, Building2, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';

export function DashboardLayout() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth/sign-in');
  };

  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-slate-200 dark:border-slate-800">
            <h1 className="text-2xl font-bold text-brand-600 dark:text-brand-500">Bernwy</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            <Link to="/dashboard">
              <Button variant="ghost" className="w-full justify-start gap-3">
                <LayoutDashboard className="h-5 w-5" />
                Overview
              </Button>
            </Link>
            <Link to="/dashboard/properties">
              <Button variant="ghost" className="w-full justify-start gap-3">
                <Building2 className="h-5 w-5" />
                Properties
              </Button>
            </Link>
            <Link to="/dashboard/profile">
              <Button variant="ghost" className="w-full justify-start gap-3">
                <User className="h-5 w-5" />
                Profile
              </Button>
            </Link>
            <Link to="/dashboard/settings">
              <Button variant="ghost" className="w-full justify-start gap-3">
                <Settings className="h-5 w-5" />
                Settings
              </Button>
            </Link>
          </nav>

          {/* User Info & Logout */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-800">
            <div className="mb-3 px-3">
              <p className="text-sm font-medium text-slate-900 dark:text-white">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{user?.email}</p>
            </div>
            <Button
              variant="outline"
              className="w-full justify-start gap-3"
              onClick={handleSignOut}
            >
              <LogOut className="h-5 w-5" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
