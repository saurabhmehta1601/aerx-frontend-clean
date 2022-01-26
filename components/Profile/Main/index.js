import React from "react";
import Card from "../../UI/Card";
import SectionHeading from "../SectionHeading";
import styles from "./styles.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <SectionHeading>Saurabh</SectionHeading>
      <Card>
        <div className="rounded-lg bg-gray-400 p-5"></div>
      </Card>
    </main>
  );
};

export default Main;
