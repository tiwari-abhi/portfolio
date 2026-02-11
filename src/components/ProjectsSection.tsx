import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Open Source Python Library",
    description:
      "Published Python package and assisted documentation for library which automates and orchestrates Matillion workflows, incorporating CI/CD best practices and comprehensive test coverage.",
    tech: ["GitHub Actions", "PyTest", "REST APIs", "Python"],
    link: "https://pypi.org/project/pymatillion",
  },
  {
    title: "LLM Enrichment with Model Context Protocol",
    description:
      "Architected multi-modal MCP server to elicit user input and provide them with random fact in 60+ languages or image of a city.",
    tech: ["Model Context Protocol", "Ollama LLM", "Python"],
    link: "https://github.com/tiwari-abhi/MCPServerExample",
  },
  {
    title: "Event Driven Data Pipeline",
    description:
      "Designed and implemented scalable event-driven pipeline to load raw sales data into warehouse and transformed it for monthly sales and inventory reporting.",
    tech: ["Snowflake", "AWS S3", "dbt", "Airflow", "Python", "SQL", "AWS Quicksight"],
    link: "https://github.com/tiwari-abhi/INFO_7374/tree/master/Assignment%20-%201",
  },
  {
    title: "Serverless Rental Price Prediction",
    description:
      "Scraped raw data from Airbnbs in New York city and built a price projection Flask web application to visualize geospatial data and predict prices.",
    tech: ["Azure Cloud", "AzureML", "H2O AI", "Databricks", "PowerBI"],
    link: "https://github.com/tiwari-abhi/INFO_7374/tree/master/Final%20Project",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-wider">// WHAT I'VE BUILT</p>
          <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.a
              key={project.title}
              href={project.link}
              variants={item}
              className="group rounded-lg border border-border bg-card p-6 hover:border-glow hover:glow-primary transition-all duration-300 block"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-secondary text-xs font-mono text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
