import AppRouter from "components/Router";
import React, { useState, useEffect } from "react";
import { authService } from "fbase";
function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(null);
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
      // 원하는 부분을 호출하기위한 중간 함수인 셈이다. 객체가 복잡하면 리액트가 세세하게 내부쪽 상태가 바뀐걸 감지못하므로 객체를
      //간단하게 바꿔주고(전 객체와 다른점을 감지해서 리렌더링 할 수 있도록) 실제로 업데이트를 해야하는 부분에서는 가짜함수를  만들어서 그함수를 이용해서 진짜함수를 호출해서, 실제 데이터베이스를 업데이트시킨다.
      //다른 방법으로는 Object.assign({}, user) 객체를 복사해서 리액트가 상태가 바뀌었음을 인지하게 하는 것이다.
      // 이작업은 firebase로부터 react상태를 업데이트 하기위한 작업으로 firebase상태바뀐것을 리액트에연결해서 컴포넌트들을 업데이트 하는 것이다.
    });
  };
  return (
    <>
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn={isLoggedIn}
          userObj={userObj}
        ></AppRouter>
      ) : (
        "Initializing..."
      )}
      {/* <footer>&copy; {new Date().getFullYear()} Twitter</footer> */}
    </>
  );
}

export default App;
