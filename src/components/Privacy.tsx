import React from 'react';
import { motion } from 'framer-motion';
import {
      ShieldCheck,
      Cookie,
      Database,
      Users,
      Lock,
      ExternalLink,
      RefreshCcw,
      Mail,
      CheckCircle2
} from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const Privacy: React.FC = () => {
      // Animation Variants
      const containerVariants = {
            hidden: { opacity: 0 },
            visible: {
                  opacity: 1,
                  transition: {
                        staggerChildren: 0.1
                  }
            }
      };

      const itemVariants = {
            hidden: { y: 20, opacity: 0 },
            visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 12
                  }
            }
      };

      return (
            <><Header/>
            <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-600 selection:bg-blue-100 selection:text-blue-900">
                  <motion.div
                        className="max-w-5xl mx-auto"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                  >
                        {/* Header Section */}
                        <motion.div variants={itemVariants} className="text-center pt-20 mb-16">
                              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-6">
                                    <ShieldCheck className="w-8 h-8 text-blue-600" />
                              </div>
                              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                                    Privacy Policy
                                    <span className="block text-2xl md:text-3xl text-blue-600 mt-2 font-semibold">Doozy Trips</span>
                              </h1>
                              <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-slate-500">
                                    At Doozy Trips, we value your privacy and are fully committed to protecting your personal information.
                                    Our goal is to offer you the best ticket prices and a smooth, stress-free booking experience.
                              </p>
                        </motion.div>

                        {/* Grid Content */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

                              {/* Collection */}
                              <PolicyCard
                                    icon={<Database className="w-6 h-6 text-emerald-500" />}
                                    title="Information We Collect"
                                    variants={itemVariants}
                              >
                                    <p className="mb-4">
                                          When you use Doozy Trips to search for or book tickets, we collect basic information such as your name, email address, phone number, and travel details.
                                    </p>
                                    <p>
                                          If you complete a booking, payment is processed securely through trusted third-party processors; we do not store sensitive payment details. We also automatically collect technical data (IP address, device type, browser details) to improve performance and detect issues.
                                    </p>
                              </PolicyCard>

                              {/* Usage */}
                              <PolicyCard
                                    icon={<Users className="w-6 h-6 text-indigo-500" />}
                                    title="How We Use Your Data"
                                    variants={itemVariants}
                              >
                                    <p className="mb-4">
                                          We use your data to find the best ticket prices, complete bookings, send confirmations, and provide support. It also helps us improve services and offer personalized recommendations.
                                    </p>
                                    <p>
                                          <span className="font-semibold text-indigo-600">We do not sell your personal information.</span> We only share data with trusted partners (airlines, service providers) for delivery purposes or legal authorities when required by law.
                                    </p>
                              </PolicyCard>

                              {/* Cookies */}
                              <PolicyCard
                                    icon={<Cookie className="w-6 h-6 text-amber-500" />}
                                    title="Cookies & Technologies"
                                    variants={itemVariants}
                              >
                                    <p>
                                          To provide a seamless experience, our website uses cookies. These help us understand site usage, remember your preferences, and offer faster search results. You may disable cookies in your browser settings at any time, though this may limit some platform features.
                                    </p>
                              </PolicyCard>

                              {/* Security */}
                              <PolicyCard
                                    icon={<Lock className="w-6 h-6 text-rose-500" />}
                                    title="Data Security"
                                    variants={itemVariants}
                              >
                                    <p>
                                          We employ industry-standard measures like encryption, secure servers, and restricted internal access. While we work continuously to keep your data safe, no online system is entirely risk-free, and we recommend maintaining safe browsing practices.
                                    </p>
                              </PolicyCard>

                              {/* User Rights */}
                              <PolicyCard
                                    icon={<CheckCircle2 className="w-6 h-6 text-teal-500" />}
                                    title="Your Rights"
                                    variants={itemVariants}
                              >
                                    <p>
                                          You have full rights over your personal information. At any time, you may request access, corrections, updates, deletion, or opt out of promotional communication. Simply contact us, and our team will assist you.
                                    </p>
                              </PolicyCard>

                              {/* External Links */}
                              <PolicyCard
                                    icon={<ExternalLink className="w-6 h-6 text-purple-500" />}
                                    title="External Links & Children"
                                    variants={itemVariants}
                              >
                                    <p className="mb-4">
                                          Our site may link to other travel platforms. These operate under their own policies, so please review them.
                                    </p>
                                    <p className="text-sm text-slate-400">
                                          Doozy Trips is not intended for children under 16, and we do not knowingly collect information from minors.
                                    </p>
                              </PolicyCard>
                        </div>

                        {/* Updates Section */}
                        <motion.div
                              variants={itemVariants}
                              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 mb-12"
                        >
                              <div className="flex items-start space-x-4">
                                    <div className="p-2 bg-slate-100 rounded-lg">
                                          <RefreshCcw className="w-6 h-6 text-slate-700" />
                                    </div>
                                    <div>
                                          <h3 className="text-xl font-bold text-slate-900 mb-2">Policy Updates</h3>
                                          <p className="leading-relaxed">
                                                We may update this Privacy Policy occasionally to reflect improvements or regulatory changes. Any updates will be posted on this page, and continued use of our platform means you agree to the updated policy.
                                          </p>
                                    </div>
                              </div>
                        </motion.div>

                        {/* Contact Footer */}
                        <motion.div
                              variants={itemVariants}
                              className="text-center bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-10 text-white shadow-xl shadow-blue-200"
                        >
                              <h3 className="text-2xl font-bold mb-4">Have Questions?</h3>
                              <p className="mb-8 text-blue-100 max-w-xl mx-auto">
                                    If you have any questions or concerns regarding your privacy or personal data, please do not hesitate to reach out.
                              </p>
                              <a
                                    href="mailto:reservations@doozytrips.com"
                                    className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 hover:shadow-lg"
                              >
                                    <Mail className="w-5 h-5" />
                                    reservations@doozytrips.com
                              </a>
                              <p className="mt-8 text-sm text-blue-200/80 font-medium">
                                    Thank you for choosing Doozy Trips for the best ticket prices and a hassle-free booking experience.
                              </p>
                        </motion.div>

                  </motion.div>
            </div>
            <Footer/>
            </>
      );
};

// Sub-component for cleaner code
interface PolicyCardProps {
      icon: React.ReactNode;
      title: string;
      children: React.ReactNode;
      variants: any;
}

const PolicyCard: React.FC<PolicyCardProps> = ({ icon, title, children, variants }) => {
      return (
            <motion.div
                  variants={variants}
                  className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300 hover:-translate-y-1"
            >
                  <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-slate-50 rounded-xl group-hover:bg-white group-hover:shadow-sm transition-colors">
                              {icon}
                        </div>
                        <h2 className="text-xl font-bold text-slate-900">{title}</h2>
                  </div>
                  <div className="text-slate-600 leading-relaxed space-y-3">
                        {children}
                  </div>
            </motion.div>
      );
};

export default Privacy;