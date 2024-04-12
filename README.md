# React Vite Translate

## Library
- i18next
- react-i18next

## Crie um arquivo dentro do src > i18n > index.ts, locales
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

