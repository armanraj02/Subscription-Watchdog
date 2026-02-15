import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
    "Instant bank connection via Plaid",
    "AI-powered recurring transaction detection",
    "One-click cancelation concierge",
    "Price hike alerts in real-time",
    "Contract renewal reminders",
    "Shared subscription management"
];

const Solution = () => {
    return (
        <section id="features" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
                            {/* Abstract chart/UI representation */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

                            <div className="relative z-10">
                                <div className="text-sm font-medium text-blue-100 mb-2 uppercase tracking-wider">Total Savings Found</div>
                                <div className="text-5xl font-bold mb-8">₹12,450<span className="text-xl font-normal text-blue-200">/year</span></div>

                                <div className="space-y-4">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-between">
                                        <div className="flex items-center">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg" alt="Netflix" className="w-8 h-8 mr-3 object-contain" />
                                            <div>
                                                <div className="font-semibold">Netflix</div>
                                                <div className="text-xs text-blue-100">Duplicate subscription</div>
                                            </div>
                                        </div>
                                        <button className="bg-white text-blue-600 text-xs font-bold px-3 py-1.5 rounded-full">Cancel</button>
                                    </div>

                                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center justify-between">
                                        <div className="flex items-center">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg" alt="Spotify" className="w-8 h-8 mr-3 object-contain" />
                                            <div>
                                                <div className="font-semibold">Spotify</div>
                                                <div className="text-xs text-blue-100">Family plan available</div>
                                            </div>
                                        </div>
                                        <button className="bg-white text-blue-600 text-xs font-bold px-3 py-1.5 rounded-full">Optimize</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
                            Intelligent Analysis
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Total visibility over your financial life
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Connect your accounts once, and our AI scans 24 months of transaction history to find every recurring payment, trial, and hidden fee.
                        </p>

                        <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                                        <Check className="w-3 h-3 text-green-600" strokeWidth={3} />
                                    </div>
                                    <span className="text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10">
                            <button className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center transition-colors">
                                Explore all features <span className="ml-2">→</span>
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Solution;
