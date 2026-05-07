import styles from "./styles/page.module.css";
import { Spacing } from "./_components/Spacing";
import HashForm from "./_components/HashForm";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        
        <h1>Explore Hash Algorithms in Real Time</h1>
        <Spacing height={2} />
        <p>Enter text to compute its hash using the selected algorithm.<br/>
All hashing happens client‑side. No network requests. No data leaves your browser.</p>
        <Spacing height={4} />
        <HashForm/>
        <Spacing height={2}/>
      </main>
    </div>
  );
}
