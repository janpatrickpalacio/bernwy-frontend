import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { CheckCircle, Clock, FileText, MessageSquare, Shield, Users, Settings, BarChart } from 'lucide-react';

export default function Product() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Header */}
      <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden bg-slate-50 px-4 text-center dark:bg-slate-950">
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
           <img 
             src="https://picsum.photos/seed/tech/1920/1080" 
             alt="Background" 
             className="h-full w-full object-cover"
             referrerPolicy="no-referrer"
           />
        </div>
        <div className="z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold text-brand-600 sm:text-7xl dark:text-brand-500"
          >
            Our Product
          </motion.h1>
          <div className="mt-4 h-1 w-24 mx-auto bg-brand-500 rounded-full"></div>
        </div>
      </section>

      {/* Main Feature Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-brand-600 dark:text-brand-500">
              Manage your<br/>property efficiently
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              We provide innovative property-tech solutions which equip landlords with digital tools to manage their assets effectively.
            </p>
            
            <div className="space-y-4">
              {[
                'Centralized dashboard for all properties',
                'Real-time property performance metrics',
                'Automated maintenance scheduling',
                'Document storage and organization',
                'Custom property reports'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-500" />
                  <span className="text-slate-700 dark:text-slate-300">{item}</span>
                </div>
              ))}
            </div>
            
            <Button variant="ghost" className="mt-4">
              Start your Free Trial →
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center rounded-3xl bg-teal-100/50 p-8 text-center dark:bg-teal-900/20">
              <div className="mb-4 rounded-full bg-teal-500 p-3 text-white">
                <Settings className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-medium text-teal-700 dark:text-teal-300">Register New Property</h3>
            </div>
            <div className="flex flex-col items-center justify-center rounded-3xl bg-orange-100/50 p-8 text-center dark:bg-orange-900/20">
              <div className="mb-4 rounded-full bg-orange-500 p-3 text-white">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-medium text-orange-700 dark:text-orange-300">Payment History</h3>
            </div>
            <div className="flex flex-col items-center justify-center rounded-3xl bg-purple-100/50 p-8 text-center dark:bg-purple-900/20">
              <div className="mb-4 rounded-full bg-purple-500 p-3 text-white">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-medium text-purple-700 dark:text-purple-300">View Financial Statements</h3>
            </div>
            <div className="flex flex-col items-center justify-center rounded-3xl bg-rose-100/50 p-8 text-center dark:bg-rose-900/20">
              <div className="mb-4 rounded-full bg-rose-500 p-3 text-white">
                <Settings className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-medium text-rose-700 dark:text-rose-300">Schedule Inspection</h3>
            </div>
          </div>
        </div>
      </section>

      {/* All Features Grid */}
      <section className="bg-brand-50/50 py-20 dark:bg-brand-900/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-brand-600 dark:text-brand-500">All Features at a Glance</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">Our comprehensive suite of tools designed to make property management effortless.</p>
            <Button variant="ghost" className="mt-6">Home</Button>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Property Management', desc: 'We provide innovative property-tech solutions which equip landlords with digital tools to manage efficiently.', color: 'bg-blue-100 dark:bg-blue-900/20' },
              { title: 'Secured Payments', desc: 'We established a strategic partnership with Stripe, a leading global online payment processor.', color: 'bg-slate-200 dark:bg-slate-800' },
              { title: 'Financial Data', desc: 'We understand investors need to understand the performance of their assets. We generate clear reports.', color: 'bg-slate-200 dark:bg-slate-800' },
              { title: 'Contract Library', desc: 'Our easy upload feature allows you to build your contract and document library safely.', color: 'bg-slate-200 dark:bg-slate-800' },
              { title: 'Communication Tools', desc: 'To manage property-related activities, create encrypted communication links through our secure platform.', color: 'bg-blue-100 dark:bg-blue-900/20' },
              { title: 'Inspections Management', desc: 'Schedule inspection dates days, weeks, or months in advance. Bernwy offers seamless scheduling.', color: 'bg-blue-100 dark:bg-blue-900/20' },
              { title: 'Asset Management', desc: 'Tradespeople are vital to managing your real estate investment. We streamlined the process.', color: 'bg-slate-200 dark:bg-slate-800' },
              { title: 'Tenant Management', desc: 'We understand the level of faith and trust between landlords and tenants. We create transparency.', color: 'bg-blue-100 dark:bg-blue-900/20' },
              { title: 'Multi-user Permissions', desc: 'We understand it\'s hard to be everywhere at once, so we created a feature allowing multiple admins.', color: 'bg-slate-200 dark:bg-slate-800' },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <div className={`mb-6 h-48 w-full rounded-2xl ${feature.color}`}></div>
                <h3 className="mb-3 text-xl font-bold text-brand-600 dark:text-brand-500">{feature.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-brand-100/50 py-20 text-center dark:bg-brand-900/20">
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
