'use client'

import { motion } from 'framer-motion'

const InfrastructureDiagram = () => {
  // مسیر راه‌حل
  const solutionArcPath = 'M 40 100 Q 125 10, 210 100'

  // Variants
  const diagramVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  }

  const pathVariants = (delay = 0, duration = 2) => ({
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration, ease: 'easeInOut' as const, delay },
    },
  })

  const itemVariants = (delay = 0) => ({
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay },
    },
  })

  return (
    <motion.svg
      width="100%"
      height="auto"
      viewBox="0 0 250 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={diagramVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="w-full max-w-sm sm:max-w-md mx-auto"
      style={{ transform: 'rotateY(180deg)' }}
    >
      {/* پس‌زمینه گرید */}
      <rect width="100%" height="100%" fill="rgba(255,255,255,0.02)" />
      <path
        d="M 0 10 H 250 M 0 20 H 250 M 0 30 H 250 M 0 40 H 250 M 0 50 H 250 M 0 60 H 250 M 0 70 H 250 M 0 80 H 250 M 0 90 H 250 M 0 100 H 250 M 0 110 H 250 M 0 120 H 250 M 0 130 H 250 M 0 140 H 250 M 0 150 H 250"
        stroke="rgba(255,255,255,0.03)"
        strokeWidth="0.5"
      />
      <path
        d="M 10 0 V 160 M 20 0 V 160 M 30 0 V 160 M 40 0 V 160 M 50 0 V 160 M 60 0 V 160 M 70 0 V 160 M 80 0 V 160 M 90 0 V 160 M 100 0 V 160 M 110 0 V 160 M 120 0 V 160 M 130 0 V 160 M 140 0 V 160 M 150 0 V 160 M 160 0 V 160 M 170 0 V 160 M 180 0 V 160 M 190 0 V 160 M 200 0 V 160 M 210 0 V 160 M 220 0 V 160 M 230 0 V 160 M 240 0 V 160"
        stroke="rgba(255,255,255,0.03)"
        strokeWidth="0.5"
      />

      {/* قوس راه‌حل (قوی) */}
      <motion.path
        d={solutionArcPath}
        stroke="var(--primary-accent)"
        strokeWidth="3.5"
        strokeLinecap="round"
        variants={pathVariants(1.5, 2.0)}
        fill="none"
      />

      {/* نقاط شروع و پایان */}
      <motion.circle
        cx="40"
        cy="100"
        r="6"
        fill="var(--neutral-light)"
        variants={itemVariants(0.5)}
      />
      <text
        x="40"
        y="122"
        fill="var(--neutral-light)"
        fontSize="10"
        textAnchor="middle"
        transform="scale(-1, 1) translate(-80, 0)"
      >
        ایده
      </text>

      <motion.circle
        cx="210"
        cy="100"
        r="8"
        stroke="var(--primary-accent)"
        strokeWidth="2"
        fill="none"
        variants={itemVariants(2.0)}
      />
      <text
        x="210"
        y="122"
        fill="var(--primary-accent)"
        fontSize="10"
        textAnchor="middle"
        transform="scale(-1, 1) translate(-420, 0)"
      >
        فناوری
      </text>

      {/* زیرساخت */}
      <motion.rect
        x="30"
        y="140"
        width="190"
        height="20"
        fill="var(--neutral-light)"
        rx="2"
        variants={itemVariants(1.0)}
        opacity="0.3"
      />
      <text
        x="125"
        y="153"
        fill="var(--primary-dark)"
        fontSize="10"
        textAnchor="middle"
        transform="scale(-1, 1) translate(-250, 0)"
      >
        زیربنای فنی
      </text>
    </motion.svg>
  )
}

const Problem = () => {
  return (
    <section id="problem" className="py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex justify-center items-center order-2 lg:order-1"
          >
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md">
              <InfrastructureDiagram />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center lg:text-right order-1 lg:order-2"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 leading-tight">
              سرگردان میان کدهای پیچیده و وعده‌های زیبا؟
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              در دنیای توسعه وب، بسیاری از پروژه‌ها یا در "حلقه‌های بی‌پایان" فنی
              گم می‌شوند و هرگز به مقصد نمی‌رسند، یا فقط یک "آرک زیبا" هستند که
              زیربنای فنی مستحکمی ندارند. کسب‌وکارها به یک وب‌سایت نیاز ندارند؛
              آن‌ها به یک <strong className="text-primary">مسیر</strong> روشن نیاز دارند.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Problem