import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import UserBio from "./UserBio";

const Sidebar = (props) => {
  return (
    <aside className={styles.sidebar} {...props}>
      {/* Site logo */}
      <div>
        <Image
          src="/images/aerx_logo-removebg.svg"
          height="30"
          width="80"
          className="text-blue-400"
        />
      </div>
      <div className={styles.profileImgContainer}>
        {/* profile image here */}
        <Image
          src="/images/photo-1555421689-491a97ff2040.jpeg"
          width="120"
          height="120"
          className={styles.profileImg}
        ></Image>
      </div>
      <UserBio
        displayName="Ivan Ivanov"
        userName="ivan.ivanov"
        about="I work as a doctor, but in my free time I like to make funny pictures and videos. See more details in my collection ."
      />
    </aside>
  );
};

export default Sidebar;
