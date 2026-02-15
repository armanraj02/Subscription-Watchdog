import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, EyeOff, CreditCard } from 'lucide-react';

const problems = [
    {
        icon: EyeOff,
        title: "Hidden Fees & Forgotten Trials",
        description: "Free trials that silently convert to paid subscriptions costing you hundreds annually without you noticing.",
        color: "bg-orange-100 text-orange-600"
    },
    {
        icon: CreditCard,
        title: "Duplicate Charges",
        description: "paying for multiple services that do the exact same thing (e.g., Apple Music + Spotify breakdown).",
        color: "bg-red-100 text-red-600"
    },
    {
        icon: AlertCircle,
        title: "Price Hikes",
        description: "Streaming services raising prices by 15-20% without clear notifications or your explicit approval.",
        color: "bg-yellow-100 text-yellow-600"
    }
];

const Problem = () => {
    return (
        <section className="py-20 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Silent Wealth Killers</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Subscription creep is real. On average, you're paying for 3.4 services you don't even use.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-12px_rgba(0,0,0,0.1)] hover:shadow-xl transition-all duration-300 border border-gray-100"
                            >
                                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-6`}>
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Problem;
