import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="absolute inset-0 h-full w-full flex items-center justify-center bg-gradient-to-b from-background to-primary dark:from-gray-900 dark:to-primary-900">
        <section className="text-center max-w-3xl px-6">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-foreground md:text-5xl lg:text-6xl">
            Autenticação segura e eficiente
          </h1>
          <p className="mb-8 text-lg text-muted-foreground lg:text-xl">
          Este é o frontend do template de autenticação desenvolvido com React, Vite e TypeScript. Ele oferece Login e cadastro de usuário, 

          Confirmação de e-mail, 

Autenticação de dois fatores (2FA) e

Recuperação de senha;

          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="default" asChild>
              <a href="/docs" target="_blank" rel="noreferrer">
                Saiba mais
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/demo" target="_blank" rel="noreferrer">
                Ver demonstração
              </a>
            </Button>
          </div>
        </section>
      </div>
    </main>
  )
}