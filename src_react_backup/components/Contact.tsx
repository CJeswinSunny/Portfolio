import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export const Contact = () => {
    return (
        <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-muted-foreground">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-semibold">Contact Information</h3>
                        <p className="text-muted-foreground">
                            Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-medium mb-1">Email</h4>
                                    <a href="mailto:cjeswinsunny@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">cjeswinsunny@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-medium mb-1">Phone</h4>
                                    <span className="text-muted-foreground">+91 89211 73155</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <h4 className="font-medium mb-1">Location</h4>
                                    <span className="text-muted-foreground">Kerala, India</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-card/20 backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-sm"
                    >
                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                                    <input id="name" type="text" placeholder="John Doe" className="w-full h-10 px-3 rounded-md border border-input bg-background/30 focus:outline-none focus:ring-1 focus:ring-ring" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <input id="email" type="email" placeholder="john@example.com" className="w-full h-10 px-3 rounded-md border border-input bg-background/30 focus:outline-none focus:ring-1 focus:ring-ring" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                <input id="subject" type="text" placeholder="Project Inquiry" className="w-full h-10 px-3 rounded-md border border-input bg-background/30 focus:outline-none focus:ring-1 focus:ring-ring" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea id="message" rows={4} placeholder="Tell me about your project..." className="w-full p-3 rounded-md border border-input bg-background/30 focus:outline-none focus:ring-1 focus:ring-ring resize-none"></textarea>
                            </div>
                            <button type="submit" className="w-full inline-flex h-10 items-center justify-center rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                                Send Message <Send className="ml-2 h-4 w-4" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <footer className="mt-20 py-8 border-t border-border/40 text-center text-sm text-muted-foreground">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} C Jeswin Sunny. All rights reserved.</p>
                </div>
            </footer>
        </section>
    );
};
