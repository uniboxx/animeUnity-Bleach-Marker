import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        name: 'Bleach Marker',
        namespace: 'https://github.com/uniboxx/animeUnity-Bleach-Marker',
        description: 'Mark mixed and filler episodes',
        version: '1.0.0',
        icon: 'https://www.google.com/s2/favicons?sz=64&domain=animeunity.so',
        author: 'uniboxx',
        license: 'MIT',
        homepage: 'https://github.com/uniboxx/animeUnity-Bleach-Marker',
        match: ['https://www.animeunity.so/anime/*'],
        downloadURL:
          'https://github.com/uniboxx/animeUnity-Bleach-Marker/raw/main/dist/animeunity-bleach-marker.user.js',
      },
      server: { mountGmApi: true },
      build: {
        metaFileName: false,
      },
    }),
  ],
  build: {
    outDir: 'dist',
    minify: false,
  },
});
