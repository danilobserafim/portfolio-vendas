export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg z-50 flex items-center justify-between py-4 px-6 border-b border-gray-200 dark:border-gray-800">
      <h1 className="text-xl font-bold">Danilo Barbosa</h1>

      <nav className="hidden md:flex gap-6 text-lg">
        <a href="#servicos" className="hover:text-blue-500 transition">
          Serviços
        </a>
        <a href="#planos" className="hover:text-blue-500 transition">
          Planos
        </a>
        {/* <a href="#projetos" className="hover:text-blue-500 transition">
          Projetos
        </a> */}
        <a href="#contato" className="hover:text-blue-500 transition">
          Contato
        </a>
      </nav>
    </header>
  );
}
