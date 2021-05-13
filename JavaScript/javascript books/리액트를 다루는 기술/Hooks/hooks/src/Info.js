import React, {useState, useEffect} from 'react';

const Info = () => {
   const [name, setName] = useState('');
   const [nickname, setNickname] = useState('');
   useEffect(()=> {
        console.log('effect');
        console.log(name);
        return () => {
            console.log('cleanup');
            console.log(name);
        }
   }, [name, nickname])

   const onChangeName =  e => {
       setName(e.target.value);
   }

   const onChangeNickName = e => {
       setNickname(e.target.value);
   }
    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickName}/>

            </div>

            <div>
                {name}, {nickname}
            </div>
        </div>
    );
};

export default Info;