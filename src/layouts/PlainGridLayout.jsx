export default function PlainGridLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-grid" />

      {/* Page content */}
      <main className="relative z-10">{children}</main>
    </div>
  );
}
