import type { ImageMetadata } from "astro";

import acRepair from "@/assets/images/ac-repair.jpg";
import acRepair2 from "@/assets/images/ac-repair2.jpg";
import coldRoom from "@/assets/images/camara-frigorifica-repair.jpg";

import heroImg from "@/assets/images/hero.jpeg";
import washerDryer from "@/assets/images/repair-washer-dryer.jpg";

import ovenImg from "@/assets/images/repair-horno.jpg";
import fridgeImg from "@/assets/images/reparacion-heladera.webp";

export type ServiceIcon =
  | "fridge"
  | "washer"
  | "ac"
  | "oven"
  | "coldroom"
  | "other";

export type Service = {
  slug: string;
  title: string;
  short: string;
  seoTitle: string;
  seoDescription: string;
  icon: ServiceIcon;
  image?: ImageMetadata;
  imageAlt?: string;
};

export const SERVICES: Service[] = [
  {
    slug: "lavarropas",
    title: "Lavarropas",
    short: "No centrifuga, no carga agua, pierde, vibra, errores.",
    seoTitle: "Service Pro | Service de lavarropas en CABA y AMBA",
    seoDescription:
      "Reparación de lavarropas en CABA y AMBA. Reservá visita por WhatsApp con todos los datos en un mensaje.",
    icon: "washer",
    image: washerDryer,
    imageAlt: "Reparación de lavarropas",
  },
  {
    slug: "heladeras",
    title: "Heladeras",
    short: "No enfría, pierde agua, hace ruido, freezer escarchado.",
    seoTitle: "Service Pro | Reparación de heladeras en CABA y AMBA",
    seoDescription:
      "Service técnico de heladeras y freezers en CABA y AMBA. Coordinación rápida por WhatsApp.",
    icon: "fridge",
    image: fridgeImg,
    imageAlt: "Reparación de heladeras",
  },
  {
    slug: "aire-acondicionado",
    title: "Aire Acondicionado",
    short: "Instalación y service. Mantenimiento, fugas, no enfría.",
    seoTitle: "Service Pro | Aire acondicionado (piso-techo) en CABA y AMBA",
    seoDescription:
      "Instalación y service de aire acondicionado piso-techo en CABA y AMBA. Reservá por WhatsApp.",
    icon: "ac",
    image: acRepair2,
    imageAlt: "Service de aire acondicionado piso-techo",
  },
  {
    slug: "hornos-electricos",
    title: "Hornos eléctricos",
    short: "No calienta, corta, display, resistencia, termostato.",
    seoTitle: "Service Pro | Reparación de hornos eléctricos en CABA y AMBA",
    seoDescription:
      "Reparación de hornos eléctricos en CABA y AMBA. Coordiná visita por WhatsApp.",
    icon: "oven",
    image: ovenImg,
    imageAlt: "Reparación de hornos eléctricos",
  },
  {
    slug: "camara-frigorifica",
    title: "Cámara frigorífica",
    short: "Comercial. Temperatura, control, mantenimiento.",
    seoTitle: "Service Pro | Service de cámaras frigoríficas en CABA y AMBA",
    seoDescription:
      "Service técnico para cámaras frigoríficas. Coordinación por WhatsApp con datos del equipo.",
    icon: "coldroom",
    image: coldRoom,
    imageAlt: "Service de cámara frigorífica",
  },
  {
    slug: "otros",
    title: "Otros",
    short: "Contanos qué equipo es y qué problema tiene.",
    seoTitle: "Service Pro | Servicio técnico en CABA y AMBA",
    seoDescription:
      "Contanos el equipo y el problema. Reservá visita por WhatsApp en CABA y AMBA.",
    icon: "other",
    image: acRepair,
    imageAlt: "Servicio técnico",
  },
];
