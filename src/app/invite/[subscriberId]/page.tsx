import { InviteLinkInput } from '@/app/invite/[subscriberId]/invite-link-input'
import { Ranking } from '@/app/invite/[subscriberId]/ranking'
import { Stats } from '@/app/invite/[subscriberId]/stats'
import Logo from '@/assets/logo.svg'
import Image from 'next/image'

interface InvitePageProps {
  params: Promise<{
    subscriberId: string
  }>
}

export default async function InvitePage(props: InvitePageProps) {
  const { subscriberId } = await props.params

  // Define a URL de acordo com o ambiente
  const inviteLink =
    process.env.NODE_ENV === 'production'
      ? `https://nlw-connect-three.vercel.app/invites/${subscriberId}`
      : `http://localhost:3333/invites/${subscriberId}`

  return (
    <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
      <div className="flex flex-col gap-10 w-full max-w-[550px]">
        <Image src={Logo} alt="devstage" width={108.5} height={30} />

        <div className="space-y-2">
          <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">
            Inscrição Confirmada
          </h1>
          <p className="text-gray-300">
            Para entrar no evento, acesse o link enviado para seu e-mail.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
              Indique e Ganhe
            </h2>
            <p className="text-gray-300">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>

          <InviteLinkInput inviteLink={inviteLink} />

          <Stats subscriberId={subscriberId} />
        </div>
      </div>
      <Ranking />
    </div>
  )
}
