// // // Q1>
// // function button(){
// //     let count=1;
// //     return function(){
// //         console.log(count++)
// //     }
// // }
// // const click=button();
// // click();
// // click();
// // click();

// // Q2
// // let order = {
// //     orderId: "123456",
// //     productName: "Laptop",
// //     quantity: 2,
// // };

// // const { orderId, productName, quantity } = order;

// // console.log(orderId);        // prints: 123456
// // console.log(productName);    // prints: Laptop
// // console.log(quantity);       // prints: 2

// // Q3
// function shoppingCart() {
//     const cart = []; // This is our cart array

//     return {
//         getCartItems: function() {
//             return cart; // Return the cart array
//         },
//         addItem: function(item) {
//             cart.push(item); // Add item to the cart array
//         },
//         removeItem: function(item) {
//             const index = cart.indexOf(item);
//             if (index > -1) {
//                 cart.splice(index, 1); // Remove item from the cart array
//             }
//         }
//     };
// }

// // Example usage:
// const cart = shoppingCart();
// console.log('Cart Items:', cart.getCartItems()); // OUTPUT: Cart Items: []

// cart.addItem('Apple');
// cart.addItem('Banana');
// console.log('Cart Items:', cart.getCartItems()); // OUTPUT: Cart Items: ['Apple', 'Banana']

// cart.removeItem('Apple');
// console.log('Cart Items:', cart.getCartItems()); // OUTPUT: Cart Items: ['Banana']

// // Q4
// function shoppingCart() {
//     const cart = []; // This is our cart array

//     return {
//         getCartItems: function() {
//             return cart; // Return the cart array
//         },
//         addItem: function(product) {
//             // Check if the product already exists in the cart
//             const existingProduct = cart.find(item => item.id === product.id);

//             if (existingProduct) {
//                 // Increment the quantity if the product exists
//                 existingProduct.quantity += 1;
//             } else {
//                 // Add the product to the cart with quantity 1
//                 const productToAdd = { ...product, quantity: 1 };
//                 cart.push(productToAdd);
//             }
//         }
//     };
// }


// const cart = shoppingCart();
// console.log('Cart Items:', cart.getCartItems()); // OUTPUT: Cart Items: []

// const product1 = { id: 1, name: 'Product 1', price: 10 };
// const product2 = { id: 2, name: 'Product 2', price: 20 };

// cart.addItem(product1);
// cart.addItem(product2);
// cart.addItem(product1);

// console.log('Cart Items:', cart.getCartItems());

// // Q5
// const shoppingCart = () => {
//     let cartItems = [];
  
//     const addItem = (product) => {
//       const existingItem = cartItems.find(item => item.id === product.id);
//       if (existingItem) {
//         existingItem.quantity++;
//       } else {
//         cartItems.push({ ...product, quantity: 1 });
//       }
//     };
  
//     const removeItem = (productId) => {
//       cartItems = cartItems.filter(item => item.id !== productId);
//     };
  
//     const getCartItems = () => {
//       return cartItems;
//     };
  
//     return { addItem, removeItem, getCartItems };
//   };
  
//   const cart = shoppingCart();
  
//   console.log('Cart Items:', cart.getCartItems());
//   // OUTPUT: Cart Items: []
  
//   const product1 = { id: 1, name: 'Product 1', price: 10 };
//   const product2 = { id: 2, name: 'Product 2', price: 20 };
  
//   cart.addItem(product1);
//   cart.addItem(product2);
//   cart.addItem(product1);
  
//   console.log('Cart Items:', cart.getCartItems());
 
//   cart.removeItem(2);
  
//   console.log('Cart Items:', cart.getCartItems());

// // // Q6
// // function createPlaylist(playlistName) {
// //     const songs = [];
// //     return {
// //       addSong: (songName, artist) => {
// //         songs.push({ songName, artist });
// //       },
// //       listSongs: () => {
// //         console.log(`${playlistName} Playlist: ${songs.map(song => `${song.songName} by ${song.artist}`).join(', ')}`);
// //       }
// //     };
// //   }
  
// //   function addSong(playlist, songName, artist) {
// //     playlist.addSong(songName, artist);
// //   }
  
// //   function listSongs(playlist) {
// //     playlist.listSongs();
// //   }
  
// //   const myPlaylist = createPlaylist("My Favorites");
// //   addSong(myPlaylist, "Song1", "Artist1");
// //   addSong(myPlaylist, "Song2", "Artist2");
// //   addSong(myPlaylist, "Song3", "Artist3");
// //   listSongs(myPlaylist);