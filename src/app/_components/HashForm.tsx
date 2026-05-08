"use client";
import { HashContextProvider } from "../HashContext";
import InputField from "./InputField";
import OutputField from "./OutputField";
import SecretField from "./SecretField";
import Selector from "./AlgorithmSelector";
import { Spacing } from "./Spacing";
import DigestSelector from "./DigestSelector";

export default function HashForm() {
  return (
    <>
      <HashContextProvider>

        <InputField label="Input" />

        <Spacing height={2} />

        <SecretField label="Secret" />

        <Selector label="Select algorithm" />

        <Spacing height={2} />

        <DigestSelector label="Digest"/>

        <Spacing height={2} />

        <OutputField label="Output" />

      </HashContextProvider>
    </>
  );
}
