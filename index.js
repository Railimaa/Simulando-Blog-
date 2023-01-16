const Author = require('./Author');

const lucas = new Author("Lucas Silva")
const post = lucas.writePost(`Meu dia`, `Hoje foi muto bom, pois fiz tudo que devia ser feito,. Estou disciplinado e logo chegarei no meu objetivo` )
post.addComent("Amanda Diniz", "Parabens Lucas, continue assim!")
post.addComent("Barbara", "Parabens Lucas, você vai ser gigante")
console.log(lucas)
console.log(post)

const amanda = new Author("Amanda Andrade")
const post1 = amanda.writePost("Neymar", "Eu amo o neymar mano !")
post1.addComent("Leo", "Slk quem nao ama? ")
console.log(amanda)
console.log(post1)

const julia = new Author("Julia")
julia.writePost("Meu Dog", "Eu amo meu cachorro, ele é muito fofinho")
console.log(julia)



