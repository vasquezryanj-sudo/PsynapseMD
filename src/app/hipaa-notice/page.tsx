export default function HipaaNoticePage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <p className="text-xs text-[#9CA3AF] uppercase tracking-widest mb-4">Legal</p>
        <h1 className="text-4xl font-bold text-[#111827] mb-3 font-[family-name:var(--font-jakarta)]">HIPAA Notice</h1>
        <p className="text-sm text-[#9CA3AF] mb-16">Effective date: January 1, 2026</p>

        <div className="prose prose-gray max-w-none space-y-10 text-[#4B5563] leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-[#111827] mb-3 font-[family-name:var(--font-jakarta)]">1. Scope of This Notice</h2>
            <p>This notice applies to the PsynapseMD marketing website located at psynapse-md.vercel.app (the "Site"). This Site does not collect, transmit, or process protected health information (PHI) as defined by the Health Insurance Portability and Accountability Act (HIPAA).</p>
            <p className="mt-3">HIPAA obligations related to the PsynapseMD clinical documentation product are governed separately by your service agreement and the Business Associate Agreement (BAA) executed between PsynapseMD and your organization.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#111827] mb-3 font-[family-name:var(--font-jakarta)]">2. What This Site Does Not Collect</h2>
            <p>The marketing website does not ask for, accept, or store any patient information, clinical data, or other PHI. Contact and demo request forms on this Site collect only basic professional information (name, email, practice type) for the purpose of responding to your inquiry.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#111827] mb-3 font-[family-name:var(--font-jakarta)]">3. The Clinical Product and HIPAA</h2>
            <p>The PsynapseMD clinical documentation product is designed and operated in compliance with HIPAA requirements applicable to business associates. When your organization enters into a service agreement with PsynapseMD, a Business Associate Agreement is executed to govern the handling of any PHI processed through the product.</p>
            <p className="mt-3">Key commitments within that agreement include:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>PHI is used only to fulfill the documentation services contracted for</li>
              <li>PHI is never sold, shared with third parties for marketing, or used to train AI models</li>
              <li>Appropriate administrative, physical, and technical safeguards are maintained</li>
              <li>Breach notification obligations are met in accordance with the HIPAA Breach Notification Rule</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#111827] mb-3 font-[family-name:var(--font-jakarta)]">4. Your Rights Under HIPAA</h2>
            <p>HIPAA grants individuals certain rights with respect to their protected health information. These rights are exercised through the covered entity (your healthcare provider or practice), not through PsynapseMD directly. If you are a patient with questions about your health information, please contact your provider.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#111827] mb-3 font-[family-name:var(--font-jakarta)]">5. Questions</h2>
            <p>If you have questions about how PsynapseMD handles health information in the context of a service engagement, please contact us directly. We do not use automated systems to respond to compliance inquiries.</p>
            <p className="mt-3">PsynapseMD<br />privacy@psynapsemd.com</p>
          </section>

        </div>
      </div>
    </div>
  );
}
