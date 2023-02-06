



const products =[{ name: "Dano Milk", price: 500 }, { name: "Taaza Tea", price: 200}, { name: 'Fresh Sugar', price:300} ]
 let productsValue =0 ;
 for(let i = 0 ; i < products.length; i++){
    let productsObjects = products[i];
    let objectValue = Object.values(productsObjects);
    productsValue += objectValue[1]; 
 }

 console.log(productsValue);




//  another way 


