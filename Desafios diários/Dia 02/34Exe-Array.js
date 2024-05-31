function meuEscopo () {
   const form = document.querySelector('.form')
   const resultado = document.querySelector('.resultado')

   const pessoas = [];

      function recebeEventoForm (evento) {
         evento.preventDefault();

         const nome = form.querySelector('.nome');
         const sobrenome = form.querySelector('.sobrenome');
         const peso = form.querySelector('.peso');
         const altura = form.querySelector('.altura');

         
         pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
         })
         console.log(pessoas);

         resultado.innerHTML += `<h3>Olá ${nome.value} ${sobrenome.value}, recebemos o seu peso de: ${peso.value}kg e altura: ${altura.value}m </h3>`

         // Alterando a propriedade de exibição para tornar a div visível
         resultado.style.display = "block";
      }
      form.addEventListener('submit', recebeEventoForm);
   
      

}
meuEscopo();