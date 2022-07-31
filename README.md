# Tree-shake Lodash in Next.js PoC

## Build output

- With `lodash`

```ini {hl_lines=[2]}
Page                                       Size     First Load JS
┌ ○ /                                      30 kB           107 kB
├   /_app                                  0 B            77.4 kB
├ ○ /404                                   194 B          77.6 kB
└ λ /api/hello                             0 B            77.4 kB
...
```

- With `lodash-es`. The homepage size reduces by 5 times.

```ini {hl_lines=[2]}
Page                                       Size     First Load JS
┌ ○ /                                      6.16 kB        84.1 kB
├   /_app                                  0 B              78 kB
├ ○ /404                                   186 B          78.2 kB
└ λ /api/hello                             0 B              78 kB
...
```

## Analyzers

- [`lodash`](https://nauda.dev/misc/analyze_lodash/client.html)
- [`lodash-es`](https://nauda.dev/misc/analyze_lodash-es/client.html)

This repo is used as a PoC for [this blog post](https://nauda.dev/blog/lap-trinh/nextjs/lodash-the-right-way/).
