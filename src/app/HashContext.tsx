"use client";
import { createContext, useState, ReactNode, useMemo } from "react";
import {
  hashSha256,
  hashMd5,
  hashSha1,
  hashHMAC,
  hashSha512,
  hashSha,
} from "./_utils/hash-functions";
import { BinaryToTextEncoding } from "crypto";

interface HashContextType {
  input: string;
  setInput: (val: string) => void;
  secret: string;
  setSecret: (val: string) => void;
  algorithm: string;
  setAlgorithm: (val: string) => void;
  digest: BinaryToTextEncoding;
  setDigest: (val: BinaryToTextEncoding) => void;
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
  const [secret, setSecret] = useState("");
  const [digest, setDigest] = useState<BinaryToTextEncoding>("hex");
  const [algorithm, setAlgorithm] = useState("sha256");

  const output = useMemo(() => {
    if (!input) return "";

    switch (algorithm) {
      case "sha256":
        return hashSha256(input, digest);
      case "sha512":
        return hashSha512(input,digest);
      case "md5":
        return hashMd5(input, digest);
      case "sha1":
        return hashSha1(input, digest);
      case "hmac":
        return hashHMAC(input, secret, digest);
      case "sha":
        return hashSha(input, digest);
      default:
        return "Unknown algorithm";
    }
  }, [input, algorithm, secret, digest]);

  return (
    <HashContext.Provider
      value={{
        input,
        setInput,
        algorithm,
        setAlgorithm,
        secret,
        setSecret,
        digest,
        setDigest,
        output,
      }}
    >
      {children}
    </HashContext.Provider>
  );
}
