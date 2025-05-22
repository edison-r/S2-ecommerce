# 🛒 SPRINT 2 - e-commerce and form validation

This is a front-end project focused on building a shopping cart experience and a responsive **checkout form** with custom **JavaScript validation**, created as part of my learning process. 

---

## Technologies Used

- HTML5, CSS & Bootstrap 5 (for layout and styling)
- JavaScript (DOM manipulation + validation)
- RegEx (for email, phone, password patterns)

---

## Cart Functionality

This project includes a basic **shopping cart** implementation with JavaScript logic, which allows:

### Add to cart
- Products are added to the `cart[]` array.
- If the product already exists, its quantity is incremented.

### View and print cart
- Products are listed in a modal with name, price, quantity, and subtotal.
- Totals are dynamically calculated.

### Discounts applied
- Products with offers apply discounts automatically if quantity requirements are met.

### Clear cart
- Empties the cart and updates all DOM elements (`count_product`, `total_price`, etc).

### Modular utility functions
Functions like `updatePage()`, `capitalizeString()`, and `applyPromotionsCart()` help keep code readable and reusable.

---

## Product Data

Product details (name, price, offers) are imported from an external file:  
```js
import { products } from "./products.js";
```

Each product may include:
- `name`
- `price`
- `offer`: `{ number, percent }` for quantity-based discounts.

## Features

### Field-level validation on `blur`
Each input field is validated when the user leaves it. If the value is incorrect, an error message appears below the field.

### Dynamic feedback
- Adds `is-invalid` class and error message on invalid input.
- Adds `is-valid` class when the input becomes valid.
- Error messages are contextual and easy to customize.

### Form-level validation on submit
All validations are handled with **vanilla JavaScript**, using **RegEx** and logic functions for field-specific rules. 
The UI is built with **HTML5** and **Bootstrap 5**. It was given to me done to focus on the logic part, I did minot changes to adapt it to my code.

### Custom validation logic per field
Implemented using reusable functions.

---

## Project Structure

```
📁 js
   ├── checkout.js     ← custom validation logic
   ├── shop.js         ← product logic (from the cart, if used)
   └── products.js     ← json with the products

📁 css
   └── styles.css
📁 images
   ├── favicon.ico
   ├── product.svg 
   └── empty_cart.png  ← for future improving
      
.gitignore
checkout.html         ← form UI with validation
index.html            ← principal page 
README.md             ← this file
```

---

## Key Learnings

- How to work with event listeners like `blur` and `submit`.
- How to modularize.
- DOM manipulation for error handling and styling.
- Writing reusable validator functions for different fields.
- Handling forms in a clean and user-friendly way.

---

## Possible Improvements

- The getFieldError function performs several checks depending on the fieldId. A more scalable alternative would be to have one function per field.
- Save form data locally or send via fetch/AJAX.
- Level 2 & 3 of the sprint.
- Add visual indicators (icons, real-time counters).
- Improve the cart UX/UI, adding an image when is empty.

---

## My Dev Journal

My journey into programming began in a non-visual environment. It taught me a lot of logic and discipline, but I always felt a disconnect — I couldn’t really *see* the impact of my code. I kept wondering: *"When will I finally build something that feels alive?"*

Well... this project was **it**.  
The moment I started seeing how JavaScript interacts with the real world — forms, user feedback, dynamic data — everything clicked.  
And I LOVED it. ❤️

At first, I struggled — a lot.  
I lacked a solid foundation in things like array methods, loops, functions… and I felt overwhelmed. But here’s a reminder to myself (and anyone else who needs it):  
> Don’t be afraid to take a step back to strengthen your basics.

I did exactly that — revisited the fundamentals — and it changed everything.  

Now, not only do I understand more, but I can also **see my progress**, and that’s an amazing feeling. ⚡️
