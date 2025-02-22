import MedalCooper from '@/assets/medal-cooper.svg'
import MedalGold from '@/assets/medal-gold.svg'
import MedalSilver from '@/assets/medal-silver.svg'
import Image from 'next/image'

export default function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de Indicações
      </h2>

      <div className="space-y-4">
        <div className="rounded-xl relative bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | Diego Fernandes
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image src={MedalGold} alt="" className="absolute right-8 top-0" />
        </div>
        <div className="rounded-xl relative bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2º</span> | Diego Fernandes
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image src={MedalSilver} alt="" className="absolute right-8 top-0" />
        </div>
        <div className="rounded-xl relative bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3 º</span> | Diego Fernandes
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            1030
          </span>

          <Image src={MedalCooper} alt="" className="absolute right-8 top-0" />
        </div>
      </div>
    </div>
  )
}
