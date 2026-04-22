import MenuBoard from "./MenuBoard";
import { useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const Users = [
    { id: 1, name: "Alice", username: "alice123", password: "password1" },
    { id: 2, name: "Bob", username: "bob123", password: "password2" },
    { id: 3, name: "Charlie", username: "charlie123", password: "password3" },
    { id: 4, name: "David", username: "david123", password: "password4" },
    { id: 5, name: "Eve", username: "eve123", password: "password5" },
    { id: 6, name: "PJ", username: "pj123", password: "password6" },
  ];

  const handleLogin = (username, password) => {
    const user = Users.find(
      (u) => u.username === username && u.password === password,
    );
    if (user) {
      setIsLoggedIn(true);
      setUsername("");
      setPassword("");
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="app">
      {isLoggedIn ? (
        <>
          <MenuBoard />
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      )}
      {isLoggedIn ? null : (
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      )}
      {isLoggedIn ? null : (
        <button onClick={() => handleLogin(username, password)}>Login</button>
      )}
      <p>Please login to see the menu</p>
    </div>
  );
};

export default App;
