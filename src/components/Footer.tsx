export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="f-sans text-sm text-mid">
          © {new Date().getFullYear()} Aishwarya Lokhande
        </span>
        <span className="f-mono text-xs text-low">
          Pune, India
        </span>
      </div>
    </footer>
  );
}
