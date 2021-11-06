package com.hyunjin.chapter06;

import java.util.Arrays;
import java.util.Objects;
import java.util.Optional;

public class Twootr {

    private final TwootRepository twootRepository;
    private final UserRepository userRepository;

    public Twootr (final UserRepository userRepository, final TwootRepository twootRepository) {
        this.userRepository = userRepository;
        this.twootRepository = twootRepository;
    }

    public Optional<SenderEndPoint> onLogon(
            final String userId, final String password, final ReceiverEndPoint receiverEndPoint
    ) {
        Objects.requireNonNull(userId, "userId");
        Objects.requireNonNull(password, "password");

        var authenticatedUser = userRepository
                .get(userId)
                .filter(userOfSameId -> {
                    var hashedPassword = KeyGenerator.hash(password, userOfSameId.getSalt());
                    return Arrays.equals(hashedPassword, userOfSameId.getPassword());
                });
        authenticatedUser.ifPresent(user-> {
            user.onLogon(receiverEndPoint);
            twootRepository.query(
                    new TwootQuery()
                            .inUsers(user.getFollowing())
                            .lastSeenPosition(user.getLastSeenPosition()),
                    user::receiveTwoot
            );
            userRepository.update(user);

        });

        return authenticatedUser.map(user -> new SenderEndPoint(user, this));
    }
}


/**
 * 사용자에게 이벤트를 발송하는 기능, 즉 한 사용자가 다른 사용자를 팔로우하고 있을 때 팔로우 대상 사용자가 트웃을 올렸다는 걸 알리는 기능 필요
 * 또한 사용자가 이벤트를 수신하는 기능도 필요.
 * 자바에서는 메서드 호출로 이벤트를 표현할 수 있다. 시스템의 코어에서 제공하는 어떤 객체의 메서드를 호출해서 UI 어댑터가 이벤틀르
 * 트우터로 발행한다. 반대로 Twootr 는 어댑터가 보유한 객체의 메서드를 호출해서 이벤트를 발행한다.
 * 포트와 어댑터의 목표는 응용프로그램의 코어와 특정 어댑터 구현의 결합을 제거하는 것이다.
 * 즉 인터페이스로 다양한 어댑처를 추상화해야한다. 여기서 우리는 추상클래스를 사용할 수 있다. 하지만 어댑터 클래스는 한개 이상의 인터페이슬 ㄹ구현할
 * 가능성이 있으므로 추상클래스보다 더 유연한 인터페이스를 사용한다. 또한 인터페이스를 사용하면 언젠가 API 상태를 추가하려는 검은 마음을 쉽게 물리칠 수 있다.
 * 사용자의 이벤트를 발행하는 객체의 구현은 코어에 한개 뿐이므로  인터페이스가 아닌 일반 클래스로 구현한다. 지금까지의 설계를 확인해보자.
 * 이벤트를 코어로 보내는 SenderEndPoint 클래스와 코어로부터 이벤트를 수신하는 인터페이스를 ReceiverEndPoint 라는 이름으로 정했다.
 * Optional<SenderEndPoint> onLogon (String userId, ReceiverEndPoint receiver);
 *
 *
 */