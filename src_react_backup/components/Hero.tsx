import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Rocket } from "lucide-react";

export const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background elements removed to show Dither effect */}
            <div className="container px-4 md:px-6 relative z-10 grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col justify-center space-y-4"
                >
                    <div className="space-y-2">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-xl md:text-2xl font-medium text-primary"
                        >
                            Hello, I'm
                        </motion.h2>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
                        >
                            C Jeswin Sunny
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="max-w-[600px] text-muted-foreground text-lg md:text-xl"
                        >
                            A creative <span className="text-foreground font-semibold">Software Engineer</span> passionate about building beautiful, functional, and scalable web applications.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="flex flex-col sm:flex-row gap-3 pt-4"
                    >
                        <a
                            href="#projects"
                            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        >
                            View Projects
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        >
                            Contact Me
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="flex items-center gap-4 pt-4 text-muted-foreground"
                    >
                        <a href="#" className="hover:text-foreground transition-colors"><Github className="h-6 w-6" /></a>
                        <a href="#" className="hover:text-foreground transition-colors"><Linkedin className="h-6 w-6" /></a>
                        <a href="#" className="hover:text-foreground transition-colors"><Mail className="h-6 w-6" /></a>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative flex items-center justify-center"
                >
                    {/* Conceptual creative graphic or 3D placeholder */}
                    <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl absolute -z-10 animate-pulse"></div>
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative z-10 w-full max-w-sm aspect-square bg-gradient-to-tr from-gray-900 to-gray-800 rounded-2xl border border-gray-700 shadow-2xl flex items-center justify-center p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500"
                    >
                        <div className="text-center space-y-4">
                            <div className="w-20 h-20 bg-primary/20 rounded-xl mx-auto flex items-center justify-center">
                                <Rocket className="h-10 w-10 text-primary" />
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 w-24 bg-gray-700 rounded mx-auto"></div>
                                <div className="h-2 w-32 bg-gray-700 rounded mx-auto"></div>
                                <div className="h-2 w-16 bg-gray-700 rounded mx-auto"></div>
                            </div>
                            <div className="pt-4 flex justify-center gap-2">
                                <div className="h-8 w-8 rounded-full bg-gray-700"></div>
                                <div className="h-8 w-8 rounded-full bg-gray-700"></div>
                                <div className="h-8 w-8 rounded-full bg-gray-700"></div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                            className="absolute -top-6 -right-6 p-4 bg-gray-800 rounded-lg border border-gray-700 shadow-xl"
                        >
                            <span className="font-mono text-xs text-green-400">{'<Coder />'}</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                            className="absolute -bottom-6 -left-6 p-4 bg-gray-800 rounded-lg border border-gray-700 shadow-xl"
                        >
                            <span className="font-mono text-xs text-blue-400">{'TS/React'}</span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
