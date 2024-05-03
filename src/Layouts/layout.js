import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/navbar";

export default function LayoutPage() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
