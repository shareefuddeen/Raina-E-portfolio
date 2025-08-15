import React from 'react'
import {Back} from "./Back"
import img1 from "./assets/IMG-20250814-WA0012.webp"
import img2 from "./assets/IMG-20250814-WA0014.webp"
import img3 from "./assets/IMG-20250814-WA0019.webp"
import img4 from "./assets/IMG-20250814-WA0020.webp"
import img5 from "./assets/IMG-20250814-WA0021.webp"
import img6 from "./assets/IMG-20250814-WA0022.webp"
import img7 from "./assets/IMG-20250814-WA0023.webp"
import img8 from "./assets/IMG-20250814-WA0028.webp"
import img9 from "./assets/IMG-20250814-WA0029.webp"
import img10 from "./assets/IMG-20250814-WA0030.webp"
import img11 from "./assets/IMG-20250814-WA0031.webp"
import img12 from "./assets/IMG-20250814-WA0032.webp"
import img13 from "./assets/IMG-20250814-WA0033.webp"
import img14 from "./assets/IMG-20250814-WA0034.webp"
import img15 from "./assets/IMG-20250814-WA0035.webp"
import img16 from "./assets/IMG-20250814-WA0036.webp"
import img17 from "./assets/IMG-20250814-WA0037.webp"
import img18 from "./assets/IMG-20250814-WA0038.webp"
import img19 from "./assets/IMG-20250814-WA0039.webp"
import img20 from "./assets/IMG-20250814-WA0040.webp"
import img21 from "./assets/Screenshot_20250815-002818.jpg"
import img22 from "./assets/Screenshot_20250815-002829.jpg"
import img23 from "./assets/Screenshot_20250815-002838.jpg"


export const Media = () => {
  const images = [
    img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23
  ]
  return (
    <section className="p-12">
    <Back/>
  		<div className="">
  			<h1 className="text-4xl">Pictures and Videos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-xl ${
              index % 5 === 0
                ? "sm:col-span-2 sm:row-span-2" // make some bigger
                : "col-span-1 row-span-1"
            }`}
          >
            <img
              src={src}
              alt={`Bento ${index}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
  		</div>
  	</section>
  )
}

export default Media;