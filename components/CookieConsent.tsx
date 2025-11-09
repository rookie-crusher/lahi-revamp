import React, { useState, useEffect } from 'react';

const COOKIE_CONSENT_KEY = 'lahi_cookie_consent';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);
  
  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    setIsVisible(false);
  };

  const handleClose = () => {
     setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#2D2D2D] text-white z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-300 text-center sm:text-left">
          We use cookies to improve your experience, analyze our traffic, and share site usage data with our analytics partners.
        </p>
        <div className="flex items-center gap-4 flex-shrink-0">
          <button 
            onClick={handleAccept}
            className="bg-teal-500 text-white px-5 py-2 rounded-md hover:bg-teal-600 transition-colors font-medium text-sm"
          >
            Accept
          </button>
          <button 
            onClick={handleClose} 
            aria-label="Close cookie banner"
            className="text-gray-400 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;