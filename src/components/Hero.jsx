import React from 'react';
import { STORE_INFO } from '../utils/constants';

const Hero = () => {
    return (
        <section className="relative overflow-hidden py-16 px-4 gradient-hero animate-fade-in">
            <div className="container mx-auto relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                        Productos Reacondicionados
                    </h2>

                    <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                        Dispositivos verificados, testeados y con garantía. Calidad asegurada para la comunidad educativa.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-slide-up">
                        {STORE_INFO.features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer shadow-lg"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                                    {index === 0 && (
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    )}
                                    {index === 1 && (
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    )}
                                    {index === 2 && (
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                </div>
                                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                                    {feature}
                                </h3>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center">
                        <a
                            href="#productos"
                            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                            Ver Productos
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
