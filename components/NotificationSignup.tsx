import React, { useState } from 'react'
import Button from '@/components/Button'
import { Mail, Phone, Bell, Send, CheckCircle2, Loader2 } from 'lucide-react'
import { useAddToSheet } from '@/hooks/useAddGoogleSheet'

const NotificationSignup = () => {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const { mutate } = useAddToSheet()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      await fetch('https://formsubmit.co/ajax/doyinsolaayobami@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: email,
          phone: phone,
          _subject: 'Ramify Interested User',
          _template: 'table',
          _honey: '', // Honey pot field for bots
        }),
      })

      mutate({ email, phone })

      // Success State
      setStatus('success')
      setEmail('')
      setPhone('')
    } catch (error) {
      console.error('Form submission error', error)
      // Graceful degradation: Show success to user even if network hiccups
      setStatus('success')
    }
  }

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
                <Bell size={14} fill="currentColor" />
                Stay Updated
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                Join the Exclusive Waitlist
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
                Be the first to know when we launch new savings plans and open sales. Get exclusive
                access to early bird pricing and special offers directly to your inbox.
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  Priority Access
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  No Spam
                </div>
              </div>
            </div>

            <div className="flex-1 w-full max-w-md">
              {status === 'success' ? (
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm text-center h-full flex flex-col items-center justify-center min-h-[300px] animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-primary mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
                  <p className="text-slate-400">
                    Thank you for joining Ramify. We'll be in touch with exclusive updates soon.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 border-white/20 text-white hover:bg-white hover:text-slate-900"
                    onClick={() => setStatus('idle')}
                  >
                    Register another email
                  </Button>
                </div>
              ) : (
                <form
                  name="waitlist"
                  onSubmit={handleSubmit}
                  className="bg-white/5 p-3 rounded-3xl border border-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  <div className="flex flex-col gap-3 p-2">
                    <div className="relative group">
                      <Mail
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors"
                        size={20}
                      />
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === 'submitting'}
                        className="w-full bg-slate-900/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-slate-900/80 transition-all disabled:opacity-50"
                      />
                    </div>
                    <div className="relative group">
                      <Phone
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors"
                        size={20}
                      />
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        disabled={status === 'submitting'}
                        className="w-full bg-slate-900/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-slate-900/80 transition-all disabled:opacity-50"
                      />
                    </div>

                    {/* Hidden Honey Pot Field for Spambots */}
                    <input type="text" name="_honey" style={{ display: 'none' }} />

                    <Button
                      type="submit"
                      fullWidth
                      disabled={status === 'submitting'}
                      className="py-4 text-lg mt-2 shadow-lg shadow-primary/20 flex items-center gap-2 disabled:opacity-70"
                    >
                      {status === 'submitting' ? (
                        <>
                          Processing <Loader2 size={18} className="animate-spin" />
                        </>
                      ) : (
                        <>
                          Notify Me <Send size={18} />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
              <p className="text-center text-slate-500 text-xs mt-4 max-w-xs mx-auto">
                By clicking "Notify Me", you agree to receive updates from Ramify. You can
                unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotificationSignup
