import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const jobs = [
  {
    role: "Senior Data Engineer",
    company: "TechCorp Inc.",
    period: "2022 — Present",
    description:
      "Leading the data platform team, designing real-time streaming pipelines and migrating legacy ETL to a modern ELT stack with dbt and Snowflake.",
    tech: ["Snowflake", "dbt", "Airflow", "Kafka", "Python"],
  },
  {
    role: "Data Engineer",
    company: "DataFlow Solutions",
    period: "2019 — 2022",
    description:
      "Built and maintained 50+ data pipelines processing 10TB daily. Implemented data quality monitoring and alerting systems.",
    tech: ["AWS", "Spark", "Redshift", "Terraform", "SQL"],
  },
  {
    role: "Junior Data Engineer",
    company: "Analytics Startup",
    period: "2017 — 2019",
    description:
      "Developed ETL pipelines and data models for a SaaS analytics product. Introduced CI/CD for data pipeline deployments.",
    tech: ["Python", "PostgreSQL", "Luigi", "Docker", "GCP"],
  },
];

const WorkHistorySection = () => {
  return (
    <section id="work" className="py-24 bg-muted/30 relative">
      <div className="container max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-wider">// WHERE I'VE BEEN</p>
          <h2 className="text-3xl md:text-4xl font-bold">Work History</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-12">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-12"
              >
                {/* Dot */}
                <div className="absolute left-2.5 top-1.5 h-4 w-4 rounded-full border-2 border-primary bg-background" />

                <p className="text-primary font-mono text-xs mb-1">{job.period}</p>
                <h3 className="text-xl font-semibold">{job.role}</h3>
                <p className="text-muted-foreground text-sm mb-3">{job.company}</p>
                <p className="text-secondary-foreground text-sm leading-relaxed mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-secondary text-xs font-mono text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkHistorySection;
