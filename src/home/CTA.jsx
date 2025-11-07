// src/components/CtaSection.jsx
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

// Generates random stars for the background effect
const generateStars = (numStars) => {
    const stars = [];
    for (let i = 0; i < numStars; i++) {
        stars.push({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            size: `${Math.random() * 1.5 + 1}px`, // 1px to 2.5px
            delay: `${Math.random() * 2}s`,
            duration: `${Math.random() * 1.5 + 1.5}s`, // 1.5s to 3s
        });
    }
    return stars;
};

const CtaSection = () => {
    const stars = useMemo(() => generateStars(60), []); // Fewer stars

    return (
        <section className="relative overflow-hidden py-20 sm:py-24 bg-transparent text-white text-center">
            
            {/* Embedded CSS for animations and custom gradients */}
            <style>{`
                @keyframes twinkle {
                    0%, 100% { opacity: 0.4; }
                    50% { opacity: 1; }
                }
                .animate-star-twinkle {
                    animation-name: twinkle;
                    animation-timing-function: ease-in-out;
                    animation-iteration-count: infinite;
                    animation-direction: alternate;
                }
                .cta-button-gradient {
                    background: linear-gradient(to right, #e74c3c, #c0392b); /* Red gradient */
                    box-shadow: 0 4px 15px rgba(231, 76, 60, 0.35); /* Softer red shadow */
                    transition: all 0.3s ease-in-out;
                }
                .cta-button-gradient:hover {
                    background: linear-gradient(to right, #c0392b, #e74c3c); /* Reverse gradient on hover */
                    box-shadow: 0 6px 20px rgba(231, 76, 60, 0.5); /* Stronger shadow on hover */
                    transform: translateY(-2px);
                }
            `}</style>

            {/* Starry background effect */}
            <div className="absolute inset-0 z-0">
                {stars.map(star => (
                    <div
                        key={star.id}
                        className="absolute bg-white rounded-full opacity-0 animate-star-twinkle"
                        style={{
                            left: star.left,
                            top: star.top,
                            width: star.size,
                            height: star.size,
                            animationDelay: star.delay,
                            animationDuration: star.duration,
                        }}
                    />
                ))}
            </div>

            {/* Purple gradient blobs for visual flair - REDUCED SIZE */}
            <div className="absolute -left-16 top-1/4 w-52 h-52 bg-purple-600 opacity-20 blur-3xl rounded-full z-0 animate-pulse-slow md:w-80 md:h-80"></div>
            <div className="absolute -right-16 bottom-1/4 w-52 h-52 bg-purple-600 opacity-20 blur-3xl rounded-full z-0 animate-pulse-slow md:w-80 md:h-80"></div>
            
            {/* Content */}
            <motion.div
                className="max-w-3xl mx-auto px-4 relative z-10" // REDUCED max-width and padding
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <p className="font-semibold text-yellow-500 mb-3 text-base">Let's Try!</p> {/* REDUCED margin and text size */}
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-5"> {/* REDUCED text size and margin */}
                    Grow Your Restaurant Sale
                </h2>
                <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto mb-8"> {/* REDUCED text size, max-width, and margin */}
                    We are helping restaurants across Pakistan stay profitable. Let us help you increase business immediately.
                </p>
                <a
                    href="#contact" // Link to a contact section or form
                    className="inline-block px-8 py-3 rounded-full text-base font-semibold text-white cta-button-gradient" // REDUCED padding and text size
                >
                    Contact with Us
                </a>
            </motion.div>
        </section>
    );
};

export default CtaSection;
