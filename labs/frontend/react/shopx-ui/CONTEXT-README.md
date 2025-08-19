# Cart Context Documentation

## Overview
The Cart Context is a React Context implementation that provides global state management for the shopping cart functionality in the ShopX e-commerce application. It handles all cart-related operations including adding items, removing items, updating quantities, and clearing the cart.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
  - [CartProvider](#cartprovider)
  - [useCart Hook](#usecart-hook)
  - [Available Methods](#available-methods)
  - [Types](#types)
- [Implementation Details](#implementation-details)
- [Example Usage](#example-usage)

## Installation

The Cart Context is already set up in the application. It requires:
- React 16.8+ (for Hooks)
- TypeScript (for type definitions)

## Usage

### CartProvider

Wrap your application with the `CartProvider` component to make the cart context available throughout your component tree.

```tsx
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      {/* Your app components */}
    </CartProvider>
  );
}
```

### useCart Hook

Use the `useCart` hook in any component that needs to interact with the cart.

```tsx
import { useCart } from '../contexts/CartContext';

function MyComponent() {
  const { cartItems, addToCart, removeFromCart, cartCount } = useCart();
  // ...
}
```

### Available Methods

| Method | Parameters | Description |
|--------|------------|-------------|
| `addToCart` | `(product: Product) => void` | Adds a product to the cart or increments its quantity if already present |
| `removeFromCart` | `(productId: number) => void` | Removes a product from the cart |
| `updateQuantity` | `(productId: number, quantity: number) => void` | Updates the quantity of a specific product in the cart |
| `clearCart` | `() => void` | Removes all items from the cart |

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `cartItems` | `CartItem[]` | Array of items currently in the cart |
| `cartCount` | `number` | Total number of items in the cart (sum of quantities) |

## Types

### Product
```typescript
interface Product {
  id?: number;
  name?: string;
  title?: string;
  price: number;
  description: string;
  image?: string;
  rating?: number | { rate: number; count: number };
}
```

### CartItem
```typescript
interface CartItem extends Product {
  quantity: number;
}
```

## Implementation Details

The Cart Context uses React's Context API with TypeScript for type safety. It maintains the cart state using the `useState` hook and provides memoized callback functions using `useCallback` to prevent unnecessary re-renders.

### State Management
- Cart items are stored in an array of `CartItem` objects
- The `cartCount` is derived from the sum of all item quantities
- All state updates are handled immutably

### Performance Considerations
- Callback functions are memoized with `useCallback`
- The context value is memoized with `useMemo`
- Components using this context will only re-render when the cart items change

## Example Usage

### Adding a Product to Cart
```tsx
import { useCart } from '../contexts/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card">
      {/* Product details */}
      <button 
        onClick={() => addToCart(product)}
        className="btn btn-primary"
      >
        Add to Cart
      </button>
    </div>
  );
}
```

### Displaying Cart Count in Header
```tsx
import { useCart } from '../contexts/CartContext';

function Header() {
  const { cartCount } = useCart();

  return (
    <header>
      {/* Header content */}
      <span>Cart ({cartCount})</span>
    </header>
  );
}
```

### Viewing Cart Items
```tsx
import { useCart } from '../contexts/CartContext';

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <h3>{item.name || item.title}</h3>
          <p>${item.price.toFixed(2)}</p>
          <input 
            type="number" 
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id!, parseInt(e.target.value) || 0)}
            min="1"
          />
          <button onClick={() => removeFromCart(item.id!)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
```

## Best Practices

1. Always use the `useCart` hook within a component that's a descendant of `CartProvider`
2. Use the `cartCount` property for displaying the total number of items in the cart
3. For large applications, consider using a more robust state management solution like Redux or Zustand
4. Implement proper error boundaries around components that use the cart context
5. Consider adding local storage persistence for the cart if needed

## Troubleshooting

- **Cart not updating**: Ensure your component is wrapped with `CartProvider`
- **Type errors**: Verify that your product objects match the `Product` interface
- **Performance issues**: If you experience performance problems with large carts, consider implementing virtualization for the cart items list
