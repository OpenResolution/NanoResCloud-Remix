import {
  FileIcon
} from "/build/_shared/chunk-6GWU7FZ4.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-BOMNIW6E.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:./db.server
var require_db = __commonJS({
  "empty-module:./db.server"(exports, module) {
    module.exports = {};
  }
});

// app/components/FileIcon.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/FileIcon.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/FileIcon.tsx"
  );
  import.meta.hot.lastModified = "1696719304683.1353";
}
var FileIcon2 = ({
  type
}) => {
  switch (type) {
    case "mat":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileIcon, { className: "w-full bg-gray-200 h-auto text-gray-500 flex-initial rounded-xl" }, void 0, false, {
        fileName: "app/components/FileIcon.tsx",
        lineNumber: 27,
        columnNumber: 14
      }, this);
    case "json":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileIcon, { className: "w-full bg-gray-200 h-auto text-gray-500 flex-initial rounded-xl" }, void 0, false, {
        fileName: "app/components/FileIcon.tsx",
        lineNumber: 29,
        columnNumber: 14
      }, this);
  }
};
_c = FileIcon2;
var FileIcon_default = FileIcon2;
var _c;
$RefreshReg$(_c, "FileIcon");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  require_db,
  FileIcon_default
};
//# sourceMappingURL=/build/_shared/chunk-WTKFBA2N.js.map
