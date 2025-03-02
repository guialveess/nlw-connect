import Logo from '@/assets/logo.svg'
import { Radio } from 'lucide-react'
import Image from 'next/image'
import SubscriptionForm from './subscription-form'

export default function Home() {
  return (
    <div className="min-h-dvh flex justify-center flex-col gap-16">
      <div className="flex flex-col gap-8 items-center md:items-start">
        <Image src={Logo} alt="devstage" width={108.5} height={30} />

        <h1 className="text-4xl text-center font-heading flex flex-col gap-2 font-medium md:text-7xl md:text-left">
          <span className="text-blue">CodeCraft</span>
          Submit 2024
        </h1>
      </div>
      <div className="flex gap-5 items-stretch flex-col md:flex-row ">
        <div className="flex-1 bg-gray-700 border-gray-600 rounded-2xl p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-heading font-semibold text-gray-200 text-xl">
              Sobre o Evento
            </h2>
            <span className="text-purple font-semibold text-sm flex items-center gap-2">
              <Radio className="size-5" />
              Radio AO VIVO
            </span>
          </div>
          <p className="text-gray-300 text-xs leading-relaxed md:text-base">
            Um evento feito por e para pessoas desenvolvedoras apaixonadas por
            criar soluções inovadoras e compartilhar conhecimento. Vamos
            mergulhar nas tendências mais recentes em desenvolvimento de
            software, arquitetura de sistemas e tecnologias emergentes, com
            palestras, workshops e hackathons.
            <br />
            <br />
            Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito
          </p>
        </div>

        <SubscriptionForm />
      </div>
    </div>
  )
}
