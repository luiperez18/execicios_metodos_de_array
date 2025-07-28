// Exercício 5: Desafio Integrador - E-commerce

const inventory = [
    { id: 1, name: "Smartphone", price: 500, stock: 10, category: "Eletrônicos", reviews: [4, 5, 3, 5, 4] },
    { id: 2, name: "Notebook", price: 1200, stock: 5, category: "Eletrônicos", reviews: [5, 4, 5, 5, 3] },
    { id: 3, name: "Camiseta", price: 25, stock: 20, category: "Vestuário", reviews: [4, 3, 4, 5] },
    { id: 4, name: "Cafeteira", price: 100, stock: 8, category: "Cozinha", reviews: [3, 2, 5, 4, 2] },
    { id: 5, name: "Fones de Ouvido", price: 80, stock: 15, category: "Eletrônicos", reviews: [4, 4, 5, 5, 5, 4] },
    { id: 6, name: "Calça Jeans", price: 45, stock: 0, category: "Vestuário", reviews: [4, 3, 4] },
    { id: 7, name: "Liquidificador", price: 70, stock: 3, category: "Cozinha", reviews: [3, 4, 3, 5] }
];
// a)
inventory.forEach(function(produto) {
    const nome = produto.name;
    const preco = produto.price;
    const estoque = produto.stock;
    console.log("Produto: " + nome + "- Preço: " + preco + " - Estoque: " + estoque);
});
// b)
const produtosEmEstoque =  inventory.filter(function(produto) {
    return produto.stock > 0;
});

console.log("Produtos em estoque:");
produtosEmEstoque.forEach(function(produto) {
    console.log("Produto: " + produto.name + "- Estoque: " + produto.stock);
});
// c)
const eletronicosBaratos = inventory.filter(function(produto) {
    return produto.category === "Eletrônicos" && produto.price < 1000;
});

console.log("Eletrônicos com preço abaixo de 1000:");
eletronicosBaratos.forEach(function(produto) {
    console.log("Produto: " + produto.name + "- Preço: " + produto.price);
});

// d)
const temProdutoSemEstoque = inventory.some(function(produto) {
    return produto.stock === 0;
});

console.log("Existe produto sem estoque?: " + temProdutoSemEstoque);

// e)
const todosTemReviews = inventory.every(function(produto) {
    return produto.reviews.length > 0;
});
console.log("Todos os produtos têm ao menos uma avaliação?: " + todosTemReviews);

// f)
const indiceCafeteira = inventory.findIndex(function(produto) {
    return produto.name === "Cafeteira";
});
console.log("O índice do produto 'Cafeteira' é: " + indiceCafeteira);

// g)
inventory.sort(function(a, b) {
    return a.price - b.price;
});
console.log("Produtos ordenados por preço: ");
inventory.forEach(function(produto) {
    console.log(`- ${produto.name} (R$ ${produto.price})`);
});

// h)
const produtosFiltrados = inventory.filter(function(produto) {
    const soma = produto.reviews.reduce(function(total,nota) {
        return total + nota;
    }, 0);
    const media = soma / produto.reviews.length;
    return produto.stock > 0 && media >= 4;
});

console.log("Produtos com estoque e média de avaliação >= 4: ");
produtosFiltrados.forEach(function(produto) {
    console.log(`- ${produto.name}`);
});

// i)
const inventoryComNota = inventory.map(function(produto) {
    const soma = produto.reviews.reduce(function(total,nota) {
        return total + nota;
    }, 0);
    const media = soma / produto.reviews.length;
    return {...produto,average: media};
});

console.log("Produtos com averageRating: ");
inventoryComNota.forEach(function(produto) {
    console.log(`- ${produto.name}: Média = ${produto.averageRating.toFixed(2)}`);
});

// j)
const produtoMelhorAvaliado = inventoryComNota.reduce(function(maiorAteAgora, produtoAtual) {
    if (produtoAtual.averageRating > maiorAteAgora.averageRating) {
        return produtoAtual;
    } else {
        return maiorAteAgora;
    }
});

console.log("Produto com maior média de avaliações: ");
console.log(`- ${produtoMelhorAvaliado.name} (Média: ${produtoMelhorAvaliado.averageRating.toFixed(2)})`);