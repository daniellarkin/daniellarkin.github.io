# Camera decoder source and notices

PureRGB uses the unmodified WebAssembly binary from @colorhythm/libraw-wasm 1.1.1, with LibRaw 0.22.1-Release. LibRaw is distributed here under its CDDL 1.0 option; see LibRaw-LICENSE-CDDL.txt and LibRaw-COPYRIGHT.txt alongside this notice. The JavaScript wrapper and typed-cstruct are MIT licensed; their notices are included here.

Complete corresponding source:
- LibRaw: https://github.com/LibRaw/LibRaw/tree/b860248a89d9082b8e0a1e202e516f46af9adb29
- Source archive: https://github.com/LibRaw/LibRaw/archive/b860248a89d9082b8e0a1e202e516f46af9adb29.tar.gz
- Wrapper, C bindings and WebAssembly build recipe: https://github.com/colorhythm/libraw-wasm/tree/v1.1.1/packages/libraw.wasm
- typed-cstruct: https://github.com/ssssota/typed-cstruct/tree/v0.10.2

PureRGB does not modify LibRaw's covered source files. The application calls open/unpack/raw-image extraction only. Photographic development, colour transformations and embedded previews are not used. The build excludes zlib; not every camera compression variant is supported. Vendor code is minified with the application bundle, not subjected to PureRGB's processing-code obfuscation.
