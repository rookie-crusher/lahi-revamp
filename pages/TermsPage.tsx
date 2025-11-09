import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Use</h1>
        <div className="prose lg:prose-xl text-gray-700 space-y-4">
          <p>
            <strong>Last Updated:</strong> November 2025
          </p>

          <p>
            Welcome to <strong>Lahi.io</strong>. These Terms of Use ("Terms") govern your access to and use of our website, applications, and digital services (collectively, the “Services”).  
            By accessing or using our Services, you agree to comply with and be bound by these Terms.  
            If you do not agree, please do not use our Services.
          </p>

          <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
          <p>
            By using our Services, you represent that you are at least 13 years of age (or the legal age of majority in your jurisdiction) and have the authority to enter into these Terms.  
            If you are using the Services on behalf of an organization, you agree to these Terms on behalf of that organization.
          </p>

          <h2 className="text-2xl font-bold">2. Use of Our Services</h2>
          <p>
            You agree to use our Services only for lawful purposes and in compliance with all applicable laws.  
            You must not:
          </p>
          <ul className="list-disc ml-6">
            <li>Use our Services to violate any laws or regulations.</li>
            <li>Interfere with or disrupt the security or functionality of the website or servers.</li>
            <li>Use automated systems such as bots or scrapers to access data without permission.</li>
            <li>Attempt to gain unauthorized access to any portion of the Services or user accounts.</li>
            <li>Upload or distribute malicious code, spam, or harmful content.</li>
          </ul>

          <h2 className="text-2xl font-bold">3. Intellectual Property</h2>
          <p>
            All content, code, design, trademarks, graphics, logos, and materials available through our Services are the property of <strong>Lahi.io</strong> or its licensors and are protected by copyright, trademark, and other intellectual property laws.
          </p>
          <p>
            You may not copy, reproduce, modify, or distribute any content from our Services without our prior written consent.
          </p>

          <h2 className="text-2xl font-bold">4. User Submissions</h2>
          <p>
            By submitting any feedback, suggestions, or materials to Lahi.io, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute such content for business and product development purposes.
          </p>
          <p>
            You agree that your submissions will not contain any confidential or proprietary information, and that Lahi.io is not obligated to maintain confidentiality regarding them.
          </p>

          <h2 className="text-2xl font-bold">5. Third-Party Links and Services</h2>
          <p>
            Our website may contain links to third-party websites or services that are not owned or controlled by Lahi.io.  
            We are not responsible for the content, policies, or practices of any third-party sites or services.  
            Use of those services is at your own risk.
          </p>

          <h2 className="text-2xl font-bold">6. Disclaimers</h2>
          <p>
            Our Services are provided on an “as is” and “as available” basis.  
            We make no warranties or representations, express or implied, regarding the operation or availability of our Services, or that they will be error-free, secure, or uninterrupted.
          </p>
          <p>
            Lahi.io disclaims all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>

          <h2 className="text-2xl font-bold">7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Lahi.io and its affiliates shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Services — including, but not limited to, loss of data, profits, or business opportunities.
          </p>
          <p>
            Our total liability for any claim related to your use of the Services shall not exceed the amount you paid (if any) to access them.
          </p>

          <h2 className="text-2xl font-bold">8. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless Lahi.io, its affiliates, employees, and partners from any claims, damages, liabilities, and expenses arising from your use of the Services or violation of these Terms.
          </p>

          <h2 className="text-2xl font-bold">9. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to the Services at any time, without notice, for any reason — including violation of these Terms or misuse of our platform.
          </p>

          <h2 className="text-2xl font-bold">10. Governing Law</h2>
          <p>
            These Terms shall be governed by and interpreted in accordance with the laws of India.  
            Any disputes arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.
          </p>

          <h2 className="text-2xl font-bold">11. Changes to These Terms</h2>
          <p>
            Lahi.io reserves the right to modify or update these Terms at any time without prior notice.  
            Continued use of the Services after updates constitutes your acceptance of the revised Terms.
          </p>

          <h2 className="text-2xl font-bold">12. Contact Us</h2>
          <p>
            If you have any questions about these Terms or our Services, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> support@lahi.io <br />
            <strong>Address:</strong> Lahi, Southwest Delhi, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
