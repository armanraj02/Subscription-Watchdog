import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Star } from 'lucide-react';
import heroBg from '../assets/hero-bg.jpg';

const Hero = () => {
    return (
        <div className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left"
                    >


                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
                            Stop wasting money on <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">unused subscriptions</span>
                        </h1>

                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                            The average user could save <span className="font-semibold text-gray-900">₹47,000/year</span> by identifying forgotten trials and duplicate charges. Connect your accounts securely in seconds.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                            <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow-md transition-all">
                                Start Saving Now
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </button>

                        </div>


                    </motion.div>

                    {/* Hero Image/Dashboard */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative lg:h-auto"
                    >
                        <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-gray-200 bg-white">
                            <div className="absolute top-0 left-0 right-0 h-11 bg-gray-50 border-b border-gray-100 flex items-center px-4 space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            {/* Use the background image differently, maybe as part of the dashboard content or a refined background */}
                            <div className="pt-11 bg-gray-50 aspect-[4/3] relative">
                                <img
                                    src={heroBg}
                                    alt="Subscription Dashboard"
                                    className="w-full h-full object-cover object-left-top"
                                />
                                {/* Overlay gradient to ensure text readability if needed, though here it's inside a mockup */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent pointer-events-none"></div>
                            </div>
                        </div>


                    </motion.div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50/50 skew-x-12 transform origin-top-right"></div>
        </div>
    );
};

export default Hero;
