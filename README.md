# Platzom

Platzom es un idioma inventado para el curso de [Fundamentos de JavaScript](https://platzi.com/js) de [Platzi](https://platzi.com/), el mejor lugar de educación online.

## Descripción del idioma
Programa para inventar un idioma con Strings. Se recibe una palabra y se traduce con base a las siguientes reglas:
   - Si la palabra termina con "ar", se le quitan esos dos caracteres
   - Si la palabra inicia con z, se le añade "pe" al final
   - Si la palabra traducida tiene 10 o más letras, se debe partir a la mitad y unir con un guión de en medio.
   - Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas.

## Instalación
```
npm install platzom
```

## Uso
```
import platzom from 'platzom'
platzom("Programar") //Program
platzom("Zorro") // Zorrope
platzom("Zarpar") // Zarppe
platzom("abecedario") // abece-dario
platzom("sometemos") // SoMeTeMoS
```

## Créditos
- [Jorge Bustamante](https://twitter.com/JorchBte)

## Licencia
[MIT](https://opensource.org/licenses/MIT)
