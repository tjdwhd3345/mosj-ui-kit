import React from "react";

type ButtonProps = {
  text?: string;
  st?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

function Button(props: ButtonProps) {
  const { type, text = "버튼", st, onClick } = props;
  return (
    <button
      type={type ?? "button"}
      style={{ ...st }}
      onClick={(e) => {
        if (onClick) onClick(e);
      }}>
      {text}
    </button>
  );
}

export default Button;
