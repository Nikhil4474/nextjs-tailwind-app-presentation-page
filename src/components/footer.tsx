"use client";
import Image from "next/image";
import { Typography, IconButton, Button } from "@material-tailwind/react";

const LINKS = ["About Us", "Contact", "Pricing"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-gray-900 px-8 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <Typography
              as="a"
              variant="h5"
              color="white"
              className="mb-4">
              Dietitian Pavani
            </Typography>
            <Typography
              color="white"
              className="mb-12 font-normal">
              The reward for getting on the stage is fame.
            </Typography>
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
              {LINKS.map((link, idx) => (
                <li key={link}>
                  <Typography
                    as="a"
                    href="#"
                    color="white"
                    className={`py-1 font-medium transition-colors ${
                      idx === 0 ? "pr-3" : "px-3"
                    }`}>
                    {link}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <Typography
            color="white"
            className="text-center font-normal opacity-75">
            &copy; {CURRENT_YEAR} Made <a>by Nikhil</a>
          </Typography>

          <div className="flex gap-2">
            <IconButton
              variant="text"
              color="white"
              onClick={() =>
                window.open("https://www.instagram.com/dietitian_pavani/?hl=en")
              }>
              <i className="fa-brands fa-instagram text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton
              variant="text"
              color="white"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/profile.php?id=100083484403465"
                )
              }>
              <i className="fa-brands fa-facebbeook text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton
              variant="text"
              color="white"
              onClick={() => window.open("https://www.youtube.com/@dietitian_Pavani")}>
              <i className="fa-brands fa-youtu text-2xl not-italic opacity-75"></i>
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
