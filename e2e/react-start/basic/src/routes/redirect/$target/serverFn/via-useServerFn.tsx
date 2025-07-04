import { RedirectOnClick } from '~/components/RedirectOnClick'

export const Route = createFileRoute({
  component: () => {
    const { target } = Route.useParams()
    const { reloadDocument, externalHost } = Route.useSearch()
    return (
      <RedirectOnClick
        target={target}
        reloadDocument={reloadDocument}
        externalHost={externalHost}
      />
    )
  },
})
