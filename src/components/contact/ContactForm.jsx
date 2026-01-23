import { useState } from "react";
import { validate } from "./validate";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData);

    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("idle");
      return;
    }
    setErrors({});

    setTimeout(() => {
      setStatus("success");
      e.target.reset();
    }, 1000);
  };

  return (
    <form action="" method="post" noValidate onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
        <div>
          <label htmlFor="name" className="sr-only">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            minLength={2}
            autoComplete="name"
            placeholder="Nombre"
            className="input"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p
              id="name-error"
              role="alert"
              className="text-red-500 text-xs mb-2"
            >
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            autoComplete="email"
            placeholder="Email"
            className="input"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p
              id="email-error"
              role="alert"
              className="text-red-500 text-xs mb-2"
            >
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="telefono" className="sr-only">
            Telefóno
          </label>
          <input
            type="tel"
            name="telefono"
            id="telefono"
            autoComplete="tel"
            placeholder="Telefóno"
            className="input"
          />
        </div>

        <div>
          <label htmlFor="asunto" className="sr-only">
            Asunto
          </label>
          <input
            type="text"
            name="asunto"
            id="asunto"
            placeholder="Asunto"
            className="input"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="sr-only">
            Mensaje
          </label>
          <textarea
            name="message"
            id="message"
            rows={6}
            required
            minLength={10}
            placeholder="Contame un poco sobre el proyecto o la idea que tenés en mente."
            className="input"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          ></textarea>
          {errors.message && (
            <p
              id="message-error"
              role="alert"
              className="text-red-500 text-xs mb-2"
            >
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        aria-busy={status === "loading"}
        className="bg-neutral-900 text-white text-sm tracking-widest uppercase py-3 px-8 mt-3 hover:bg-neutral-500 transition ease-in-out duration-300"
      >
        {status === "loading" ? "Enviando..." : "Enviar mensaje"}
      </button>

      <div aria-live="polite">
        {status === "success" && (
          <p className="text-green-600 mt-2">Mensaje enviado correctamente.</p>
        )}
        {status === "error" && (
          <p className="text-red-600">Ocurrió un error. Intenta más tarde.</p>
        )}
      </div>
    </form>
  );
}
