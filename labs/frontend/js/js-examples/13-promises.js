// A Promise is an object representing the eventual completion or failure of an asynchronous operation. It exists in one of three states:

// Pending: Initial state, neither fulfilled nor rejected
// Fulfilled: Operation completed successfully
// Rejected: Operation failed

// Create a new Promise
const myPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation (like fetching data)
  setTimeout(() => {
    const success = true; // Change to false to simulate failure
    
    if (success) {
      // Operation succeeded
      resolve("Operation completed successfully!");
    } else {
      // Operation failed
      reject("Error: Operation failed");
    }
  }, 2000); // Completes after 2 seconds
});

// Using the Promise
console.log("Operation started...");

myPromise
  .then((result) => {
    // This runs if the Promise is resolved
    console.log(result);
  })
  .catch((error) => {
    // This runs if the Promise is rejected
    console.log(error);
  })
  .finally(() => {
    // This runs regardless of success or failure
    console.log("Operation finished");
  });

console.log("Code continues to run while Promise is pending");


// Promise Chaining

// fetchUserData()
//   .then(userData => fetchUserPosts(userData.id))
//   .then(posts => displayPosts(posts))
//   .catch(error => handleError(error));

// Promise All

// Promise.all([fetchUsers(), fetchProducts(), fetchOrders()])
//   .then(([users, products, orders]) => {
//     // All promises resolved
//   })
//   .catch(error => {
//     // Any promise rejected
//   });

// Promise Race

// Promise.race([fetchFromServer1(), fetchFromServer2()])
//   .then(result => console.log(result))
//   .catch(error => console.error(error));