function MobileIcon({ size = 32, handleMenuOpen }) {
  return (
    <div onClick={handleMenuOpen}>
      <svg
        width={size}
        height={size}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M4 16h24M4 8h24M4 24h24'
          stroke='#280206'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  );
}

export default MobileIcon;
