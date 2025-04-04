import { Header } from "@/components/Header";
import { Navbar, NavItem } from "@/components/Navbar";
import { GeoAltFill } from "react-bootstrap-icons";
import { Outlet } from "react-router";

export default function App() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Header />
      <div className="flex-1 flex md:flex-row flex-col-reverse">
        <Navbar>
          <NavItem to="/">
            <GeoAltFill size={24} />
            <span>Mapa</span>
          </NavItem>
          <NavItem to="/about">
            <GeoAltFill size={24} />
            <span>Sobre</span>
          </NavItem>
          <NavItem to="/settings">
            <GeoAltFill size={24} />
            <span>Config</span>
          </NavItem>
        </Navbar>
        <main className="flex-1 flex md:m-1 p-4 overflow-auto bg-zinc-200 dark:bg-zinc-900 md:rounded-xl">
          <Outlet />
        </main>
      </div>
    </div>
  )
}