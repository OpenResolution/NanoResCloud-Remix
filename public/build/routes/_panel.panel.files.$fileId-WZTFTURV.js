import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  FileIcon_default,
  require_db
} from "/build/_shared/chunk-WTKFBA2N.js";
import {
  require_login
} from "/build/_shared/chunk-TAHDWEN4.js";
import {
  CrossCircledIcon
} from "/build/_shared/chunk-6GWU7FZ4.js";
import {
  Form,
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

// app/routes/_panel.panel.files.$fileId.tsx
var import_login = __toESM(require_login(), 1);
var import_db = __toESM(require_db(), 1);

// node_modules/pretty-bytes/index.js
var BYTE_UNITS = [
  "B",
  "kB",
  "MB",
  "GB",
  "TB",
  "PB",
  "EB",
  "ZB",
  "YB"
];
var BIBYTE_UNITS = [
  "B",
  "KiB",
  "MiB",
  "GiB",
  "TiB",
  "PiB",
  "EiB",
  "ZiB",
  "YiB"
];
var BIT_UNITS = [
  "b",
  "kbit",
  "Mbit",
  "Gbit",
  "Tbit",
  "Pbit",
  "Ebit",
  "Zbit",
  "Ybit"
];
var BIBIT_UNITS = [
  "b",
  "kibit",
  "Mibit",
  "Gibit",
  "Tibit",
  "Pibit",
  "Eibit",
  "Zibit",
  "Yibit"
];
var toLocaleString = (number, locale, options) => {
  let result = number;
  if (typeof locale === "string" || Array.isArray(locale)) {
    result = number.toLocaleString(locale, options);
  } else if (locale === true || options !== void 0) {
    result = number.toLocaleString(void 0, options);
  }
  return result;
};
function prettyBytes(number, options) {
  if (!Number.isFinite(number)) {
    throw new TypeError(`Expected a finite number, got ${typeof number}: ${number}`);
  }
  options = {
    bits: false,
    binary: false,
    space: true,
    ...options
  };
  const UNITS = options.bits ? options.binary ? BIBIT_UNITS : BIT_UNITS : options.binary ? BIBYTE_UNITS : BYTE_UNITS;
  const separator = options.space ? " " : "";
  if (options.signed && number === 0) {
    return ` 0${separator}${UNITS[0]}`;
  }
  const isNegative = number < 0;
  const prefix = isNegative ? "-" : options.signed ? "+" : "";
  if (isNegative) {
    number = -number;
  }
  let localeOptions;
  if (options.minimumFractionDigits !== void 0) {
    localeOptions = { minimumFractionDigits: options.minimumFractionDigits };
  }
  if (options.maximumFractionDigits !== void 0) {
    localeOptions = { maximumFractionDigits: options.maximumFractionDigits, ...localeOptions };
  }
  if (number < 1) {
    const numberString2 = toLocaleString(number, options.locale, localeOptions);
    return prefix + numberString2 + separator + UNITS[0];
  }
  const exponent = Math.min(Math.floor(options.binary ? Math.log(number) / Math.log(1024) : Math.log10(number) / 3), UNITS.length - 1);
  number /= (options.binary ? 1024 : 1e3) ** exponent;
  if (!localeOptions) {
    number = number.toPrecision(3);
  }
  const numberString = toLocaleString(Number(number), options.locale, localeOptions);
  const unit = UNITS[exponent];
  return prefix + numberString + separator + unit;
}

// node_modules/react-json-view-lite/dist/index.modern.js
var import_react = __toESM(require_react());
var isBoolean = (data) => {
  return typeof data === "boolean" || data instanceof Boolean;
};
var isNumber = (data) => {
  return typeof data === "number" || data instanceof Number;
};
var isBigInt = (data) => {
  return typeof data === "bigint" || data instanceof BigInt;
};
var isDate = (data) => {
  return !!data && data instanceof Date;
};
var isString = (data) => {
  return typeof data === "string" || data instanceof String;
};
var isArray = (data) => {
  return Array.isArray(data);
};
var isObject = (data) => {
  return data instanceof Object && data !== null;
};
function useBool(initialValueCreator) {
  const [value, setValue] = (0, import_react.useState)(initialValueCreator());
  const tooggle = () => setValue((currentValue) => !currentValue);
  return [value, tooggle, setValue];
}
function ExpandableObject(_ref) {
  let {
    field,
    value,
    data,
    lastElement,
    openBracket,
    closeBracket,
    level,
    style,
    shouldExpandNode
  } = _ref;
  const shouldExpandNodeCalledRef = (0, import_react.useRef)(false);
  const [expanded, toggleExpanded, setExpanded] = useBool(() => shouldExpandNode(level, value, field));
  (0, import_react.useEffect)(() => {
    if (!shouldExpandNodeCalledRef.current) {
      shouldExpandNodeCalledRef.current = true;
    } else {
      setExpanded(shouldExpandNode(level, value, field));
    }
  }, [shouldExpandNode]);
  const expanderIconStyle = expanded ? style.collapseIcon : style.expandIcon;
  const childLevel = level + 1;
  const lastIndex = data.length - 1;
  const onKeyDown = (e) => {
    if (e.key === " ") {
      toggleExpanded();
    }
  };
  return /* @__PURE__ */ (0, import_react.createElement)("div", {
    className: style.basicChildStyle,
    role: "list"
  }, /* @__PURE__ */ (0, import_react.createElement)("span", {
    className: expanderIconStyle,
    role: "button",
    onClick: toggleExpanded,
    onKeyDown,
    tabIndex: 0
  }), field && /* @__PURE__ */ (0, import_react.createElement)("span", {
    className: style.label
  }, field, ":"), /* @__PURE__ */ (0, import_react.createElement)("span", {
    className: style.punctuation
  }, openBracket), expanded ? /* @__PURE__ */ (0, import_react.createElement)("div", null, data.map((dataElement, index) => /* @__PURE__ */ (0, import_react.createElement)(DataRender, {
    key: dataElement[0] || index,
    field: dataElement[0],
    value: dataElement[1],
    style,
    lastElement: index === lastIndex,
    level: childLevel,
    shouldExpandNode
  }))) : /* @__PURE__ */ (0, import_react.createElement)("span", {
    className: style.collapsedContent,
    role: "button",
    tabIndex: 0,
    onClick: toggleExpanded,
    onKeyDown
  }), /* @__PURE__ */ (0, import_react.createElement)("span", {
    className: style.punctuation
  }, closeBracket), !lastElement && /* @__PURE__ */ (0, import_react.createElement)("span", {
    className: style.punctuation
  }, ","));
}
function JsonObject(_ref2) {
  let {
    field,
    value,
    style,
    lastElement,
    shouldExpandNode,
    level
  } = _ref2;
  return ExpandableObject({
    field,
    value,
    lastElement: lastElement || false,
    level,
    openBracket: "{",
    closeBracket: "}",
    style,
    shouldExpandNode,
    data: Object.keys(value).map((key) => [key, value[key]])
  });
}
function JsonArray(_ref3) {
  let {
    field,
    value,
    style,
    lastElement,
    level,
    shouldExpandNode
  } = _ref3;
  return ExpandableObject({
    field,
    value,
    lastElement: lastElement || false,
    level,
    openBracket: "[",
    closeBracket: "]",
    style,
    shouldExpandNode,
    data: value.map((element) => [void 0, element])
  });
}
function JsonPrimitiveValue(_ref4) {
  let {
    field,
    value,
    style,
    lastElement
  } = _ref4;
  let stringValue = value;
  let valueStyle = style.otherValue;
  if (value === null) {
    stringValue = "null";
    valueStyle = style.nullValue;
  } else if (value === void 0) {
    stringValue = "undefined";
    valueStyle = style.undefinedValue;
  } else if (isString(value)) {
    stringValue = `"${value}"`;
    valueStyle = style.stringValue;
  } else if (isBoolean(value)) {
    stringValue = value ? "true" : "false";
    valueStyle = style.booleanValue;
  } else if (isNumber(value)) {
    stringValue = value.toString();
    valueStyle = style.numberValue;
  } else if (isBigInt(value)) {
    stringValue = `${value.toString()}n`;
    valueStyle = style.numberValue;
  } else if (isDate(value)) {
    stringValue = value.toISOString();
  } else {
    stringValue = value.toString();
  }
  if (field === "") {
    field = '""';
  }
  return /* @__PURE__ */ (0, import_react.createElement)("div", {
    className: style.basicChildStyle,
    role: "listitem"
  }, field && /* @__PURE__ */ (0, import_react.createElement)("span", {
    className: style.label
  }, field, ":"), /* @__PURE__ */ (0, import_react.createElement)("span", {
    className: valueStyle
  }, stringValue), !lastElement && /* @__PURE__ */ (0, import_react.createElement)("span", {
    className: style.punctuation
  }, ","));
}
function DataRender(props) {
  const value = props.value;
  if (isArray(value)) {
    return /* @__PURE__ */ (0, import_react.createElement)(JsonArray, Object.assign({}, props));
  }
  if (isObject(value) && !isDate(value)) {
    return /* @__PURE__ */ (0, import_react.createElement)(JsonObject, Object.assign({}, props));
  }
  return /* @__PURE__ */ (0, import_react.createElement)(JsonPrimitiveValue, Object.assign({}, props));
}
var styles = { "container-base": "_GzYRV", "punctuation-base": "_3eOF8", "pointer": "_1MFti", "expander-base": "_f10Tu _1MFti", "expand-icon": "_1UmXx", "collapse-icon": "_1LId0", "collapsed-content-base": "_1pNG9 _1MFti", "container-light": "_2IvMF _GzYRV", "basic-element-style": "_2bkNM", "label-light": "_1MGIk", "punctuation-light": "_3uHL6 _3eOF8", "value-null-light": "_2T6PJ", "value-undefined-light": "_1Gho6", "value-string-light": "_vGjyY", "value-number-light": "_1bQdo", "value-boolean-light": "_3zQKs", "value-other-light": "_1xvuR", "collapse-icon-light": "_oLqym _f10Tu _1MFti _1LId0", "expand-icon-light": "_2AXVT _f10Tu _1MFti _1UmXx", "collapsed-content-light": "_2KJWg _1pNG9 _1MFti", "container-dark": "_11RoI _GzYRV", "expand-icon-dark": "_17H2C _f10Tu _1MFti _1UmXx", "collapse-icon-dark": "_3QHg2 _f10Tu _1MFti _1LId0", "collapsed-content-dark": "_3fDAz _1pNG9 _1MFti", "label-dark": "_2bSDX", "punctuation-dark": "_gsbQL _3eOF8", "value-null-dark": "_LaAZe", "value-undefined-dark": "_GTKgm", "value-string-dark": "_Chy1W", "value-number-dark": "_2bveF", "value-boolean-dark": "_2vRm-", "value-other-dark": "_1prJR" };
var defaultStyles = {
  container: styles["container-light"],
  basicChildStyle: styles["basic-element-style"],
  label: styles["label-light"],
  nullValue: styles["value-null-light"],
  undefinedValue: styles["value-undefined-light"],
  stringValue: styles["value-string-light"],
  booleanValue: styles["value-boolean-light"],
  numberValue: styles["value-number-light"],
  otherValue: styles["value-other-light"],
  punctuation: styles["punctuation-light"],
  collapseIcon: styles["collapse-icon-light"],
  expandIcon: styles["expand-icon-light"],
  collapsedContent: styles["collapsed-content-light"]
};
var darkStyles = {
  container: styles["container-dark"],
  basicChildStyle: styles["basic-element-style"],
  label: styles["label-dark"],
  nullValue: styles["value-null-dark"],
  undefinedValue: styles["value-undefined-dark"],
  stringValue: styles["value-string-dark"],
  booleanValue: styles["value-boolean-dark"],
  numberValue: styles["value-number-dark"],
  otherValue: styles["value-other-dark"],
  punctuation: styles["punctuation-dark"],
  collapseIcon: styles["collapse-icon-dark"],
  expandIcon: styles["expand-icon-dark"],
  collapsedContent: styles["collapsed-content-dark"]
};
var allExpanded = () => true;
var JsonView = (_ref) => {
  let {
    data,
    style = defaultStyles,
    shouldExpandNode = allExpanded
  } = _ref;
  return /* @__PURE__ */ (0, import_react.createElement)("div", {
    className: style.container
  }, /* @__PURE__ */ (0, import_react.createElement)(DataRender, {
    value: data,
    style,
    lastElement: true,
    level: 0,
    shouldExpandNode
  }));
};

// app/routes/_panel.panel.files.$fileId.tsx
var import_node = __toESM(require_node(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_panel.panel.files.$fileId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
var _s3 = $RefreshSig$();
var _s4 = $RefreshSig$();
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_panel.panel.files.$fileId.tsx"
  );
}
var NumberInput = ({
  name,
  defaultValue
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-row justify-between items-center m-4", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "m-auto text-base", children: name }, void 0, false, {
    fileName: "app/routes/_panel.panel.files.$fileId.tsx",
    lineNumber: 92,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { className: "border-2 border-gray-500 p-1", name, type: "text", defaultValue }, void 0, false, {
    fileName: "app/routes/_panel.panel.files.$fileId.tsx",
    lineNumber: 94,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_panel.panel.files.$fileId.tsx",
    lineNumber: 93,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/routes/_panel.panel.files.$fileId.tsx",
  lineNumber: 91,
  columnNumber: 7
}, this);
_c = NumberInput;
function MatFile() {
  _s();
  const {
    file
  } = useLoaderData();
  const timeFormat = (timeStamp) => {
    return Intl.DateTimeFormat("en-US", {
      dateStyle: "long",
      timeStyle: "medium"
    }).format(new Date(timeStamp));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-4 py-10 w-full h-full flex justify-around items-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-3/4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-10 w-1/2 m-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileIcon_default, { type: file.type }, void 0, false, {
      fileName: "app/routes/_panel.panel.files.$fileId.tsx",
      lineNumber: 113,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_panel.panel.files.$fileId.tsx",
      lineNumber: 112,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col flex-wrap justify-around items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-4xl text-gray-950", children: file.name }, void 0, false, {
        fileName: "app/routes/_panel.panel.files.$fileId.tsx",
        lineNumber: 116,
        columnNumber: 11
      }, this),
      file.size && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xl text-gray-400", children: prettyBytes(file.size) }, void 0, false, {
        fileName: "app/routes/_panel.panel.files.$fileId.tsx",
        lineNumber: 117,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xl text-gray-400", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-950", children: "Format: " }, void 0, false, {
          fileName: "app/routes/_panel.panel.files.$fileId.tsx",
          lineNumber: 122,
          columnNumber: 13
        }, this),
        file.type
      ] }, void 0, true, {
        fileName: "app/routes/_panel.panel.files.$fileId.tsx",
        lineNumber: 121,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xl text-gray-400", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-950", children: "Created: " }, void 0, false, {
          fileName: "app/routes/_panel.panel.files.$fileId.tsx",
          lineNumber: 126,
          columnNumber: 13
        }, this),
        timeFormat(file.createdAt)
      ] }, void 0, true, {
        fileName: "app/routes/_panel.panel.files.$fileId.tsx",
        lineNumber: 125,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-xl text-gray-400", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-950", children: "Last Modified: " }, void 0, false, {
          fileName: "app/routes/_panel.panel.files.$fileId.tsx",
          lineNumber: 130,
          columnNumber: 13
        }, this),
        timeFormat(file.updatedAt)
      ] }, void 0, true, {
        fileName: "app/routes/_panel.panel.files.$fileId.tsx",
        lineNumber: 129,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_panel.panel.files.$fileId.tsx",
      lineNumber: 115,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_panel.panel.files.$fileId.tsx",
    lineNumber: 111,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_panel.panel.files.$fileId.tsx",
    lineNumber: 110,
    columnNumber: 10
  }, this);
}
_s(MatFile, "50PykxMWn1fAhYOCPEXlxSDhwgo=", false, function() {
  return [useLoaderData];
});
_c2 = MatFile;
var FileDescription = ({
  file
}) => {
  const timeFormat = (timeStamp) => {
    return Intl.DateTimeFormat("en-US", {
      dateStyle: "short",
      timeStyle: "short"
    }).format(new Date(timeStamp));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 m-auto w-3/4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileIcon_default, { type: file.type ? file.type : "mat" }, void 0, false, {
      fileName: "app/routes/_panel.panel.files.$fileId.tsx",
      lineNumber: 152,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_panel.panel.files.$fileId.tsx",
      lineNumber: 151,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 flex flex-col justify-center items-start", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-lg text-gray-950", children: file.name }, void 0, false, {
        fileName: "app/routes/_panel.panel.files.$fileId.tsx",
        lineNumber: 155,
        columnNumber: 9
      }, this),
      file.size && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-base text-gray-400", children: prettyBytes(file.size) }, void 0, false, {
        fileName: "app/routes/_panel.panel.files.$fileId.tsx",
        lineNumber: 156,
        columnNumber: 23
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-base text-gray-400", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-950", children: "Format: " }, void 0, false, {
          fileName: "app/routes/_panel.panel.files.$fileId.tsx",
          lineNumber: 161,
          columnNumber: 11
        }, this),
        file.type
      ] }, void 0, true, {
        fileName: "app/routes/_panel.panel.files.$fileId.tsx",
        lineNumber: 160,
        columnNumber: 9
      }, this),
      file.createdAt && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-base text-gray-400", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-950", children: "Created: " }, void 0, false, {
          fileName: "app/routes/_panel.panel.files.$fileId.tsx",
          lineNumber: 165,
          columnNumber: 13
        }, this),
        timeFormat(file.createdAt)
      ] }, void 0, true, {
        fileName: "app/routes/_panel.panel.files.$fileId.tsx",
        lineNumber: 164,
        columnNumber: 28
      }, this),
      file.updatedAt && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-base text-gray-400", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-950", children: "Last Modified: " }, void 0, false, {
          fileName: "app/routes/_panel.panel.files.$fileId.tsx",
          lineNumber: 170,
          columnNumber: 13
        }, this),
        timeFormat(file.updatedAt)
      ] }, void 0, true, {
        fileName: "app/routes/_panel.panel.files.$fileId.tsx",
        lineNumber: 169,
        columnNumber: 28
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_panel.panel.files.$fileId.tsx",
      lineNumber: 154,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_panel.panel.files.$fileId.tsx",
    lineNumber: 150,
    columnNumber: 10
  }, this);
};
_c3 = FileDescription;
function TaskJSONFile() {
  _s2();
  const {
    file,
    relatedFiles
  } = useLoaderData();
  if (relatedFiles.sourceFile === null || relatedFiles.configFile === null) {
    throw new Error("Invalid task.json file");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 w-full h-min", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/panel/files/${relatedFiles.sourceFile.id}`, className: "col-span-1 border-gray-450 m-10 text-xl flex flex-col justify-start items-center border-2 border-white hover:border-2 hover:border-gray-500 hover:border-dashed", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-2xl text-gray-950", children: "Source File" }, void 0, false, {
          fileName: "app/routes/_panel.panel.files.$fileId.tsx",
          lineNumber: 191,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileDescription, { file: relatedFiles.sourceFile }, void 0, false, {
          fileName: "app/routes/_panel.panel.files.$fileId.tsx",
          lineNumber: 192,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_panel.panel.files.$fileId.tsx",
        lineNumber: 189,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/panel/files/${relatedFiles.configFile.id}`, className: "col-span-1 border-gray-450 m-10 text-xl flex flex-col justify-start items-center border-2 border-white hover:border-2 hover:border-gray-500 hover:border-dashed", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-2xl text-gray-950", children: "Config File" }, void 0, false, {
          fileName: "app/routes/_panel.panel.files.$fileId.tsx",
          lineNumber: 197,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileDescription, { file: relatedFiles.configFile }, void 0, false, {
          fileName: "app/routes/_panel.panel.files.$fileId.tsx",
          lineNumber: 198,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_panel.panel.files.$fileId.tsx",
        lineNumber: 195,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_panel.panel.files.$fileId.tsx",
      lineNumber: 188,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", action: "/createTask", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col w-full h-full p-4 text-gray-950", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "border-2 rounded-xl px-2 py-4", children: "Submit" }, void 0, false, {
      fileName: "app/routes/_panel.panel.files.$fileId.tsx",
      lineNumber: 204,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/_panel.panel.files.$fileId.tsx",
      lineNumber: 203,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_panel.panel.files.$fileId.tsx",
      lineNumber: 202,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_panel.panel.files.$fileId.tsx",
      lineNumber: 201,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_panel.panel.files.$fileId.tsx",
    lineNumber: 187,
    columnNumber: 10
  }, this);
}
_s2(TaskJSONFile, "B5GA6AZAW5WrtFOr89P6Tovrmoo=", false, function() {
  return [useLoaderData];
});
_c4 = TaskJSONFile;
var isConfigJSONFile = (fileName) => {
  const parts = fileName.split(".");
  return parts.length >= 3 && parts[parts.length - 1] === "json" && parts[parts.length - 2] === "config";
};
var isTaskJSONFile = (fileName) => {
  const parts = fileName.split(".");
  return parts.length >= 3 && parts[parts.length - 1] === "json" && parts[parts.length - 2] === "task";
};
function JSONFile() {
  _s3();
  const {
    file
  } = useLoaderData();
  const fileName = file.name;
  if (isConfigJSONFile(fileName)) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ConfigJSONFile, {}, void 0, false, {
      fileName: "app/routes/_panel.panel.files.$fileId.tsx",
      lineNumber: 231,
      columnNumber: 12
    }, this);
  } else if (isTaskJSONFile(fileName)) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TaskJSONFile, {}, void 0, false, {
      fileName: "app/routes/_panel.panel.files.$fileId.tsx",
      lineNumber: 233,
      columnNumber: 12
    }, this);
  } else {
    throw new Error("Unsupported json file.");
  }
}
_s3(JSONFile, "50PykxMWn1fAhYOCPEXlxSDhwgo=", false, function() {
  return [useLoaderData];
});
_c5 = JSONFile;
function ConfigJSONFile() {
  _s4();
  const {
    file,
    fileId
  } = useLoaderData();
  const timeFormat = (timeStamp) => {
    return Intl.DateTimeFormat("en-US", {
      dateStyle: "short",
      timeStyle: "short"
    }).format(new Date(timeStamp));
  };
  const fileJSON = file.content ? JSON.parse(file.content) : {};
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-9 h-full w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-6 border-gray-450 border-r-2 p-4 text-xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(JsonView, { data: fileJSON, shouldExpandNode: allExpanded, style: defaultStyles }, void 0, false, {
        fileName: "app/routes/_panel.panel.files.$fileId.tsx",
        lineNumber: 257,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", action: "/config", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col w-full h-full p-4 text-gray-950", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "fileId", defaultValue: fileId ? fileId : -1 }, void 0, false, {
          fileName: "app/routes/_panel.panel.files.$fileId.tsx",
          lineNumber: 261,
          columnNumber: 13
        }, this),
        Object.entries(fileJSON).map(([key, value], idx) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NumberInput, { name: key, defaultValue: value }, key, false, {
            fileName: "app/routes/_panel.panel.files.$fileId.tsx",
            lineNumber: 264,
            columnNumber: 20
          }, this);
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "border-2 rounded-xl px-2 py-4", children: "Submit" }, void 0, false, {
          fileName: "app/routes/_panel.panel.files.$fileId.tsx",
          lineNumber: 266,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_panel.panel.files.$fileId.tsx",
        lineNumber: 260,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_panel.panel.files.$fileId.tsx",
        lineNumber: 259,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_panel.panel.files.$fileId.tsx",
      lineNumber: 256,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-span-3 col-end-10", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 m-auto w-3/4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileIcon_default, { type: file.type }, void 0, false, {
        fileName: "app/routes/_panel.panel.files.$fileId.tsx",
        lineNumber: 274,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_panel.panel.files.$fileId.tsx",
        lineNumber: 273,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 flex flex-col justify-center items-start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-lg text-gray-950", children: file.name }, void 0, false, {
          fileName: "app/routes/_panel.panel.files.$fileId.tsx",
          lineNumber: 277,
          columnNumber: 11
        }, this),
        file.size && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-base text-gray-400", children: prettyBytes(file.size) }, void 0, false, {
          fileName: "app/routes/_panel.panel.files.$fileId.tsx",
          lineNumber: 278,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-base text-gray-400", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-950", children: "Format: " }, void 0, false, {
            fileName: "app/routes/_panel.panel.files.$fileId.tsx",
            lineNumber: 283,
            columnNumber: 13
          }, this),
          file.type
        ] }, void 0, true, {
          fileName: "app/routes/_panel.panel.files.$fileId.tsx",
          lineNumber: 282,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-base text-gray-400", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-950", children: "Created: " }, void 0, false, {
            fileName: "app/routes/_panel.panel.files.$fileId.tsx",
            lineNumber: 287,
            columnNumber: 13
          }, this),
          timeFormat(file.createdAt)
        ] }, void 0, true, {
          fileName: "app/routes/_panel.panel.files.$fileId.tsx",
          lineNumber: 286,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-base text-gray-400", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-950", children: "Last Modified: " }, void 0, false, {
            fileName: "app/routes/_panel.panel.files.$fileId.tsx",
            lineNumber: 291,
            columnNumber: 13
          }, this),
          timeFormat(file.updatedAt)
        ] }, void 0, true, {
          fileName: "app/routes/_panel.panel.files.$fileId.tsx",
          lineNumber: 290,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_panel.panel.files.$fileId.tsx",
        lineNumber: 276,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_panel.panel.files.$fileId.tsx",
      lineNumber: 272,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_panel.panel.files.$fileId.tsx",
    lineNumber: 255,
    columnNumber: 10
  }, this);
}
_s4(ConfigJSONFile, "nRAsMvPX6pWMLNvdETEf5ajrMpA=", false, function() {
  return [useLoaderData];
});
_c6 = ConfigJSONFile;
function File() {
  _s5();
  const {
    file
  } = useLoaderData();
  switch (file.type) {
    case "mat":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MatFile, {}, void 0, false, {
        fileName: "app/routes/_panel.panel.files.$fileId.tsx",
        lineNumber: 309,
        columnNumber: 14
      }, this);
    case "json":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(JSONFile, {}, void 0, false, {
        fileName: "app/routes/_panel.panel.files.$fileId.tsx",
        lineNumber: 311,
        columnNumber: 14
      }, this);
    default:
      throw new Error("Unsupported file.");
  }
}
_s5(File, "50PykxMWn1fAhYOCPEXlxSDhwgo=", false, function() {
  return [useLoaderData];
});
_c7 = File;
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-row justify-around items-center w-full h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-4xl text-gray-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-around m-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CrossCircledIcon, { className: "h-[25vh] w-auto" }, void 0, false, {
      fileName: "app/routes/_panel.panel.files.$fileId.tsx",
      lineNumber: 324,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Something went wrong." }, void 0, false, {
      fileName: "app/routes/_panel.panel.files.$fileId.tsx",
      lineNumber: 325,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_panel.panel.files.$fileId.tsx",
    lineNumber: 323,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/_panel.panel.files.$fileId.tsx",
    lineNumber: 322,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_panel.panel.files.$fileId.tsx",
    lineNumber: 321,
    columnNumber: 10
  }, this);
}
_c8 = ErrorBoundary;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
$RefreshReg$(_c, "NumberInput");
$RefreshReg$(_c2, "MatFile");
$RefreshReg$(_c3, "FileDescription");
$RefreshReg$(_c4, "TaskJSONFile");
$RefreshReg$(_c5, "JSONFile");
$RefreshReg$(_c6, "ConfigJSONFile");
$RefreshReg$(_c7, "File");
$RefreshReg$(_c8, "ErrorBoundary");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ErrorBoundary,
  File as default
};
//# sourceMappingURL=/build/routes/_panel.panel.files.$fileId-WZTFTURV.js.map
