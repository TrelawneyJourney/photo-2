export default function Logo() {
  return (
    <div>
      <a href="/">
        <img
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt="Gala Fotografía Logo"
          className="w-36 md:w-44 "
        />
      </a>
    </div>
  );
}
