import { HashContextProvider } from "../CryptoContext";
import InputField from "./InputField";
import OutputField from "./OutputField";
import Selector from "./Selector";
import { Spacing } from "./Spacing";

export default function CryptoForm() {
  return (
    <>
      <HashContextProvider>
        <InputField label="Input" />
  
        <Spacing height={2} />
  
        <Selector label="Select algorithm" />
  
        <Spacing height={2} />
  
        <OutputField label="Output" />
      </HashContextProvider>
    </>
  );
}
