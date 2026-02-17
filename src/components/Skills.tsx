import { motion } from "framer-motion";

const skillsData = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion", "HTML5/CSS3"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs"] },
    { category: "Tools & DevOps", items: ["Git", "Docker", "VS Code", "Postman", "Vite", "Linux"] },
    { category: "Other", items: ["UI/UX Principles", "Agile Methodology", "Problem Solving"] },
];

export const Skills = () => {
    return (
        <section id="skills" className="py-20 md:py-32 relative">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-muted-foreground">
                        A comprehensive list of technologies and tools I work with.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillsData.map((category, catIndex) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1, duration: 0.5 }}
                            className="bg-card/20 backdrop-blur-md border-white/10 text-card-foreground rounded-xl border shadow-sm p-6 hover:shadow-md transition-shadow"
                        >
                            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-border">{category.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="inline-flex items-center rounded-md bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
