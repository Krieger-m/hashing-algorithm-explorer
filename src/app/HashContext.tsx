"use client";
import { createContext, useState, ReactNode, useMemo } from "react";
import {
  hashSha256,
  hashMd5,
  hashSha1,
  hashHMAC,
} from "./_utils/hash-functions";

interface HashContextType {
  input: string;
  setInput: (val: string) => void;
  seed: string;
  setSeed: (val: string) => void;
  algorithm: string;
  setAlgorithm: (val: string) => void;
  output: string;
}

export const HashContext = createContext<HashContextType | undefined>(
  undefined,
);

interface HashContextProviderProps {
  children?: ReactNode;
}

export function HashContextProvider(props: HashContextProviderProps) {
  const { children } = props;

  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  const [algorithm, setAlgorithm] = useState("sha256");

  const output = useMemo(() => {
    if (!input) return "";

    switch (algorithm) {
      case "sha256":
        return hashSha256(input);
      case "md5":
        return hashMd5(input);
      case "sha1":
        return hashSha1(input);
      case "hmac":
        return hashHMAC(input,seed);
      default:
        return "Unknown algorithm";
    }
  }, [input, algorithm, seed]);

  return (
    <HashContext.Provider
      value={{
        input,
        setInput,
        algorithm,
        setAlgorithm,
        seed,
        setSeed,
        output,
      }}
    >
      {children}
    </HashContext.Provider>
  );
}
