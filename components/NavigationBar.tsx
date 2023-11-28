// components/Navbar.js
import Link from 'next/link';

const Navigationbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li> 
        <li>
          <Link href="personaltrainer/addexercise">
            <a>Opret en exercise</a>
          </Link>
        </li>
        <li>
          <Link href="/personaltrainer/client">
            <a>Opret en bruger</a>
          </Link>
        </li>
        <li>
          <Link href="/personaltrainer/createprogram">
            <a>Opret ny program for bruger</a>
          </Link>
        </li>
        <li>
          <Link href="/personaltrainer/programlist">
            <a>Se listen af workout programmer</a>
          </Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default Navigationbar;
