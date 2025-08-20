import { Navbar, NavbarCollapse, NavbarLink } from "flowbite-react";
import { useNavigate } from "react-router";
import { useCallback } from "react";

// Configuration des liens de navigation
const NAV_ITEMS = [
  { key: "accueil", label: "Accueil", path: "/" },
  {key: "events", label: "Mes évènements", path: "/events"},
  { key: "projets", label: "Mes projets", path: "/projets" },
  { key: "contact", label: "Contact", path: "/contact" },
] as const;

function TopNavbar() {
  const navigate = useNavigate();

  const handleNavigation = useCallback((path: string) => {
    navigate(path);
  }, [navigate]);

  return (
    <Navbar fluid className="justify-center">
      <NavbarCollapse
        className="flex"
        style={{ display: "flex", justifyContent: "center", width: "100%" }}
      >
        {NAV_ITEMS.map(({ key, label, path }) => (
          <NavbarLink
            key={key}
            onClick={() => handleNavigation(path)}
            className="cursor-pointer"
          >
            {label}
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
}

export default TopNavbar;