import { useContext, useState } from "react";
import UserContext, { UserState } from "./store";

const ConsumerComponent = () => {
  const user = useContext<UserState>(UserContext);

  return (
    <div>
      <div>First: {user.first}</div>
      <div>Last: {user.last}</div>
    </div>
  );
};

const UseContextComponent = () => {
  const [user, setUser] = useState<UserState>({
    first: "Troy",
    last: "Bolton",
  });

  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <button
        onClick={() =>
          setUser({
            first: "Tom",
            last: "Holland",
          })
        }
      >
        Change Context
      </button>
    </UserContext.Provider>
  );
};

export default UseContextComponent;
