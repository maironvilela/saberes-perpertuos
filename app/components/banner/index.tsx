import { Header } from '../header'
import { IBM_Plex_Mono } from 'next/font/google'

export const Banner = () => {
  return (
    <section className="container bg-banner-image  bg-cover">
      <Header />
      <div className="container flex flex-col gap-5 py-10 items-center">
        <h1 className="text-center text-2xl">
          SABERES PERPÉTUOS DO REINADO DE ITAPECERICA:{' '}
          <span className="text-emerald-400">
            UM OLHAR SOBRE AS APRENDIZAGENS DA TRADIÇÃO
          </span>
        </h1>

        <p className="font-mono text-center text-sm">
          Dissertação de mestrado apresentada ao Programa de Pós-Graduação em
          Educação e Formação Humana da Universidade do Estado de Minas Gerais,
          como requisito parcial para obtenção do título de mestre em Educação
        </p>

        <a
          className="text-sm py-1 px-3 text-emerald-950 bg-emerald-400 rounded-lg w-32 flex justify-center mt-8 font-bold"
          href="./files/artigo.pdf"
          target="_blank"
        >
          Ler artigo
        </a>
      </div>
    </section>
  )
}
