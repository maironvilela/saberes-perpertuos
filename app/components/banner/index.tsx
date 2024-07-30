import { Header } from '../header'
import { IBM_Plex_Mono } from 'next/font/google'

export const Banner = () => {
  return (
    <section className="container bg-banner-image py-10 bg-cover">
      <Header />
      <div className="container flex flex-col gap-5 py-10">
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
      </div>
    </section>
  )
}
