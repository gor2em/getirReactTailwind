import React from "react";
export default function Favorite({
  favorite: { id, title, image, alt, price },
}) {
  return (
    <a
      href="#"
      className="flex flex-col  items-center gap-y-2  text-center p-4 border border-gray-50"
    >
      <img src={image} alt={title} className="w-24 h-24" />

      <span className="text-sm font-semibold whitespace-nowrap text-primary-brand-color tracking-tight">
        ₺{price}
      </span>
      <span className="text-sm font-semibold whitespace-nowrap text-gray-700  tracking-tight">
        {title}
      </span>
      <span className="text-sm text-gray-400 whitespace-nowrap tracking-tight">
        {alt}
      </span>
    </a>
  );
}
