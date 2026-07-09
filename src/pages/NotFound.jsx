import ButtonLink from "../components/common/ButtonLink";
import Container from "../components/common/Container";

export default function NotFound() {
  return (
    <main className="bg-gradient-to-br from-white via-blue-50 to-sky-100 py-24 soft-grid">
      <Container className="text-center">
        <p className="text-sm font-black uppercase tracking-[0.24em] text-orange-500">404</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-blue-950 sm:text-6xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600">
          The page you are looking for does not exist or may have moved.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink to="/">Back to Home</ButtonLink>
        </div>
      </Container>
    </main>
  );
}
