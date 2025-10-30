'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Code, 
  Database, 
  MessageSquare, 
  Cpu, 
  Layout, 
  TrendingUp, 
  Edit, 
  UserCheck, 
  PenTool 
} from 'lucide-react'

const servicesData = {
  loop: [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'طراحی و پیاده‌سازی وب‌سایت',
      desc: 'ساخت پلتفرم‌های پایه با کدهای تمیز و عملکرد بهینه.',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'پلن پشتیبانی فنی (نگهداری)',
      desc: 'مانیتورینگ، بروزرسانی و پشتیبان‌گیری منظم برای تضمین سلامت سایت.',
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'پلن چت آنلاین و داشبورد',
      desc: 'پیاده‌سازی ابزارهای ارتباطی زنده برای تعامل مستقیم با کاربران.',
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'طراحی AI AGENT (عامل هوشمند)',
      desc: 'اتوماسیون پاسخ‌دهی و پشتیبانی ۲۴/۷ با هوش مصنوعی.',
    },
  ],
  arc: [
    {
      icon: <Layout className="w-8 h-8" />,
      title: 'طراحی UI/UX (اپلیکیشن و وب)',
      desc: 'خلق تجربیات کاربری روان و زیباپسند که سفر کاربر را لذت‌بخش می‌کند.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'پلن SEO (بهینه‌سازی)',
      desc: 'تحقیق کلمات کلیدی و بهینه‌سازی فنی و محتوایی برای رتبه‌های برتر.',
    },
    {
      icon: <Edit className="w-8 h-8" />,
      title: 'پلن تولید محتوا',
      desc: 'تولید محتوای استراتژیک و SEO-Ready برای غنی‌سازی وب‌سایت.',
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: 'پلن پشتیبان سایت (ادمین)',
      desc: 'مدیریت اجرایی، درج محتوا و پیگیری سفارشات برای پویایی سایت.',
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: 'طراحی بصری (لوگو، 3D، ویدیو)',
      desc: 'تعریف و تکمیل هویت بصری برند شما در تمام ابعاد دیجیتال.',
    },
  ],
}

const Services = () => {
  const [activeTab, setActiveTab] = useState<'loop' | 'arc'>('loop')

  const listVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    hidden: { opacity: 0 },
  }

  const itemVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  }

  return (
    <section id="services" className="py-20" style={{backgroundColor: 'var(--primary-navy)'}}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-black text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          خدماتی که ایده را به اوج می‌رسانند.
        </motion.h2>

        {/* Tab buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-card rounded-lg p-1">
            <button
              className={`relative px-6 py-3 rounded-md transition-all ${
                activeTab === 'loop' 
                  ? 'text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setActiveTab('loop')}
            >
              مهندسی دقیق | LOOP ⟳
              {activeTab === 'loop' && (
                <motion.div 
                  className="absolute inset-0 bg-primary rounded-md -z-10" 
                  layoutId="activeTab" 
                />
              )}
            </button>
            <button
              className={`relative px-6 py-3 rounded-md transition-all ${
                activeTab === 'arc' 
                  ? 'text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setActiveTab('arc')}
            >
              طراحی استراتژیک | ARC ◠
              {activeTab === 'arc' && (
                <motion.div 
                  className="absolute inset-0 bg-primary rounded-md -z-10" 
                  layoutId="activeTab" 
                />
              )}
            </button>
          </div>
        </div>

        {/* Tab content */}
        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            {activeTab === 'loop' && (
              <motion.div
                key="loop"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={listVariants}
                className="space-y-8"
              >
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-primary">
                    ستون‌های فنی مستحکم برای آرک موفقیت شما.
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {servicesData.loop.map((service, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="text-primary flex-shrink-0">
                              {service.icon}
                            </div>
                            <div>
                              <h4 className="font-bold mb-2">{service.title}</h4>
                              <p className="text-muted-foreground">{service.desc}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'arc' && (
              <motion.div
                key="arc"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={listVariants}
                className="space-y-8"
              >
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-primary">
                    مسیری زیبا، هوشمند و هدفمند برای برند شما.
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {servicesData.arc.map((service, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="text-primary flex-shrink-0">
                              {service.icon}
                            </div>
                            <div>
                              <h4 className="font-bold mb-2">{service.title}</h4>
                              <p className="text-muted-foreground">{service.desc}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Services