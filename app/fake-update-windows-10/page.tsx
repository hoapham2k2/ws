import Home from '@/app/screens/ColorScreen';
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const screen = { name: "fake update windows 10", path: "/fake-update-windows-10", color: "#0078D7", icon: null };

  return {
    title: `Color: ${screen.name}`,

    icons: screen.color
      ? [{
        url: `data:image/svg+xml,
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
          <rect x='20' y='20' width='100' height='70' fill='${encodeURIComponent(screen.color)}'/>
        </svg>` }]
      : screen.icon
        ? [{ url: screen.icon }]
        : undefined,
  }
}

export default function Page() {
  return (
    <div>
      <Home />
    </div>
  )
}
