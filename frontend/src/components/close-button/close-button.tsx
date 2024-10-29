import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  height?: string;
  width?: string;
}

const CloseButton: React.FC<ButtonProps> = ({
  onClick,
  children,
  height,
  width,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      style={{
        height: height ?? 'auto',
        width: width ?? 'auto',
        padding: '0.5rem 1rem',
      }}
    >
      {children}
    </button>
  );
};

export default CloseButton;
