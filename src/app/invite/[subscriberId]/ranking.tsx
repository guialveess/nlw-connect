import { getRanking } from '@/http/api'
import Image from 'next/image'
import cooper from '../../../assets/medal-cooper.svg'
import gold from '../../../assets/medal-gold.svg'
import silver from '../../../assets/medal-silver.svg'

export async function Ranking() {
  let ranking = []

  try {
    // Tentando obter o ranking da API
    const response = await getRanking()

    // Verificando se a resposta possui a estrutura esperada
    ranking = response?.ranking || []
    console.log('Ranking:', ranking) // Debug: Verificando o conteúdo da resposta da API
  } catch (error) {
    // Capturando erro de requisição
    console.error('Erro ao carregar o ranking:', error)
    return (
      <p className="text-gray-300">
        Não foi possível carregar o ranking. Tente novamente mais tarde.
      </p>
    )
  }

  // Verificando se a resposta é um array válido
  if (!Array.isArray(ranking)) {
    return (
      <p className="text-gray-300">
        Erro ao carregar ranking ou sem dados disponíveis.
      </p>
    )
  }

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {/* Se não houver ranking, mostrar mensagem */}
        {ranking.length === 0 ? (
          <p className="text-gray-300">Nenhuma indicação registrada</p>
        ) : (
          ranking.map((rank, index) => {
            const rankingPosition = index + 1

            return (
              <div
                key={rank?.id} // Verificando se id está disponível
                className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
              >
                <span className="text-sm text-gray-300 leading-none">
                  <span className="font-semibold">{rankingPosition}&ordm;</span>{' '}
                  | {rank?.name}{' '}
                  {/* Verificando se rank.name está disponível */}
                </span>

                <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                  {rank?.score}{' '}
                  {/* Verificando se rank.score está disponível */}
                </span>

                {/* Exibindo medalhas conforme a posição */}
                {rankingPosition === 1 && (
                  <Image src={gold} alt="" className="absolute top-0 right-8" />
                )}

                {rankingPosition === 2 && (
                  <Image
                    src={silver}
                    alt=""
                    className="absolute top-0 right-8"
                  />
                )}

                {rankingPosition === 3 && (
                  <Image
                    src={cooper}
                    alt=""
                    className="absolute top-0 right-8"
                  />
                )}
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
