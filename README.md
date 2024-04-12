# React Vite Translate

## Library
- i18next
- react-i18next

## Crie um arquivo dentro do src > i18n > index.ts, locales

No file index.ts, adicione
```ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ENUS from "./locales/en-us.json";
import PTBR from "./locales/pt-br.json";
import CN from "./locales/cn.json";

const resources = {
    'en-US': ENUS,
    'pt-BR': PTBR,
    "CN": CN
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en-US',
        interpolation: {
            escapeValue: false
        }
    })

export default i18n;    
```

Dentro da pasta locales, adiciona uma estrutura de json parecido com isso. A o campo "translation é obrigatório"
```json
{
    "translation": {
        "pages": {
            "home": {
                "title": "Welcome"
            }
        }
    }
}
```

### Comando para criar uma projeto com react + Vite
```bash
npm create vite@latest nome_projeto -- --template react-ts
```
entrar na pasta e executar npm install

## depois, adicione a biblioteca i18next e react-i18next

```bash
npm i --save react-i18next i18next
```

