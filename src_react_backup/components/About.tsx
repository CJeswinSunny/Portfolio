import { motion } from "framer-motion";
import { Code, Database, Globe, Smartphone } from "lucide-react";

export const About = () => {
    return (
        <section id="about" className="py-20 md:py-32 relative overflow-hidden">
            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        I'm a passionate Software Engineer based in India, dedicated to creating exceptional digital experiences.
                        With a strong foundation in computer science and a keen eye for design, I bridge the gap between technical functionality and user aesthetics.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-tr from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center relative group">
                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                            <img
                                src="/profile.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                            />

                            {/* Decorative Elements */}
                            <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-primary rounded-full blur-2xl opacity-40 z-0"></div>
                            <div className="absolute -top-6 -left-6 h-24 w-24 bg-secondary rounded-full blur-2xl opacity-40 z-0"></div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { icon: Globe, title: "Web Development", desc: "Building responsive and fast web applications." },
                                { icon: Smartphone, title: "Responsive Design", desc: "Ensuring flawless experience on all devices." },
                                { icon: Database, title: "Backend Systems", desc: "Designing robust and scalable server-side architecture." },
                                { icon: Code, title: "Clean Code", desc: "Writing maintainable, efficient, and readable code." }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="p-4 rounded-lg bg-background/30 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-colors shadow-sm"
                                >
                                    <item.icon className="h-8 w-8 text-primary mb-3" />
                                    <h3 className="font-semibold mb-1">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <p className="text-muted-foreground">
                            My journey involves continuous learning and adapting to new technologies. I thrive in collaborative environments and love solving complex problems.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
