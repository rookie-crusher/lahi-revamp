import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import HomePage from './pages/HomePage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import { blogPosts } from './data/blogPosts';

const App: React.FC = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener('popstate', onLocationChange);
    
    const handleLinkClick = (e: MouseEvent) => {
        const target = e.target as HTMLAnchorElement;
        const anchor = target.closest('a');
        if (anchor && anchor.href && anchor.origin === window.location.origin) {
            if (anchor.pathname === window.location.pathname && anchor.hash) {
                return;
            }
            e.preventDefault();
            window.history.pushState({}, '', anchor.href);
            onLocationChange();
        }
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      window.removeEventListener('popstate', onLocationChange);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  const renderPage = () => {
    if (path.startsWith('/blog/')) {
      const postId = path.split('/blog/')[1];
      const post = blogPosts.find(p => p.id === postId);
      return <BlogPostPage post={post} />;
    }

    switch (path) {
      case '/careers':
        return <CareersPage />;
      case '/contact':
        return <ContactPage />;
      case '/privacy':
        return <PrivacyPage />;
      case '/terms':
        return <TermsPage />;
      case '/blog':
        return <BlogPage />;
      case '/':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-white">
      <Header />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default App;