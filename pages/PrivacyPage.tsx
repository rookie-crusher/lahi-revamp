import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <Helmet>
        <title>Privacy Policy – Lahi</title>
        <meta name='description' content='Read our Privacy Policy to understand how Lahi collects, uses, and protects your personal data.' />
        <link rel='canonical' href='https://lahi.io/privacy' />
        <meta property='og:title' content='Privacy Policy – Lahi' />
        <meta property='og:description' content='Read our Privacy Policy to understand how Lahi collects, uses, and protects your personal data.' />
        <meta property='og:url' content='https://lahi.io/privacy' />
      </Helmet>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose lg:prose-xl text-gray-700 space-y-4">
          <p>
            <strong>Last Updated:</strong> November 2025
          </p>

          <p>
            At <strong>Lahi.io</strong>, we respect your privacy and are committed to protecting your
            personal data. This Privacy Policy describes how we collect, use, and protect your information when you visit our website, use our applications, or engage with our digital products and services.
          </p>

          <h2 className="text-2xl font-bold">1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Personal Information:</strong> Name, email address, and any other details you
              voluntarily provide through forms, job applications, or communication channels.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you access and use our site, such
              as IP address, browser type, operating system, referring URLs, pages viewed, and
              access times.
            </li>
            <li>
              <strong>Cookies & Tracking Technologies:</strong> We may use cookies, pixels, and
              similar technologies to analyze site traffic, enhance user experience, and deliver
              personalized content.
            </li>
            <li>
              <strong>Device Information:</strong> Technical details such as device model, OS
              version, unique device identifiers, and crash data when using our apps or games.
            </li>
          </ul>

          <h2 className="text-2xl font-bold">2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc ml-6">
            <li>Respond to inquiries, requests, and support messages.</li>
            <li>Develop, maintain, and improve our website, apps, and services.</li>
            <li>Analyze usage trends and user behavior to improve user experience.</li>
            <li>Provide updates, promotional materials, or company news if you opt in.</li>
            <li>Comply with legal obligations or resolve disputes.</li>
          </ul>

          <h2 className="text-2xl font-bold">3. Cookies and Tracking Technologies</h2>
          <p>
            Our website uses cookies to enhance functionality and analytics. You can choose to
            accept or decline cookies through your browser settings. Disabling cookies may affect
            certain parts of the website.
          </p>

          <h2 className="text-2xl font-bold">4. Sharing and Disclosure</h2>
          <p>
            We do not sell, rent, or trade your personal information. We may share data only in the
            following circumstances:
          </p>
          <ul className="list-disc ml-6">
            <li>With trusted service providers that assist us in operations (e.g., hosting, analytics).</li>
            <li>If required by law, regulation, or legal request.</li>
            <li>In connection with business transfers such as mergers, acquisitions, or restructuring.</li>
          </ul>

          <h2 className="text-2xl font-bold">5. Data Security</h2>
          <p>
            We implement appropriate administrative, technical, and physical safeguards to protect
            your information against unauthorized access, alteration, disclosure, or destruction.
            However, please note that no internet transmission is 100% secure.
          </p>

          <h2 className="text-2xl font-bold">6. Data Retention</h2>
          <p>
            We retain your personal data only for as long as necessary to fulfill the purposes
            described in this policy, unless a longer retention period is required by law.
          </p>

          <h2 className="text-2xl font-bold">7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc ml-6">
            <li>Access, correct, or delete your personal data.</li>
            <li>Withdraw consent for marketing or data processing (where applicable).</li>
            <li>Request a copy of your data in a portable format.</li>
            <li>File a complaint with your local data protection authority if you believe your rights were violated.</li>
          </ul>

          <h2 className="text-2xl font-bold">8. Third-Party Services</h2>
          <p>
            Our website or products may link to third-party services such as analytics, payment
            processors, or ad networks. We are not responsible for their privacy practices and
            encourage you to review their privacy policies.
          </p>

          <h2 className="text-2xl font-bold">9. Children’s Privacy</h2>
          <p>
            Lahi.io does not knowingly collect personal data from children under 13. If we become
            aware that such information has been collected, we will delete it promptly.
          </p>

          <h2 className="text-2xl font-bold">10. International Data Transfers</h2>
          <p>
            If you are accessing our services from outside India, your data may be transferred and
            processed in India or other locations where we or our partners operate. By using our
            services, you consent to such transfers.
          </p>

          <h2 className="text-2xl font-bold">11. Updates to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in technology,
            law, or our practices. The latest version will always be available on this page with the
            updated date.
          </p>

          <h2 className="text-2xl font-bold">12. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our data practices,
            please contact us at:
          </p>
          <p>
            <strong>Email:</strong> contact@lahi.io <br />
            <strong>Address:</strong> WSA202, B-128, First Floor, Sector-2
Noida, Uttar Pradesh 201301

          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
