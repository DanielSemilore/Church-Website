import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Export an async config so optional plugins can be imported dynamically.
// If the optional image plugins aren't installed, Vite will still start.
export default defineConfig(async () => {
  const plugins = [react(), tailwindcss()]

  // Try to load vite-imagetools (enables import query transforms like ?w=800&format=webp)
  try {
    const mod = await import('vite-imagetools')
    if (mod && typeof mod.imagetools === 'function') {
      plugins.push(mod.imagetools())
    }
  } catch (e) {
    // optional dependency not installed - continue without it
    // eslint-disable-next-line no-console
    console.warn('Optional plugin vite-imagetools not installed. Image import queries will be unavailable.')
  }

  // Try to load vite-plugin-imagemin (build-time image compression)
  try {
    const mod = await import('vite-plugin-imagemin')
    const viteImagemin = mod && (mod.default || mod)
    if (typeof viteImagemin === 'function') {
      plugins.push(
        viteImagemin({
          gifsicle: { optimizationLevel: 7, interlaced: false },
          optipng: { optimizationLevel: 7 },
          mozjpeg: { quality: 75 },
          pngquant: { quality: [0.7, 0.9], speed: 3 },
          svgo: { plugins: [{ name: 'preset-default', params: { overrides: { removeViewBox: false } } }] },
          webp: { quality: 75 },
        })
      )
    }
  } catch (e) {
    // optional dependency not installed - continue without it
    // eslint-disable-next-line no-console
    console.warn('Optional plugin vite-plugin-imagemin not installed. Images will not be compressed at build time.')
  }

  return {
    plugins,
  }
})
