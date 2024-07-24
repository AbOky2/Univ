import React from 'react'
import Image from 'next/image'
import { FaBeer } from 'react-icons/fa';
import { IconName } from "react-icons/im";
import {ImFacebook} from "react-icons/im"
import {ImGoogle} from "react-icons/im"
import {ImLinkedin2} from "react-icons/im"
import Link from "next/link";


function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-20">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">À propos</h3>
          <p className="text-gray-400 mb-4">
            L'Université HEC Tchad est un établissement d'enseignement
            supérieur de renommée nationale et internationale, offrant des programmes
            d'études innovants et une expérience étudiante enrichissante.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FacebookIcon className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <TwitterIcon className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <LinkedinIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Liens utiles</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="text-gray-400 hover:text-white"
                prefetch={false}
              >
                Programmes d'études
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-400 hover:text-white"
                prefetch={false}
              >
                Admissions
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-400 hover:text-white"
                prefetch={false}
              >
                Vie étudiante
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-400 hover:text-white"
                prefetch={false}
              >
                Recherche
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-400 hover:text-white"
                prefetch={false}
              >
                Carrières
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contactez-nous</h3>
          <p className="text-gray-400 mb-4">
            Université HEC Tchad
            <br />
            123 Avenue Ngarta
            <br />
            N'djamena, Tchad
            <br />
            Tél. : +235 66 66 55 66
            <br />
            Email : info@hec-tchad.td
          </p>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        &copy; 2024 Université HEC Tchad. Tous droits réservés.
      </div>
    </div>
  </footer>
  )
}
function FacebookIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    );
  }
  
  function InstagramIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    );
  }
  
  function LinkedinIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }
  
  function TwitterIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    );
  }
export default Footer