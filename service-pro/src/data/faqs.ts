export type FaqItem = { q: string; a: string };

export const FAQS: FaqItem[] = [
  {
    q: "¿Cómo reservo una visita?",
    a: "Elegís el equipo en el panel, completás el formulario y se abre WhatsApp con el mensaje listo para enviar.",
  },
  {
    q: "¿Trabajan en CABA y AMBA?",
    a: "Sí, atendemos CABA y AMBA. Indicá tu barrio/partido en el formulario para coordinar.",
  },
  {
    q: "¿Tengo que registrarme o crear una cuenta?",
    a: "No. La visita se coordina por WhatsApp para que sea rápido y simple.",
  },
  {
    q: "¿Qué datos conviene poner?",
    a: "Equipo, marca/modelo si lo tenés, el problema (síntomas/errores), zona y franja horaria preferida.",
  },
];
