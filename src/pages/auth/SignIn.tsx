import type { FormEvent } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/context/AuthContext';
import type { LoginFormData } from '@/lib/validation';

export default function SignIn() {
  const navigate = useNavigate();
  const { signIn, isLoading, error, clearError } = useAuth();
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    clearError();

    try {
      await signIn(formData);
      navigate('/dashboard');
    } catch {
      // Error handled by AuthContext
    }
  };

  const handleInputChange = (field: keyof LoginFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="relative flex min-h-[calc(100vh-64px)] items-center justify-center overflow-hidden bg-slate-100 dark:bg-slate-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
        <img
          src="https://picsum.photos/seed/building/1920/1080"
          alt="Background"
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="z-10 w-full max-w-md px-4">
        <div className="flex flex-col items-center space-y-2 mb-8">
          <h1 className="text-4xl font-bold text-brand-600 dark:text-brand-500">Bernwy</h1>
        </div>

        <div className="rounded-3xl border border-white/50 bg-white/60 p-8 shadow-xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60">
          <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">Login</h2>

          {error && (
            <div className="mb-4 rounded-xl bg-red-50 p-3 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs text-slate-500 dark:text-slate-400">Email Address</label>
              <Input
                placeholder="Enter Email Address"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-500 dark:text-slate-400">Password</label>
              <Input
                placeholder="Enter Password"
                type="password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                required
              />
            </div>

            <div className="pt-2">
              <Button type="submit" className="w-full text-lg h-12" isLoading={isLoading}>
                Login
              </Button>
            </div>

            <div>
              <Button
                type="button"
                variant="whatsapp"
                className="w-full text-lg h-12 gap-2"
                onClick={() => navigate('/auth/whatsapp-otp')}
              >
                <MessageCircle className="h-5 w-5" />
                Login with WhatsApp
              </Button>
            </div>

            <div className="pt-2">
              <Button
                type="button"
                variant="outline"
                className="w-full h-12 border-slate-300 bg-slate-200/50 text-brand-600 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800/50 dark:text-brand-400"
                onClick={() => navigate('/auth/sign-up')}
              >
                Don't have an account? Create now
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => navigate('/auth/forgot-password')}
              className="text-sm text-slate-500 hover:underline dark:text-slate-400"
            >
              Forgot Password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
