'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from '@formspree/react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Send } from 'lucide-react'

const ContactForm = () => {
  const [state, handleSubmit] = useForm("your-form-id") // Replace with your Formspree form ID
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    services: {
      websiteDesign: false,
      seo: false,
      consulting: false,
      adminPanel: false,
      contentGeneration: false,
      uiuxDesign: false,
      aiAgent: false
    }
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData({
      ...formData,
      services: {
        ...formData.services,
        [service]: checked
      }
    })
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await handleSubmit(e)
    if (state.succeeded) {
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        services: {
          websiteDesign: false,
          seo: false,
          consulting: false,
          adminPanel: false,
          contentGeneration: false,
          uiuxDesign: false,
          aiAgent: false
        }
      })
    }
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden" style={{
      '--grid-color-light': 'rgba(255, 255, 255, 0.04)',
      '--grid-color-heavy': 'rgba(255, 255, 255, 0.08)',
      '--grid-size-small': '10px',
      '--grid-size-large': '50px',
      backgroundColor: 'var(--primary-dark)',
      backgroundImage: `
          linear-gradient(to right, var(--grid-color-light) 1px, transparent 1px),
          linear-gradient(to bottom, var(--grid-color-light) 1px, transparent 1px),
          linear-gradient(to right, var(--grid-color-heavy) 1px, transparent 1px),
          linear-gradient(to bottom, var(--grid-color-heavy) 1px, transparent 1px)
        `,
      backgroundSize: `
          var(--grid-size-small) var(--grid-size-small),
          var(--grid-size-small) var(--grid-size-small),
          var(--grid-size-large) var(--grid-size-large),
          var(--grid-size-large) var(--grid-size-large)
        `
    } as React.CSSProperties} >



      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto items-center">

          {/* Left Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <Card className="bg-blue-900/40 border-blue-700/50 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                {state.succeeded ? (
                  <div className="text-center py-8">
                    <div className="text-primary mb-4">
                      <Send className="w-16 h-16 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">پیام شما ارسال شد!</h3>
                    <p className="text-gray-300">
                      به زودی با شما تماس خواهیم گرفت.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-6">

                    {/* Services Section */}
                    <div>
                      <h3 className="text-white font-semibold mb-4 text-right">خدمات مورد نیاز</h3>
                      <div className="grid grid-cols-1 gap-3 bg-blue-800/20 p-4 rounded-lg border border-blue-700/30">
                        <div className="flex items-center justify-end space-x-2 space-x-reverse">
                          <label htmlFor="websiteDesign" className="text-gray-200 text-sm cursor-pointer">
                            طراحی سایت
                          </label>
                          <Checkbox
                            id="websiteDesign"
                            checked={formData.services.websiteDesign}
                            onCheckedChange={(checked) => handleServiceChange('websiteDesign', checked as boolean)}
                            className="border-gray-400 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                          />
                        </div>

                        <div className="flex items-center justify-end space-x-2 space-x-reverse">
                          <label htmlFor="seo" className="text-gray-200 text-sm cursor-pointer">
                            پلن SEO
                          </label>
                          <Checkbox
                            id="seo"
                            checked={formData.services.seo}
                            onCheckedChange={(checked) => handleServiceChange('seo', checked as boolean)}
                            className="border-gray-400 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                          />
                        </div>

                        <div className="flex items-center justify-end space-x-2 space-x-reverse">
                          <label htmlFor="consulting" className="text-gray-200 text-sm cursor-pointer">
                            پلن مشاورتی فنی
                          </label>
                          <Checkbox
                            id="consulting"
                            checked={formData.services.consulting}
                            onCheckedChange={(checked) => handleServiceChange('consulting', checked as boolean)}
                            className="border-gray-400 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                          />
                        </div>

                        <div className="flex items-center justify-end space-x-2 space-x-reverse">
                          <label htmlFor="adminPanel" className="text-gray-200 text-sm cursor-pointer">
                            پلن ادمین سایت
                          </label>
                          <Checkbox
                            id="adminPanel"
                            checked={formData.services.adminPanel}
                            onCheckedChange={(checked) => handleServiceChange('adminPanel', checked as boolean)}
                            className="border-gray-400 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                          />
                        </div>

                        <div className="flex items-center justify-end space-x-2 space-x-reverse">
                          <label htmlFor="contentGeneration" className="text-gray-200 text-sm cursor-pointer">
                            تولید محتوا
                          </label>
                          <Checkbox
                            id="contentGeneration"
                            checked={formData.services.contentGeneration}
                            onCheckedChange={(checked) => handleServiceChange('contentGeneration', checked as boolean)}
                            className="border-gray-400 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                          />
                        </div>

                        <div className="flex items-center justify-end space-x-2 space-x-reverse">
                          <label htmlFor="uiuxDesign" className="text-gray-200 text-sm cursor-pointer">
                            طراحی UI/UX
                          </label>
                          <Checkbox
                            id="uiuxDesign"
                            checked={formData.services.uiuxDesign}
                            onCheckedChange={(checked) => handleServiceChange('uiuxDesign', checked as boolean)}
                            className="border-gray-400 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                          />
                        </div>

                        <div className="flex items-center justify-end space-x-2 space-x-reverse">
                          <label htmlFor="aiAgent" className="text-gray-200 text-sm cursor-pointer">
                            طراحی AI Agent
                          </label>
                          <Checkbox
                            id="aiAgent"
                            checked={formData.services.aiAgent}
                            onCheckedChange={(checked) => handleServiceChange('aiAgent', checked as boolean)}
                            className="border-gray-400 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-white font-medium mb-2 text-right">
                          نام شما
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-gray-800/60 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20"
                          placeholder=""
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-white font-medium mb-2 text-right">
                          ایمیل شما
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-gray-800/60 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20"
                          placeholder=""
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-white font-medium mb-2 text-right">
                        نام شرکت (اختیاری)
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="bg-gray-800/60 border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20"
                        placeholder=""
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-white font-medium mb-2 text-right">
                        شرح خواسته از پروژه شما
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-gray-800/60 border-gray-600 text-white placeholder:text-gray-400 resize-none focus:border-blue-500 focus:ring-blue-500/20"
                        placeholder=""
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-red-500/25"
                    >
                      {state.submitting ? 'در حال ارسال...' : 'ارسال و شروع پروژه'}
                      <Send className="w-4 h-4 mr-2" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Side - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 text-center lg:text-right px-4 lg:px-8"
          >
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 lg:mb-8 leading-tight">
                آماده‌اید آرک
                <br />
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  موفقیت خود را
                </span>
                <br />
                <span className="text-white">بسازید؟</span>
              </h2>

              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-red-500/20 to-blue-500/20 rounded-full blur-xl hidden lg:block"></div>
            </div>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              ایده یا پروژه خود را با در جریان بگذارید. ما مسیر
              <br className="hidden lg:block" />
              را برای شما روشن خواهیم کرد.
            </p>

          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default ContactForm