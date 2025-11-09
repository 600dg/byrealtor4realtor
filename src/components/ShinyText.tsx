import './ShinyText.css';

type Props = {
  text: string;
  disabled?: boolean;
  speed?: number; // seconds per loop
  className?: string;
};

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }: Props) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{ animationDuration }}
    >
      {text}
    </div>
  );
};

export default ShinyText;

