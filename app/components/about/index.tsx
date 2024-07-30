import Image from 'next/image'

export const About = () => {
  return (
    <section className="container flex flex-col gap-4">
      <div className="flex flex-row gap-2 justify-center ">
        <div className="flex flex-col gap-3  ">
          <h2 className="font-mono py-5 ">Sobre o projeto</h2>
          <p className="w-[full]">
            Esse canal foi criado para compartilhar imagens coletadas durante
            minha pesquisa de mestrado intitulada{' '}
            <strong className="text-emerald-400">
              Saberes Perpétuos do Reinado de Itapecerica
            </strong>
            .
          </p>
        </div>
        <Image
          className="pt-5"
          src="/images/matriz-de-sao-bento.jpg"
          width={150}
          height={150}
          alt={'foto da Matriz de São Bento de Itapecerica'}
        />
      </div>

      <p>
        As incursões de campo foram realizadas durante os festejos de reinado
        realizados na cidade de Itapecerica, localizada no centro oeste de Minas
        Gerais.
      </p>
    </section>
  )
}
