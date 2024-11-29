import Link from "next/link";
import React from "react";

import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div  className="flex flex-col justify-between  p-4 items-center sticky bg-primary opacity-80 ">
      <h4 className="text-sm  text-center">
        &copy; 2024 My Blog. All rights reserved. Designed by Ayesha Iqbal
        </h4>
        <div className="flex  gap-5 mt-5">
          
     
            
        <Link href="https://www.instagram.com/">
          <FaInstagramSquare size={24} color="white" />
        </Link>
        
        <Link href="https://www.facebook.com/profile.php?id=61557002344632">
          <FaFacebook size={24} color="white" />
        </Link>
        
        <Link href="https://github.com/Ayesha1130">
          <FaGithub size={24} color="white" />
        </Link>
        
        <Link href="https://www.linkedin.com/in/ayesha-iqbal-2613402b4/">
          <FaLinkedin size={24} color="white" />
          </Link>
     </div>
      
    </div>
  );
};

export default Footer;
