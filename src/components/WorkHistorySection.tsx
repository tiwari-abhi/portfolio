import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const jobs = [
  {
    role: "Senior Data Engineer",
    company: "CVS Health",
    period: "May 2024 — Present",
    description:
      "Lead development of petabyte scale reporting solutions while conforming to PII and PHI data standards.",
    tech: ["BigQuery", "Tableau", "Composer", "Dataproc", "Google Cloud"],
  },
  {
    role: "Senior Data Engineer",
    company: "DataKitchen",
    period: "Jun 2020 — Apr 2024",
    description:
      "Built scalable, automated data pipelines incorporating principals of DataOps, to improve developer efficiency and drive up customer adoption.",
    tech: ["Kubernetes", "REST APIs", "Python", "ANSI-SQL", "Azure", "Snowflake"],
  },
  {
    role: "Data Infrastructure Analyst",
    company: "TripAdvisor",
    period: "Feb 2020 — May 2020",
    description:
      "Spearheaded development of warehouse to support complex, ad-hoc analytics on clickstream data from Flights, Cars & Cruise pages.",
    tech: ["Presto-SQL", "Shell", "Git", "AWS", "Databricks"],
  },
  {
    role: "Business Intelligence Analyst",
    company: "Athena IT Solutions",
    period: "Jan 2019 — Aug 2019",
    description:
      "Developed ETL pipelines to support build of data warehouse to identify cross selling opportunities for insurance products amongst existing customer base.",
    tech: ["Talend", "CI/CD", "Salesforce DB", "MSSQL", "AWS Redshift"],
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
