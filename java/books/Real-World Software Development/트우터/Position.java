package com.hyunjin.chapter06;

public class Position {
    public static final Position INITIAL_POSITION = new Position(-1);

    private final int value;

    public Position (final int value) {
        this.value = value;

    }

    public int getValue() {
        return value;
    }

    @Override
    public String toString() {
        return "Position{" +
                "value=" + value + '}';
    }

    @Override
    public boolean equals(final Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        final Position position = (Position) o;
        return value == position.value;
    }

    @Override
    public int hashCode() {
        return value;
    }

    public Position next() {
        return new Position(value +  1);
    }
}
