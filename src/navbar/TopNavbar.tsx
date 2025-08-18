import { Navbar, NavbarCollapse, NavbarLink } from "flowbite-react";

function TopNavbar() {
  return (
    <>
      <Navbar fluid className="justify-center">
        <NavbarCollapse
          className="flex"
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <NavbarLink className="cursor-pointer">Accueil</NavbarLink>
          <NavbarLink className="cursor-pointer">Mes projets</NavbarLink>
          <NavbarLink className="cursor-pointer">Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </>
  );
}

export default TopNavbar;
