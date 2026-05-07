"use client";
import { HashContextProvider } from "../HashContext";
import InputField from "./InputField";
import OutputField from "./OutputField";
import SeedField from "./SeedField";
import Selector from "./Selector";
import { Spacing } from "./Spacing";

export default function HashForm() {
  return (
    <>
      <HashContextProvider>
        <InputField label="Input" />

        <Spacing height={2} />

        <SeedField label="Seed" />

        <Selector label="Select algorithm" />

        <Spacing height={2} />

        <OutputField label="Output" />
      </HashContextProvider>
    </>
  );
}
