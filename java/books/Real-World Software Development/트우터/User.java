package com.hyunjin.chapter06;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Stream;

public class User {
    private final String id;
    private final byte[] password;
    private final byte[] salt;
    private final Set<User> followers = new HashSet<>();
    private final Set<String> following = new HashSet<>();
    private Position lastSeenPosition;
    private ReceiverEndPoint receiverEndPoint;
    public User (
            final String id,
            final byte[] password,
            final byte[] salt,
            final Position lastSeenPosition
    ) {
        Objects.requireNonNull(id, "id");
        Objects.requireNonNull(password, "password");
        this.id = id;
        this.password = password;
        this.salt = salt;
        this.lastSeenPosition = lastSeenPosition;

    }

    public byte[] getPassword() {
        return password;
    }

    public byte[] getSalt() {
        return salt;
    }

    public String getId() {
        return id;
    }

    boolean receiveTwoot(final Twoot twoot) {
        if (isLoggedOn()) {
            receiverEndPoint.onTwoot(twoot);
            lastSeenPosition = twoot.getPosition();
            return true;
        }
        return false;
    }

    boolean isLoggedOn() {
        return receiverEndPoint != null;
    }

    public FollowStatus addFollower (final User user) {
        if (followers.add(user)) {
            user.following.add(id);
            return FollowStatus.SUCCESS;
        }else {
            return FollowStatus.ALREADY_FOLLOWING;
        }
    }

    void onLogon(final ReceiverEndPoint receiverEndPoint) {
        this.receiverEndPoint = receiverEndPoint;
    }

    void onLogoff() {
        receiverEndPoint = null;
    }

    Stream<User> followers() {
        return followers.stream();
    }

    Set<String> getFollowing() {
        return following;
    }

    public Position getLastSeenPosition() {
        return lastSeenPosition;
    }

    @Override
    public String toString() {
        return "User{" +
                "id='" + id + '\'' + '}';
    }

}


/**
 * 저장소란 객체 컬렉션과 비슷하다. 다만 컬렉션처럼 객체를 메모리에 저장하지 않고 다른 어딘가에 저장한다는 점이 다르다.
 * 저장소는 객체 컬렉션이므로 트우터에는 User 객체와 Twoot 객체를 저장할 두 저장소가 필요하다.
 */