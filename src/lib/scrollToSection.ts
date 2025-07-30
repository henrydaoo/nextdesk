export function scrollToSection(
  href: string,
  closeMenu?: () => void,
  e?: React.MouseEvent<HTMLAnchorElement>
) {
  if (href.startsWith("#")) {
    if (e) e.preventDefault();
    const id = href.replace("#", "");
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    if (closeMenu) closeMenu();
  }
}
