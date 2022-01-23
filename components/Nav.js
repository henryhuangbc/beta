import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <section className="links">
        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </section>

      <hr />
    </nav>
  );
}
