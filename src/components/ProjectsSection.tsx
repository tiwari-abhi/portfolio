import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Real-Time Analytics Platform",
    description:
      "End-to-end streaming data platform processing 1M+ events/sec with Kafka, Flink, and ClickHouse. Powers live dashboards for product analytics.",
    tech: ["Kafka", "Apache Flink", "ClickHouse", "Python"],
    link: "#",
  },
  {
    title: "Data Quality Framework",
    description:
      "Open-source framework for automated data quality checks across data warehouses. Supports custom rules, anomaly detection, and Slack alerting.",
    tech: ["dbt", "Great Expectations", "Python", "Snowflake"],
    link: "#",
  },
  {
    title: "ML Feature Store",
    description:
      "Centralized feature store serving 200+ ML features with low-latency online serving and batch materialization for model training pipelines.",
    tech: ["Feast", "Redis", "Spark", "AWS"],
    link: "#",
  },
  {
    title: "Cost Optimization Engine",
    description:
      "Automated cloud cost analysis tool that reduced data infrastructure spend by 40% through intelligent workload scheduling and resource right-sizing.",
    tech: ["Terraform", "Python", "BigQuery", "GCP"],
    link: "#",
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
