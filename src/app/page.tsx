import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center">

        <div className="flex justify-center items-center">
  <img src="/Web3EduBrasil_logo.png" alt="web3" width={300} height={260} />
</div>


      <h1 className="text-3xl font-bold text-green-700 text-center">
          Conta de administrador
        </h1>

        <Link
          href="/forms" // rota da página em app/forms/page.tsx
          className="rounded-full px-6 h-12 flex items-center justify-center bg-green-700 text-white hover:bg-green-800 transition-colors"
        >
          Criar conta
        </Link>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center text-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          href="https://www.web3edubrasil.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/Web3EduBrasil_logo.png"
            alt="web3"
            width={50}
            height={40}
          />
          Ir para o site de home da Web3EduBrasil
        </a>
      </footer>
    </div>
  );
}
