import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";
import { navigation } from "@/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/aadikavicampus",
      icon: <FaFacebookF className="h-4 w-4" />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/aadikavi-bhanubhakta-campus/",
      icon: <FaLinkedinIn className="h-4 w-4" />,
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@aadikavibhanubhaktacampus2503",
      icon: <FaYoutube className="h-4 w-4" />,
    },
    {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.edigitalnepal.aadikavi",
      icon: <FaGooglePlay className="h-4 w-4" />,
    },
    {
      label: "App Store",
      href: "https://apps.apple.com/mt/app/aadikavi-bhanubhakta-campus/id6692619413",
      icon: <FaApple className="h-4 w-4" />,
    },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Logo + tagline */}
          <div>
            <Image
              src="/logo-full.png"
              alt="Aadikavi Bhanubhakta Campus"
              width={280}
              height={80}
              className="h-auto w-56 bg-white rounded-md p-2"
            />
            <p className="mt-3 text-sm text-white/90">
              Quality Education for Quality Life
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Useful Links
            </h3>
            <ul className="mt-3 space-y-2">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/85 hover:text-crimson transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <ul className="mt-3 space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>Damauli, Tanahun, Gandaki Province, Nepal</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>abcampus@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>065-590096</span>
              </li>
            </ul>

            <h3 className="mt-6 text-lg font-semibold text-white">
              Follow Us
            </h3>
            <div className="mt-3 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white transition-colors hover:bg-white hover:text-primary"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6">
          <p className="text-center text-xs text-white/80">
            © {currentYear} BICTE, Aadikavi Bhanubhakta Campus. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}