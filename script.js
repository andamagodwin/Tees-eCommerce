const header=document.querySelector('.header');
const logoImage=document.querySelector('.logoImage');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('header-blurred');
      logoImage.src = "./images/Tees logo best white.svg";

    } else {
      header.classList.remove('header-blurred');
      logoImage.src = "./images/Tees logo text best.svg";
    }
});


const cartegories=document.getElementById("cartegories");
const products = document.getElementById("products");
const cartegory = document.querySelector(".cartegory");


document.addEventListener("DOMContentLoaded", function() {
  const categoryButtons = document.querySelectorAll(".category-btn");
  const productsContainer = document.getElementById("productsContainer");
  let productsData;

  // Fetch products data from JSON file
  fetch('products.json')
    .then(response => response.json())
    .then(data => {
      productsData = data;
      displayProducts('all');
    })
    .catch(error => console.error('Error fetching products:', error));

  categoryButtons.forEach(button => {
    button.addEventListener("click", function() {
      const category = this.getAttribute("data-category");
      displayProducts(category);
      categoryButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });

  function displayProducts(category) {
    const filteredProducts = (category === 'all') ? productsData : productsData.filter(product => product.category === category);

    productsContainer.innerHTML = '';

    filteredProducts.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');

      const image = document.createElement('img');
      image.src = product.image;
      image.alt = product.name;
      image.classList.add('cardImage');
      card.appendChild(image);

      const details = document.createElement('div');
      details.classList.add('cardDetails');
      card.appendChild(details);

      const name = document.createElement('h3');
      name.textContent = product.name;
      details.appendChild(name);

      const price = document.createElement('p');
      price.textContent = `Price: $${product.price}`;
      details.appendChild(price);

      const favoriteIcon = document.createElement('i');
      favoriteIcon.classList.add('fa', 'fa-heart');
      details.appendChild(favoriteIcon);

      const addToCartButton = document.createElement('button');
      addToCartButton.textContent = 'Add to Cart';
      addToCartButton.className = 'addToCart';
      addToCartButton.addEventListener('click', () => {
        // Implement add to cart functionality here
        alert(`Added ${product.name} to cart!`);
      });
      details.appendChild(addToCartButton);

      productsContainer.appendChild(card);
    });
  }
});




// the testimonials code
const testimonials = document.getElementById("testimonials");
const testimonialsBox = document.getElementById("testimonials-box");

fetch("testimonials.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((testimony) => {
      const testimonial=document.createElement("div");
      testimonial.className = "testimonial";
      
      const testimonialImage = document.createElement("div");
      testimonialImage.className = "testimonial-image";
      
      
      const profile=document.createElement("img")
      profile.src=testimony.image;
      profile.alt = "profile";
      profile.className="profile"
      testimonialImage.appendChild(profile);

      testimonial.appendChild(testimonialImage);

      const testimonialDetails = document.createElement("div");
      testimonialDetails.className = "testimonial-details";
      

      const testimonialName = document.createElement("div");
      testimonialName.className = "testimonial-name";

      const personName = document.createElement("span");
      personName.className = "person-name";
      personName.innerText = testimony.name;
      testimonialName.appendChild(personName);

      

      const testimonialText = document.createElement("div");
      testimonialText.className = "testimonial-text";
      testimonialText.innerHTML =
        `<span class="firstquote">&quot</span> <div class="text-testimony">${ testimony.testimony}</div><span class="lastLetter">&quot</span>`;
      


      const blockquote = document.createElement("blockquote");
      blockquote.className = "blockquote";
      blockquote.appendChild(testimonialText)
      testimonialDetails.appendChild(blockquote);

      testimonialDetails.appendChild(testimonialName);

    

      


      testimonial.appendChild(testimonialDetails);

      testimonialsBox.appendChild(testimonial);




      testimonials.appendChild(testimonialsBox);
    })
    console.log(data);
  })