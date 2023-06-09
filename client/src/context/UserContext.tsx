import { PropsWithChildren, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";

export interface User {
  _id: string,
  firstName: string,
  lastName: string,
  email: string,
  isAdmin: boolean
}

interface UserContext {
  loggedinUser: User | null,
  logIn: (credentials: Credentials) => void,
  logOut: () => void
}

export interface Credentials {
  email: string,
  password: string
}

export const UserContext = createContext<UserContext>(null as any)

function UserProvider({ children }: PropsWithChildren) {

  const [loggedinUser, setLoggedinUser] = useState(null)
  const navigate = useNavigate();
  useEffect(() => {
    const auth = async () => {
      try {
        const res = await fetch("/api/users/authorize");
        const data = await res.json();
        if (res.ok) {
          setLoggedinUser(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    auth();
  }, []);

  async function logIn(credentials: Credentials) {
    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      });

      if (res.ok) {
        const user = await res.json()
        setLoggedinUser(user)
        navigate('/');
      }
    } catch (error) {
      console.log("Error:", error);
    }
  }

  async function logOut() {
    try {
      await fetch("/api/users/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loggedinUser)
      });
      setLoggedinUser(null)
    } catch (error) {
      console.log("Error:", error);
    }
  }
  return (
    <UserContext.Provider value={{ loggedinUser, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider