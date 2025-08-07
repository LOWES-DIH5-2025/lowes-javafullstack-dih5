// Async Functions: Functions declared with the async keyword

// Always return a Promise, even if you return a non-Promise value
// Allow the use of await inside their body


// Await Operator: Used inside async functions to pause execution until a Promise resolves

// Makes asynchronous code look and behave more like synchronous code
// Unwraps Promises, returning their resolved values

// A function that returns a promise
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate API call
      console.log(`Fetching data for user ${userId}...`);
      const userData = {
        id: userId,
        name: 'John Doe',
        email: 'john@example.com'
      };
      
      if (userId > 0) {
        resolve(userData);
      } else {
        reject(new Error('Invalid user ID'));
      }
    }, 1500);
  });
}

// Function to fetch user posts
function fetchUserPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Fetching posts for user ${userId}...`);
      const posts = [
        { id: 1, title: 'First Post', body: 'Content of first post' },
        { id: 2, title: 'Second Post', body: 'Content of second post' }
      ];
      
      resolve(posts);
    }, 1000);
  });
}

// Using async/await to make asynchronous code look synchronous
async function getUserInfo(userId) {
  try {
    console.log('Starting to fetch user data...');
    
    // Await the first promise
    const userData = await fetchUserData(userId);
    console.log('User data received:', userData);
    
    // Await the second promise (only runs after the first completes)
    const userPosts = await fetchUserPosts(userData.id);
    console.log('User posts received:', userPosts);
    
    // Return combined data
    return {
      user: userData,
      posts: userPosts
    };
  } catch (error) {
    console.error('Error fetching user info:', error.message);
    throw error;
  }
}

// Call the async function
console.log('Program started');

getUserInfo(1)
  .then(result => {
    console.log('All data fetched successfully:', result);
  })
  .catch(error => {
    console.error('Final error handler:', error.message);
  })
  .finally(() => {
    console.log('Operation finished');
  });

console.log('Program continues execution while async operation runs...');