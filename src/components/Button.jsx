import './Button.css';

const Button = () => {
  return (
    <a 
      href="/public/pdf/tescv.pdf" 
      download="CV_Kornelius_Jonathan.pdf" 
      style={{ textDecoration: 'none' }}
    >
      <button className="btn-download" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24px" width="24px">
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={2.5} stroke="currentColor" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" />
        </svg>
        
        Download CV

        <div className="btn-tooltip">
          Unduh Resume
        </div>
      </button>
    </a>
  );
}

export default Button;