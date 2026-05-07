import crypto from 'crypto';

/**
 * Generates a SHA-256 hash of the input string.
 * @param input The string to hash.
 * @returns The hex-encoded hash string.
 */
 
export function hashSha256(inp: string ){
    const x =    crypto.createHash('sha256').update(inp).digest('hex');
    console.log(x)
    return x
}

export function hashHMAC(inp: string){
    const x =    crypto.createHmac('sha512', 'test').update(inp).digest('hex',);
    console.log(x)
    return x
}

export function hashMd5(inp: string){
    return crypto.createHash('md5').update(inp).digest('hex');
}

export function hashSha1(inp: string){
    return crypto.createHash('sha1').update(inp).digest('hex');
}