import styles from "./styles/page.module.css";
import { Spacing } from "./_components/Spacing";
import HashForm from "./_components/HashForm";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        
        <h1>Explore hash algorithms in real time</h1>
        <Spacing height={2} />
        <p>Type anything in the input field to generate a hash using the hash-algorithm selector below</p>
        <p>This application runs on the client. this means no data is transfered to any server. everything stays where it belongs.</p>
        <Spacing height={4} />
        <HashForm/>
        <Spacing height={2}/>
      </main>
    </div>
  );
}
