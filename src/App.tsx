import "./App.css";

import Color from "./components/Color";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { useAppSelector } from "./app/hooks";

const App = () => {
  const fontColor = useAppSelector((state) => state.color.value);

  return (
    <div className="App" style={{ color: fontColor }}>
      <Profile />
      <hr />
      <Login />
      <hr />
      <Color />
    </div>
  );
};

export default App;
