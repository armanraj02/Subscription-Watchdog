import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Search, Wallet, BarChart3, LineChart } from 'lucide-react';

const steps = [
    {
        icon: Lock,
        title: "Connect securely",
        description: "Link your bank accounts via Plaid's encrypted API. We never see your login credentials.",
        badge: "256-bit Encryption"
    },
    {
        icon: Search,
        title: "AI Analysis",
        description: "Our algorithms scan for recurring patterns to identify subscriptions you forgot about.",
        badge: "Smart Detection"
    },
    {
        icon: Wallet,
        title: "Stop the bleed",
        description: "Cancel unwanted services with one click or let our team negotiate better rates.",
        badge: "Avg. Save ₹4000/mo"
    }
];

const HowItWorks = () => {
    const [chartType, setChartType] = useState('bar'); // 'bar' or 'line'

    return (
        <section id="how-it-works" className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent hidden lg:block"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How it works</h2>
                    <p className="text-lg text-gray-600">Three simple steps to financial freedom</p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                            >
                                {/* Step Number */}
                                <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-gray-50">
                                    {index + 1}
                                </div>

                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                                    <Icon size={28} />
                                </div>

                                <div className="inline-block px-2 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded mb-4">
                                    {step.badge}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* ROI / Savings Chart Visualization */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-4xl mx-auto"
                >
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">Projected Savings</h3>
                            <p className="text-gray-500">Based on your spending habits</p>
                        </div>

                        {/* View Toggles */}
                        <div className="flex bg-gray-100 p-1 rounded-lg mt-4 sm:mt-0">
                            <button
                                onClick={() => setChartType('bar')}
                                className={`px-3 py-1.5 rounded-md text-sm font-medium flex items-center transition-all ${chartType === 'bar' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                <BarChart3 size={16} className="mr-2" />
                                Bar
                            </button>
                            <button
                                onClick={() => setChartType('line')}
                                className={`px-3 py-1.5 rounded-md text-sm font-medium flex items-center transition-all ${chartType === 'line' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
                            >
                                <LineChart size={16} className="mr-2" />
                                Line
                            </button>
                        </div>
                    </div>

                    <div className="h-64 sm:h-80 w-full relative">
                        <AnimatePresence mode="wait">
                            {chartType === 'bar' ? (
                                <motion.div
                                    key="bar-chart"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex items-end justify-center space-x-6 h-full pb-6 border-b border-gray-100 relative"
                                >
                                    <div className="w-16 sm:w-24 flex flex-col items-center justify-end h-full group">
                                        <div className="text-sm font-semibold text-gray-500 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">₹2k</div>
                                        <div className="w-full bg-gray-100 rounded-t-lg h-[4%] group-hover:bg-gray-200 transition-colors relative overflow-hidden"></div>
                                        <div className="mt-3 text-sm font-medium text-gray-500">Month 1</div>
                                    </div>
                                    <div className="w-16 sm:w-24 flex flex-col items-center justify-end h-full group">
                                        <div className="text-sm font-semibold text-gray-500 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">₹8k</div>
                                        <div className="w-full bg-blue-200 rounded-t-lg h-[16%] group-hover:bg-blue-300 transition-colors relative overflow-hidden"></div>
                                        <div className="mt-3 text-sm font-medium text-gray-500">Month 3</div>
                                    </div>
                                    <div className="w-16 sm:w-24 flex flex-col items-center justify-end h-full group">
                                        <div className="text-sm font-semibold text-blue-600 mb-2">₹15k</div>
                                        <div className="w-full bg-blue-600 rounded-t-lg h-[30%] shadow-lg shadow-blue-200 relative overflow-hidden">
                                            <div className="absolute top-0 left-0 right-0 h-1 bg-white/20"></div>
                                        </div>
                                        <div className="mt-3 text-sm font-bold text-blue-600">Month 6</div>
                                    </div>
                                    <div className="w-16 sm:w-24 flex flex-col items-center justify-end h-full group">
                                        <div className="text-sm font-semibold text-gray-500 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">₹47k</div>
                                        <div className="w-full bg-green-500 rounded-t-lg h-[94%] shadow-lg shadow-green-200 relative overflow-hidden">
                                            <div className="absolute top-0 left-0 right-0 h-1 bg-white/20"></div>
                                        </div>
                                        <div className="mt-3 text-sm font-medium text-gray-900">Year 1</div>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="line-chart"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="h-full w-full pb-6 border-b border-gray-100 relative flex flex-col justify-end"
                                >
                                    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        {/* Grid lines */}
                                        <line x1="0" y1="0" x2="100" y2="0" stroke="#f3f4f6" strokeWidth="0.5" strokeDasharray="2" />
                                        <line x1="0" y1="25" x2="100" y2="25" stroke="#f3f4f6" strokeWidth="0.5" strokeDasharray="2" />
                                        <line x1="0" y1="50" x2="100" y2="50" stroke="#f3f4f6" strokeWidth="0.5" strokeDasharray="2" />
                                        <line x1="0" y1="75" x2="100" y2="75" stroke="#f3f4f6" strokeWidth="0.5" strokeDasharray="2" />

                                        {/* Path */}
                                        <motion.path
                                            d="M 12 96 L 37 84 L 62 70 L 87 6"
                                            fill="none"
                                            stroke="#2563eb"
                                            strokeWidth="1.5"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 1.5, ease: "easeInOut" }}
                                        />

                                        <motion.path
                                            d="M 12 96 L 37 84 L 62 70 L 87 6 L 87 100 L 12 100 Z"
                                            fill="url(#gradient)"
                                            opacity="0.2"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 0.2 }}
                                            transition={{ duration: 0.5, delay: 0.5 }}
                                        />
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                <stop offset="0%" stopColor="#2563eb" />
                                                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>

                                        {/* Dots */}
                                        {[
                                            { x: 12, y: 96, val: "₹2k" },
                                            { x: 37, y: 84, val: "₹8k" },
                                            { x: 62, y: 70, val: "₹15k" },
                                            { x: 87, y: 6, val: "₹47k" }
                                        ].map((point, i) => (
                                            <g key={i}>
                                                <circle cx={point.x} cy={point.y} r="1.5" fill="white" stroke="#2563eb" strokeWidth="0.5" />
                                                <text x={point.x} y={point.y - 4} fontSize="3" fill="#374151" textAnchor="middle" fontWeight="500">{point.val}</text>
                                            </g>
                                        ))}
                                    </svg>
                                    <div className="flex justify-between w-full px-4 sm:px-12 mt-2 absolute bottom-0">
                                        <span className="text-sm font-medium text-gray-500">Month 1</span>
                                        <span className="text-sm font-medium text-gray-500">Month 3</span>
                                        <span className="text-sm font-bold text-blue-600">Month 6</span>
                                        <span className="text-sm font-medium text-gray-900">Year 1</span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="text-center mt-6">
                        <button className="text-blue-600 font-medium hover:underline text-sm">Calculate your potential savings</button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default HowItWorks;
