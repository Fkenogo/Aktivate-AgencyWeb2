
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Button from '../components/Button';
import { cn } from '../utils/cn';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (val: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!val) {
      setEmailError('Email is required');
      return false;
    } else if (!regex.test(val)) {
      setEmailError('Please enter a valid email address');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmail(val);
    if (emailError) validateEmail(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) return;

    setFormState('sending');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="pt-20">
      <Helmet>
        <title>Contact Us | Get Aktivated & Dominate the Market - AKTIVATE</title>
        <meta name="description" content="Ready to disrupt the game? Contact AKTIVATE today to build something unforgettable. Let's talk strategy and creative activations." />
      </Helmet>
      
      {/* 6.1 Hero */}
      <section className="bg-gradient-to-b from-brandTeal to-deepBlack py-[160px] text-center text-white">
        <div className="max-w-content mx-auto px-6">
          <h1 className="text-4xl md:text-[56px] font-extrabold mb-6 tracking-tighter">READY TO DISRUPT THE GAME?</h1>
          <p className="text-lg md:text-2xl text-lightGrey/90 max-w-2xl mx-auto">
            Don't just exist. Dominate. Let's build something unforgettable.
          </p>
        </div>
      </section>

      {/* 6.2 Contact Form */}
      <section className="py-20 bg-white" id="contact-form">
        <div className="max-w-[700px] mx-auto px-6">
          {formState === 'success' ? (
            <div className="text-center py-20 space-y-6 animate-fadeIn">
              <div className="w-20 h-20 bg-brandTeal text-white text-5xl flex items-center justify-center rounded-full mx-auto">✓</div>
              <h2 className="text-3xl font-bold text-deepBlack uppercase">Thanks for reaching out!</h2>
              <p className="text-charcoalGrey">We'll get back to you within 24 hours.</p>
              <Button variant="primary" onClick={() => { setFormState('idle'); setEmail(''); }}>Send Another Message</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-deepBlack uppercase tracking-tight">GET AKTIVATED</h2>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[14px] font-montserrat font-semibold text-deepBlack">Your Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="John Doe"
                    className="w-full p-4 bg-lightGrey border-2 border-transparent rounded-[8px] focus:border-brandTeal outline-none transition-all" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-montserrat font-semibold text-deepBlack">Email</label>
                  <input 
                    type="email" 
                    required 
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={() => validateEmail(email)}
                    placeholder="john@company.com"
                    className={cn(
                      "w-full p-4 bg-lightGrey border-2 rounded-[8px] focus:border-brandTeal outline-none transition-all",
                      emailError ? "border-red-500 focus:border-red-500" : "border-transparent"
                    )} 
                  />
                  {emailError && <p className="text-red-500 text-xs font-semibold">{emailError}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-montserrat font-semibold text-deepBlack">Company (Optional)</label>
                  <input 
                    type="text" 
                    placeholder="Your Company Name"
                    className="w-full p-4 bg-lightGrey border-2 border-transparent rounded-[8px] focus:border-brandTeal outline-none transition-all" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-montserrat font-semibold text-deepBlack">Tell Us What You Need</label>
                  <textarea 
                    rows={6} 
                    required 
                    placeholder="Tell us about your project, goals, and how we can help..."
                    className="w-full p-4 bg-lightGrey border-2 border-transparent rounded-[8px] focus:border-brandTeal outline-none transition-all"
                  ></textarea>
                </div>
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                className="w-full py-5 text-lg" 
                disabled={formState === 'sending'}
              >
                {formState === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* 6.3 Contact Information */}
      <section className="bg-lightGrey py-20">
        <div className="max-w-content mx-auto px-6 md:px-120">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-deepBlack uppercase tracking-widest">REACH OUT</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4 group">
              <span className="text-5xl block transform group-hover:scale-110 transition-transform">📞</span>
              <h4 className="text-lg font-bold uppercase">Call Us</h4>
              <div className="text-brandTeal font-medium">
                <a href="tel:+25766511150" className="block hover:underline">(+257) 66 511 150</a>
                <a href="tel:+25779681209" className="block hover:underline">(+257) 79 681 209</a>
              </div>
            </div>
            <div className="space-y-4 group">
              <span className="text-5xl block transform group-hover:scale-110 transition-transform">✉️</span>
              <h4 className="text-lg font-bold uppercase">Email Us</h4>
              <a href="mailto:info@aktivate.bi" className="text-brandTeal font-medium hover:underline">info@aktivate.bi</a>
            </div>
            <div className="space-y-4 group">
              <span className="text-5xl block transform group-hover:scale-110 transition-transform">📍</span>
              <h4 className="text-lg font-bold uppercase">Visit Us</h4>
              <p className="text-charcoalGrey font-medium">Bujumbura, Burundi</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-deepBlack text-white py-24 text-center overflow-hidden relative">
        <div className="absolute top-0 left-0 w-32 h-32 bg-brandTeal/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-content mx-auto px-6 space-y-10 relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">Prefer to chat instantly?</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Button variant="outline" className="px-12 w-full md:w-auto">Schedule a Call</Button>
            <Button variant="primary" className="px-12 w-full md:w-auto">WhatsApp Us</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
