import { Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <div className="  w-full px-8 xl:px-[180px] bg-secondary py-10 mt-8 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20 sm:mb-0">
      <div className="">
        <svg
          className="cursor-pointer"
          width="130"
          height="27"
          viewBox="0 0 206 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.48 11.792C10.656 10.928 8.864 10.928 8.704 10.928C7.072 10.928 5.504 9.968 5.504 8.112C5.504 6.064 6.944 5.008 8.704 5.008C10.368 5.008 11.776 5.872 11.84 7.696C11.84 7.792 12 7.952 12.192 7.952H16.192C16.416 7.952 16.576 7.792 16.544 7.696C16.48 3.344 13.088 0.4 8.704 0.4C4.608 0.4 0.736 3.312 0.736 8.112C0.736 11.088 2.24 13.36 4.896 14.576C6.752 15.44 8.48 15.44 8.704 15.44C10.144 15.504 11.904 16.656 11.904 18.544C11.904 20.24 10.4 21.392 8.704 21.392H8.672V26H8.704C12.8 26 16.64 23.344 16.64 18.544C16.64 15.536 15.168 13.04 12.48 11.792ZM18.335 0.688V11.504H23.231V0.688C23.231 0.559999 23.103 0.4 22.879 0.4H18.687C18.495 0.4 18.335 0.559999 18.335 0.688ZM18.335 25.712C18.335 25.84 18.495 26 18.687 26H22.879C23.103 26 23.231 25.84 23.231 25.712V21.2H32.927V25.712C32.927 25.84 33.087 26 33.279 26H37.471C37.695 26 37.823 25.84 37.823 25.712V0.688C37.823 0.559999 37.695 0.4 37.471 0.4H33.279C33.087 0.4 32.927 0.559999 32.927 0.688V16.432H23.231V16.4H18.335V25.712ZM54.2373 13.264C54.2373 11.92 53.1813 10.832 51.8373 10.832C50.4933 10.832 49.4373 11.92 49.4373 13.264C49.4373 14.576 50.4933 15.664 51.8373 15.664C53.1813 15.664 54.2373 14.576 54.2373 13.264ZM39.5173 13.168C39.5173 19.568 43.5813 26 51.8693 26C60.0293 26 64.1573 19.568 64.1573 13.168C64.1573 6.8 60.0293 0.4 51.8693 0.4C43.5813 0.4 39.5173 6.8 39.5173 13.168ZM44.3493 13.264C44.3493 9.072 46.8453 4.912 51.8693 4.912C56.8293 4.912 59.3573 9.072 59.3573 13.264C59.3573 17.392 56.8293 21.52 51.8693 21.52C46.8453 21.52 44.3493 17.392 44.3493 13.264ZM66.2183 26H78.0263V21.232H70.7623V15.472H80.8103C81.0023 15.472 81.1623 15.312 81.1623 15.184V11.12C81.1623 10.96 81.0023 10.832 80.8103 10.832H70.7623V5.04H78.0263V0.4H66.2183C66.0263 0.4 65.8663 0.559999 65.8663 0.688V25.712C65.8663 25.84 66.0263 26 66.2183 26Z"
            fill="#ffff"
          />
          <path
            d="M104.05 0.4H99.9223C99.6983 0.4 99.5382 0.559999 99.5382 0.688V17.36L87.7303 0.495998C87.6983 0.431999 87.5063 0.4 87.4423 0.4H83.1863C83.0263 0.4 82.8663 0.559999 82.8663 0.688V19.856H87.7623V9.04L99.5382 25.904C99.5703 25.968 99.7623 26 99.8263 26H104.05C104.274 26 104.402 25.84 104.402 25.712V0.688C104.402 0.559999 104.274 0.4 104.05 0.4ZM115.903 21.616H113.343V0.4H108.447V21.616H105.823C105.631 21.616 105.471 21.744 105.471 21.904V25.712C105.471 25.84 105.631 26 105.823 26H115.903C116.127 26 116.255 25.84 116.255 25.712V21.904C116.255 21.744 116.127 21.616 115.903 21.616ZM127.352 25.84L135.352 5.168H130.424L127.064 14.544L122.072 0.591999C122.04 0.463999 121.912 0.4 121.752 0.4H117.4C117.144 0.4 117.016 0.591999 117.112 0.783998L126.744 25.84C126.872 26.064 127.256 26.064 127.352 25.84ZM137.406 26H149.214V21.232H141.95V15.472H151.998C152.19 15.472 152.35 15.312 152.35 15.184V11.12C152.35 10.96 152.19 10.832 151.998 10.832H141.95V5.04H149.214V0.4H137.406C137.214 0.4 137.054 0.559999 137.054 0.688V25.712C137.054 25.84 137.214 26 137.406 26ZM171.526 25.584C169.926 22.032 168.198 18.512 166.598 14.896C169.158 13.968 171.302 11.92 171.302 8.016C171.302 0.463999 164.102 0.4 162.662 0.4H154.374C154.214 0.4 154.054 0.559999 154.054 0.688V5.04H162.662C163.43 5.04 166.438 5.2 166.438 8.016C166.438 10.832 163.718 10.96 162.662 10.96H154.054V25.712C154.054 25.84 154.214 26 154.374 26H158.566C158.758 26 158.918 25.84 158.918 25.712V15.664H161.67L166.342 25.808C166.374 25.904 166.566 26 166.662 26H171.238C171.494 26 171.622 25.808 171.526 25.584ZM184.761 11.792C182.937 10.928 181.145 10.928 180.985 10.928C179.353 10.928 177.785 9.968 177.785 8.112C177.785 6.064 179.225 5.008 180.985 5.008C182.649 5.008 184.057 5.872 184.121 7.696C184.121 7.792 184.281 7.952 184.473 7.952H188.473C188.697 7.952 188.857 7.792 188.825 7.696C188.761 3.344 185.369 0.4 180.985 0.4C176.889 0.4 173.017 3.312 173.017 8.112C173.017 11.088 174.521 13.36 177.177 14.576C179.033 15.44 180.761 15.44 180.985 15.44C182.425 15.504 184.185 16.656 184.185 18.544C184.185 20.24 182.681 21.392 180.985 21.392H180.953V26H180.985C185.081 26 188.921 23.344 188.921 18.544C188.921 15.536 187.449 13.04 184.761 11.792ZM190.968 26H202.776V21.232H195.512V15.472H205.56C205.752 15.472 205.912 15.312 205.912 15.184V11.12C205.912 10.96 205.752 10.832 205.56 10.832H195.512V5.04H202.776V0.4H190.968C190.776 0.4 190.616 0.559999 190.616 0.688V25.712C190.616 25.84 190.776 26 190.968 26Z"
            fill="#D34457"
          />
        </svg>
        <Typography variant="subtitle1" className="text-gray-400">
          Discover the perfect pair of shoes that will elevate your style and
          keep you comfortable all day long. Our online store offers a wide
          selection of footwear for every occasion, whether you're looking for
          trendy sneakers, elegant heels, or reliable boots. With our
          high-quality products and exceptional customer service, we strive to
          provide you with an unforgettable shopping experience.
        </Typography>
      </div>
      <div className="">
        <Typography variant="h6" className="capitalize font-semibold ">
          {" "}
          Cusotmer care
        </Typography>
        <Typography
          variant="subtitle1"
          className=" capitalize text-gray-400 hover:text-white cursor-pointer duration-200 ease-linear "
        >
          Help Center
        </Typography>
        <Typography
          variant="subtitle1"
          className=" capitalize text-gray-400 hover:text-white cursor-pointer duration-200 ease-linear"
        >
          how to buy
        </Typography>
        <Typography
          variant="subtitle1"
          className=" capitalize text-gray-400 hover:text-white cursor-pointer duration-200 ease-linear"
        >
          track your order
        </Typography>
        <Typography
          variant="subtitle1"
          className=" capitalize text-gray-400 hover:text-white cursor-pointer duration-200 ease-linear"
        >
          corporate & bulk purchasing
        </Typography>
        <Typography
          variant="subtitle1"
          className=" capitalize text-gray-400 hover:text-white cursor-pointer  duration-200 ease-linear"
        >
          return and refunds
        </Typography>
      </div>

      {/* about us */}
      <div className="">
        <Typography variant="h6" className="capitalize font-semibold ">
          {" "}
          about us
        </Typography>
        <Typography
          variant="subtitle1"
          className=" capitalize text-gray-400 hover:text-white cursor-pointer duration-200 ease-linear "
        >
          careers
        </Typography>
        <Typography
          variant="subtitle1"
          className=" capitalize text-gray-400 hover:text-white cursor-pointer duration-200 ease-linear"
        >
          our stores
        </Typography>
        <Typography
          variant="subtitle1"
          className=" capitalize text-gray-400 hover:text-white cursor-pointer duration-200 ease-linear"
        >
          our cares
        </Typography>
        <Typography
          variant="subtitle1"
          className=" capitalize text-gray-400 hover:text-white cursor-pointer duration-200 ease-linear"
        >
          terms & conditons
        </Typography>
        <Typography
          variant="subtitle1"
          className=" capitalize text-gray-400 hover:text-white cursor-pointer  duration-200 ease-linear"
        >
          privacy policy
        </Typography>
      </div>

      {/* contact us */}
      <div className="">
        <Typography variant="h6" className="capitalize font-semibold ">
          {" "}
          contact us
        </Typography>

        <Typography
          variant="subtitle1"
          className=" capitalize text-gray-400 hover:text-white cursor-pointer duration-200 ease-linear"
        >
          pepsicola-32, kathmandu-44600, nepal
        </Typography>
        <Typography
          variant="subtitle1"
          className=" capitalize text-gray-400 hover:text-white cursor-pointer duration-200 ease-linear"
        >
          email: store123@gmail.com
        </Typography>
        <Typography
          variant="subtitle1"
          className=" capitalize text-gray-400 hover:text-white cursor-pointer duration-200 ease-linear"
        >
          phone: +977 9821078905
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
