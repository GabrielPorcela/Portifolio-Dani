Analise primeiro o `index.html`, `style.css` e `script.js` atuais antes de fazer qualquer alteração.

Quero melhorar **somente a experiência dos modais de vídeos e fotos** quando o usuário clica em **“Assistir”** ou **“Ver”** no portfólio.

### IMPORTANTE

* NÃO altere o layout geral do site.
* NÃO altere o design dos cards do portfólio.
* NÃO altere filtros, seções, header, hero, serviços ou qualquer outra parte da página.
* Preserve a identidade visual atual.
* Faça apenas as alterações necessárias nos modais e no JavaScript/CSS relacionado a eles.
* Não remova funcionalidades existentes.
* Mantenha os vídeos e fotos sendo carregados pelos dados atuais do `script.js`.

### 1. MODAL DE VÍDEO

Quando o usuário clicar em “Assistir”:

* Mostrar **somente o vídeo** dentro do modal.
* Remover do modal o título, descrição, plataforma, legenda ou qualquer outro texto relacionado ao vídeo.
* O vídeo deve ocupar uma área significativamente maior que a atual.
* Manter proporção correta do vídeo, principalmente para vídeos verticais.
* Não cortar o vídeo.
* O modal deve ter aparência limpa, elegante e profissional, semelhante à apresentação de um portfólio profissional de UGC Creator.

### 2. EXECUÇÃO DO VÍDEO

Melhorar a apresentação do vídeo durante a reprodução.

* A reprodução deve parecer profissional e não como um simples `<video>` jogado dentro de uma caixa.
* Utilizar corretamente `object-fit`, proporção, tamanho e posicionamento.
* Evitar barras, espaços ou enquadramentos desnecessários.
* O vídeo deve ficar visualmente centralizado e bem dimensionado dentro do modal.
* Manter os controles nativos do vídeo para permitir play/pause, volume e tela cheia.
* Não adicionar efeitos exagerados ou alterar o conteúdo original do vídeo.
* Se houver necessidade de alterar HTML/CSS/JS para melhorar a experiência de reprodução, faça isso de forma integrada ao código existente.

### 3. MODAL DE FOTO

Quando o usuário clicar em “Ver”:

* Mostrar **somente a foto**.
* Remover título, descrição, plataforma, legenda ou qualquer texto relacionado à foto.
* A foto deve ser significativamente maior que a apresentação atual.
* Preservar a proporção original da imagem.
* Não deformar nem cortar a foto.
* Centralizar a imagem no modal.
* O resultado deve parecer uma apresentação profissional de portfólio.

### 4. APRESENTAÇÃO PROFISSIONAL DAS FOTOS

O modal de fotos deve ter uma apresentação visual limpa e sofisticada.

* Fundo do modal adequado para destacar a imagem.
* Foto centralizada.
* Aproveitar o máximo possível da área disponível da tela sem ultrapassar os limites da viewport.
* Em telas grandes, permitir que a foto seja exibida em tamanho maior.
* Em celulares, adaptar automaticamente o tamanho da imagem.
* Usar `max-width`, `max-height` e `object-fit` adequadamente.
* Não distorcer a imagem.
* Não alterar o layout da seção de fotos fora do modal.

### 5. FECHAMENTO DOS MODAIS

Corrigir o comportamento de fechamento dos dois modais.

Tanto no modal de vídeo quanto no modal de foto:

* O botão `X` deve fechar o modal corretamente.
* A tecla `ESC` deve fechar o modal.
* Clicar no backdrop/fundo externo ao conteúdo também pode fechar o modal, caso isso seja compatível com a implementação atual.
* Ao fechar um vídeo, interromper completamente a reprodução e resetar o estado do player para que o vídeo não continue tocando em segundo plano.
* Ao fechar a foto, limpar/resetar o estado do modal quando necessário.
* O usuário NÃO deve precisar atualizar a página com `F5` para sair do vídeo ou da foto.
* O comportamento deve funcionar tanto no desktop quanto no mobile.

### 6. ACESSIBILIDADE E USABILIDADE

* Manter `aria-hidden` atualizado corretamente ao abrir e fechar os modais.
* O botão `X` deve continuar acessível.
* `ESC` deve funcionar enquanto o modal estiver aberto.
* Impedir que o modal fique preso na tela.
* Ao fechar, devolver o foco de maneira adequada quando possível.

### 7. IMPLEMENTAÇÃO

Antes de editar, identifique exatamente como `portfolioItems`, `photoItems`, `videoModal`, `photoModal`, `videoPlayer` e `photoModalThumb` estão sendo utilizados no `script.js`.

Depois faça a menor quantidade possível de alterações necessárias.

Ao terminar:

1. Verifique se os vídeos continuam abrindo corretamente.
2. Verifique se as fotos continuam abrindo corretamente.
3. Verifique se os filtros continuam funcionando.
4. Verifique o botão `X`.
5. Verifique a tecla `ESC`.
6. Verifique se o vídeo para completamente ao fechar.
7. Verifique responsividade em desktop e mobile.
8. Não faça alterações fora do escopo solicitado.

No final, explique de forma breve quais arquivos foram alterados e o que foi modificado em cada um.
