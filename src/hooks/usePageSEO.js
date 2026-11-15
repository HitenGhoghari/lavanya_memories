import { useEffect } from "react";
import { PROJECTS } from "../data";

const ROUTE_SEO = {
  "/": {
    title: "Lavanya Memories | Destination Wedding Photography & Cinematic Films",
    description:
      "Lavanya Memories by Kaushik Unagar — Destination wedding photography and cinematic films based in Surat, Gujarat. Capturing authentic love stories worldwide.",
  },
  "/photography": {
    title: "Wedding Photography Portfolio | Lavanya Memories",
    description:
      "Explore real wedding photography stories captured by Lavanya Memories. Authentic moments, ceremonies, and celebrations in Surat, Gujarat and worldwide.",
  },
  "/films": {
    title: "Cinematic Wedding Films | Lavanya Memories",
    description:
      "Watch luxury wedding films and cinematic wedding teasers crafted by Lavanya Memories. Bringing raw emotion and love stories to life.",
  },
  "/editorial": {
    title: "Editorial Wedding Photography | Lavanya Memories",
    description:
      "Fine-art editorial portraits and timeless visual aesthetics by Lavanya Memories wedding photography.",
  },
  "/faq": {
    title: "Frequently Asked Questions | Lavanya Memories",
    description:
      "Got questions about wedding photography packages, booking dates, travel, or delivery timelines? Check our FAQ.",
  },
  "/enquiry": {
    title: "Enquiry & Booking | Lavanya Memories",
    description:
      "Inquire for your wedding photography and films with Lavanya Memories. Let's document your love story.",
  },
};

export default function usePageSEO(path) {
  useEffect(() => {
    let title = ROUTE_SEO["/"]?.title;
    let description = ROUTE_SEO["/"]?.description;

    if (path && path.startsWith("/project/")) {
      const slug = decodeURIComponent(path.split("/project/")[1] || "");
      const project = PROJECTS.find((p) => p.slug === slug);
      if (project) {
        title = `${project.title} Wedding Story | Lavanya Memories`;
        description = `Browse the wedding photography gallery for ${project.title} in ${project.location} (${project.year}) by Lavanya Memories.`;
      }
    } else if (path && ROUTE_SEO[path]) {
      title = ROUTE_SEO[path].title;
      description = ROUTE_SEO[path].description;
    }

    if (title) {
      document.title = title;
    }

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) {
      metaDesc.setAttribute("content", description);
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    const cleanPath = path === "/" ? "" : path;
    canonical.setAttribute(
      "href",
      `https://lavanyamemories.vercel.app${cleanPath}`
    );
  }, [path]);
}
