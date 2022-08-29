const user = {id : 1, name:"raihan Uddin", job:'actor' }
const stringified = JSON.stringify(user);

console.log(user );
console.log(stringified);

const shop = {
    owner :'Alia',
    address: {
        street: 'kochukhet voot er goli',
        city: 'ranbir',
        country:'BD'
    },
    product : ['laptop', 'mic',"monitor",'keyboard'],
    revenue : 450000,
    isOpen : true,
    isNew : false 
};

const shopJshon = JSON.stringify(shop);

console.log(typeof(shopJshon));
console.log(JSON.parse(shopJshon));