import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { Home, ShieldCheck, TrendingUp, MessageSquare, Briefcase, Users, FileText, Play, Calendar } from 'lucide-react';

export default function Landing() {
  const features = [
    {
      icon: Home,
      title: 'Manage your property efficiently',
      description: 'Manage your real estate investments from anywhere and unlock returns. Real-time performance metrics and centralized dashboard for all properties.',
      cta: 'Read Our Blog',
    },
    {
      icon: ShieldCheck,
      title: 'Secure Payments by Stripe',
      description: 'Strategic partnership with Stripe for global online payments.',
    },
    {
      icon: TrendingUp,
      title: 'Financial Data & Decisions',
      description: 'Understand investors\' needs with powerful asset performance analytics.',
    },
    {
      icon: MessageSquare,
      title: 'Encrypted Messaging',
      description: 'Secure end-to-end communication links for all stakeholders.',
    },
    {
      icon: Briefcase,
      title: 'Asset Management',
      description: 'Streamlined management of tradespeople and maintenance staff.',
    },
    {
      icon: Users,
      title: 'Tenant Management',
      description: 'Build trust and manage relationships effortlessly.',
    },
    {
      icon: Calendar,
      title: 'Inspections',
      description: 'Schedule inspections days, weeks, or months ahead.',
    },
    {
      icon: Users,
      title: 'Multi-user Permissions',
      description: 'Control access levels for your entire property team.',
    },
  ];

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-white px-4 text-center dark:from-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
           <img 
             src="https://picsum.photos/seed/city/1920/1080" 
             alt="City background" 
             className="h-full w-full object-cover"
             referrerPolicy="no-referrer"
           />
        </div>
        
        <div className="z-10 mx-auto max-w-4xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:border-brand-800 dark:bg-brand-900/30 dark:text-brand-400">
              All Features at a Glance
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl dark:text-white"
          >
            Put Money Back <br />
            <span className="text-brand-600">Into Your pocket</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300"
          >
            Our comprehensive suite of tools designed to make property management effortless. Manage your real estate investments from anywhere and unlock returns.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" className="px-8">Get Started</Button>
            <Button size="lg" variant="ghost" className="px-8">Watch Demo</Button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900 ${index === 0 ? 'md:row-span-2' : ''}`}
            >
              <div className={`mb-6 inline-flex rounded-xl bg-brand-50 p-3 text-brand-600 dark:bg-brand-900/20 dark:text-brand-400`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
              {feature.cta && (
                <Button variant="outline" className="mt-6">
                  {feature.cta}
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solutions Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center gap-4">
          <div className="h-1 w-8 bg-brand-600"></div>
          <h2 className="text-3xl font-bold uppercase tracking-wide text-brand-600 dark:text-brand-500">Solutions</h2>
        </div>
        
        <div className="rounded-3xl bg-brand-50 p-8 dark:bg-brand-900/10 md:p-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="text-6xl text-brand-300">“</div>
              <p className="text-xl font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                My property real estate investment platform from Bernwy provides the most efficient and accurate tools to report to investors a continuous stream of insights into their property assets' performance.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white font-bold">JD</div>
                <div>
                  <div className="font-bold text-brand-600 dark:text-brand-400">John Doe</div>
                  <div className="text-sm text-slate-500">Real Estate Investor</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-brand-100/50 p-6 text-center dark:bg-brand-900/20">
                <div className="text-3xl font-bold text-brand-600 dark:text-brand-400">98%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Tenant Retention</div>
              </div>
              <div className="rounded-2xl bg-brand-100/50 p-6 text-center dark:bg-brand-900/20">
                <div className="text-3xl font-bold text-brand-600 dark:text-brand-400">15%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">ROI Increase</div>
              </div>
              <div className="rounded-2xl bg-brand-100/50 p-6 text-center dark:bg-brand-900/20">
                <div className="text-3xl font-bold text-brand-600 dark:text-brand-400">24/7</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Asset Monitoring</div>
              </div>
              <div className="rounded-2xl bg-brand-100/50 p-6 text-center dark:bg-brand-900/20">
                <div className="text-3xl font-bold text-brand-600 dark:text-brand-400">0.5%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Late Payments</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center gap-4">
          <div className="h-1 w-8 bg-brand-600"></div>
          <h2 className="text-3xl font-bold uppercase tracking-wide text-brand-600 dark:text-brand-500">Resources</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: FileText, title: 'Property Management Guides', desc: 'Learn how about our property management guides and required templates for your assets.', cta: 'View Guides' },
            { icon: Play, title: 'Tutorial Videos', desc: 'Step-by-step video tutorials on maximizing your portfolio\'s returns using Bernwy.', cta: 'Tutorial Videos' },
            { icon: TrendingUp, title: 'Investment Blog', desc: 'Stay updated with the latest real estate investment trends and platform news.', cta: 'Investment Blog' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col rounded-3xl bg-brand-50 p-8 dark:bg-brand-900/10">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mb-6 flex-1 text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
              <Button variant="ghost" className="w-full">
                {item.cta}
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing / Contact */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl bg-brand-50 p-8 dark:bg-brand-900/10">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Free</h3>
            <div className="mt-2 flex items-baseline">
              <span className="text-4xl font-bold text-brand-600 dark:text-brand-400">$0</span>
              <span className="ml-1 text-slate-500">/month</span>
            </div>
            <ul className="mt-8 space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2"><span className="text-brand-500">✓</span> Standard Features</li>
              <li className="flex items-center gap-2"><span className="text-brand-500">✓</span> Up to 2 Properties</li>
              <li className="flex items-center gap-2"><span className="text-brand-500">✓</span> Basic Reports</li>
            </ul>
            <Button className="mt-8 w-full bg-brand-100 text-brand-700 hover:bg-brand-200 dark:bg-brand-900/30 dark:text-brand-300 dark:hover:bg-brand-900/50">Get Started</Button>
          </div>

          <div className="relative rounded-3xl border-2 border-brand-500 bg-brand-50 p-8 dark:bg-brand-900/20">
            <div className="absolute -top-4 right-8 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-white">POPULAR</div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Professional</h3>
            <div className="mt-2 flex items-baseline">
              <span className="text-4xl font-bold text-brand-600 dark:text-brand-400">$35</span>
              <span className="ml-1 text-slate-500">/month</span>
            </div>
            <ul className="mt-8 space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2"><span className="text-brand-500">✓</span> All Free features</li>
              <li className="flex items-center gap-2"><span className="text-brand-500">✓</span> Unlimited Properties</li>
              <li className="flex items-center gap-2"><span className="text-brand-500">✓</span> Advanced Analytics</li>
            </ul>
            <Button className="mt-8 w-full">Get Started</Button>
          </div>

          <div className="rounded-3xl bg-brand-50 p-8 dark:bg-brand-900/10">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Contact Us</h3>
            <div className="mt-6 space-y-4">
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-500">Email</label>
                <input type="email" placeholder="hello@example.com" className="w-full rounded-xl border-none bg-brand-100/50 px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 dark:bg-brand-900/30" />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-500">Message</label>
                <textarea placeholder="How can we help?" rows={3} className="w-full rounded-xl border-none bg-brand-100/50 px-4 py-3 text-sm focus:ring-2 focus:ring-brand-500 dark:bg-brand-900/30"></textarea>
              </div>
              <Button className="w-full">Send Message ➤</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-50 py-20 text-center dark:bg-brand-900/20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-4 text-4xl font-bold text-brand-600 dark:text-brand-500">Ready to transform<br/>your property management?</h2>
          <p className="mb-8 text-slate-600 dark:text-slate-400">Join thousands of landlords who are increasing their returns with Bernwy's comprehensive property management platform.</p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="px-8">Get Started Now</Button>
            <Button size="lg" variant="ghost" className="px-8">Contact Sales</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
