import { createFileRoute } from "@tanstack/react-router";
import photo from "@/assets/lucas-promo.jpg.asset.json";

// Troque pelo link real do seu grupo
const GROUP_URL = "https://chat.whatsapp.com/LsYCDQ4818fFX00Ghh01ee?s=cl&p=i&mlu=4&ilr=4&iam=2";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lucas Promo — Grupo de Achadinhos" },
      { name: "description", content: "Entre no grupo Lucas Promo e receba ofertas e achadinhos pela metade do preço." },
      { property: "og:title", content: "Lucas Promo — Grupo de Achadinhos" },
      { property: "og:description", content: "Ofertas 100% gratuitas direto no seu WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const join = () => {
    window.fbq?.("track", "Lead");
  };
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <div className="bg-destructive px-4 py-3 text-center text-sm font-extrabold uppercase tracking-wide text-destructive-foreground">
        🎯 Aproveite agora as melhores promoções disponíveis para você!
      </div>
      <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center justify-center px-5 py-10 text-center">
        <h1 className="text-3xl font-black leading-tight">
          🚨 RASTREIO DE OFERTAS
          <br />
          <span className="text-primary">100% GRATUITO</span> 🚨
        </h1>
        <img
          src={photo.url}
          alt="Lucas Promo"
          className="mt-8 aspect-square w-64 rounded-full object-cover shadow-[0_0_60px_var(--primary)]"
        />
        <p className="mt-8 text-lg text-muted-foreground">
          Produtos pela <strong className="text-foreground">METADE DO PREÇO</strong> ⚡
        </p>
        <a
          href={GROUP_URL}
          onClick={join}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-primary py-5 text-xl font-black text-primary-foreground shadow-[0_0_30px_var(--primary)] transition-transform active:scale-95 animate-pulse"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden>
            <path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z" />
          </svg>
          ENTRAR NO GRUPO
        </a>
      </main>
    </div>
  );
}
