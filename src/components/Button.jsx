import "../css/Button.css";
import { MagneticButton } from "@/components/ui/magnetic-button";

const Button = () => {
  return (
    <MagneticButton strength={0.3} maxDistance={50}>
      <a
        href="/pdf/KorneliusJonathanCV.pdf"
        download="CV_Kornelius_Jonathan.pdf"
        className="btn-download"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          height="24px"
          width="24px"
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth={2.5}
            stroke="currentColor"
            d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
          />
        </svg>

        Download CV

        <div className="btn-tooltip">
          Unduh Resume
        </div>
      </a>
    </MagneticButton>
  );
};

export default Button;