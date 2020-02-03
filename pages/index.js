import Link from "next/link";

const index = () => {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/404">
        <a>Automatic 404 handler</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/FAQ">
        <a>FAQ</a>
      </Link>
      <Link href="/serverMessage">
        <a>serverMessage</a>
      </Link>
      <div>This is a sample Next.js application</div>
      <div>Below components will</div>
      
    </div>
  );
};

export default index;
