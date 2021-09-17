package com.hyunjin.chapter06;

import java.util.Optional;

public interface UserRepository extends AutoCloseable{
    boolean add (User user);
    Optional<User> get(String userId);
    void update(User user);
    void clear();
    FollowStatus follow(User follower, User userToFollow);
}
