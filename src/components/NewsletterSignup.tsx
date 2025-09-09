'use client';

import { useState } from 'react';

interface NewsletterSignupProps {
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function NewsletterSignup({ variant = 'primary', className = '' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Replace with your actual Beehiiv publication URL
  const BEEHIIV_URL = 'https://finsoar.beehiiv.com/subscribe';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      // For now, we'll redirect to Beehiiv. Later you can integrate with their API
      window.open(`${BEEHIIV_URL}?email=${encodeURIComponent(email)}`, '_blank');
      setMessage('Redirecting to subscription page...');
      setEmail('');
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
          className="flex-1 px-4 py-3 border border-stone-300 focus:outline-none focus:border-stone-500 text-stone-900 placeholder-stone-500 text-sm"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !email}
          className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Joining...' : 'Join Free'}
        </button>
      </form>
      {message && (
        <p className="text-center mt-3 text-xs text-stone-600">
          {message}
        </p>
      )}
    </div>
  );
}
