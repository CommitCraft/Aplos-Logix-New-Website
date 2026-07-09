import Breadcrumbs from "./Breadcrumbs";
import ButtonLink from "./ButtonLink";
import Container from "./Container";

export default function PageHero({ page, parent, eyebrow, title, highlight, description, image, imageAlt = "Industrial manufacturing", bullets = [] }) {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-white via-blue-50/45 to-sky-100/60">
      <Container className="grid gap-10 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-14">
        <div>
          <Breadcrumbs current={page} parent={parent} />
          {eyebrow ? <p className="mt-5 inline-flex rounded-md border border-blue-200 bg-white px-3 py-1 text-xs font-black uppercase tracking-wide text-blue-700">{eyebrow}</p> : null}
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight text-blue-950 sm:text-5xl">{title}{highlight ? <><br /><span className="text-blue-600">{highlight}</span></> : null}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">{description}</p>
          {bullets.length ? <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">{bullets.map((b) => <span key={b} className="text-sm font-semibold text-blue-950">✓ {b}</span>)}</div> : null}
          <div className="mt-7 flex flex-wrap gap-3"><ButtonLink to="/solutions">Explore Solutions</ButtonLink><ButtonLink to="/contact" variant="secondary">Request Demo</ButtonLink></div>
        </div>
        <div className="relative min-h-82 overflow-hidden rounded-[2.5rem_0_0_0] lg:min-h-110">
          <img src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-blue-950/10" />
        </div>
      </Container>
    </section>
  );
}
