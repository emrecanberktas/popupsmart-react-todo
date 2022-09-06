import React, { useState, useEffect } from "react";

function UserName() {
  const [nickName, setNickName] = useState("");
  useEffect(() => {}, [nickName]);
  console.log({ nickName });
  return (
    <div>
      <h1>{nickName !== "" ? nickName : "Lüften Kullanıcı Adı Giriniz"}</h1>
    </div>
  );
}

export default UserName;
