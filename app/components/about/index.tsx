import Image from 'next/image'

export const About = () => {
  return (
    <section className="container">
      <h2 className="font-mono py-10 ">Sobre o projeto</h2>
      <div className="flex  gap-3">
        <p className="max-w-[200]">
          Esse canal foi criado para compartilhar imagens coletadas durante
          minha pesquisa de mestrado intitulada{' '}
          <strong className="text-emerald-400">
            Saberes Perpétuos do Reinado de Itapecerica
          </strong>
          . As incursões de campo foram realizadas durante os festejos de
          reinado realizados na cidade de Itapecerica, localizada no centro
          oeste de Minas Gerais.
        </p>

        <Image
          className=""
          src="/images/matriz-de-sao-bento.jpg"
          width={200}
          height={200}
          alt={'foto da Matriz de São Bento de Itapecerica'}
        />
      </div>
    </section>
  )
}
