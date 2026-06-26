import Link from "next/link";
import { Button } from "./ui/button";

export function TopbarMenu() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white shadow-md">
      
      <Link href="/">
        <h1 className="text-3xl font-extrabold">AvaGames</h1>
      </Link>

      <nav className="flex items-center gap-10">

        <div className="flex gap-6 text-sm">
          <Link href="/informacoes">Informações</Link>
          <Link href="/categorias">Complementos</Link>
        </div>

        <div className="flex gap-3">
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>

          <Link href="/register">
            <Button>Cadastre-se</Button>
          </Link>
        </div>

      </nav>
    </header>
  );
}