"use client";
import styles from "./styles/components.module.css";
import { useContext } from "react";
import { HashContext } from "../HashContext";
import { BinaryToTextEncoding } from "crypto";

export default function DigestSelector(props: { label: string }) {
  const { label } = props;
  const context = useContext(HashContext);

  if (!context) return null;
  const { digest, setDigest } = context;

  return (
    <div className={styles.root}>
      <label>{label}</label>
      <select
        className={styles.selector}
        value={digest}
        onChange={(e) => setDigest(e.target.value as BinaryToTextEncoding)}
      >
        <option className={styles.optionStyle} value="hex">
          hex
        </option>

        <option className={styles.optionStyle} value="base64">
          base64
        </option>

        <option className={styles.optionStyle} value="binary">
          binary
        </option>

      </select>
    </div>
  );
}
