# Semantic Release Automated Changelog

## [4.1.2](https://github.com/AlaskaAirlines/auro-banner/compare/v4.1.1...v4.1.2) (2025-08-14)


### Bug Fixes

* update auro-library to latest version ([24fdcc5](https://github.com/AlaskaAirlines/auro-banner/commit/24fdcc5757419716854e2295219d1d41f01c6e63))

## [4.1.1](https://github.com/AlaskaAirlines/auro-banner/compare/v4.1.0...v4.1.1) (2025-07-09)


### Bug Fixes

* add themable type classes ([eb1b53b](https://github.com/AlaskaAirlines/auro-banner/commit/eb1b53bb2bb956efaf928f025abf1ce30fced814))
* update docs head content ([aab8b91](https://github.com/AlaskaAirlines/auro-banner/commit/aab8b91fd2a4425571ad8814aae878fe428fc539))

# [4.1.0](https://github.com/AlaskaAirlines/auro-banner/compare/v4.0.1...v4.1.0) (2025-04-30)


### Features

* update to use new color theme tokens [#80](https://github.com/AlaskaAirlines/auro-banner/issues/80) ([8aa3ecb](https://github.com/AlaskaAirlines/auro-banner/commit/8aa3ecb76b7f647a4cb5767ab39c35455236473c))

## [4.0.1](https://github.com/AlaskaAirlines/auro-banner/compare/v4.0.0...v4.0.1) (2025-04-15)


### Performance Improvements

* add wca script for docs api ([02cb6e3](https://github.com/AlaskaAirlines/auro-banner/commit/02cb6e3f5b294b53b776ad48abecd8d7d586b06b))

# [4.0.0](https://github.com/AlaskaAirlines/auro-banner/compare/v3.1.3...v4.0.0) (2025-02-28)


* feat!: move peer dependencies to "real" dependencies ([9b9c93b](https://github.com/AlaskaAirlines/auro-banner/commit/9b9c93b93bcd1a0909e49e8d570198dc346d0567))


### BREAKING CHANGES

* last change was breaking _on a patch version_ because of peer dependencies

Summary:
  Our current build process relies on peer dependencies being present, but
  the peer dependency pipeline is causing far more issues than it's worth.
  Why not just make them regular dependencies? This is what this PR does :)

## [3.1.3](https://github.com/AlaskaAirlines/auro-banner/compare/v3.1.2...v3.1.3) (2025-02-08)


### Performance Improvements

* update dependencies ([66e5743](https://github.com/AlaskaAirlines/auro-banner/commit/66e5743f8a3218b51f31d0fedadb5496a895aa22))
* update mixins to support new npm spec ([2004ac7](https://github.com/AlaskaAirlines/auro-banner/commit/2004ac7db46e4290bc090e7ba5691ecd1650fba0))

## [3.1.2](https://github.com/AlaskaAirlines/auro-banner/compare/v3.1.1...v3.1.2) (2024-12-23)


### Bug Fixes

* update auro-library ([4c17c28](https://github.com/AlaskaAirlines/auro-banner/commit/4c17c282b24abb4f7b61e31f0e5fb6ea169fc3d8))
* update node version ([f3531b8](https://github.com/AlaskaAirlines/auro-banner/commit/f3531b8b79da4def5b8b37f24af41b22800c6599))
* update package lock ([2c95de9](https://github.com/AlaskaAirlines/auro-banner/commit/2c95de9f40141ee051cf545235c01caaf3bd9394))

## [3.1.1](https://github.com/AlaskaAirlines/auro-banner/compare/v3.1.0...v3.1.1) (2024-11-23)


### Bug Fixes

* update markdown partial pathing to consume new auro lib [#72](https://github.com/AlaskaAirlines/auro-banner/issues/72) ([3bd64df](https://github.com/AlaskaAirlines/auro-banner/commit/3bd64df136d08e173651a6ebc86b1b2c6aec6562))


### Performance Improvements

* update library to 3.0.2 ([a7d9831](https://github.com/AlaskaAirlines/auro-banner/commit/a7d98311e4742e1ba2cbde1abe15cb2195e81a2d))

# [3.1.0](https://github.com/AlaskaAirlines/auro-banner/compare/v3.0.1...v3.1.0) (2024-10-23)


### Features

* **api:** add register static method [#70](https://github.com/AlaskaAirlines/auro-banner/issues/70) ([a3ffbd2](https://github.com/AlaskaAirlines/auro-banner/commit/a3ffbd297e8a9791097174d01bd28dfb0370ba51))


### Performance Improvements

* update dependency versions ([82b19cf](https://github.com/AlaskaAirlines/auro-banner/commit/82b19cf0bc79c068b346dfd9c7183ea434569ddd))

## [3.0.1](https://github.com/AlaskaAirlines/auro-banner/compare/v3.0.0...v3.0.1) (2024-10-08)


### Bug Fixes

* moves auro library to dependencies in package.json [#68](https://github.com/AlaskaAirlines/auro-banner/issues/68) ([e79b9bc](https://github.com/AlaskaAirlines/auro-banner/commit/e79b9bc6901b15cf7a9977060f32985412aaab5c))

# [3.0.0](https://github.com/AlaskaAirlines/auro-banner/compare/v2.0.7...v3.0.0) (2024-09-30)


### Bug Fixes

* resolve minor color theming issues [#57](https://github.com/AlaskaAirlines/auro-banner/issues/57) ([167aa4d](https://github.com/AlaskaAirlines/auro-banner/commit/167aa4da7295ef7be8ea4fad5933a67817dd6b6b))


### Features

* add attribute as tag name when custom registered ([6b08477](https://github.com/AlaskaAirlines/auro-banner/commit/6b08477ae8ce4ad00e0ea05f0ff70b961cb593ad))
* refactor color tokens with tier 3 tokens [#57](https://github.com/AlaskaAirlines/auro-banner/issues/57) ([26d976d](https://github.com/AlaskaAirlines/auro-banner/commit/26d976d313d48328d3cadaac52bb7f65f8108d32))
* use custom registered auro-header ([965ca98](https://github.com/AlaskaAirlines/auro-banner/commit/965ca98f02c10198ad3f4c8777a9c8bd727875b6))


### Performance Improvements

* refactor custom component registration config ([97a6262](https://github.com/AlaskaAirlines/auro-banner/commit/97a6262280f0ceebcbcb3b1e56331cde21895031))
* update dependencies ([15541ad](https://github.com/AlaskaAirlines/auro-banner/commit/15541ad6b091f0a948ea75bc9a5d00dcb4f21732))
* update dependencies ([70a4b58](https://github.com/AlaskaAirlines/auro-banner/commit/70a4b58d897e9c72debd7953b82df2d85b93d52f))
* update dependencies and lint configuration ([16a4b0f](https://github.com/AlaskaAirlines/auro-banner/commit/16a4b0f9142e0ddcc0464d1e98266e1efe32a0d8))


### BREAKING CHANGES

* trigger major release for color theme support #57

## [2.0.7](https://github.com/AlaskaAirlines/auro-banner/compare/v2.0.6...v2.0.7) (2024-05-13)


### Bug Fixes

* **docs:** use correct generateDocs script and file names ([374e7ca](https://github.com/AlaskaAirlines/auro-banner/commit/374e7caa0ed9aca0ac69abdd15f74518108c5151))


### Performance Improvements

* **images:** update path of images ([761113b](https://github.com/AlaskaAirlines/auro-banner/commit/761113bf72a8b5d6c1f3ec02015bad95aa7654b5))

## [2.0.6](https://github.com/AlaskaAirlines/auro-banner/compare/v2.0.5...v2.0.6) (2024-02-23)


### Performance Improvements

* **docs:** add custom registration example ([d0d3aa9](https://github.com/AlaskaAirlines/auro-banner/commit/d0d3aa922e7a9acc3dac736416952afa2c40093f))

## [2.0.5](https://github.com/AlaskaAirlines/auro-banner/compare/v2.0.4...v2.0.5) (2024-02-20)


### Bug Fixes

* **styles:** style template uses lit correctly ([4e2b2e2](https://github.com/AlaskaAirlines/auro-banner/commit/4e2b2e28dd35f6f1c78ecbc58832776868c27f4a))

## [2.0.4](https://github.com/AlaskaAirlines/auro-banner/compare/v2.0.3...v2.0.4) (2024-02-13)


### Performance Improvements

* update auro dependencies ([fcf9d6f](https://github.com/AlaskaAirlines/auro-banner/commit/fcf9d6fbd6cd02df1549c512cfa023b258f37d50))

## [2.0.3](https://github.com/AlaskaAirlines/auro-banner/compare/v2.0.2...v2.0.3) (2024-02-01)


### Performance Improvements

* update auro dependencies ([70279e0](https://github.com/AlaskaAirlines/auro-banner/commit/70279e0ec1f184d0920248def79443ad2f58cfea))

## [2.0.2](https://github.com/AlaskaAirlines/auro-banner/compare/v2.0.1...v2.0.2) (2024-01-31)


### Performance Improvements

* alaskaairux ref updates ([b2fa155](https://github.com/AlaskaAirlines/auro-banner/commit/b2fa1555a0391118a4672b9a0abfa772bd590d64))

## [2.0.1](https://github.com/AlaskaAirlines/auro-banner/compare/v2.0.0...v2.0.1) (2024-01-27)


### Performance Improvements

* update index per SSR support ([f628ee9](https://github.com/AlaskaAirlines/auro-banner/commit/f628ee94d2e1478cf33e206a5c6a1a5dd9bfc9b6))

# [2.0.0](https://github.com/AlaskaAirlines/auro-banner/compare/v1.1.0...v2.0.0) (2024-01-24)


### Documentation

* update demo template ([1c550c7](https://github.com/AlaskaAirlines/auro-banner/commit/1c550c716d39c92bdd3ec897d340989b4a4a0293))


### Features

* **modernize:** rebuild component using the generator [#49](https://github.com/AlaskaAirlines/auro-banner/issues/49) ([3ce06bb](https://github.com/AlaskaAirlines/auro-banner/commit/3ce06bb406c6af608c83be951287284679bdc904))
* **ssr:** add support for SSR projects [#50](https://github.com/AlaskaAirlines/auro-banner/issues/50) ([b276957](https://github.com/AlaskaAirlines/auro-banner/commit/b276957493a8e84e3f4eb409852e2ea5aee81e47))
* **tokens:** implement theming support [#51](https://github.com/AlaskaAirlines/auro-banner/issues/51) ([ebfc5e5](https://github.com/AlaskaAirlines/auro-banner/commit/ebfc5e50d300514b297858ddcd02c33471a35fd3))


### Performance Improvements

* **accordion:** update doc accordion attributes ([f8ae926](https://github.com/AlaskaAirlines/auro-banner/commit/f8ae92622585e8e03231df96388b2e5c6ed5f18a))


### BREAKING CHANGES

* This is NOT the breaking commit, but the npm namespace
has been updated and requires a MAJOR release.

Changes to be committed:
modified:   demo/index.md
modified:   docs/partials/index.md

# [1.1.0](https://github.com/AlaskaAirlines/aurolabs-banner/compare/v1.0.4...v1.1.0) (2021-07-09)


### Features

* add the row attribute so the banner can be stay as a row on mobile ([89f558e](https://github.com/AlaskaAirlines/aurolabs-banner/commit/89f558eb9af23c8abc2d1c165a14b9ab0654e438))

## [1.0.4](https://github.com/AlaskaAirlines/aurolabs-banner/compare/v1.0.3...v1.0.4) (2021-07-08)


### Bug Fixes

* make the rounder border an auro-variable ([ad854df](https://github.com/AlaskaAirlines/aurolabs-banner/commit/ad854df2a7ab1f11c6f7ed1d33053d8934d8f910))

## [1.0.3](https://github.com/AlaskaAirlines/aurolabs-banner/compare/v1.0.2...v1.0.3) (2021-06-16)


### Bug Fixes

* Add max-width to slotted images ([0b89484](https://github.com/AlaskaAirlines/aurolabs-banner/commit/0b8948418cb72a8f9ec37b02bb5202f3501fea5b))

## [1.0.2](https://github.com/AlaskaAirlines/aurolabs-banner/compare/v1.0.1...v1.0.2) (2021-06-07)


### Bug Fixes

* allow the inset property on mobile ([4625a2a](https://github.com/AlaskaAirlines/aurolabs-banner/commit/4625a2a38a209fd043a30aa50ac64d4d3c30272c))

## [1.0.1](https://github.com/AlaskaAirlines/aurolabs-banner/compare/v1.0.0...v1.0.1) (2021-06-02)


### Bug Fixes

* rename package from aurolabs-banner to auro-banner ([9a6979d](https://github.com/AlaskaAirlines/aurolabs-banner/commit/9a6979db96671b9403f1b3350b6416a4bafd1099))

# 1.0.0 (2021-06-01)


### Features

* fix linting issues ([5e52b2f](https://github.com/AlaskaAirlines/aurolabs-banner/commit/5e52b2f02524287b675d192c3f1485980be7d2d5))
* fix tests ([526c15d](https://github.com/AlaskaAirlines/aurolabs-banner/commit/526c15dcc111598cac632ecade26d95590d960bd))
