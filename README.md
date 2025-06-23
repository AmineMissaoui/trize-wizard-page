# Assignment option C

## Goal
Complete the wizard so an issuer (asset owner tokenizing) can describe an asset, upload docs, and review+submit.

## Requirements
1. Complete the 3‑step tokenization wizard as described in `wizard/page.tsx`.
  1. **Asset** – symbol, name, decimals (0‑18).
  2. **Docs**  – drag‑and‑drop (store files in component state).
  3. **Review** – readonly summary + “Submit” → POST `/api/submit`.
2. Validate fields, show per‑step errors, and POST compiled payload on finish. Use `yup` via react‑hook‑form.
3. Show field‑level errors and disable “Next” until valid.
4. Add one integration or cypress test covering happy path.

### Creative Freedom (Stretch – optional)
Progress save in localStorage, toast notifications, fancy drag‑area—up to you.


## File tree
tokenization‑wizard/
├─ app/
│  └─ wizard/page.tsx              ← implement steps
├─ components/
│  ├─ WizardLayout.tsx
│  └─ steps/
│     ├─ AssetInfo.tsx
│     ├─ Documents.tsx
│     └─ Review.tsx
├─ app/api/submit/route.ts         ← mock POST
├─ jest.config.js
├─ package.json
└─ tsconfig.json

## Usage

To get it running, simply run, from the root folder, using node 20 LTS:

```bash
yarn install
yarn dev
```

