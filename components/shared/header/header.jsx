import Link from "next/link";

export default function Header() {
  return (
    <nav className="navbar navbar-light bg-light fixed-top">
      <div className="container-fluid justify-content-center">
        <Link className="navbar-brand p-0" href="/">
          <h2 className="logo">Nextagram</h2>
        </Link>
      </div>
    </nav>
  );
}
