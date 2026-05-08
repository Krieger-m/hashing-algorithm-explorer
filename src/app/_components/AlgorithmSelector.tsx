"use client";
import styles from "./styles/components.module.css";
import { useContext } from "react";
import { HashContext } from "../HashContext";

export default function Selector(props: { label: string }) {
  const { label } = props;
  const context = useContext(HashContext);

  if (!context) return null;
  const { algorithm, setAlgorithm } = context;

  return (
    <div className={styles.root}>
      <label>{label}</label>
      <select
        className={styles.selector}
        value={algorithm}
        onChange={(e) => setAlgorithm(e.target.value)}
      >
        <option className={styles.optionStyle} value="sha256">
          sha256
        </option>
        <option className={styles.optionStyle} value="sha512">
          sha512
        </option>
        <option className={styles.optionStyle} value="hmac">
          hmac
        </option>
        <option className={styles.optionStyle} value="md5">
          md5
        </option>
        <option className={styles.optionStyle} value="sha1">
          sha1
        </option>

      </select>
    </div>
  );
}
