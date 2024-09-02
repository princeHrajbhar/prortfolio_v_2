import React from "react";

type MenuItemProps = {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  onClick?: () => void; // Added onClick prop
};

export function MenuItem({ setActive, active, item, children, onClick }: MenuItemProps) {
  const handleClick = () => {
    setActive(item);
    if (onClick) onClick(); // Call onClick if provided
  };

  return (
    <div
      onClick={handleClick} // Use handleClick to manage both setActive and onClick
      className={`menu-item ${active === item ? "active" : ""}`}
    >
      {children || item}
    </div>
  );
}
