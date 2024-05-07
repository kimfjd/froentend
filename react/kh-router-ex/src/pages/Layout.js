import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        Header
      </header>
      <main>
        <Outlet />
      </main>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        Footer
      </header>
    </>
  );
};

export default Layout;
