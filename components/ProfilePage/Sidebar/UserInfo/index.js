import React from "react";
import CardOutlined from "../../../UI/CardOutlined";
import { FiDownload, FiUpload } from "react-icons/fi";
import IconButtonsGroups from "../../../UI/IconButtonsGroup";
import styles from "./styles.module.css";

const UserInfo = (props) => {
  return (
    <div className={styles.userInfoContainer}>
      <div>
        <h4 className={styles.userInfoType}>Wallet</h4>
        <CardOutlined>
          <h5 className={styles.balanceHeading}>Balance:</h5>
          <h3 className={styles.balance}>{props.balance}</h3>
          <div className={styles.iconButtonsContainer}>
            <IconButtonsGroups>
              <FiUpload className={styles.uploadBtn} />
              <FiDownload className={styles.downloadBtn} />
            </IconButtonsGroups>
          </div>
        </CardOutlined>
      </div>
      <div>
        <h4 className={styles.userInfoType}>Social</h4>
        <CardOutlined></CardOutlined>
      </div>
    </div>
  );
};

export default UserInfo;
