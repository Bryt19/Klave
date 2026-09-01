import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function DocsIndex() {
  return (
    <div className="min-h-screen bg-white selection:bg-emerald-100 selection:text-emerald-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <svg className="w-7 h-7 transition-transform duration-200 group-hover:scale-105" viewBox="0 0 32 32" fill="none">
              <rect x="10" y="2" width="12" height="28" rx="4" fill="#10B981"/>
              <rect x="2" y="10" width="28" height="12" rx="4" fill="#3B82F6"/>
              <rect x="10" y="10" width="12" height="12" rx="2" fill="#0EA5E9" opacity="0.85"/>
            </svg>
            <span className="text-lg font-bold tracking-tight text-slate-900">
              Klavora<span className="text-blue-500">.</span>
            </span>
          </Link>
          <Link
            to="/"
            className="text-xs font-medium text-slate-500 hover:text-slate-800 flex items-center gap-1 transition-colors"
          >
            <i className="ri-arrow-left-line" />
            Back
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              Klavora Documentation
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Welcome to the Klavora documentation hub. Whether you are a pharmacy owner evaluating the platform, a developer reviewing the API, or an investor doing due diligence, this is your starting point.
            </p>
          </div>

          <div className="space-y-10">
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h2 className="text-xl font-bold text-slate-900 mb-6">Documents</h2>
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <table className="min-w-full divide-y divide-slate-200">
                  <thead className="bg-slate-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Document
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                        README
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">
                        A polished product overview of Klavora — what it is, who it is built for, and why it was built for Africa.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                        <Link to="/features" className="text-emerald-600 hover:text-emerald-500">Features</Link>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">
                        A comprehensive plain-language reference to every feature in the Klavora platform, written for pharmacy owners and managers.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                        <Link to="/security" className="text-emerald-600 hover:text-emerald-500">Security</Link>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">
                        An explanation of how Klavora protects your data — from encryption and access control to payment security and offline data handling.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                        <Link to="/privacy" className="text-emerald-600 hover:text-emerald-500">Privacy Policy</Link>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">
                        A plain-language privacy policy covering what data Klavora collects, how it is used, and how to exercise your data rights.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                        <Link to="/api" className="text-emerald-600 hover:text-emerald-500">API Overview</Link>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">
                        A high-level technical overview of the Klavora API architecture, authentication model, and major endpoint groups, written for developers and technical evaluators.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                        <Link to="/architecture" className="text-emerald-600 hover:text-emerald-500">Architecture</Link>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">
                        A detailed technical architecture document covering the system design, database model, backend structure, frontend offline-first approach, and infrastructure.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                        <Link to="/changelog" className="text-emerald-600 hover:text-emerald-500">Changelog</Link>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">
                        A product changelog written in plain language, describing what has been added, improved, and fixed across each version of Klavora.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                        <Link to="/glossary" className="text-emerald-600 hover:text-emerald-500">Glossary</Link>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">
                        Definitions for every term used in the Klavora platform and documentation, written for pharmacy owners who may not be familiar with software or financial terminology.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.14 }}
              className="mt-12 pt-8 border-t border-slate-100"
            >
              <h2 className="text-xl font-bold text-slate-900 mb-6">Quick Links</h2>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  <span><strong className="font-semibold text-slate-900">Use Klavora:</strong> <a href="https://app.klavora.co" className="text-emerald-600 hover:text-emerald-500">app.klavora.co</a></span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  <span><strong className="font-semibold text-slate-900">Website:</strong> <a href="https://klavora.co" className="text-emerald-600 hover:text-emerald-500">klavora.co</a></span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                  <span><strong className="font-semibold text-slate-900">Support:</strong> <a href="mailto:support@klavora.co" className="text-emerald-600 hover:text-emerald-500">support@klavora.co</a></span>
                </li>
              </ul>
            </motion.section>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Klavora (EliTech CreaTives Limited). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-600 transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-slate-600 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
