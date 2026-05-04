import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      <Navbar />
      <section className="pt-36 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#5B8CFF] mb-3">Legal</p>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-3">Terms of Service</h1>
            <p className="text-[#9AA4B2] mb-12">Last updated: January 1, 2025</p>

            <div className="prose prose-invert max-w-none space-y-10 text-[#9AA4B2] leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using NovatraTech's website (novatratech.co) or engaging any of our services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to all of these Terms, do not access our website or use our services.
                </p>
                <p className="mt-3">
                  These Terms apply to all visitors, clients, and others who access or use our services. We reserve the right to update these Terms at any time. Continued use of our services after changes constitutes acceptance of the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">2. Services</h2>
                <p>
                  NovatraTech provides digital systems development services including but not limited to: AI automation systems, website development, SaaS development, mobile app development, growth funnel design, and digital marketing services. The specific scope of services for any engagement is defined in a separate Statement of Work or Service Agreement.
                </p>
                <p className="mt-3">
                  We reserve the right to modify, suspend, or discontinue any service at any time with reasonable notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">3. Client Responsibilities</h2>
                <p>As a client, you agree to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Provide accurate and complete information necessary for the completion of your project</li>
                  <li>Review and provide timely feedback at designated project milestones</li>
                  <li>Ensure you have rights to any materials, assets, or third-party content you provide to us</li>
                  <li>Pay all fees according to the agreed payment schedule</li>
                  <li>Not use our deliverables for any unlawful or prohibited purpose</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">4. Intellectual Property</h2>
                <p>
                  Upon full payment of all fees, NovatraTech transfers ownership of the custom deliverables created specifically for your project. This excludes third-party libraries, frameworks, and tools (which remain subject to their respective licenses), as well as any pre-existing NovatraTech proprietary code, templates, or methodologies used in the development process.
                </p>
                <p className="mt-3">
                  NovatraTech retains the right to display your project in our portfolio and case studies unless you request otherwise in writing.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">5. Payment Terms</h2>
                <p>
                  Payment terms for each engagement are outlined in the corresponding Service Agreement. Standard terms include a deposit of 50% before project commencement and the balance upon delivery. Late payments may result in project suspension and incur a late fee of 1.5% per month.
                </p>
                <p className="mt-3">
                  All prices are in USD unless otherwise specified. Invoices are due within 14 days of issuance unless otherwise agreed in writing.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">6. Confidentiality</h2>
                <p>
                  Both parties agree to keep confidential any proprietary or sensitive information shared during the engagement. This includes business strategies, technical specifications, financial information, and any other materials marked as confidential or reasonably understood to be confidential. This obligation survives termination of the service agreement.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">7. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by applicable law, NovatraTech shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, business, or goodwill, arising out of or in connection with our services.
                </p>
                <p className="mt-3">
                  Our total liability for any claim arising under these Terms shall not exceed the total fees paid by you to NovatraTech in the three months immediately preceding the claim.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">8. Warranty Disclaimer</h2>
                <p>
                  Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, error-free, or completely secure. We expressly disclaim all implied warranties, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">9. Termination</h2>
                <p>
                  Either party may terminate a service engagement with 14 days written notice. Upon termination, you will be invoiced for all work completed to the termination date. NovatraTech reserves the right to immediately terminate services if you breach these Terms or any payment obligations.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">10. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with applicable international commercial law. Any disputes arising from these Terms shall be resolved through good-faith negotiation, followed by binding arbitration if negotiation fails, conducted in English.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">11. Contact Information</h2>
                <p>For questions about these Terms, please contact us:</p>
                <div className="mt-3 p-4 rounded-xl bg-[#0D1220] border border-white/8">
                  <p className="text-[#E6EAF2] font-semibold">NovatraTech</p>
                  <p>Email: <a href="mailto:legal@novatratech.co" className="text-[#5B8CFF] hover:underline">legal@novatratech.co</a></p>
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
