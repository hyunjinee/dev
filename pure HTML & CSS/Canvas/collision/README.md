# Collision Detection

충돌 판정은 두 원의 중심의 좌표를 이용해서 피타고라스 정리를 이용해서 두 원중심의 거리로 판단 할 수 있다.
아래 그림은 충돌했을 때 원이 빨간색으로 바뀌는 것을 보여준다.

![ezgif com-gif-maker (15)](https://user-images.githubusercontent.com/63354527/108161087-aa538780-712d-11eb-84c9-521853f0f71a.gif)

아래는 충돌 효과를 이용해서 충돌하면 튕겨나가게끔 구현 한 것이고, 만약 마우스를 위에다 올리면 색깔이 보이게끔 구현한 것이다.

![ezgif com-gif-maker (17)](https://user-images.githubusercontent.com/63354527/108162056-a6c10000-712f-11eb-951a-2e03e94e6687.gif)

충돌 효과는 아래의 함수를 이용했다. 반복문을 사용해서 하나의 원과 나머지 원과의 충돌이 있을 때 처리하는 함수들이다.(이 함수를 이해하지는 못했음.)

```javascript
function resolveCollision(particle, otherParticle) {
  const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
  const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

  const xDist = otherParticle.x - particle.x;
  const yDist = otherParticle.y - particle.y;

  // Prevent accidental overlap of particles
  if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
    // Grab angle between the two colliding particles
    const angle = -Math.atan2(
      otherParticle.y - particle.y,
      otherParticle.x - particle.x
    );

    // Store mass in var for better readability in collision equation
    const m1 = particle.mass;
    const m2 = otherParticle.mass;

    // Velocity before equation
    const u1 = rotate(particle.velocity, angle);
    const u2 = rotate(otherParticle.velocity, angle);

    // Velocity after 1d collision equation
    const v1 = {
      x: (u1.x * (m1 - m2)) / (m1 + m2) + (u2.x * 2 * m2) / (m1 + m2),
      y: u1.y,
    };
    const v2 = {
      x: (u2.x * (m1 - m2)) / (m1 + m2) + (u1.x * 2 * m2) / (m1 + m2),
      y: u2.y,
    };

    // Final velocity after rotating axis back to original location
    const vFinal1 = rotate(v1, -angle);
    const vFinal2 = rotate(v2, -angle);

    // Swap particle velocities for realistic bounce effect
    particle.velocity.x = vFinal1.x;
    particle.velocity.y = vFinal1.y;

    otherParticle.velocity.x = vFinal2.x;
    otherParticle.velocity.y = vFinal2.y;
  }
}

function rotate(velocity, angle) {
  const rotatedVelocities = {
    x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
    y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle),
  };

  return rotatedVelocities;
}
```
