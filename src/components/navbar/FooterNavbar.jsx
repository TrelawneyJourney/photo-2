import { icons } from "../../assets/icons";

export default function FooterNavbar() {
  const InstaIcon = icons.Instagram;
  const LinkedinIcon = icons.Linkedin;
  return (
    <div className="flex items-center gap-2">
      <a
        href="https://www.instagram.com/galacaradepala_fotografia/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstaIcon />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <LinkedinIcon />
      </a>
    </div>
  );
}
