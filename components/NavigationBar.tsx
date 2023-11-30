// components/Navbar.js
import Link from "next/link";
import styles from "./navbar.module.css";
import utilStyles from "../styles/utils.module.css";
import { checkSession } from "@/services/TrainerService";

const Navigationbar = async () => {
  const session = checkSession();

  return (
    <nav className={styles.nav}>
      <ul className={styles.navbar}>
        {/* <li>
          <Link href="/">
            <h1>Home</h1>
          </Link>
        </li>  */}
        <li>
          <Link href="/api/auth/signin/">
            <h1>Log Ud</h1>
          </Link>
        </li>

        <li>
          {(await session)?.role?.toLowerCase() === "client" ? (
            <Link href="/client">
              <h1>Se program</h1>
            </Link>
          ) : null}
        </li>

        <li>
          {(await session)?.role?.toLowerCase() === "manager" ? (
            <Link href="/manager">
              <h1>Creater Trainer</h1>
            </Link>
          ) : null}
        </li>

        {(await session).role?.toLowerCase() === "personaltrainer" ? (
          <li>
            <>
              <Link href="/personaltrainer/addexercise">
                <h1>Opret en exercise</h1>
              </Link>
            </>

            <Link href="/personaltrainer/client">
              <h1>Opret en bruger</h1>
            </Link>

            <Link href="/personaltrainer/createprogram">
              <h1>Opret ny program for bruger</h1>
            </Link>

            <Link href="/personaltrainer/programlist">
              <h1>Se listen af workout programmer</h1>
            </Link>
          </li>
        ) : null}

        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default Navigationbar;
