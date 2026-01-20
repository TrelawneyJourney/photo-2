import { icons } from "../../assets/icons";

export default function FooterNavbar() {
  const InstaIcon = icons.Instagram;
  const WhatsappIcon = icons.Whatsapp;

  return (
    <div className="flex items-center gap-3 mt-7">
      <a
        href="https://www.instagram.com/galacaradepala_fotografia/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstaIcon />
      </a>

      <a href="#" target="_blank" rel="noopener noreferrer">
        <WhatsappIcon />
      </a>
    </div>
  );
}
