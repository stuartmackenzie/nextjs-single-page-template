import { useState } from "react";
import styles from "./Nav.module.sass";

import Logo from "../Logo/Logo";
import MenuButton from "../MenuButton/MenuButton";
import NavList from "../NavList/NavList";

export default function Nav({ settings }) {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(!open);
  };

  const handleItemClick = () => {
    setOpen(!open);
  };

  return (
    <nav className={styles.nav}>
      <Logo />
      <MenuButton open={open} onClick={handleMenuClick} />
      <NavList open={open} settings={settings} onItemClick={handleItemClick} />
    </nav>
  );
}
