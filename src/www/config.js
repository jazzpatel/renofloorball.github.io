System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "traceur",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "bootstrap": "github:twbs/bootstrap@3.3.7",
    "bootstrap-material-design": "npm:bootstrap-material-design@0.5.10",
    "css": "github:systemjs/plugin-css@0.1.35",
    "jquery": "npm:jquery@3.2.1",
    "json": "github:systemjs/plugin-json@0.3.0",
    "kendo-ui": "github:kendo-labs/bower-kendo-ui@2017.1.411",
    "lightbox": "npm:lightbox@0.5.0",
    "lodash": "npm:lodash@4.17.4",
    "materialize": "npm:materialize@1.0.0",
    "popper": "npm:popper@1.0.0",
    "text": "github:systemjs/plugin-text@0.0.11",
    "traceur": "github:jmcriffey/bower-traceur@0.0.93",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.93",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.0.6"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.1"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-punycode@0.1.0": {
      "punycode": "npm:punycode@1.4.1"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.2"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "github:twbs/bootstrap@3.3.7": {
      "jquery": "npm:jquery@3.2.1"
    },
    "npm:JSONStream@1.3.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "jsonparse": "npm:jsonparse@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through": "npm:through@2.3.8"
    },
    "npm:accepts@1.3.3": {
      "mime-types": "npm:mime-types@2.1.15",
      "negotiator": "npm:negotiator@0.6.1"
    },
    "npm:acorn@4.0.13": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ajv@4.11.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "co": "npm:co@4.6.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "json-stable-stringify": "npm:json-stable-stringify@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "punycode": "github:jspm/nodelibs-punycode@0.1.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:anymatch@1.3.0": {
      "arrify": "npm:arrify@1.0.1",
      "micromatch": "npm:micromatch@2.3.11",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:archiver-utils@1.3.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "glob": "npm:glob@7.1.2",
      "graceful-fs": "npm:graceful-fs@4.1.11",
      "lazystream": "npm:lazystream@1.0.0",
      "lodash": "npm:lodash@4.16.2",
      "normalize-path": "npm:normalize-path@2.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.3",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:archiver@1.3.0": {
      "archiver-utils": "npm:archiver-utils@1.3.0",
      "async": "npm:async@2.5.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "buffer-crc32": "npm:buffer-crc32@0.2.13",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@7.1.2",
      "lodash": "npm:lodash@4.16.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.3",
      "tar-stream": "npm:tar-stream@1.5.4",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "walkdir": "npm:walkdir@0.0.11",
      "zip-stream": "npm:zip-stream@1.2.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:are-we-there-yet@1.1.4": {
      "delegates": "npm:delegates@1.0.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "readable-stream": "npm:readable-stream@2.3.3",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:argparse@1.0.9": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sprintf-js": "npm:sprintf-js@1.0.3",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:arr-diff@2.0.0": {
      "arr-flatten": "npm:arr-flatten@1.1.0"
    },
    "npm:asn1.js@4.9.1": {
      "bn.js": "npm:bn.js@4.11.7",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:asn1@0.2.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "sys": "github:jspm/nodelibs-util@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert-plus@0.2.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert-plus@1.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:astw@2.2.0": {
      "acorn": "npm:acorn@4.0.13"
    },
    "npm:async-to-gen@1.3.3": {
      "babylon": "npm:babylon@6.17.4",
      "magic-string": "npm:magic-string@0.19.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:async@2.0.1": {
      "lodash": "npm:lodash@4.16.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:async@2.5.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "lodash": "npm:lodash@4.16.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asynckit@0.4.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:aws-sign2@0.6.0": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:aws4@1.6.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:babylon@6.17.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:base64id@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:bcrypt-pbkdf@1.0.1": {
      "tweetnacl": "npm:tweetnacl@0.14.5"
    },
    "npm:better-assert@1.0.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "callsite": "npm:callsite@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:binary-extensions@1.8.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:binary@0.3.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "buffers": "npm:buffers@0.1.1",
      "chainsaw": "npm:chainsaw@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:bl@1.2.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "readable-stream": "npm:readable-stream@2.3.3",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:block-stream@0.0.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:bn.js@4.11.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:boom@2.10.1": {
      "hoek": "npm:hoek@2.16.3",
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:bootstrap-material-design@0.5.10": {
      "bootstrap": "npm:bootstrap@3.3.7",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "jquery": "npm:jquery@3.2.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bootstrap@3.3.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:brace-expansion@1.1.8": {
      "balanced-match": "npm:balanced-match@1.0.0",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:braces@1.8.5": {
      "expand-range": "npm:expand-range@1.8.2",
      "preserve": "npm:preserve@0.2.0",
      "repeat-element": "npm:repeat-element@1.1.2"
    },
    "npm:browser-icons@0.0.1": {
      "icon-android": "npm:icon-android@0.0.1",
      "icon-chrome": "npm:icon-chrome@0.0.1",
      "icon-firefox": "npm:icon-firefox@0.0.1",
      "icon-ie": "npm:icon-ie@0.0.1",
      "icon-ios": "npm:icon-ios@0.0.1",
      "icon-linux": "npm:icon-linux@0.0.1",
      "icon-opera": "npm:icon-opera@0.0.1",
      "icon-osx": "npm:icon-osx@0.0.1",
      "icon-safari": "npm:icon-safari@0.0.1",
      "icon-windows": "npm:icon-windows@0.0.1"
    },
    "npm:browser-pack@6.0.2": {
      "JSONStream": "npm:JSONStream@1.3.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "combine-source-map": "npm:combine-source-map@0.7.2",
      "defined": "npm:defined@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through2": "npm:through2@2.0.3",
      "umd": "npm:umd@3.0.1"
    },
    "npm:browser-resolve@1.11.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "resolve": "npm:resolve@1.1.7"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.4",
      "create-hash": "npm:create-hash@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.3"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.7",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.5"
    },
    "npm:browserify-sign@4.0.4": {
      "bn.js": "npm:bn.js@4.11.7",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "create-hmac": "npm:create-hmac@1.1.6",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.4.0",
      "inherits": "npm:inherits@2.0.3",
      "parse-asn1": "npm:parse-asn1@5.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "pako": "npm:pako@0.2.9",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.3",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:browserify@12.0.2": {
      "JSONStream": "npm:JSONStream@1.3.1",
      "assert": "npm:assert@1.3.0",
      "browser-pack": "npm:browser-pack@6.0.2",
      "browser-resolve": "npm:browser-resolve@1.11.2",
      "browserify-zlib": "npm:browserify-zlib@0.1.4",
      "buffer": "npm:buffer@3.6.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "concat-stream": "npm:concat-stream@1.5.2",
      "console-browserify": "npm:console-browserify@1.1.0",
      "constants-browserify": "npm:constants-browserify@1.0.0",
      "crypto-browserify": "npm:crypto-browserify@3.11.1",
      "defined": "npm:defined@1.0.0",
      "deps-sort": "npm:deps-sort@2.0.0",
      "domain-browser": "npm:domain-browser@1.1.7",
      "duplexer2": "npm:duplexer2@0.1.4",
      "events": "npm:events@1.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@5.0.15",
      "has": "npm:has@1.0.1",
      "htmlescape": "npm:htmlescape@1.1.1",
      "https-browserify": "npm:https-browserify@0.0.0",
      "inherits": "npm:inherits@2.0.3",
      "insert-module-globals": "npm:insert-module-globals@7.0.1",
      "isarray": "npm:isarray@0.0.1",
      "labeled-stream-splicer": "npm:labeled-stream-splicer@2.0.0",
      "module-deps": "npm:module-deps@4.1.1",
      "os-browserify": "npm:os-browserify@0.1.2",
      "parents": "npm:parents@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-browserify": "npm:path-browserify@0.0.0",
      "process": "npm:process@0.11.10",
      "punycode": "npm:punycode@1.4.1",
      "querystring-es3": "npm:querystring-es3@0.2.1",
      "read-only-stream": "npm:read-only-stream@2.0.0",
      "readable-stream": "npm:readable-stream@2.3.3",
      "resolve": "npm:resolve@1.1.7",
      "shasum": "npm:shasum@1.0.2",
      "shell-quote": "npm:shell-quote@1.6.1",
      "stream-browserify": "npm:stream-browserify@2.0.1",
      "stream-http": "npm:stream-http@2.7.2",
      "string_decoder": "npm:string_decoder@0.10.31",
      "subarg": "npm:subarg@1.0.0",
      "syntax-error": "npm:syntax-error@1.3.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "through2": "npm:through2@2.0.3",
      "timers-browserify": "npm:timers-browserify@1.4.2",
      "tty-browserify": "npm:tty-browserify@0.0.0",
      "url": "npm:url@0.11.0",
      "util": "npm:util@0.10.3",
      "vm-browserify": "npm:vm-browserify@0.0.4",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:buffer-crc32@0.2.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@5.0.6": {
      "base64-js": "npm:base64-js@1.2.1",
      "ieee754": "npm:ieee754@1.1.8"
    },
    "npm:buffers@0.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:builtin-status-codes@3.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:cached-path-relative@1.0.1": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:chai@4.1.0": {
      "assertion-error": "npm:assertion-error@1.0.2",
      "check-error": "npm:check-error@1.0.2",
      "deep-eql": "npm:deep-eql@2.0.2",
      "get-func-name": "npm:get-func-name@2.0.0",
      "pathval": "npm:pathval@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "type-detect": "npm:type-detect@4.0.3"
    },
    "npm:chainsaw@0.1.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "traverse": "npm:traverse@0.3.9",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:chalk@1.1.3": {
      "ansi-styles": "npm:ansi-styles@2.2.1",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:chokidar@1.7.0": {
      "anymatch": "npm:anymatch@1.3.0",
      "async-each": "npm:async-each@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fsevents": "npm:fsevents@1.1.2",
      "glob-parent": "npm:glob-parent@2.0.0",
      "inherits": "npm:inherits@2.0.3",
      "is-binary-path": "npm:is-binary-path@1.0.1",
      "is-glob": "npm:is-glob@2.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readdirp": "npm:readdirp@2.1.0"
    },
    "npm:cipher-base@1.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:colors@1.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:combine-source-map@0.7.2": {
      "convert-source-map": "npm:convert-source-map@1.1.3",
      "inline-source-map": "npm:inline-source-map@0.6.2",
      "lodash.memoize": "npm:lodash.memoize@3.0.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.6"
    },
    "npm:combined-stream@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "delayed-stream": "npm:delayed-stream@1.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.9.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:compress-commons@1.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "buffer-crc32": "npm:buffer-crc32@0.2.13",
      "crc32-stream": "npm:crc32-stream@2.0.0",
      "normalize-path": "npm:normalize-path@2.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.3",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:compressible@2.0.10": {
      "mime-db": "npm:mime-db@1.27.0"
    },
    "npm:compression@1.7.0": {
      "accepts": "npm:accepts@1.3.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "bytes": "npm:bytes@2.5.0",
      "compressible": "npm:compressible@2.0.10",
      "debug": "npm:debug@2.6.8",
      "on-headers": "npm:on-headers@1.0.1",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "vary": "npm:vary@1.1.1",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:concat-stream@1.5.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "readable-stream": "npm:readable-stream@2.0.6",
      "typedarray": "npm:typedarray@0.0.6"
    },
    "npm:console-browserify@1.1.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "date-now": "npm:date-now@0.1.4",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:constants-browserify@1.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:content-disposition@0.5.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:convert-source-map@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:cookie-parser@1.4.3": {
      "cookie": "npm:cookie@0.3.1",
      "cookie-signature": "npm:cookie-signature@1.0.6"
    },
    "npm:cookie-signature@1.0.6": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:crc32-stream@2.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crc": "npm:crc@3.4.4",
      "readable-stream": "npm:readable-stream@2.3.3",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:crc@3.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.11.7",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.4.0"
    },
    "npm:create-hash@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.3",
      "ripemd160": "npm:ripemd160@2.0.1",
      "sha.js": "npm:sha.js@2.4.8"
    },
    "npm:create-hmac@1.1.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.4",
      "create-hash": "npm:create-hash@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.3",
      "ripemd160": "npm:ripemd160@2.0.1",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "sha.js": "npm:sha.js@2.4.8"
    },
    "npm:cryptiles@2.0.5": {
      "boom": "npm:boom@2.10.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:crypto-browserify@3.11.1": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.4",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.3",
      "create-hmac": "npm:create-hmac@1.1.6",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.3",
      "pbkdf2": "npm:pbkdf2@3.0.12",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.5"
    },
    "npm:dashdash@1.14.1": {
      "assert-plus": "npm:assert-plus@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:debug@2.3.3": {
      "ms": "npm:ms@0.7.2"
    },
    "npm:debug@2.6.7": {
      "ms": "npm:ms@2.0.0"
    },
    "npm:debug@2.6.8": {
      "ms": "npm:ms@2.0.0"
    },
    "npm:decompress-zip@0.3.0": {
      "binary": "npm:binary@0.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "graceful-fs": "npm:graceful-fs@4.1.11",
      "mkpath": "npm:mkpath@0.1.0",
      "nopt": "npm:nopt@3.0.6",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "q": "npm:q@1.4.1",
      "readable-stream": "npm:readable-stream@1.1.14",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "touch": "npm:touch@0.0.3",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:deep-eql@2.0.2": {
      "type-detect": "npm:type-detect@3.0.0"
    },
    "npm:deep-extend@0.4.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:delayed-stream@1.0.0": {
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:depd@1.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:deps-sort@2.0.0": {
      "JSONStream": "npm:JSONStream@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "shasum": "npm:shasum@1.0.2",
      "subarg": "npm:subarg@1.0.0",
      "through2": "npm:through2@2.0.3"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:destroy@1.0.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:detective@4.5.0": {
      "acorn": "npm:acorn@4.0.13",
      "defined": "npm:defined@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.11.7",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.5",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:domain-browser@1.1.7": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:duplexer2@0.1.4": {
      "readable-stream": "npm:readable-stream@2.3.3"
    },
    "npm:ecc-jsbn@0.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "jsbn": "npm:jsbn@0.1.1"
    },
    "npm:elliptic@6.4.0": {
      "bn.js": "npm:bn.js@4.11.7",
      "brorand": "npm:brorand@1.1.0",
      "hash.js": "npm:hash.js@1.1.3",
      "hmac-drbg": "npm:hmac-drbg@1.0.1",
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:end-of-stream@1.4.0": {
      "once": "npm:once@1.4.0"
    },
    "npm:engine.io-client@3.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "component-emitter": "npm:component-emitter@1.2.1",
      "component-inherit": "npm:component-inherit@0.0.3",
      "debug": "npm:debug@2.6.8",
      "engine.io-parser": "npm:engine.io-parser@2.1.1",
      "has-cors": "npm:has-cors@1.1.0",
      "indexof": "npm:indexof@0.0.1",
      "parsejson": "npm:parsejson@0.0.3",
      "parseqs": "npm:parseqs@0.0.5",
      "parseuri": "npm:parseuri@0.0.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "yeast": "npm:yeast@0.1.2"
    },
    "npm:engine.io-parser@2.1.1": {
      "after": "npm:after@0.8.2",
      "arraybuffer.slice": "npm:arraybuffer.slice@0.0.6",
      "base64-arraybuffer": "npm:base64-arraybuffer@0.1.5",
      "blob": "npm:blob@0.0.4",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "has-binary2": "npm:has-binary2@1.0.2"
    },
    "npm:engine.io@3.1.0": {
      "accepts": "npm:accepts@1.3.3",
      "base64id": "npm:base64id@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cookie": "npm:cookie@0.3.1",
      "debug": "npm:debug@2.6.8",
      "engine.io-parser": "npm:engine.io-parser@2.1.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "uws": "npm:uws@0.14.5",
      "ws": "npm:ws@2.3.1",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:esprima@4.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:etag@1.8.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:expand-brackets@0.1.5": {
      "is-posix-bracket": "npm:is-posix-bracket@0.1.1"
    },
    "npm:expand-range@1.8.2": {
      "fill-range": "npm:fill-range@2.2.3"
    },
    "npm:express-session@1.15.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cookie": "npm:cookie@0.3.1",
      "cookie-signature": "npm:cookie-signature@1.0.6",
      "crc": "npm:crc@3.4.4",
      "debug": "npm:debug@2.6.8",
      "depd": "npm:depd@1.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "on-headers": "npm:on-headers@1.0.1",
      "parseurl": "npm:parseurl@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "uid-safe": "npm:uid-safe@2.1.4",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "utils-merge": "npm:utils-merge@1.0.0"
    },
    "npm:express@4.15.3": {
      "accepts": "npm:accepts@1.3.3",
      "array-flatten": "npm:array-flatten@1.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "content-disposition": "npm:content-disposition@0.5.2",
      "content-type": "npm:content-type@1.0.2",
      "cookie": "npm:cookie@0.3.1",
      "cookie-signature": "npm:cookie-signature@1.0.6",
      "debug": "npm:debug@2.6.7",
      "depd": "npm:depd@1.1.0",
      "encodeurl": "npm:encodeurl@1.0.1",
      "escape-html": "npm:escape-html@1.0.3",
      "etag": "npm:etag@1.8.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "finalhandler": "npm:finalhandler@1.0.3",
      "fresh": "npm:fresh@0.5.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "merge-descriptors": "npm:merge-descriptors@1.0.1",
      "methods": "npm:methods@1.1.2",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "on-finished": "npm:on-finished@2.3.0",
      "parseurl": "npm:parseurl@1.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-to-regexp": "npm:path-to-regexp@0.1.7",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "proxy-addr": "npm:proxy-addr@1.1.4",
      "qs": "npm:qs@6.4.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "range-parser": "npm:range-parser@1.2.0",
      "send": "npm:send@0.15.3",
      "serve-static": "npm:serve-static@1.12.3",
      "setprototypeof": "npm:setprototypeof@1.0.3",
      "statuses": "npm:statuses@1.3.1",
      "type-is": "npm:type-is@1.6.15",
      "utils-merge": "npm:utils-merge@1.0.0",
      "vary": "npm:vary@1.1.1"
    },
    "npm:extglob@0.3.2": {
      "is-extglob": "npm:is-extglob@1.0.0"
    },
    "npm:extsprintf@1.0.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:fill-range@2.2.3": {
      "is-number": "npm:is-number@2.1.0",
      "isobject": "npm:isobject@2.1.0",
      "randomatic": "npm:randomatic@1.1.7",
      "repeat-element": "npm:repeat-element@1.1.2",
      "repeat-string": "npm:repeat-string@1.6.1"
    },
    "npm:finalhandler@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "debug": "npm:debug@2.6.7",
      "encodeurl": "npm:encodeurl@1.0.1",
      "escape-html": "npm:escape-html@1.0.3",
      "on-finished": "npm:on-finished@2.3.0",
      "parseurl": "npm:parseurl@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "statuses": "npm:statuses@1.3.1",
      "unpipe": "npm:unpipe@1.0.0"
    },
    "npm:for-own@0.1.5": {
      "for-in": "npm:for-in@1.0.2"
    },
    "npm:forever-agent@0.6.1": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:form-data@2.1.4": {
      "asynckit": "npm:asynckit@0.4.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "combined-stream": "npm:combined-stream@1.0.5",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "mime-types": "npm:mime-types@2.1.15",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:fs.realpath@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fsevents@1.1.2": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "nan": "npm:nan@2.6.2",
      "node-pre-gyp": "npm:node-pre-gyp@0.6.36",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:fstream-ignore@1.0.5": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fstream": "npm:fstream@1.0.11",
      "inherits": "npm:inherits@2.0.3",
      "minimatch": "npm:minimatch@3.0.4",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:fstream@1.0.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-fs": "npm:graceful-fs@4.1.11",
      "inherits": "npm:inherits@2.0.3",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rimraf": "npm:rimraf@2.6.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:gauge@2.7.4": {
      "aproba": "npm:aproba@1.1.2",
      "console-control-strings": "npm:console-control-strings@1.1.0",
      "has-unicode": "npm:has-unicode@2.0.1",
      "object-assign": "npm:object-assign@4.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "signal-exit": "npm:signal-exit@3.0.2",
      "string-width": "npm:string-width@1.0.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "wide-align": "npm:wide-align@1.1.2"
    },
    "npm:generate-function@2.0.0": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:generate-object-property@1.2.0": {
      "is-property": "npm:is-property@1.0.2"
    },
    "npm:getpass@0.1.7": {
      "assert-plus": "npm:assert-plus@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:glob-base@0.3.0": {
      "glob-parent": "npm:glob-parent@2.0.0",
      "is-glob": "npm:is-glob@2.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:glob-parent@2.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "is-glob": "npm:is-glob@2.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:glob@5.0.15": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.6",
      "inherits": "npm:inherits@2.0.3",
      "minimatch": "npm:minimatch@3.0.4",
      "once": "npm:once@1.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:glob@7.1.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fs.realpath": "npm:fs.realpath@1.0.0",
      "inflight": "npm:inflight@1.0.6",
      "inherits": "npm:inherits@2.0.3",
      "minimatch": "npm:minimatch@3.0.4",
      "once": "npm:once@1.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-fs@4.1.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:har-schema@1.0.5": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:har-validator@2.0.6": {
      "chalk": "npm:chalk@1.1.3",
      "commander": "npm:commander@2.9.0",
      "is-my-json-valid": "npm:is-my-json-valid@2.16.0",
      "pinkie-promise": "npm:pinkie-promise@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:har-validator@4.2.1": {
      "ajv": "npm:ajv@4.11.8",
      "har-schema": "npm:har-schema@1.0.5"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.1.1"
    },
    "npm:has-binary2@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "isarray": "npm:isarray@2.0.1"
    },
    "npm:has-unicode@2.0.1": {
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:has@1.0.1": {
      "function-bind": "npm:function-bind@1.1.0"
    },
    "npm:hash-base@2.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:hash.js@1.1.3": {
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:hawk@3.1.3": {
      "boom": "npm:boom@2.10.1",
      "cryptiles": "npm:cryptiles@2.0.5",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "hoek": "npm:hoek@2.16.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sntp": "npm:sntp@1.0.9",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:hmac-drbg@1.0.1": {
      "hash.js": "npm:hash.js@1.1.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:hoek@2.16.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:http-errors@1.6.1": {
      "depd": "npm:depd@1.1.0",
      "inherits": "npm:inherits@2.0.3",
      "setprototypeof": "npm:setprototypeof@1.0.3",
      "statuses": "npm:statuses@1.3.1"
    },
    "npm:http-signature@1.1.1": {
      "assert-plus": "npm:assert-plus@0.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "jsprim": "npm:jsprim@1.4.0",
      "sshpk": "npm:sshpk@1.13.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inflight@1.0.6": {
      "once": "npm:once@1.4.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "wrappy": "npm:wrappy@1.0.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inherits@2.0.3": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ini@1.3.4": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inline-source-map@0.6.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "source-map": "npm:source-map@0.5.6"
    },
    "npm:insert-module-globals@7.0.1": {
      "JSONStream": "npm:JSONStream@1.3.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "combine-source-map": "npm:combine-source-map@0.7.2",
      "concat-stream": "npm:concat-stream@1.5.2",
      "is-buffer": "npm:is-buffer@1.1.5",
      "lexical-scope": "npm:lexical-scope@1.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "npm:process@0.11.10",
      "through2": "npm:through2@2.0.3",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:is-binary-path@1.0.1": {
      "binary-extensions": "npm:binary-extensions@1.8.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:is-buffer@1.1.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:is-equal-shallow@0.1.3": {
      "is-primitive": "npm:is-primitive@2.0.0"
    },
    "npm:is-fullwidth-code-point@1.0.0": {
      "number-is-nan": "npm:number-is-nan@1.0.1"
    },
    "npm:is-glob@2.0.1": {
      "is-extglob": "npm:is-extglob@1.0.0"
    },
    "npm:is-my-json-valid@2.16.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "generate-function": "npm:generate-function@2.0.0",
      "generate-object-property": "npm:generate-object-property@1.2.0",
      "jsonpointer": "npm:jsonpointer@4.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:is-number@2.1.0": {
      "kind-of": "npm:kind-of@3.2.2"
    },
    "npm:is-number@3.0.0": {
      "kind-of": "npm:kind-of@3.2.2"
    },
    "npm:isobject@2.1.0": {
      "isarray": "npm:isarray@1.0.0"
    },
    "npm:isstream@0.1.2": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:js-yaml@3.9.0": {
      "argparse": "npm:argparse@1.0.9",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "esprima": "npm:esprima@4.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:json-stable-stringify@0.0.1": {
      "jsonify": "npm:jsonify@0.0.0"
    },
    "npm:json-stable-stringify@1.0.1": {
      "jsonify": "npm:jsonify@0.0.0"
    },
    "npm:jsonparse@1.3.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:jsprim@1.4.0": {
      "assert-plus": "npm:assert-plus@1.0.0",
      "extsprintf": "npm:extsprintf@1.0.2",
      "json-schema": "npm:json-schema@0.2.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "verror": "npm:verror@1.3.6"
    },
    "npm:kind-of@3.2.2": {
      "is-buffer": "npm:is-buffer@1.1.5"
    },
    "npm:kind-of@4.0.0": {
      "is-buffer": "npm:is-buffer@1.1.5"
    },
    "npm:labeled-stream-splicer@2.0.0": {
      "inherits": "npm:inherits@2.0.3",
      "isarray": "npm:isarray@0.0.1",
      "stream-splicer": "npm:stream-splicer@2.0.0"
    },
    "npm:lazystream@1.0.0": {
      "readable-stream": "npm:readable-stream@2.3.3",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lexical-scope@1.2.0": {
      "astw": "npm:astw@2.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lightbox@0.5.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:lodash._baseassign@3.2.0": {
      "lodash._basecopy": "npm:lodash._basecopy@3.0.1",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.create@3.1.1": {
      "lodash._baseassign": "npm:lodash._baseassign@3.2.0",
      "lodash._basecreate": "npm:lodash._basecreate@3.0.3",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9"
    },
    "npm:lodash.keys@3.1.2": {
      "lodash._getnative": "npm:lodash._getnative@3.9.1",
      "lodash.isarguments": "npm:lodash.isarguments@3.1.0",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:magic-string@0.19.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "vlq": "npm:vlq@0.2.2"
    },
    "npm:materialize@1.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:micromatch@2.3.11": {
      "arr-diff": "npm:arr-diff@2.0.0",
      "array-unique": "npm:array-unique@0.2.1",
      "braces": "npm:braces@1.8.5",
      "expand-brackets": "npm:expand-brackets@0.1.5",
      "extglob": "npm:extglob@0.3.2",
      "filename-regex": "npm:filename-regex@2.0.1",
      "is-extglob": "npm:is-extglob@1.0.0",
      "is-glob": "npm:is-glob@2.0.1",
      "kind-of": "npm:kind-of@3.2.2",
      "normalize-path": "npm:normalize-path@2.1.1",
      "object.omit": "npm:object.omit@2.0.1",
      "parse-glob": "npm:parse-glob@3.0.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "regex-cache": "npm:regex-cache@0.4.3"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.11.7",
      "brorand": "npm:brorand@1.1.0"
    },
    "npm:mime-db@1.27.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:mime-types@2.1.15": {
      "mime-db": "npm:mime-db@1.27.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mime@1.3.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:minimatch@3.0.4": {
      "brace-expansion": "npm:brace-expansion@1.1.8",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:mkpath@0.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:mocha@3.4.2": {
      "css": "github:systemjs/plugin-css@0.1.35",
      "debug": "npm:debug@2.6.8",
      "json3": "npm:json3@3.3.2",
      "lodash.create": "npm:lodash.create@3.1.1"
    },
    "npm:module-deps@4.1.1": {
      "JSONStream": "npm:JSONStream@1.3.1",
      "browser-resolve": "npm:browser-resolve@1.11.2",
      "cached-path-relative": "npm:cached-path-relative@1.0.1",
      "concat-stream": "npm:concat-stream@1.5.2",
      "defined": "npm:defined@1.0.0",
      "detective": "npm:detective@4.5.0",
      "duplexer2": "npm:duplexer2@0.1.4",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.3",
      "parents": "npm:parents@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.3",
      "resolve": "npm:resolve@1.1.7",
      "stream-combiner2": "npm:stream-combiner2@1.1.1",
      "subarg": "npm:subarg@1.0.0",
      "through2": "npm:through2@2.0.3",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:mysql@2.13.0": {
      "bignumber.js": "npm:bignumber.js@3.1.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@1.1.14",
      "sqlstring": "npm:sqlstring@2.2.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:nan@2.6.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ngrok@2.2.15": {
      "@types/node": "npm:@types/node@7.0.38",
      "async": "npm:async@2.5.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "decompress-zip": "npm:decompress-zip@0.3.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "lock": "npm:lock@0.1.4",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readline": "github:jspm/nodelibs-readline@0.1.0",
      "request": "npm:request@2.79.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "uuid": "npm:uuid@3.1.0"
    },
    "npm:node-pre-gyp@0.6.36": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "mkdirp": "npm:mkdirp@0.5.1",
      "nopt": "npm:nopt@4.0.1",
      "npmlog": "npm:npmlog@4.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rc": "npm:rc@1.2.1",
      "request": "npm:request@2.81.0",
      "rimraf": "npm:rimraf@2.6.1",
      "semver": "npm:semver@5.3.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "tar": "npm:tar@2.2.1",
      "tar-pack": "npm:tar-pack@3.4.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:nopt@1.0.10": {
      "abbrev": "npm:abbrev@1.1.0",
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:nopt@3.0.6": {
      "abbrev": "npm:abbrev@1.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:nopt@4.0.1": {
      "abbrev": "npm:abbrev@1.1.0",
      "osenv": "npm:osenv@0.1.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:normalize-path@2.1.1": {
      "remove-trailing-separator": "npm:remove-trailing-separator@1.0.2"
    },
    "npm:npmlog@4.1.2": {
      "are-we-there-yet": "npm:are-we-there-yet@1.1.4",
      "console-control-strings": "npm:console-control-strings@1.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "gauge": "npm:gauge@2.7.4",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "set-blocking": "npm:set-blocking@2.0.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:oauth-sign@0.8.2": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0"
    },
    "npm:object.omit@2.0.1": {
      "for-own": "npm:for-own@0.1.5",
      "is-extendable": "npm:is-extendable@0.1.1"
    },
    "npm:on-finished@2.3.0": {
      "ee-first": "npm:ee-first@1.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:once@1.4.0": {
      "wrappy": "npm:wrappy@1.0.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:os-homedir@1.0.2": {
      "os": "github:jspm/nodelibs-os@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:os-tmpdir@1.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:osenv@0.1.4": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "os-homedir": "npm:os-homedir@1.0.2",
      "os-tmpdir": "npm:os-tmpdir@1.0.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pako@0.2.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parents@1.0.1": {
      "path-platform": "npm:path-platform@0.11.15",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.1.0": {
      "asn1.js": "npm:asn1.js@4.9.1",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.12",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:parse-glob@3.0.4": {
      "glob-base": "npm:glob-base@0.3.0",
      "is-dotfile": "npm:is-dotfile@1.0.3",
      "is-extglob": "npm:is-extglob@1.0.0",
      "is-glob": "npm:is-glob@2.0.1"
    },
    "npm:parsejson@0.0.3": {
      "better-assert": "npm:better-assert@1.0.2"
    },
    "npm:parseqs@0.0.5": {
      "better-assert": "npm:better-assert@1.0.2"
    },
    "npm:parseuri@0.0.5": {
      "better-assert": "npm:better-assert@1.0.2"
    },
    "npm:parseurl@1.3.1": {
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-is-absolute@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-platform@0.11.15": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:pbkdf2@3.0.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "create-hmac": "npm:create-hmac@1.1.6",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "ripemd160": "npm:ripemd160@2.0.1",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "sha.js": "npm:sha.js@2.4.8"
    },
    "npm:performance-now@0.2.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pinkie-promise@2.0.1": {
      "pinkie": "npm:pinkie@2.0.4"
    },
    "npm:popper@1.0.0": {
      "browser-icons": "npm:browser-icons@0.0.1",
      "browserify": "npm:browserify@12.0.2",
      "chai": "npm:chai@4.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "chokidar": "npm:chokidar@1.7.0",
      "colors": "npm:colors@1.1.2",
      "compression": "npm:compression@1.7.0",
      "express": "npm:express@4.15.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "js-yaml": "npm:js-yaml@3.9.0",
      "minimist": "npm:minimist@1.2.0",
      "mocha": "npm:mocha@3.4.2",
      "ngrok": "npm:ngrok@2.2.15",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "platform": "npm:platform@1.3.4",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rijs": "npm:rijs@0.7.1",
      "rijs.resdir": "npm:rijs.resdir@1.1.0",
      "serve-static": "npm:serve-static@1.12.3",
      "socket.io": "npm:socket.io@2.0.3",
      "socket.io-client": "npm:socket.io-client@2.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "utilise": "npm:utilise@2.1.3",
      "wd": "npm:wd@1.4.0"
    },
    "npm:process-nextick-args@1.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:proxy-addr@1.1.4": {
      "forwarded": "npm:forwarded@0.1.0",
      "ipaddr.js": "npm:ipaddr.js@1.3.0"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.11.7",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.1.0",
      "randombytes": "npm:randombytes@2.0.5"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:punycode@1.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:q@1.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:random-bytes@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:randomatic@1.1.7": {
      "is-number": "npm:is-number@3.0.0",
      "kind-of": "npm:kind-of@4.0.0"
    },
    "npm:randombytes@2.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-buffer": "npm:safe-buffer@5.1.1"
    },
    "npm:rc@1.2.1": {
      "deep-extend": "npm:deep-extend@0.4.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ini": "npm:ini@1.3.4",
      "minimist": "npm:minimist@1.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-json-comments": "npm:strip-json-comments@2.0.1"
    },
    "npm:read-only-stream@2.0.0": {
      "readable-stream": "npm:readable-stream@2.3.3"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:readable-stream@2.3.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "npm:string_decoder@1.0.3",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:readdirp@2.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-fs": "npm:graceful-fs@4.1.11",
      "minimatch": "npm:minimatch@3.0.4",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.3",
      "set-immediate-shim": "npm:set-immediate-shim@1.0.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:regex-cache@0.4.3": {
      "is-equal-shallow": "npm:is-equal-shallow@0.1.3",
      "is-primitive": "npm:is-primitive@2.0.0"
    },
    "npm:remove-trailing-separator@1.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:request@2.79.0": {
      "aws-sign2": "npm:aws-sign2@0.6.0",
      "aws4": "npm:aws4@1.6.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "caseless": "npm:caseless@0.11.0",
      "combined-stream": "npm:combined-stream@1.0.5",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "extend": "npm:extend@3.0.1",
      "forever-agent": "npm:forever-agent@0.6.1",
      "form-data": "npm:form-data@2.1.4",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "har-validator": "npm:har-validator@2.0.6",
      "hawk": "npm:hawk@3.1.3",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "http-signature": "npm:http-signature@1.1.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-typedarray": "npm:is-typedarray@1.0.0",
      "isstream": "npm:isstream@0.1.2",
      "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
      "mime-types": "npm:mime-types@2.1.15",
      "oauth-sign": "npm:oauth-sign@0.8.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "qs": "npm:qs@6.3.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stringstream": "npm:stringstream@0.0.5",
      "tough-cookie": "npm:tough-cookie@2.3.2",
      "tunnel-agent": "npm:tunnel-agent@0.4.3",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "uuid": "npm:uuid@3.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:request@2.81.0": {
      "aws-sign2": "npm:aws-sign2@0.6.0",
      "aws4": "npm:aws4@1.6.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "caseless": "npm:caseless@0.12.0",
      "combined-stream": "npm:combined-stream@1.0.5",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "extend": "npm:extend@3.0.1",
      "forever-agent": "npm:forever-agent@0.6.1",
      "form-data": "npm:form-data@2.1.4",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "har-validator": "npm:har-validator@4.2.1",
      "hawk": "npm:hawk@3.1.3",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "http-signature": "npm:http-signature@1.1.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-typedarray": "npm:is-typedarray@1.0.0",
      "isstream": "npm:isstream@0.1.2",
      "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
      "mime-types": "npm:mime-types@2.1.15",
      "oauth-sign": "npm:oauth-sign@0.8.2",
      "performance-now": "npm:performance-now@0.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "qs": "npm:qs@6.4.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stringstream": "npm:stringstream@0.0.5",
      "tough-cookie": "npm:tough-cookie@2.3.2",
      "tunnel-agent": "npm:tunnel-agent@0.6.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "uuid": "npm:uuid@3.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:resolve@1.1.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:rijs.backpressure@1.0.1": {
      "utilise": "npm:utilise@2.1.3"
    },
    "npm:rijs.components@1.1.0": {
      "estree-walker": "npm:estree-walker@0.4.0",
      "rollup-plugin-async": "npm:rollup-plugin-async@1.2.0",
      "rollup-pluginutils": "npm:rollup-pluginutils@2.0.1",
      "utilise": "npm:utilise@2.1.3"
    },
    "npm:rijs.core@1.0.0": {
      "utilise": "npm:utilise@2.1.3"
    },
    "npm:rijs.css@1.0.0": {
      "utilise": "npm:utilise@2.1.3"
    },
    "npm:rijs.data@2.0.0": {
      "utilise": "npm:utilise@2.1.3"
    },
    "npm:rijs.db@0.1.7": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "utilise": "npm:utilise@2.1.3"
    },
    "npm:rijs.delay@0.0.6": {
      "utilise": "npm:utilise@2.1.3"
    },
    "npm:rijs.features@0.1.0": {
      "utilise": "npm:utilise@2.1.3"
    },
    "npm:rijs.fn@0.0.7": {
      "utilise": "npm:utilise@2.1.3"
    },
    "npm:rijs.helpers@0.0.11": {
      "utilise": "npm:utilise@2.1.3"
    },
    "npm:rijs.html@0.0.3": {
      "utilise": "npm:utilise@2.1.3"
    },
    "npm:rijs.hypermedia@0.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "request": "npm:request@2.79.0",
      "utilise": "npm:utilise@2.1.3"
    },
    "npm:rijs.mysql@1.1.3": {
      "mysql": "npm:mysql@2.13.0",
      "utilise": "npm:utilise@2.1.3"
    },
    "npm:rijs.needs@0.0.6": {
      "utilise": "npm:utilise@2.1.3"
    },
    "npm:rijs.offline@0.0.5": {
      "utilise": "npm:utilise@2.1.3"
    },
    "npm:rijs.pages@1.1.0": {
      "compression": "npm:compression@1.7.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "utilise": "npm:utilise@2.1.3"
    },
    "npm:rijs.precss@1.0.1": {
      "cssscope": "npm:cssscope@0.1.0",
      "utilise": "npm:utilise@2.1.3"
    },
    "npm:rijs.prehtml@0.0.5": {
      "utilise": "npm:utilise@2.1.3"
    },
    "npm:rijs.reactive@0.0.6": {
      "utilise": "npm:utilise@2.1.3"
    },
    "npm:rijs.resdir@1.1.0": {
      "chokidar": "npm:chokidar@1.7.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@1.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "utilise": "npm:utilise@2.1.3"
    },
    "npm:rijs.serve@0.7.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "compression": "npm:compression@1.7.0",
      "express": "npm:express@4.15.3",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "utilise": "npm:utilise@2.1.3"
    },
    "npm:rijs.sessions@1.0.1": {
      "cookie-parser": "npm:cookie-parser@1.4.3",
      "express-session": "npm:express-session@1.15.4",
      "utilise": "npm:utilise@2.1.3"
    },
    "npm:rijs.shadow@0.0.8": {
      "utilise": "npm:utilise@2.1.3"
    },
    "npm:rijs.singleton@0.0.4": {
      "utilise": "npm:utilise@2.1.3"
    },
    "npm:rijs.sync@1.0.0": {
      "express": "npm:express@4.15.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "socket.io": "npm:socket.io@2.0.3",
      "socket.io-client": "npm:socket.io-client@2.0.3",
      "utilise": "npm:utilise@2.1.3"
    },
    "npm:rijs.versioned@0.0.3": {
      "utilise": "npm:utilise@2.1.3"
    },
    "npm:rijs@0.7.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rijs.backpressure": "npm:rijs.backpressure@1.0.1",
      "rijs.components": "npm:rijs.components@1.1.0",
      "rijs.core": "npm:rijs.core@1.0.0",
      "rijs.css": "npm:rijs.css@1.0.0",
      "rijs.data": "npm:rijs.data@2.0.0",
      "rijs.db": "npm:rijs.db@0.1.7",
      "rijs.delay": "npm:rijs.delay@0.0.6",
      "rijs.features": "npm:rijs.features@0.1.0",
      "rijs.fn": "npm:rijs.fn@0.0.7",
      "rijs.helpers": "npm:rijs.helpers@0.0.11",
      "rijs.html": "npm:rijs.html@0.0.3",
      "rijs.hypermedia": "npm:rijs.hypermedia@0.0.5",
      "rijs.mysql": "npm:rijs.mysql@1.1.3",
      "rijs.needs": "npm:rijs.needs@0.0.6",
      "rijs.offline": "npm:rijs.offline@0.0.5",
      "rijs.pages": "npm:rijs.pages@1.1.0",
      "rijs.precss": "npm:rijs.precss@1.0.1",
      "rijs.prehtml": "npm:rijs.prehtml@0.0.5",
      "rijs.reactive": "npm:rijs.reactive@0.0.6",
      "rijs.resdir": "npm:rijs.resdir@1.1.0",
      "rijs.serve": "npm:rijs.serve@0.7.0",
      "rijs.sessions": "npm:rijs.sessions@1.0.1",
      "rijs.shadow": "npm:rijs.shadow@0.0.8",
      "rijs.singleton": "npm:rijs.singleton@0.0.4",
      "rijs.sync": "npm:rijs.sync@1.0.0",
      "rijs.versioned": "npm:rijs.versioned@0.0.3",
      "utilise": "npm:utilise@2.1.3"
    },
    "npm:rimraf@2.6.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@7.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ripemd160@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "hash-base": "npm:hash-base@2.0.2",
      "inherits": "npm:inherits@2.0.3"
    },
    "npm:rollup-plugin-async@1.2.0": {
      "async-to-gen": "npm:async-to-gen@1.3.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rollup-pluginutils": "npm:rollup-pluginutils@1.5.2"
    },
    "npm:rollup-pluginutils@1.5.2": {
      "estree-walker": "npm:estree-walker@0.2.1",
      "minimatch": "npm:minimatch@3.0.4",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:rollup-pluginutils@2.0.1": {
      "estree-walker": "npm:estree-walker@0.3.1",
      "micromatch": "npm:micromatch@2.3.11",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:safe-buffer@5.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:safe-buffer@5.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:semver@5.3.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:send@0.15.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "debug": "npm:debug@2.6.7",
      "depd": "npm:depd@1.1.0",
      "destroy": "npm:destroy@1.0.4",
      "encodeurl": "npm:encodeurl@1.0.1",
      "escape-html": "npm:escape-html@1.0.3",
      "etag": "npm:etag@1.8.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fresh": "npm:fresh@0.5.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http-errors": "npm:http-errors@1.6.1",
      "mime": "npm:mime@1.3.4",
      "ms": "npm:ms@2.0.0",
      "on-finished": "npm:on-finished@2.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "range-parser": "npm:range-parser@1.2.0",
      "statuses": "npm:statuses@1.3.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:serve-static@1.12.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "encodeurl": "npm:encodeurl@1.0.1",
      "escape-html": "npm:escape-html@1.0.3",
      "parseurl": "npm:parseurl@1.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "send": "npm:send@0.15.3",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:set-blocking@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:shasum@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "json-stable-stringify": "npm:json-stable-stringify@0.0.1",
      "sha.js": "npm:sha.js@2.4.8"
    },
    "npm:shell-quote@1.6.1": {
      "array-filter": "npm:array-filter@0.0.1",
      "array-map": "npm:array-map@0.0.0",
      "array-reduce": "npm:array-reduce@0.0.0",
      "jsonify": "npm:jsonify@0.0.0"
    },
    "npm:signal-exit@3.0.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sntp@1.0.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "dgram": "github:jspm/nodelibs-dgram@0.1.0",
      "dns": "github:jspm/nodelibs-dns@0.1.0",
      "hoek": "npm:hoek@2.16.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:socket.io-adapter@1.1.0": {
      "debug": "npm:debug@2.3.3",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:socket.io-client@2.0.3": {
      "backo2": "npm:backo2@1.0.2",
      "base64-arraybuffer": "npm:base64-arraybuffer@0.1.5",
      "component-bind": "npm:component-bind@1.0.0",
      "component-emitter": "npm:component-emitter@1.2.1",
      "debug": "npm:debug@2.6.8",
      "engine.io-client": "npm:engine.io-client@3.1.1",
      "has-cors": "npm:has-cors@1.1.0",
      "indexof": "npm:indexof@0.0.1",
      "object-component": "npm:object-component@0.0.3",
      "parseqs": "npm:parseqs@0.0.5",
      "parseuri": "npm:parseuri@0.0.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "socket.io-parser": "npm:socket.io-parser@3.1.2",
      "to-array": "npm:to-array@0.1.4"
    },
    "npm:socket.io-parser@3.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "component-emitter": "npm:component-emitter@1.2.1",
      "debug": "npm:debug@2.6.8",
      "has-binary2": "npm:has-binary2@1.0.2",
      "isarray": "npm:isarray@2.0.1"
    },
    "npm:socket.io@2.0.3": {
      "debug": "npm:debug@2.6.8",
      "engine.io": "npm:engine.io@3.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "object-assign": "npm:object-assign@4.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "socket.io-adapter": "npm:socket.io-adapter@1.1.0",
      "socket.io-client": "npm:socket.io-client@2.0.3",
      "socket.io-parser": "npm:socket.io-parser@3.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:source-map@0.5.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sqlstring@2.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:sshpk@1.13.1": {
      "asn1": "npm:asn1@0.2.3",
      "assert-plus": "npm:assert-plus@1.0.0",
      "bcrypt-pbkdf": "npm:bcrypt-pbkdf@1.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "dashdash": "npm:dashdash@1.14.1",
      "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
      "getpass": "npm:getpass@0.1.7",
      "jsbn": "npm:jsbn@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tweetnacl": "npm:tweetnacl@0.14.5",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:statuses@1.3.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:stream-browserify@2.0.1": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "readable-stream": "npm:readable-stream@2.3.3"
    },
    "npm:stream-combiner2@1.1.1": {
      "duplexer2": "npm:duplexer2@0.1.4",
      "readable-stream": "npm:readable-stream@2.3.3"
    },
    "npm:stream-http@2.7.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
      "inherits": "npm:inherits@2.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.3",
      "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:stream-splicer@2.0.0": {
      "inherits": "npm:inherits@2.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.3"
    },
    "npm:string-width@1.0.2": {
      "code-point-at": "npm:code-point-at@1.1.0",
      "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
      "strip-ansi": "npm:strip-ansi@3.0.1"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:string_decoder@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "safe-buffer": "npm:safe-buffer@5.1.1"
    },
    "npm:stringstream@0.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:strip-ansi@3.0.1": {
      "ansi-regex": "npm:ansi-regex@2.1.1"
    },
    "npm:subarg@1.0.0": {
      "minimist": "npm:minimist@1.2.0"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:syntax-error@1.3.0": {
      "acorn": "npm:acorn@4.0.13"
    },
    "npm:tar-pack@3.4.0": {
      "debug": "npm:debug@2.6.8",
      "fstream": "npm:fstream@1.0.11",
      "fstream-ignore": "npm:fstream-ignore@1.0.5",
      "once": "npm:once@1.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.3",
      "rimraf": "npm:rimraf@2.6.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tar": "npm:tar@2.2.1",
      "uid-number": "npm:uid-number@0.0.6",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:tar-stream@1.5.4": {
      "bl": "npm:bl@1.2.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "end-of-stream": "npm:end-of-stream@1.4.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.3",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:tar@2.2.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "block-stream": "npm:block-stream@0.0.9",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fstream": "npm:fstream@1.0.11",
      "inherits": "npm:inherits@2.0.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:through2@2.0.3": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.3",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.10"
    },
    "npm:to-arraybuffer@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:touch@0.0.3": {
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "nopt": "npm:nopt@1.0.10",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:tough-cookie@2.3.2": {
      "net": "github:jspm/nodelibs-net@0.1.2",
      "punycode": "npm:punycode@1.4.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:tunnel-agent@0.4.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:tunnel-agent@0.6.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:type-is@1.6.15": {
      "media-typer": "npm:media-typer@0.3.0",
      "mime-types": "npm:mime-types@2.1.15"
    },
    "npm:uglify-es@3.0.25": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "commander": "npm:commander@2.9.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.6"
    },
    "npm:uid-number@0.0.6": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:uid-safe@2.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "random-bytes": "npm:random-bytes@1.0.0"
    },
    "npm:umd@3.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:underscore.string@3.3.4": {
      "sprintf-js": "npm:sprintf-js@1.0.3",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:url@0.11.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:utilise@2.1.3": {
      "colors": "npm:colors@1.1.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "through": "npm:through@2.3.8",
      "uglify-es": "npm:uglify-es@3.0.25"
    },
    "npm:uuid@3.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:uws@0.14.5": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:verror@1.3.6": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "extsprintf": "npm:extsprintf@1.0.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:walkdir@0.0.11": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:wd@1.4.0": {
      "archiver": "npm:archiver@1.3.0",
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "async": "npm:async@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "lodash": "npm:lodash@4.16.2",
      "mkdirp": "npm:mkdirp@0.5.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "q": "npm:q@1.4.1",
      "repl": "github:jspm/nodelibs-repl@0.1.0",
      "request": "npm:request@2.79.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "underscore.string": "npm:underscore.string@3.3.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vargs": "npm:vargs@0.1.0"
    },
    "npm:wide-align@1.1.2": {
      "string-width": "npm:string-width@1.0.2"
    },
    "npm:ws@2.3.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-buffer": "npm:safe-buffer@5.0.1",
      "ultron": "npm:ultron@1.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:zip-stream@1.2.0": {
      "archiver-utils": "npm:archiver-utils@1.3.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "compress-commons": "npm:compress-commons@1.2.0",
      "lodash": "npm:lodash@4.16.2",
      "readable-stream": "npm:readable-stream@2.3.3",
      "util": "github:jspm/nodelibs-util@0.1.0"
    }
  }
});
