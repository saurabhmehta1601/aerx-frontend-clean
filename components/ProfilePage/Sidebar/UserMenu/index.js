import React from "react";
import styles from "./styles.module.css";
import { BsFillBookmarkFill, BsFillBellFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
const UserMenu = () => {
  return (
    <section className={styles.userMenu}>
      <div>
        <i>
          <BsFillBookmarkFill />
        </i>
        <p>Favorites</p>
      </div>
      <div>
        <i>
          <BsFillBellFill />
        </i>
        <p>Notifications</p>
      </div>
      <div>
        <i>
          <AiFillSetting />
        </i>
        <p>Settings</p>
      </div>
    </section>
  );
};

export default UserMenu;
