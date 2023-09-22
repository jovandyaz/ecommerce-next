import Link from "next/link";
import styles from "../app/page.module.css";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <Link href="/" className={styles.alogo}>
          Candleaf
        </Link>
      </div>

      <div>
        <ul>
          <li>
            <Link href="/discovery" className={styles.abar}>
              Discovery
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.abar}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.abar}>
              Contact us
            </Link>
          </li>
          <div>
            <Link href="/">
              <PersonOutlinedIcon className={styles.aprofile} />
            </Link>
            <Link href="/">
              <ShoppingCartOutlinedIcon className={styles.acart} />
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
