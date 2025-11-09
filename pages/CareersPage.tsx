import React, { useState } from 'react';
import { SendIcon } from '../components/icons/SendIcon';

type SubmissionStatus = 'success' | 'error' | null;

const CareersPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    portfolio: '',
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmissionStatus>(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle text input fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle resume upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !resumeFile) {
      setStatus('error');
      setErrorMessage('Please fill out all required fields and upload your resume.');
      setTimeout(() => setStatus(null), 5000);
      return;
    }

    setIsSubmitting(true);
    setStatus(null);
    setErrorMessage('');

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      // value comes from controlled inputs and should be a string — coerce to string for FormData
      formDataToSend.append(key, String(value));
    });
    formDataToSend.append('resume', resumeFile);

    try {
      const response = await fetch('/api/career', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', linkedin: '', portfolio: '' });
        setResumeFile(null);
        const fileInput = document.getElementById('resume') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Failed to submit application. Please try again.');
        console.error('API Error:', data);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="text-center py-20 sm:py-28 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Join Our <span className="text-teal-500">Team</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We’re looking for creative, passionate, and driven individuals to help us build the next generation of digital experiences.
          </p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              Apply Now
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="text-gray-700 mb-2 block font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="e.g., Jane Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="text-gray-700 mb-2 block font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="text-gray-700 mb-2 block font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              {/* LinkedIn */}
              <div>
                <label htmlFor="linkedin" className="text-gray-700 mb-2 block font-medium">
                  LinkedIn Profile (Optional)
                </label>
                <input
                  type="url"
                  name="linkedin"
                  id="linkedin"
                  placeholder="https://linkedin.com/in/username"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              {/* Portfolio */}
              <div>
                <label htmlFor="portfolio" className="text-gray-700 mb-2 block font-medium">
                  Portfolio / GitHub (Optional)
                </label>
                <input
                  type="url"
                  name="portfolio"
                  id="portfolio"
                  placeholder="https://yourportfolio.com"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                />
              </div>

              {/* Resume Upload */}
              <div>
                <label htmlFor="resume" className="text-gray-700 mb-2 block font-medium">
                  Upload Resume
                </label>
                <input
                  type="file"
                  name="resume"
                  id="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                  className="w-full text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
                />
                <p className="text-sm text-gray-500 mt-1">PDF, DOC, DOCX files only.</p>
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <p className="text-center text-green-600 bg-green-100 p-3 rounded-lg">
                  Application submitted successfully! We'll be in touch soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-center text-red-600 bg-red-100 p-3 rounded-lg">
                  {errorMessage || 'An error occurred. Please try again.'}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-gray-800 text-white px-5 py-3 rounded-full hover:bg-gray-900 transition-colors font-medium disabled:bg-gray-400"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
                {!isSubmitting && <SendIcon />}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
