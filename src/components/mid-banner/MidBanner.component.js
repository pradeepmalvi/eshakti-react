import React from "react";
import styles from "./midBanner.styles.module.scss";
import Image from "next/image";

export default function MidBanner() {
  return (
    <div className={styles.mid_banner}>
      <div className={styles.banner_img}>
        {/* mid-banner will be here in background */}
        {/* <Image src="/images/img-12.png" layout="fill" objectFit="cover" /> */}
        <button className={styles.button}>
          <span>Shop Now</span>
        </button>
      </div>
    </div>
  );
}
