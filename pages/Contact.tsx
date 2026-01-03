
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us what you need';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    // Clear error for this field as user types
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1500);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#1AB69D] to-[#0A0A0A] py-24 md:py-40 px-6 text-center text-white">
        <h1 className="text-[40px] md:text-[56px] font-[800] leading-tight mb-8">READY TO DISRUPT THE GAME?</h1>
        <p className="text-[18px] md:text-[24px] max-w-[800px] mx-auto text-[#F5F5F5] leading-relaxed">
          Don't just exist. Dominate. <br />
          Let's build something unforgettable.
        </p>
      </section>

      {/* Form & Info Section */}
      <section className="bg-white py-20 md:py-[120px] px-6 md:px-[120px]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-[16px] shadow-2xl relative overflow-hidden">
            {isSubmitted ? (
              <div className="text-center py-20 animate-fade-in">
                <div className="flex justify-center mb-6">
                  <CheckCircle2 size={80} className="text-[#1AB69D]" />
                </div>
                <h3 className="text-3xl font-bold text-[#0A0A0A] mb-4">GET AKTIVATED</h3>
                <p className="text-xl text-[#2D2D2D]">Thanks for reaching out! We'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-[#1AB69D] font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <h3 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-12 text-center">GET AKTIVATED</h3>
                
                <div className="space-y-1">
                  <label className="text-xs font-black text-[#0A0A0A] uppercase tracking-[0.2em]">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className={`w-full p-5 rounded-[8px] outline-none transition-all border-2 ${
                      errors.name 
                      ? 'bg-red-50 border-red-500 focus:border-red-600' 
                      : 'bg-[#F5F5F5] border-[#F5F5F5] focus:border-[#1AB69D]'
                    }`}
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                  {errors.name && (
                    <div className="flex items-center gap-1 mt-1 text-red-500 text-xs font-bold animate-fade-in">
                      <AlertCircle size={14} />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-black text-[#0A0A0A] uppercase tracking-[0.2em]">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className={`w-full p-5 rounded-[8px] outline-none transition-all border-2 ${
                      errors.email 
                      ? 'bg-red-50 border-red-500 focus:border-red-600' 
                      : 'bg-[#F5F5F5] border-[#F5F5F5] focus:border-[#1AB69D]'
                    }`}
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                  {errors.email && (
                    <div className="flex items-center gap-1 mt-1 text-red-500 text-xs font-bold animate-fade-in">
                      <AlertCircle size={14} />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-black text-[#0A0A0A] uppercase tracking-[0.2em]">Company (Optional)</label>
                  <input 
                    type="text" 
                    placeholder="Your Company Name"
                    className="w-full bg-[#F5F5F5] border-2 border-[#F5F5F5] focus:border-[#1AB69D] p-5 rounded-[8px] outline-none transition-all"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-black text-[#0A0A0A] uppercase tracking-[0.2em]">Tell Us What You Need</label>
                  <textarea 
                    rows={5}
                    placeholder="Tell us about your project, goals, and how we can help..."
                    className={`w-full p-5 rounded-[8px] outline-none transition-all border-2 ${
                      errors.message 
                      ? 'bg-red-50 border-red-500 focus:border-red-600' 
                      : 'bg-[#F5F5F5] border-[#F5F5F5] focus:border-[#1AB69D]'
                    }`}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                  />
                  {errors.message && (
                    <div className="flex items-center gap-1 mt-1 text-red-500 text-xs font-bold animate-fade-in">
                      <AlertCircle size={14} />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#1AB69D] text-white py-5 rounded-[8px] font-bold text-xl transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-3 active:scale-95 shadow-xl ${
                    isSubmitting ? 'opacity-70 cursor-wait' : 'hover:bg-[#158F7C]'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send size={24} />
                      <span className="tracking-widest uppercase">Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-12 uppercase tracking-tighter italic">REACH OUT</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4 group">
                <div className="bg-[#F5F5F5] w-16 h-16 rounded-[8px] flex items-center justify-center text-[#1AB69D] transition-colors group-hover:bg-[#1AB69D] group-hover:text-white">
                  <Phone size={32} />
                </div>
                <h4 className="text-xl font-bold text-[#0A0A0A]">Call Us</h4>
                <div className="space-y-1 text-[#1AB69D] font-medium">
                  <a href="tel:+25766511150" className="block hover:underline">(+257) 66 511 150</a>
                  <a href="tel:+25779681209" className="block hover:underline">(+257) 79 681 209</a>
                </div>
              </div>

              <div className="space-y-4 group">
                <div className="bg-[#F5F5F5] w-16 h-16 rounded-[8px] flex items-center justify-center text-[#1AB69D] transition-colors group-hover:bg-[#1AB69D] group-hover:text-white">
                  <Mail size={32} />
                </div>
                <h4 className="text-xl font-bold text-[#0A0A0A]">Email Us</h4>
                <a href="mailto:info@aktivate.bi" className="text-[#1AB69D] font-medium hover:underline">info@aktivate.bi</a>
              </div>

              <div className="space-y-4 group">
                <div className="bg-[#F5F5F5] w-16 h-16 rounded-[8px] flex items-center justify-center text-[#1AB69D] transition-colors group-hover:bg-[#1AB69D] group-hover:text-white">
                  <MapPin size={32} />
                </div>
                <h4 className="text-xl font-bold text-[#0A0A0A]">Visit Us</h4>
                <p className="text-[#2D2D2D]">Bujumbura, Burundi</p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-[#0A0A0A] mb-4 uppercase tracking-widest text-xs">Follow the Movement</h4>
                <div className="flex space-x-6">
                  {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                    <a 
                      key={i} 
                      href="#" 
                      className="text-[#2D2D2D] hover:text-[#1AB69D] hover:scale-125 transition-all duration-300 transform"
                    >
                      <Icon size={32} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Alternative Action */}
            <div className="mt-20 p-10 bg-[#0A0A0A] rounded-[16px] text-center text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1AB69D]/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              <h4 className="text-2xl font-bold mb-8 relative z-10">Prefer to chat?</h4>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 relative z-10">
                <button className="w-full md:w-auto border-2 border-white/20 px-8 py-3 rounded-[8px] font-bold hover:bg-white hover:text-[#0A0A0A] hover:border-white transition-all">
                  Schedule a Call
                </button>
                <button className="w-full md:w-auto bg-[#1AB69D] border-2 border-[#1AB69D] px-8 py-3 rounded-[8px] font-bold hover:bg-[#158F7C] hover:border-[#158F7C] transition-all">
                  WhatsApp Us
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
