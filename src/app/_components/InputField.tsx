"use client";
import styles from "./styles/components.module.css";
import { useContext } from "react";
import { HashContext } from "../HashContext";

interface InputFieldProps {
  label: string;
}

export default function InputField(props: InputFieldProps) {
  const { label } = props;
  const context = useContext(HashContext);

  if (!context) return null;
  const { input, setInput } = context;

  return (
    <div>
      <p>{label}</p>
      <input
        type="text"
        placeholder="your input"
        className={styles.textField}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setInput(e.currentTarget.value);
          }
        }}
      />
    </div>
  );
}
