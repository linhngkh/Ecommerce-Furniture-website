import { Outlet } from "react-router-dom";

import Header from "./components/Header";
function App() {
  return (
    <>
      <Header />
      <section>
        <Outlet />
      </section>
    </>
  );
}

export default App;
