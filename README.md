Userscript to mark bleach's episodes as canon, mixed or filler on animeunity.so (jap, ita versions).

## Instructions for final users

### Prerequisites

- a browser installed on your computer
- a free extension (based on your browser) to manage/execute userscripts (we recommend [Violentmoney](https://violentmonkey.github.io/)) or alternatively:
  - [Tampermonkey](https://www.tampermonkey.net/)
  - [Greasemonkey](https://greasemonkey.github.io/)

### What to do

- install the [userscript](https://github.com/uniboxx/animeUnity-Bleach-Marker/raw/main/dist/animeunity-bleach-marker.user.js)
- open the [animeunity bleach page](https://www.animeunity.so/anime/69-bleach/) in your browser

## Instructions for developers

### Prerequisites

- [Nodejs](https://nodejs.org/en/download/) installed on your computer
- [git](https://git-scm.com/install/) installed on your computer
- a free package manager installed on your computer (we recommend [bun](https://bun.sh/)) or alternatively:
  - [npm](https://www.npmjs.com/)
  - [pnpm](https://pnpm.io/)
  - [yarn](https://yarnpkg.com/)
- a text editor (we recommend [VSCode](https://code.visualstudio.com/))

### What to do

1. clone the repository:

```
git clone https://github.com/uniboxx/animeUnity-Bleach-Marker
```

2. open the created folder in vscode
3. from inside the folder terminal (we suggest to use the integrated terminal in vscode) install project dependencies (in case of bun):

```
bun i
```

4. run local server:

```
bun dev
```

5. open the target website (in our case [https://www.animeunity.so/anime/69-bleach/](https://www.animeunity.so/anime/69-bleach/))

The entry source file is /src/main.ts

6. to build the file:

```
bun run build
```

That will create the .user.js file in /dist folder.

### Notes

- Typescript language is used.
- Thanks to vite-plugin-monkey developers have hot reload e ccs injected automatically and other nice stuff.
