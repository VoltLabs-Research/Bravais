# bravais

The VOLT design-system primitives — the shared React visual language used across VoltLabs surfaces (VOLT, Console, Registry).

## Install

```bash
npm i bravais
```

Peer dependencies (provided by the consuming app): `react`, `react-dom`, `react-router-dom`, `@floating-ui/react`, `lucide-react`, `recharts`, `framer-motion`.

## Usage

```tsx
import { Stack, Row, Text, Heading, Button, TextInput, Card } from 'bravais';
// Once, at your app root:
import 'bravais/styles.css';      // design tokens + utility classes (REQUIRED)
import 'bravais/components.css';   // per-component styles (REQUIRED)

export const Example = () => (
    <Card>
        <Stack gap='1'>
            <Heading level={2}>Title</Heading>
            <Row gap='05'>
                <TextInput placeholder='Name' aria-label='Name' />
                <Button intent='brand'>Save</Button>
            </Row>
        </Stack>
    </Card>
);
```

Layout/typography primitives (`Box`/`Row`/`Stack`/`Grid`/`Text`/`Heading`) map style props to the utility classes shipped in `styles.css`, so that stylesheet is required.

## Build

```bash
npm run build   # tsup -> dist/ (ESM + d.ts + CSS)
```

## Status & follow-ups (0.1.0)

- **Self-contained:** the primitives, their internal helpers (cn, compose-refs, hooks, FloatingRootContext, types) and the token/utility stylesheets live under `src/`; the build has no dependency on VOLT's source.
- VOLT still ships its own copy of these primitives under `client/src`. **Next step:** point VOLT (and Console/Registry) at this package and delete the in-app copy, so there's a single source of truth.
- App-level wrappers (`AsyncMenuItemWrapper`, `ContextMenuPopover`) are intentionally **not exported** — they depend on the host app's error/toast system. Compose `Popover` + `PopoverMenu` with your own async/error handling.
- Some primitives (`Card`, `Toast`, `Meter`, `ProgressBar`, `Menu`, `Checkbox`, `Radio`) are not yet exercised by VOLT itself; treat as provisional until adopted/visually verified.
