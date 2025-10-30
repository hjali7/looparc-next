'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Search, Lightbulb, Code2, Rocket } from 'lucide-react'

const processSteps = [
  {
    icon: <Search className="w-8 h-8" />,
    title: 'تحلیل و کشف',
    description: 'درک عمیق از نیازهای شما و تحلیل بازار هدف',
    details: ['بررسی رقبا', 'تحلیل مخاطب هدف', 'تعریف اهداف پروژه']
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'طراحی و استراتژی',
    description: 'خلق راه‌حل‌های خلاقانه و طراحی تجربه کاربری',
    details: ['طراحی UI/UX', 'معماری اطلاعات', 'انتخاب تکنولوژی']
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: 'توسعه و پیاده‌سازی',
    description: 'کدنویسی تمیز و پیاده‌سازی با بهترین استانداردها',
    details: ['توسعه Frontend', 'توسعه Backend', 'تست و بهینه‌سازی']
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'راه‌اندازی و پشتیبانی',
    description: 'انتشار پروژه و پشتیبانی مداوم برای موفقیت شما',
    details: ['Deploy و راه‌اندازی', 'آموزش تیم', 'پشتیبانی مداوم']
  }
]

const Process = () => {
  return (
    <section id="process" className="py-20" style={{backgroundColor:'var(--primary-navy)'}}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-black text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          فرآیند کار ما
        </motion.h2>
        
        <motion.p
          className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5, delay: 0.1 }}
        >
          از ایده تا اجرا، ما در هر مرحله کنار شما هستیم
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full text-center relative overflow-hidden group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="absolute top-4 right-4 text-6xl font-black text-primary/10">
                    {index + 1}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="text-primary mb-4 flex justify-center">
                      {step.icon}
                    </div>
                    
                    <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {step.description}
                    </p>
                    
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center justify-center gap-2">
                          <span className="w-1 h-1 bg-primary rounded-full"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process