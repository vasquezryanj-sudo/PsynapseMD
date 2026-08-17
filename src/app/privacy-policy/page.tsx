export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <p className="text-xs text-[#9CA3AF] uppercase tracking-widest mb-4">Legal</p>
        <h1 className="text-4xl font-bold text-[#111827] mb-3 font-[family-name:var(--font-jakarta)]">Privacy Policy</h1>
        <p className="text-sm text-[#9CA3AF] mb-16">Effective date: January 1, 2026</p>

        <div className="prose prose-gray max-w-none space-y-10 text-[#4B5563] leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-[#111827] mb-3 font-[family-name:var(--font-jakarta)]">1. Scope</h2>
            <p>This Privacy Policy applies to the PsynapseMD marketing website located at psynapse-md.vercel.app and any associated web pages (the "Site"). It describes how PsynapseMD collects, uses, and handles information when you visit the Site.</p>
            <p className="mt-3">This policy does not govern the PsynapseMD clinical documentation product. Data handling within the product is governed separately by your service agreement and applicable Business Associate Agreements (BAAs).</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#111827] mb-3 font-[family-name:var(--font-jakarta)]">2. Information We Collect</h2>
            <p>When you visit the Site, we may collect the following:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Contact form submissions.</strong> If you complete a contact or demo request form, we collect the name, email address, practice type, and any other information you voluntarily provide.</li>
              <li><strong>Usage data.</strong> We may collect standard web analytics data such as pages visited, time on page, referring URL, browser type, and device type. This data is collected in aggregate and is not linked to individual identities.</li>
              <li><strong>Cookies.</strong> The Site may use cookies or similar technologies for basic functionality and analytics. You may disable cookies through your browser settings.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#111827] mb-3 font-[family-name:var(--font-jakarta)]">3. How We Use Your Information</h2>
            <p>Information collected through the Site is used solely to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Respond to demo requests and contact form submissions</li>
              <li>Understand how the Site is being used so we can improve it</li>
              <li>Communicate with prospective customers about PsynapseMD</li>
            </ul>
            <p className="mt-3">We do not sell, rent, or share your information with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#111827] mb-3 font-[family-name:var(--font-jakarta)]">4. Data Retention</h2>
            <p>Contact form submissions are retained only as long as necessary to respond to your inquiry and evaluate a potential relationship. Analytics data is retained in aggregate form. You may request deletion of your information at any time by contacting us directly.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#111827] mb-3 font-[family-name:var(--font-jakarta)]">5. Third-Party Services</h2>
            <p>The Site may use third-party services for hosting, analytics, or form processing. These services operate under their own privacy policies. We do not share personally identifiable information with third parties beyond what is necessary to operate the Site.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#111827] mb-3 font-[family-name:var(--font-jakarta)]">6. Your Rights</h2>
            <p>You may request access to, correction of, or deletion of any personal information you have submitted through the Site. To make such a request, contact us at the address below.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#111827] mb-3 font-[family-name:var(--font-jakarta)]">7. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of the Site after changes are posted constitutes acceptance of the revised policy.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#111827] mb-3 font-[family-name:var(--font-jakarta)]">8. Contact</h2>
            <p>Questions about this Privacy Policy may be directed to:</p>
            <p className="mt-3">PsynapseMD<br />privacy@psynapsemd.com</p>
          </section>

        </div>
      </div>
    </div>
  );
}
