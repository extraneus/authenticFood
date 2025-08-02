import React from "react";
import styles from "./About.module.css";
import Footerall from "./footerall"; // Import Footerall

const teamMembers = [
  {
    id: "01",
    name: "Ahmad Subardjo",
    title: "Custom SEO Services",
    description:
      "Custom, organic SEO services that include technical audits, on-page search engine optimization",
    imageUrl: "/team/ahmad.jpg",
  },
  {
    id: "02",
    name: "Sharmin Sumi",
    title: "SEO Website Design",
    description:
      "1st on the List provides highly effective PPC advertising for every budget including Google PPC Ads, Bing PPC, and Ad",
    imageUrl: "/Partners/sumi.jpg",
  },
  {
    id: "03",
    name: "Zahra Agustin",
    title: "SEO Consulting",
    description:
      "B2B SEO is the process of generating valuable inbound leads from other businesses.",
    imageUrl: "/team/zahra.jpg",
  },
];

const About: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.subheading}>ABOUT</h2>
        <h1 className={styles.title}>The dream team of digital marketing.</h1>
        <p className={styles.subtitle}>We Grow Businesses Online. Period.</p>

        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.teamCard}>
              <div className={styles.imageWrapper}>
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className={styles.teamImage}
                />
                <span className={styles.nameTag}>{member.name}</span>
              </div>
              <div className={styles.cardContent}>
                <span className={styles.id}>{member.id}</span>
                <h3 className={styles.memberTitle}>{member.title}</h3>
                <p className={styles.description}>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Footerall */}
      <Footerall />
    </>
  );
};

export default About;
