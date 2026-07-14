'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xbdvnwed';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    setError('');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('Request failed');
      setSubmitted(true);
      form.reset();
    } catch {
      setError('Something went wrong sending your request. Please call or text (207) 249-0162.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="bg-neutral-950 p-10 rounded-3xl border border-neutral-800">
      {!submitted ? (
        <form
          action={FORMSPREE_ENDPOINT}
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full px-6 py-4 bg-black border border-neutral-700 rounded-2xl focus:outline-none focus:border-[#FF6200] text-white placeholder:text-neutral-500"
          />

          <input
            type="tel"
            name="phone"
            placeholder="(207) 000-0000"
            required
            className="w-full px-6 py-4 bg-black border border-neutral-700 rounded-2xl focus:outline-none focus:border-[#FF6200] text-white placeholder:text-neutral-500"
          />

          <input
            type="email"
            name="email"
            placeholder="you@email.com"
            className="w-full px-6 py-4 bg-black border border-neutral-700 rounded-2xl focus:outline-none focus:border-[#FF6200] text-white placeholder:text-neutral-500"
          />

          <textarea
            name="message"
            placeholder="Tell us about your project (driveway, land clearing, septic, undercoating, etc.)"
            rows={5}
            required
            className="w-full px-6 py-4 bg-black border border-neutral-700 rounded-3xl focus:outline-none focus:border-[#FF6200] text-white placeholder:text-neutral-500"
          ></textarea>

          <button
            type="submit"
            disabled={sending}
            className="w-full bg-[#FF6200] hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-black py-5 rounded-3xl font-semibold text-lg transition-all"
          >
            {sending ? 'SENDING…' : 'SEND FREE ESTIMATE REQUEST'}
          </button>

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <a
            href="https://cal.com/furoenterprises"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 border-2 border-[#FF6200] text-[#FF6200] hover:bg-[#FF6200] hover:text-black py-5 rounded-3xl font-semibold text-lg transition-all"
          >
            <Calendar className="w-5 h-5" />
            Book Undercoating Appointment
          </a>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16"
        >
          <div className="text-6xl mb-6">✅</div>
          <h3 className="text-3xl font-bold mb-3">Thank You!</h3>
          <p className="text-neutral-400 text-lg">We'll get back to you shortly at (207) 249-0162.</p>
        </motion.div>
      )}
    </div>
  );
}
