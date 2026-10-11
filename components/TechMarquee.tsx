"use client";

import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { techStack } from "@/data/links";

export function TechMarquee() {
  const items = techStack;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 6);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 6);
  };

  useEffect(() => {
    checkScroll();
    const handleResize = () => checkScroll();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [items]);

  const handleScroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = 200;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  if (!items || items.length === 0) return null;

  return (
    <section aria-label="Tecnologias que domino" className="flex flex-col gap-2.5">
      {/* Cabeçalho com título e setinhas de navegação para ver mais */}
      <div className="flex items-center justify-between px-1">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted">
          Stack & Ferramentas
        </h2>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            aria-label="Ver tecnologias anteriores"
            className="flex size-7 items-center justify-center rounded-lg border border-border bg-card text-muted transition-colors hover:border-accent hover:text-accent disabled:opacity-25 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <FiChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            aria-label="Ver mais tecnologias"
            className="flex size-7 items-center justify-center rounded-lg border border-border bg-card text-muted transition-colors hover:border-accent hover:text-accent disabled:opacity-25 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <FiChevronRight className="size-4" />
          </button>
        </div>
      </div>

      {/* Carrossel rolável suave sem cortes nos itens */}
      <div className="relative w-full">
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex items-center gap-2 overflow-x-auto py-1 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex shrink-0 items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium text-fg shadow-sm transition-colors hover:border-accent/60"
            >
              <Icon aria-hidden="true" className="size-3.5 text-accent" />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
