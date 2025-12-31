export default function Logo() {
  return (
    <div>
      <img
        src={`${import.meta.env.BASE_URL}logo.png`}
        alt="Gala Fotografía Logo"
        className="w-36"
      />
    </div>
  );
}
