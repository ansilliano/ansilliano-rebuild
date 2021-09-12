import React from 'react';

const Notion = ({ size = 32, color = '#343434' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2.767 2.625c.42.34.576.314 1.364.261l7.42-.445c.158 0 .027-.157-.026-.183l-1.233-.891c-.236-.183-.55-.393-1.154-.341l-7.184.524c-.262.026-.315.158-.21.262l1.023.813zm.446 1.73v7.807c0 .42.21.576.681.55l8.155-.472c.473-.026.525-.314.525-.655V3.83c0-.34-.13-.524-.42-.498l-8.522.498c-.314.026-.42.183-.42.524zm8.05.417c.053.236 0 .472-.236.5l-.393.078v5.763c-.341.184-.656.289-.918.289-.42 0-.525-.131-.84-.524l-2.57-4.035v3.903l.814.185s0 .471-.656.471l-1.81.105c-.052-.105 0-.367.184-.419l.472-.13V5.794l-.654-.053c-.053-.236.078-.576.445-.602l1.94-.131 2.676 4.087V5.48l-.682-.078c-.053-.289.157-.498.419-.524l1.81-.106zM1.351.842l7.474-.55c.917-.078 1.153-.026 1.73.394l2.386 1.676c.393.288.525.367.525.682v9.196c0 .576-.21.918-.944.97l-8.68.524c-.55.026-.813-.052-1.102-.42l-1.757-2.28c-.314-.419-.445-.733-.445-1.1V1.759c0-.47.21-.864.813-.916z'
        fill={color}
      />
    </svg>
  );
};

export default Notion;