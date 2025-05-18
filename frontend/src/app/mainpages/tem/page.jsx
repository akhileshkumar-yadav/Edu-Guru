// components/ReviewCard.tsx
"use client"
import React from "react";
import { AiFillStar } from "react-icons/ai";
export default function ReviewCard() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md max-w-md w-full">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-lg font-bold">
          A
        </div>
        <div>
          <p className="font-semibold text-lg">Anjali Sharma</p>
          <p className="text-sm text-gray-400">7 April 2025</p>
        </div>
      </div>

      <div className="flex gap-1 mb-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${
              star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.674a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.27a1 1 0 00-.364 1.118l1.2 3.674c.3.921-.755 1.688-1.538 1.118l-3.124-2.27a1 1 0 00-1.175 0l-3.124 2.27c-.783.57-1.838-.197-1.538-1.118l1.2-3.674a1 1 0 00-.364-1.118L2.299 9.101c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.2-3.674z" />
          </svg>
        ))}
      </div>

      <p className="text-gray-700">
        Yeh product kaafi accha laga! Build quality bhi badhiya hai. Delivery bhi time pe ho gayi.
      </p>
    </div>
  );
}
