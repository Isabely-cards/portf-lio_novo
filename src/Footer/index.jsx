import "./style.css";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer-text">
        <p>by Isabely | 2024</p>
      </div>

      <div class="footer-iconTop">
        <a href="#">
        <FaArrowUp style={{fontSize: '2rem' , color: 'var(--text-color)'}}/>
        </a>
      </div>
    </footer>
  );
}
