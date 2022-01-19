import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../network/axiosInstance";

export default function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/users", {
        params: {
          limit: 5,
        },
        headers: {
          "Accept-language": "ar",
        },
      })
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user, index) => {
          return (
            <Link key={index} to={`/details/${user.id}`}>
              <li>{user.email}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

// Promise(resolve , reject)
// Resolve -> .then()
// Reject -> catch()
