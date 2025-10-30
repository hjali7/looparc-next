'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const portfolioData = [
  {
    id: 1,
    title: 'وب‌سایت فروشگاهی نیلارا',
    category: 'طراحی وب‌سایت فروشگاهی + SEO',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    challenge:
      'نیاز به یک وب‌سایت فروشگاهی با تجربه کاربری روان و زیرساخت فنی قوی برای مدیریت سفارشات.',
    solution:
      'ما با ترکیب یک Loop فنی (پیاده‌سازی بر بستر... و اتصال به درگاه) و یک Arc استراتژیک (طراحی UI/UX سفارشی بر اساس سفر مشتری)، ترافیک ارگانیک را ۳۰٪ افزایش دادیم.',
  },
  {
    id: 2,
    title: 'اپلیکیشن فیت‌کلاب',
    category: 'طراحی UI/UX اپلیکیشن',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    challenge:
      'طراحی یک رابط کاربری جذاب و ساده برای یک اپلیکیشن ورزشی با قابلیت‌های پیچیده.',
    solution:
      "با تمرکز بر 'سفر کاربر' (Arc)، یک سیستم طراحی (Design System) یکپارچه ایجاد کردیم که استفاده از اپلیکیشن را بسیار آسان و لذت‌بخش کرد.",
  },
  {
    id: 3,
    title: 'پلتفرم هوشمند Smarteeth',
    category: 'طراحی AI Agent + وب‌سایت',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    challenge:
      'اتصال یک عامل هوشمند (AI) به وب‌سایت برای پاسخگویی به سوالات دندانپزشکی.',
    solution:
      "یکپارچه‌سازی 'Loop' فنی AI با یک 'Arc' گفتگوی روان، که منجر به کاهش ۴۰٪ تماس‌های پشتیبانی و افزایش رضایت کاربران شد.",
  },
  {
    id: 4,
    title: 'پلتفرم هوشمند Smarteeth',
    category: 'طراحی AI Agent + وب‌سایت',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    challenge:
      'اتصال یک عامل هوشمند (AI) به وب‌سایت برای پاسخگویی به سوالات دندانپزشکی.',
    solution:
      "یکپارچه‌سازی 'Loop' فنی AI با یک 'Arc' گفتگوی روان، که منجر به کاهش ۴۰٪ تماس‌های پشتیبانی و افزایش رضایت کاربران شد.",
  },
]

const modalBackdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const modalContentVariants = {
  hidden: { opacity: 0, y: -50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: { opacity: 0, y: 50, scale: 0.9 },
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
}

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<typeof portfolioData[0] | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % portfolioData.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + portfolioData.length) % portfolioData.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [currentIndex])

  return (
    <>
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-black text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            پروژه‌هایی که کامل کرده‌ایم.
          </motion.h2>

          {/* Slider Container */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute inset-0"
                >
                  <Card
                    className="h-full cursor-pointer overflow-hidden group"
                    onClick={() => setSelectedProject(portfolioData[currentIndex])}
                  >
                    <div className="relative h-2/3 overflow-hidden">
                      <Image
                        src={portfolioData[currentIndex].imageUrl}
                        alt={portfolioData[currentIndex].title}
                        fill
                        className="object-cover transition-transform group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-bold text-lg">مشاهده جزئیات</span>
                      </div>
                    </div>
                    <CardContent className="p-6 h-1/3 flex flex-col justify-center">
                      <h3 className="font-bold text-xl mb-2">{portfolioData[currentIndex].title}</h3>
                      <p className="text-muted-foreground">{portfolioData[currentIndex].category}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 -translate-y-1/2 right-4 bg-background/80 hover:bg-background"
              onClick={prevSlide}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-1/2 -translate-y-1/2 left-4 bg-background/80 hover:bg-background"
              onClick={nextSlide}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {portfolioData.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                    }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
            {portfolioData.map((project, index) => (
              <motion.div
                key={project.id}
                className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${index === currentIndex ? 'border-primary' : 'border-transparent'
                  }`}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative h-20 md:h-24">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-2">
                  <h4 className="text-xs font-medium truncate">{project.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            variants={modalBackdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "spring", stiffness: 100 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 left-4 z-10 bg-black/50 hover:bg-black/70 text-white"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-4 h-4" />
                </Button>
                <div className="relative h-64 md:h-80">
                  <Image
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-black mb-2">{selectedProject.title}</h2>
                <span className="text-primary font-medium mb-6 block">
                  {selectedProject.category}
                </span>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-lg mb-2">چالش:</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">راه‌حل LoopArc:</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Portfolio