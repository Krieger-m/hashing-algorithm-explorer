'use client'
import Image from "next/image";
import styles from "./styles/components.module.css";
import icon from "../icon.png";
import Link from "next/link";

export function Header() {
  return (
    <>
      <nav className={styles.header}>
        <Link href="/">
          <Image src={icon.src} alt={icon.src} width={40} height={40}/>
        </Link>{" "}
        <Link href="/"><h1>Hash Algorithm Explorer</h1></Link>
      </nav>
    </>
  );
}
