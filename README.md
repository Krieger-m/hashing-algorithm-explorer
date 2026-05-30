# 🔐 Hash Algorithm Explorer

An interactive tool for exploring and understanding how different **hashing algorithms** transform input data into fixed‑size digests.  
This project visualizes each algorithm step‑by‑step, making it easier to learn, compare, and experiment with hashing functions.

## 🌟 Overview

Hash functions are fundamental to cryptography, data integrity, password storage, and countless other areas.  
This explorer provides a hands‑on way to:

- See how input text is processed  
- Inspect intermediate states  
- Compare algorithms side‑by‑side  
- Understand why small input changes produce drastically different outputs  

It’s designed as an educational and experimental tool — simple, visual, and intuitive.

## 🔧 Supported Algorithms

Based on the live explorer, the project currently includes:

- **MD5**  
- **SHA‑1**  
- **SHA‑256**  
- **SHA‑512**  
- **Keccak / SHA‑3**  
- **Blake2**  
- **RIPEMD‑160**  
- …and more as the project evolves

Each algorithm displays:

- The final hash  
- Internal processing steps (when applicable)  
- Binary/hex transformations  
- Bitwise operations  
- Message padding and block processing  

## 🧱 Tech Stack

- **Next.js**  
- **TypeScript**  
- **React**  
- **Custom hashing visualizers**  
- **Modular algorithm definitions**  

## 📁 Project Structure
```
public/
  src/
    app/
      _components/
        AlgorithmSelector.tsx
        DigestSelector.tsx
        HashForm.tsx
        Header.tsx
        InputField.tsx
        OutputField.tsx
        SecretField.tsx
        Spacing.tsx
      _utils/
        hash-functions.ts
      styles/
      HashContext.tsx
      icon.png
      layout.tsx
      page.tsx
.gitignore
AGENTS.md
CLAUDE.md
README.md
eslint.config.mjs
next.config.ts
package-lock.json
package.json
tsconfig.json
```

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/Krieger-m/hashing-algorithm-explorer
cd hashing-algorithm-explorer
```
Install dependencies:

```bash
npm install
```
Start the development server:

```bash
npm run dev
```
Then open:

```
http://localhost:3000
```
## 🧩 How It Works
Each algorithm is implemented as a standalone module inside src/app/algorithms/.

A typical algorithm definition includes:
- Message preprocessing
- Padding
- Block processing
- Round functions
- Bitwise operations
- Final digest formatting

The UI components then visualize these steps in a structured, readable format.

## 📦 Deployment
This project runs in any Node.js environment.

Build and start:

```bash
npm run build
npm start
```
## 🎯 Goals
Make cryptographic hashing more approachable

Provide a learning tool for students and developers

Offer a playground for experimenting with input changes


## 📜 License
MIT — feel free to explore, modify, and extend.
  
