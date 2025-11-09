import React, { useState } from 'react';
import { SendIcon } from '../components/icons/SendIcon';
import { UserIcon } from '../components/icons/UserIcon';
import { EmailIcon } from '../components/icons/EmailIcon';
import { MessageSquareIcon } from '../components/icons/MessageSquareIcon';

type SubmissionStatus = 'success' | 'error' | null;

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmissionStatus>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill out all fields to send your message.');
      setTimeout(() => setStatus(null), 5000);
      return;
    }

    setIsSubmitting(true);
    setStatus(null);
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Failed to send message. Please try again.');
        console.error('API Error:', data);
      }
    } catch (error) {
      console.error('Network error:', error);
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <div className="bg-white">
      <section className="text-center py-20 sm:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get In <span className="text-teal-500">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We'd love to hear from you! Whether you have a question, a project idea, or just want to say hello.
            </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-gray-700 mb-2 block font-medium">Full Name</label>
                  <div className="relative">
                    <UserIcon className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="e.g., Jane Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="pl-11 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="text-gray-700 mb-2 block font-medium">Email Address</label>
                  <div className="relative">
                    <EmailIcon className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="pl-11 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="text-gray-700 mb-2 block font-medium">Subject</label>
                   <div className="relative">
                    <MessageSquareIcon className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Project Inquiry, Feedback, etc."
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="pl-11 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="text-gray-700 mb-2 block font-medium">Your Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    placeholder="Tell us more about your needs or questions..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                 {status === 'success' && (
                  <p className="text-center text-green-600 bg-green-100 p-3 rounded-lg">Message sent successfully! We'll be in touch.</p>
                )}
                {status === 'error' && (
                  <p className="text-center text-red-600 bg-red-100 p-3 rounded-lg">{errorMessage || 'An error occurred. Please try again.'}</p>
                )}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gray-800 text-white px-5 py-3 rounded-full hover:bg-gray-900 transition-colors font-medium disabled:bg-gray-400"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <SendIcon />}
                </button>
              </form>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
