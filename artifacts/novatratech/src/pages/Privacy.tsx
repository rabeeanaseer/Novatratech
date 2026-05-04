import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      <Navbar />
      <section className="pt-36 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#5B8CFF] mb-3">Legal</p>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-3">Privacy Policy</h1>
            <p className="text-[#9AA4B2] mb-12">Last updated: January 1, 2025</p>

            <div className="prose prose-invert max-w-none space-y-10 text-[#9AA4B2] leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
                <p>
                  NovatraTech ("we," "our," or "us") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services.
                </p>
                <p className="mt-3">
                  Please read this policy carefully. If you disagree with its terms, please discontinue use of our site. We reserve the right to make changes to this policy at any time and for any reason.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
                <p>We may collect the following categories of personal information:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li><strong className="text-[#E6EAF2]">Contact Information:</strong> Name, email address, phone number, and company name provided through contact forms or inquiry submissions.</li>
                  <li><strong className="text-[#E6EAF2]">Usage Data:</strong> IP addresses, browser type, operating system, referring URLs, pages visited, and time spent on pages. Collected automatically via cookies and analytics tools.</li>
                  <li><strong className="text-[#E6EAF2]">Communications:</strong> The content of emails, messages, or other communications you send us.</li>
                  <li><strong className="text-[#E6EAF2]">Payment Information:</strong> If you purchase services, payment details are processed by our secure third-party payment processors. We do not store full payment card data.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Respond to your inquiries and provide the services you request</li>
                  <li>Send administrative communications regarding your projects or account</li>
                  <li>Send marketing communications (only with your explicit consent)</li>
                  <li>Improve our website, services, and business operations</li>
                  <li>Comply with applicable legal obligations</li>
                  <li>Detect, prevent, and address technical issues or fraudulent activity</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">4. Sharing Your Information</h2>
                <p>We do not sell, trade, or rent your personal information. We may share it only in the following circumstances:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li><strong className="text-[#E6EAF2]">Service Providers:</strong> Trusted third parties who assist in operating our website and delivering our services (e.g., email platforms, payment processors, analytics providers), bound by confidentiality agreements.</li>
                  <li><strong className="text-[#E6EAF2]">Legal Requirements:</strong> When required by law, court order, or governmental authority.</li>
                  <li><strong className="text-[#E6EAF2]">Business Transfers:</strong> In connection with a merger, acquisition, or sale of all or part of our business assets.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">5. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to enhance your experience on our website. These may include session cookies, persistent cookies, and analytics tags. You may disable cookies in your browser settings, though this may affect certain functionality.
                </p>
                <p className="mt-3">
                  We use Google Analytics to understand website traffic patterns. This service may collect and process data in accordance with Google's privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">6. Data Retention</h2>
                <p>
                  We retain your personal information only as long as necessary to fulfil the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. When data is no longer needed, we securely delete or anonymize it.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">7. Your Rights</h2>
                <p>Depending on your location, you may have the following rights regarding your personal data:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>The right to access the personal data we hold about you</li>
                  <li>The right to request correction of inaccurate data</li>
                  <li>The right to request deletion of your data</li>
                  <li>The right to object to or restrict processing of your data</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent at any time</li>
                </ul>
                <p className="mt-3">To exercise any of these rights, contact us at: <a href="mailto:privacy@novatratech.co" className="text-[#5B8CFF] hover:underline">privacy@novatratech.co</a></p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">8. Security</h2>
                <p>
                  We implement commercially reasonable technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">9. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">10. Contact Us</h2>
                <p>If you have questions or concerns about this Privacy Policy, please contact us:</p>
                <div className="mt-3 p-4 rounded-xl bg-[#0D1220] border border-white/8">
                  <p className="text-[#E6EAF2] font-semibold">NovatraTech</p>
                  <p>Email: <a href="mailto:privacy@novatratech.co" className="text-[#5B8CFF] hover:underline">privacy@novatratech.co</a></p>
                  <p>Website: novatratech.co</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
