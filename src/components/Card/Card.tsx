import React from "react";
import Link from "next/link";
import Image from "next/image";

type propCard = {
  image: string;
  title: string;
  description: string;
  link: string;
};
const Card = ({ image, title, description, link }: propCard) => {
  return (
    <div className="bg-black justify-center p-2  items-center border-2 border-secondary rounded-md  flex flex-col transition-transform hover:scale-105">
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="h-48 w-full  rounded-md mb-4"
      />
      <h3 className="font-bold text-2xl text-center py-5">{title}</h3>
      <p className="mb-5">{description}</p>
      <div className="flex justify-center items-center ">
        <Link
          href={link}
          target="_blank"
          className=" bg-secondary rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-secondary py-3 px-5"
        >
          Explore Now
        </Link>
      </div>
    </div>
  );
};

export default Card;
