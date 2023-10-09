import {
  FileIcon_default,
  require_db
} from "/build/_shared/chunk-WTKFBA2N.js";
import {
  require_login
} from "/build/_shared/chunk-TAHDWEN4.js";
import "/build/_shared/chunk-6GWU7FZ4.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-KQMT3T6X.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-BOMNIW6E.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_panel.panel._index.tsx
var import_login = __toESM(require_login(), 1);
var import_db = __toESM(require_db(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var import_react2 = __toESM(require_react(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_panel.panel._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_panel.panel._index.tsx"
  );
  import.meta.hot.lastModified = "1696791450900.551";
}
var FileCard = ({
  name,
  type,
  id
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/panel/files/${id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileIcon_default, { type }, void 0, false, {
      fileName: "app/routes/_panel.panel._index.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2 whitespace-normal break-all text-center text-gray-950", children: name }, void 0, false, {
      fileName: "app/routes/_panel.panel._index.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_panel.panel._index.tsx",
    lineNumber: 63,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_panel.panel._index.tsx",
    lineNumber: 62,
    columnNumber: 10
  }, this);
};
_c = FileCard;
function Index() {
  _s();
  const {
    files
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-8 w-full h-full grid grid-cols-6 grid-rows-6 gap-12", children: files.map((file, idx) => file ? /* @__PURE__ */ (0, import_react2.createElement)(FileCard, { ...file, key: file.id }) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
    fileName: "app/routes/_panel.panel._index.tsx",
    lineNumber: 78,
    columnNumber: 77
  }, this)) }, void 0, false, {
    fileName: "app/routes/_panel.panel._index.tsx",
    lineNumber: 77,
    columnNumber: 10
  }, this);
}
_s(Index, "OqeD1x+PgzDkTWRKDjjIqEyHFtk=", false, function() {
  return [useLoaderData];
});
_c2 = Index;
var _c;
var _c2;
$RefreshReg$(_c, "FileCard");
$RefreshReg$(_c2, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_panel.panel._index-4SEWMXFW.js.map
