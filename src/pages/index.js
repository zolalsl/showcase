import React from "react"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <div>
      {/* TODO: Move to SEO component */}
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
        meta={[
          {
            name: 'robots',
            content: 'noindex,nofollow',
          },
        ]}
      />

      {'Hello world!'}
    </div>
  )
}
