import { defineConfig } from 'tsup';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

// Self-contained: the primitives + their internals live under ./src.
const srcDir = resolve(dirname(fileURLToPath(import.meta.url)), 'src');

export default defineConfig({
    entry: { index: 'src/index.ts', styles: 'src/styles.css' },
    format: ['esm'],
    dts: { resolve: true },
    splitting: false,
    sourcemap: true,
    clean: true,
    treeshake: true,
    // Consumer-provided libraries — never bundled.
    external: [/^react/, '@floating-ui/react', 'lucide-react', 'recharts', 'framer-motion'],
    esbuildOptions(options) {
        options.alias = { '@': srcDir };
    }
});
