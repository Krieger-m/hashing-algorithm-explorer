'use client';
import styles from "./styles/components.module.css";
import { useContext } from "react";
import { HashContext } from "../HashContext";

interface OutputFieldProps {
  label: string;
}

export default function OutputField(props: OutputFieldProps) {
  const { label } = props;
  const context = useContext(HashContext);

  if (!context) return null;
  const { output } = context;

  return (
    <div className={styles.root}>
      <p>{label}</p>
      <textarea 
        // type="text" 
        className={styles.outputField} 
        placeholder="your output" 
        value={output} 
        readOnly 
      />
    </div>
  );
}
