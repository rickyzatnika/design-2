import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="absolute bg-gradient-to-tr from-amber-800/80 to-amber-200 bottom-0 left-0 z-10 w-full text-center">
        <h5 className="py-2 w-full text-[#E6E6E6] antialiased">
          Powered By :{" "}
          <Link
            href="https://ryza.inkara.id"
            target="_blank"
            className="hover:border-b border-amber-900/70"
            passHref
            prefetch={false}
          >
            Ryza.inkara.id
          </Link>
        </h5>
      </footer>
    </>
  );
};

export default Footer;
