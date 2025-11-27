const MenuIcon = ({ size = 32, color = 'white' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="inline"
  >
    <rect x="6" y="6" width="20" height="2" rx="1" fill={color} />
    <rect x="6" y="13" width="20" height="2" rx="1" fill={color} />
    <rect x="6" y="20" width="20" height="2" rx="1" fill={color} />
  </svg>
);

export default MenuIcon;
