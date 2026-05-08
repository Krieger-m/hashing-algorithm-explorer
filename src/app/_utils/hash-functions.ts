import crypto, { BinaryToTextEncoding } from "crypto";

/**
 * Generates a SHA-256 hash of the input string.
 * @param input The string to hash.
 * @returns The hex-encoded hash string.
 */

export function hashSha256(inp: string, dig: BinaryToTextEncoding) {
  const x = crypto.createHash("sha256").update(inp).digest(dig);
  console.log(x);
  return x;
}

export function hashHMAC(inp: string, seed: string, dig: BinaryToTextEncoding) {
  const x = crypto.createHmac("sha512", seed).update(inp).digest(dig);
  // console.log(x);
  return x;
}

export function hashMd5(inp: string, dig: BinaryToTextEncoding) {
  return crypto.createHash("md5").update(inp).digest(dig);
}

export function hashSha1(inp: string, dig: BinaryToTextEncoding) {
  return crypto.createHash("sha1").update(inp).digest(dig);
}

export function hashSha512(inp: string, dig: BinaryToTextEncoding) {
  return crypto.createHash("sha512").update(inp).digest(dig);
}

export function hashSha(inp: string, dig: BinaryToTextEncoding) {
  return crypto.createHash("SHA").update(inp).digest(dig);
}


