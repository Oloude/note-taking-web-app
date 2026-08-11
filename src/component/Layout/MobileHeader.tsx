import Logo from "../Logo";

function MobileHeader() {
  return (
    <header className="h-13.5 px-4 py-3 flex items-center bg-neutral100 dark:bg-neutral800 md:h-18.5 md:px-8 md:py-4">
      <Logo />
    </header>
  );
}

export default MobileHeader;
