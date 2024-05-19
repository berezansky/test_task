import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    server: {
        port: 8080,
    },
    plugins: [react(), svgr({
        svgrOptions: { exportType: 'named' },
        include: '**/*.svg'
    })],
})
