import { motion } from "framer-motion";
import { Database, Cloud, Workflow, BarChart3, Server, Code2 } from "lucide-react";

const expertise = [
  {
    icon: Database,
    title: "Data Modeling",
    description: "Designing scalable dimensional and normalized data models for analytical and transactional workloads.",
  },
  {
    icon: Workflow,
    title: "ETL / ELT Pipelines",
    description: "Building robust data pipelines with Airflow, dbt, and Spark to move and transform data at scale.",
  },
  {
    icon: Cloud,
    title: "Cloud Platforms",
    description: "Architecting solutions on AWS, GCP, and Azure — from data lakes to real-time streaming.",
  },
  {
    icon: BarChart3,
    title: "Analytics & BI",
    description: "Enabling data-driven decisions with dashboards, metrics layers, and self-serve analytics.",
  },
  {
    icon: Server,
    title: "Data Infrastructure",
    description: "Managing data warehouses (Snowflake, BigQuery, Redshift) and orchestration platforms.",
  },
  {
    icon: Code2,
    title: "Python & SQL",
    description: "Writing production-grade Python and SQL for data processing, testing, and automation.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-24 relative">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-wider">// WHAT I DO</p>
          <h2 className="text-3xl md:text-4xl font-bold">Expertise</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {expertise.map((skill) => (
            <motion.div
              key={skill.title}
              variants={item}
              className="group rounded-lg border border-border bg-card p-6 hover:border-glow hover:glow-primary transition-all duration-300"
            >
              <skill.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
