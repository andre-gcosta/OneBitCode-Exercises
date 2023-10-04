// - Nos ES Modules existem diferentes formas de se realizar o processo de importação e exportação. Eles podem ser divididos da seguinte forma:
//     - **Export Nomeado:** o nome da variável/função exportada deve ser o mesmo na hora da importação. A importação é sempre feita com `import { ... } from 'path/to/file'` (com chaves). A exportação pode ser feita de duas formas:
//         - Inline: na mesma linha da declaração da variável/função, utilizando `export const ...` ou `export function ...`.
//         - Não-inline: após a declaração da variável/função e utilizando `export { ... }` (com chaves).
        
//         *Obs.: o export nomeado pode ser renomeado para evitar conflitos de nome utilizando o “as” na importação* `import { moduleA as newName } from './moduleA'`
        
//     - **Export Default:** o nome da variável/função exportada não precisa ser seguido na hora da importação, pode ser usado qualquer nome. A importação é sempre feita com `import ... from 'path/to/file'` (sem chaves). A exportação pode ser feita de duas formas:
//         - Inline: na mesma linha da declaração da variável/função, utilizando `export default = ...`  ou `export default function ...`.
//         - Não-inline: após a declaração da variável/função e utilizando `export { ... }` (com chaves).
// - Uma outra diferença ainda mais importante que a possibilidade de renomear o módulo importado é que **os exports nomeados podem ser usados várias vezes no mesmo arquivo, enquanto o export default é apenas um por arquivo.**

import { inline } from "./inline.js"
import defaultInline from "./inline.js"
import exportDefault, { group, a, b, c, d } from "./non-inline.js"

inline()
defaultInline()

group()
exportDefault()