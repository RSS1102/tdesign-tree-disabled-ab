# TDesign React / Vue Next Tree: disabled children A/B comparison

Switch between React (`tree-v1`) and Vue Next (`tree`). Each framework compares three value modes (`all`, `parentFirst`, `onlyLeaf`) using real controlled Tree components, the same data and CSS. Use the buttons to click P, A or B in all six trees, or reset. Vue Next is shown by default.

## Frozen source provenance

- React component: Tencent/tdesign-react at `d31df33c` (Tree component unchanged from `f6a7f64c`).
- A / before: Tencent/tdesign-common at `f307a332775af54e3797b4b9c80d48ebcda8e5bb`.
- B / after: Tree fix at `d4f2e934bc5ff97e4198cc9ddeadbbc4b75010a8`.
- Vue Next component: Tencent/tdesign-vue-next at `9005d97748a73eb02b5667e5f25a5ad3f3c1a65c`.
- Vue Next / before: common `tree` at `f307a332775af54e3797b4b9c80d48ebcda8e5bb`.
- Vue Next / after: common `tree` at `2d5d75f7373854b8590f9e1ef2e5fe8467350f9c`.
- Common PR: https://github.com/Tencent/tdesign-common/pull/2732

`src/tree-before.js` and `src/tree-after.js` are source bundles of the actual components and TreeStore, not mocked callbacks or handwritten behavior. React, icons, lodash-es and react-transition-group are shared external dependencies. CSS is compiled from the same TDesign styles for both versions. `src/vue-tree-before.js` and `src/vue-tree-after.js` bundle the actual Vue Next Tree component (including its real checkbox and controlled-value hooks), with only its common tree model differing. Vue and Vue icons are pinned dependencies. No repository checkout or private dependency is required at runtime.

## Expected results

P has enabled children A/B and disabled, unchecked D. Click P:

| Mode | Before: parent half-selected | After: parent fully selected |
|---|---|---|
| all | `["A","B"]` | `["P","A","B"]` |
| parentFirst | `["A","B"]` | `["P"]` |
| onlyLeaf | `["A","B"]` | `["A","B"]` |

Click P again to uncheck. Click A then B to reproduce the same full-selection difference. D remains disabled and unchecked throughout.

The component is kept controlled: each real `onChange` result is immediately fed back as `value`, so the comparison also exercises serialization and value round-tripping.

Run locally with `npm ci && npm run dev`. Run the 11 real Vue controlled-component regression tests with `npm test` (jsdom).

TDesign source is distributed under the MIT license (see LICENSE).
