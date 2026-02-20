import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className="relative flex min-h-[calc(100vh-64px)] items-center justify-center overflow-hidden bg-slate-100 py-12 dark:bg-slate-950">
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
          
          <form className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs text-slate-500 dark:text-slate-400">Company Name</label>
              <Input placeholder="Enter Company Name" />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-500 dark:text-slate-400">First Name</label>
              <Input placeholder="Enter First Name" />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-500 dark:text-slate-400">Last Name</label>
              <Input placeholder="Enter Last Name" />
            </div>
            
            <div className="space-y-1">
              <label className="text-xs text-slate-500 dark:text-slate-400">Email Address</label>
              <Input placeholder="Enter Email Address" type="email" />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-500 dark:text-slate-400">Phone</label>
              <div className="flex gap-2">
                 <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-brand-50/50 px-3 dark:border-slate-800 dark:bg-slate-950">
                    <span className="text-lg">🇦🇺</span>
                 </div>
                 <Input placeholder="+61" className="flex-1" />
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="text-xs text-slate-500 dark:text-slate-400">Password</label>
              <Input placeholder="Enter Password" type="password" />
            </div>
            
            <div className="pt-2">
              <Button className="w-full text-lg h-12">Login</Button>
            </div>

            <div className="pt-2">
               <Link to="/auth/sign-in">
                <Button variant="outline" className="w-full h-12 border-slate-300 bg-slate-200/50 text-brand-600 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800/50 dark:text-brand-400">
                  Existing User? Login
                </Button>
               </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
