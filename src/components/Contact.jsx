import React, { useState } from 'react';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [touched, setTouched] = useState({
        name: false,
        email: false,
        subject: false,
        message: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validateField = (name, value) => {
        switch (name) {
            case 'name':
                if (!value.trim()) return 'Name is required';
                if (value.trim().length < 2) return 'Name must be at least 2 characters';
                return '';
            case 'email':
                if (!value.trim()) return 'Email is required';
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value.trim())) return 'Please enter a valid email address';
                return '';
            case 'subject':
                if (!value.trim()) return 'Subject is required';
                if (value.trim().length < 3) return 'Subject must be at least 3 characters';
                return '';
            case 'message':
                if (!value.trim()) return 'Message is required';
                if (value.trim().length < 10) return 'Message must be at least 10 characters';
                return '';
            default:
                return '';
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        if (touched[name]) {
            const error = validateField(name, value);
            setErrors(prev => ({ ...prev, [name]: error }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const allTouched = { name: true, email: true, subject: true, message: true };
        setTouched(allTouched);
        
        const formErrors = {
            name: validateField('name', formData.name),
            email: validateField('email', formData.email),
            subject: validateField('subject', formData.subject),
            message: validateField('message', formData.message)
        };
        
        setErrors(formErrors);
        
        const isValid = Object.values(formErrors).every(err => err === '');
        
        if (isValid) {
            setIsSubmitting(true);
            setTimeout(() => {
                setIsSubmitting(false);
                setIsSuccess(true);
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTouched({ name: false, email: false, subject: false, message: false });
            }, 1800);
        }
    };

    const getInputClass = (fieldName) => {
        const baseClass = "w-full bg-white/5 backdrop-blur-md border p-5 focus:outline-none text-white transition-all rounded-2xl hover:bg-white/10";
        if (touched[fieldName] && errors[fieldName]) {
            return `${baseClass} border-red-500/50 focus:border-red-500`;
        }
        if (touched[fieldName] && !errors[fieldName] && formData[fieldName].trim() !== '') {
            return `${baseClass} border-emerald-500/30 focus:border-emerald-500`;
        }
        return `${baseClass} border-white/10 focus:border-gold-400`;
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-transparent">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none z-0">
                <img src="/images/hero_bg.png" alt="Abstract Background" className="w-full h-full object-cover filter invert" />
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">

                <div>
                    <span className="text-gold-400 font-sans tracking-widest text-sm font-bold uppercase mb-2">Connect</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-white font-bold mb-8">Start a <span className="text-gold-400">Conversation</span></h2>
                    <p className="text-gray-400 text-lg mb-12 font-light leading-relaxed">
                        Interested in working together? Fill out the form below or reach out directly via email.
                    </p>

                    <div className="space-y-6">
                        <a
                            href="mailto:mansuri7573@gmail.com"
                            className="flex items-center gap-6 group cursor-pointer"
                        >
                            <div className="w-14 h-14 bg-white/5 border border-white/10 text-gold-400 flex items-center justify-center rounded-2xl group-hover:bg-gold-500 group-hover:text-[#020617] transition-all duration-300 shadow-xl">@</div>
                            <div>
                                <h4 className="font-bold text-white text-lg">Email</h4>
                                <p className="text-gray-400">mansuri7573@gmail.com</p>
                            </div>
                        </a>

                        <a
                            href="https://wa.me/917573054279"
                            target="_blank"
                            className="flex items-center gap-6 group cursor-pointer"
                        >
                            <div className="w-14 h-14 bg-white/5 border border-white/10 text-gold-400 flex items-center justify-center rounded-2xl group-hover:bg-gold-500 group-hover:text-[#020617] transition-all duration-300 shadow-xl">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-lg">WhatsApp</h4>
                                <p className="text-gray-400">+91 75730 54279</p>
                            </div>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/abdullah-mansuri-b8a9681a0?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                            target="_blank"
                            className="flex items-center gap-6 group cursor-pointer"
                        >
                            <div className="w-14 h-14 bg-white/5 border border-white/10 text-gold-400 flex items-center justify-center rounded-2xl group-hover:bg-gold-500 group-hover:text-[#020617] transition-all duration-300 shadow-xl">in</div>
                            <div>
                                <h4 className="font-bold text-white text-lg">LinkedIn</h4>
                                <p className="text-gray-400">Abdullah Mansuri</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="w-full relative min-h-[400px] flex items-center">
                    {isSuccess ? (
                        <div className="w-full bg-white/5 backdrop-blur-xl border border-emerald-500/20 p-8 md:p-12 rounded-3xl text-center space-y-6 shadow-2xl transition-all duration-500 scale-100 opacity-100">
                            <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center rounded-full mx-auto shadow-lg animate-bounce">
                                <CheckCircle2 size={40} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl md:text-3xl font-serif text-white font-bold">Message Sent!</h3>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm mx-auto">
                                    Thank you for reaching out. Your message has been securely sent. I'll get back to you shortly!
                                </p>
                            </div>
                            <button
                                onClick={() => setIsSuccess(false)}
                                className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-[#020617] font-bold text-sm uppercase tracking-widest rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all"
                            >
                                Send Another Message
                            </button>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="w-full space-y-6 transition-all duration-500 scale-100 opacity-100"
                            noValidate
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Name"
                                        className={getInputClass('name')}
                                        disabled={isSubmitting}
                                    />
                                    {touched.name && errors.name && (
                                        <div className="flex items-center gap-1.5 text-red-400 text-xs px-2 animate-fadeIn">
                                            <AlertCircle size={12} />
                                            <span>{errors.name}</span>
                                        </div>
                                    )}
                                </div>
                                <div className="space-y-1">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Email"
                                        className={getInputClass('email')}
                                        disabled={isSubmitting}
                                    />
                                    {touched.email && errors.email && (
                                        <div className="flex items-center gap-1.5 text-red-400 text-xs px-2 animate-fadeIn">
                                            <AlertCircle size={12} />
                                            <span>{errors.email}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="space-y-1">
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Subject"
                                    className={getInputClass('subject')}
                                    disabled={isSubmitting}
                                />
                                {touched.subject && errors.subject && (
                                    <div className="flex items-center gap-1.5 text-red-400 text-xs px-2 animate-fadeIn">
                                        <AlertCircle size={12} />
                                        <span>{errors.subject}</span>
                                    </div>
                                )}
                            </div>
                            <div className="space-y-1">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    rows="4"
                                    placeholder="How can I help you?"
                                    className={getInputClass('message')}
                                    disabled={isSubmitting}
                                ></textarea>
                                {touched.message && errors.message && (
                                    <div className="flex items-center gap-1.5 text-red-400 text-xs px-2 animate-fadeIn">
                                        <AlertCircle size={12} />
                                        <span>{errors.message}</span>
                                    </div>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-gradient-to-r from-gold-500 to-gold-600 text-[#020617] py-5 rounded-2xl font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-2xl ${isSubmitting ? 'opacity-85 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-[0.98]'}`}
                            >
                                {isSubmitting ? (
                                    <>
                                        Sending...
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    </>
                                ) : (
                                    <>
                                        Send Perspective
                                        <span className="block w-2 h-2 bg-[#020617] rounded-full"></span>
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>

            </div>
        </section>
    );
};

export default Contact;
