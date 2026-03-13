// frontend/src/components/common/Card.jsx
import React from "react";

/**
 * Simple card wrapper:
 * Props:
 * - title (string)
 * - image (url)
 * - children
 * - footer (node)
 */
export default function Card({ title, image, children, footer }) {
  return (
    <article className="border rounded-lg overflow-hidden shadow-sm bg-white">
      {image && (
        <div className="w-full h-44 sm:h-56 bg-gray-100 overflow-hidden">
          <img src={image} alt={title || "card image"} className="w-full h-full object-cover" />
        </div>
      )}

      <div className="p-4">
        {title && <h3 className="text-lg font-semibold">{title}</h3>}
        <div className="mt-2 text-sm text-gray-700">{children}</div>
      </div>

      {footer && <div className="px-4 py-3 border-t bg-gray-50">{footer}</div>}
    </article>
  );
}
