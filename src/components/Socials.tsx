'use client';
import Link from 'next/link';
import React from 'react';
import { RiLinkedinFill, RiGithubFill } from "react-icons/ri";

const icons = [
  { path: 'https://www.linkedin.com/in/shani-abeywickrama-01853b183/', name: <RiLinkedinFill /> },
  { path: 'https://github.com/shaniAbeywick', name: <RiGithubFill /> }
];

interface SocialsProps {
  containerStyles: string;
  iconsStyles: string;
}

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <Link href={icon.path} key={index} target="_blank">
          <div className={`${iconsStyles}`}>{icon.name}</div>
        </Link>
      ))}
    </div>
  );
}

export default Socials;
