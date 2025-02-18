import Image from 'next/image'

import cooper from '../../assets/medal-cooper.svg'
import gold from '../../assets/medal-gold.svg'
import silver from '../../assets/medal-silver.svg'

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-3">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        <div className="relative rounded-xl bg-gray-700 boder boder-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1º</span> | Rodrigo Brandão
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            2025
          </span>

          <Image
            src={gold}
            alt="Medalha de Ouro"
            className="absolute right-8 top-0"
          />
        </div>

        <div className="relative rounded-xl bg-gray-700 boder boder-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2º</span> | Rodrigo Brandão
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            2025
          </span>

          <Image
            src={silver}
            alt="Medalha de Ouro"
            className="absolute right-8 top-0"
          />
        </div>

        <div className="relative rounded-xl bg-gray-700 boder boder-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3º</span> | Rodrigo Brandão
          </span>

          <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
            2025
          </span>

          <Image
            src={cooper}
            alt="Medalha de Ouro"
            className="absolute right-8 top-0"
          />
        </div>
      </div>
    </div>
  )
}
