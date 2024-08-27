import Image from 'next/image';
import React from 'react';

interface DevImgProps {
  containerStyles: string;
  imgSrc: string;
}

const DevImg: React.FC<DevImgProps> = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority  objectFit="cover"
        objectPosition="top" alt="Profile Image" />
    </div>
  );
}

export default DevImg;
