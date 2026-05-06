import Image from "next/image";
import styles from "./styles/page.module.css";
import InputField from "./_components/InputField";
import { Spacing } from "./_components/Spacing";
import Selector from "./_components/Selector";
import CryptoForm from "./_components/CryptoForm";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        
        <h1>Explore hash algorithms in real time</h1>
        <Spacing height={2} />
        <p>content will be here</p>
        <Spacing height={4} />
        <CryptoForm/>
        <Spacing height={2}/>
      </main>
    </div>
  );
}
