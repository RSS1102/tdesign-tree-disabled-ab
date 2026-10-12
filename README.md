# TDesign React Tree: disabled children A/B comparison

Three value modes (`all`, `parentFirst`, `onlyLeaf`) with the same controlled React Tree, data and CSS. Use the buttons to click P, A or B in all six trees, or reset.

## Frozen source provenance

- React component: Tencent/tdesign-react at `d31df33c` (Tree component unchanged from `f6a7f64c`).
- A / before: Tencent/tdesign-common at `f307a332775af54e3797b4b9c80d48ebcda8e5bb`.
- B / after: Tree fix at `d4f2e934bc5ff97e4198cc9ddeadbbc4b75010a8`.
- Common PR: https://github.com/Tencent/tdesign-common/pull/2732

`src/tree-before.js` and `src/tree-after.js` are source bundles of the actual components and TreeStore, not mocked callbacks or handwritten behavior. React, icons, lodash-es and react-transition-group are shared external dependencies. CSS is compiled from the same TDesign styles for both versions. No repository checkout or private dependency is required at runtime.

## Expected results

P has enabled children A/B and disabled, unchecked D. Click P:

| Mode | Before: parent half-selected | After: parent fully selected |
|---|---|---|
| all | `["A","B"]` | `["P","A","B"]` |
| parentFirst | `["A","B"]` | `["P"]` |
| onlyLeaf | `["A","B"]` | `["A","B"]` |

Click P again to uncheck. Click A then B to reproduce the same full-selection difference. D remains disabled and unchecked throughout.

The component is kept controlled: each real `onChange` result is immediately fed back as `value`, so the comparison also exercises serialization and value round-tripping.

Run locally with `npm install && npm run dev`.

TDesign source is distributed under the MIT license (see LICENSE).
