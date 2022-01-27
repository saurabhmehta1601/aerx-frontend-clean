import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const Sidebar = (props) => {
  return (
    <aside className={styles.sidebar} {...props}>
      <div>
        <Image
          src="/images/aerx_logo-removebg.svg"
          height="30"
          width="80"
          className="text-blue-400"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
