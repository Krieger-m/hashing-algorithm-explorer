"use client";
import styles from "./styles/components.module.css";
import { useContext } from "react";
import { HashContext } from "../HashContext";
import { Spacing } from "./Spacing";

interface SeedFieldProps {
  label: string;
}

export default function SecretField(props: SeedFieldProps) {
  const { label } = props;
  const context = useContext(HashContext);

  if (!context) return null;
  const { secret: seed, setSecret: setSeed } = context;

  if (context.algorithm == "hmac")
    return (
      <div>
        <p>{label}</p>
        <input
          type="text"
          placeholder="secret input"
          className={styles.textField}
          value={seed}
          onChange={(e) => setSeed(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setSeed(e.currentTarget.value);
            }
          }}
        />
        <Spacing height={2} />
      </div>
    );
}
