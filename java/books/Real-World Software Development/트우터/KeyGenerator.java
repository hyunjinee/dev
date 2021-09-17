package com.hyunjin.chapter06;

import java.nio.charset.StandardCharsets;
import java.security.SecureRandom;

public class KeyGenerator {
    private static final int SCRYPT_COST = 16384;
    private static final int SCRYPT_BLOCK_SIZE = 8;
    private static final int SCRYPT_PARALLELISM = 1;
    private static final int KEY_LENGTH = 20;
    private static final int SALT_LENGTH = 16;

    private static final SecureRandom secureRandom = new SecureRandom();
    static byte[] hash(final String password, final byte[] salt) {
        final byte[] passwordBytes = password.getBytes(StandardCharsets.UTF_8);
        return SCrypt.generate(
                passwordBytes,
                salt,
                SCRYPT_COST,
                SCRYPT_BLOCK_SIZE,
                SCRYPT_PARALLELISM,
                KEY_LENGTH
        );

    }
    static byte[] newSalt() {
        final byte[] salt = new byte[SALT_LENGTH];
        secureRandom.nextBytes(salt);
        return salt;
    }
}
