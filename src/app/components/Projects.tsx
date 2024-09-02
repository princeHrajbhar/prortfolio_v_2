import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

// Define your items with image URLs
const items = [
  {
    title: "Ecommerce website!",
    description: "ecommerce store with all the advance features like cart,order,payment,wishlist,profile",
    imageUrl: "https://res.cloudinary.com/dieuobok1/image/upload/v1725206424/ml_default/Screenshot_2199_xkprnb.png", // Example image URL
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Personal portfolio page!",
    description: "most attractive portfolio page with intractive and framework motion",
    imageUrl: "https://res.cloudinary.com/dieuobok1/image/upload/v1725206397/ml_default/Screenshot_2789_flvl5z.png", // Example image URL
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Admin dashboard ",
    description: "admin daishboard with all magageable controls of order,layout,offers,product",
    imageUrl: "https://res.cloudinary.com/dieuobok1/image/upload/v1725206398/ml_default/Screenshot_2784_dsvkab.png", // Example image URL
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Chat analyzer",
    description: "python project for the whatsapp chat to monitor the engagement of members",
    imageUrl: "https://res.cloudinary.com/dieuobok1/image/upload/v1725207614/ml_default/Screenshot_2024-09-01_214951_tlcly2.png", // Example image URL
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Messaging app",
    description: "real time messaging app using I/O web socket nodejs",
    imageUrl: "https://res.cloudinary.com/dieuobok1/image/upload/v1725206386/ml_default/Screenshot_2792_aynjiz.png", // Example image URL
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  // Add more items for the second row

];

export default function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={
            <div className="relative w-full h-40 overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
          }
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
