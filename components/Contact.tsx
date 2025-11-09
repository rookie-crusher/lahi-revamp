import React, { useState } from 'react';

type SubmissionStatus = 'success' | 'error' | null;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Game Development',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmissionStatus>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill out all fields before submitting.');
      setTimeout(() => setStatus(null), 5000);
      return;
    }

    setIsSubmitting(true);
    setStatus(null);
    setErrorMessage('');

    try {
      const response = await fetch('/api/quotation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', service: 'Game Development', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Failed to submit request. Please try again.');
        console.error('API Error:', data);
      }
    } catch (error) {
      console.error('Quotation submission error:', error);
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section id="get-a-quote" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="relative container mx-auto text-center max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Get a Quote!
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Share Us Your Requirements And Get A Quote In Your Inbox
        </p>
        <form className="space-y-6 text-left" onSubmit={handleSubmit}>
          <input 
            type="text"
            name="name"
            placeholder="Full Name" 
            aria-label="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-teal-500 focus:border-teal-500 text-lg" 
          />
          <input 
            type="email" 
            name="email"
            placeholder="Email" 
            aria-label="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-teal-500 focus:border-teal-500 text-lg" 
          />
          <div className="relative">
            <select 
              name="service"
              aria-label="Select Service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-teal-500 focus:border-teal-500 text-lg appearance-none bg-white"
            >
              <option>Game Development</option>
              <option>Mobile App Development</option>
              <option>Website Development</option>
              <option>Digital Media</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <textarea
            name="message"
            placeholder="Your message or requirements..."
            aria-label="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-teal-500 focus:border-teal-500 text-lg"
          ></textarea>
           {status === 'success' && (
            <p className="text-center text-green-600 bg-green-100 p-3 rounded-lg">Thank you for your request! We'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="text-center text-red-600 bg-red-100 p-3 rounded-lg">{errorMessage || 'An error occurred. Please try again.'}</p>
          )}
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gray-800 text-white font-medium py-4 px-6 rounded-xl hover:bg-gray-900 transition-colors text-lg disabled:bg-gray-400"
          >
            {isSubmitting ? 'Sending...' : 'Get a Quote'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;