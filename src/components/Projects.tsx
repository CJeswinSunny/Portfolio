import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
    {
        title: "E-Commerce Dashboard",
        description: "A comprehensive admin dashboard for managing products, orders, and analytics. Built with React and Recharts.",
        tags: ["React", "TypeScript", "Tailwind", "Recharts"],
        links: { demo: "#", code: "#" },
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Task Management App",
        description: "A drag-and-drop task manager with real-time updates and team collaboration features.",
        tags: ["Next.js", "Prisma", "Socket.io", "Zustand"],
        links: { demo: "#", code: "#" },
        image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=2032&auto=format&fit=crop"
    },
    {
        title: "AI Image Generator",
        description: "An application that uses OpenAI's DALL-E API to generate images from text descriptions.",
        tags: ["React", "OpenAI API", "Node.js", "Express"],
        links: { demo: "#", code: "#" },
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="py-20 md:py-32 relative">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-muted-foreground">
                        Here are some of the projects I've worked on. Each one presented unique challenges and learning opportunities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group rounded-xl overflow-hidden border border-white/10 bg-card/20 backdrop-blur-md shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                        >
                            {/* Image Placeholder */}
                            <div className="h-48 w-full relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                                    <Folder className="text-white h-12 w-12" />
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-3 mt-auto">
                                    <a
                                        href={project.links.code}
                                        className="flex-1 inline-flex items-center justify-center h-10 rounded-md border border-input bg-background/50 px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                                    >
                                        <Github className="mr-2 h-4 w-4" /> Code
                                    </a>
                                    <a
                                        href={project.links.demo}
                                        className="flex-1 inline-flex items-center justify-center h-10 rounded-md bg-primary text-primary-foreground px-4 text-sm font-medium transition-colors hover:bg-primary/90"
                                    >
                                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="#" className="inline-flex items-center text-primary font-medium hover:underline">
                        View more on GitHub <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};
