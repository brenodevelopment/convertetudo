import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Converte Tudo',
    short_name: 'Converte Tudo',
    description: 'Conversor de medidas e tamanhos',
    start_url: '/',
    display: 'standalone',
    background_color: '#f4f0ea',
    theme_color: '#1a2744',
    lang: 'pt-BR',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
