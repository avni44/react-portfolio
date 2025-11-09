## React Portfolio – Avanti Hirnaik

A responsive and visually appealing personal portfolio website built using React.js
This website showcases my projects, skills, resume, and contact details, reflecting my professionalism and expertise in web development.

---

## Features

- Clean and modern React-based portfolio design  
- Responsive layout for seamless experience across all devices  
- Lazy loading implemented for faster performance  
- Smooth navigation with anchor-based scrolling  
- Deployed live with SSL-secured hosting

---

## Sections Included

1. **About Me** – A brief introduction about myself  
2. **Projects** – Showcases my major projects with descriptions  
3. **Skills** – Displays my technical skills and tools used  
4. **Resume** – Includes a downloadable resume link  
5. **Contact** – Provides contact information and email link

---

## Technologies Used

- **Frontend:** React.js, HTML5, CSS3  
- **Hosting:** Netlify  
- **Build Tools:** npm, React Scripts  
- **Version Control:** Git & GitHub  

---

## Optimization Techniques

- **Lazy Loading:** Components and images load dynamically for better performance  
- **Minification:** CSS and JavaScript files minimized using `npm run build`  
- **Responsive Design:** Tested across devices (desktop, tablet, mobile)  
- **Smooth Scrolling:** Implemented for improved user experience  

---

## Testing and Validation

### ✅ Responsiveness Testing
- Verified on Chrome DevTools (iPhone, Pixel, iPad).
- Issue: Sections were initially cut off on mobile view.
- **Fix Applied:**
  ```css
  section {
    min-height: 100vh;
    padding: 4rem 1rem;
  }

  @media (max-width: 768px) {
    section {
      flex-direction: column;
      padding: 2rem 1rem;
      text-align: center;
    }
  }

## Challenges Faced & Solutions
Sections cutting off on mobile	
Solution: Replaced height with min-height and added responsive padding
Image loading slowly	
Solution: Implemented lazy loading
Build deployment issue	
Solution: Configured correct output folder for Netlify deployment

## Screenshots:
![alt text](<Screenshot 2025-11-09 at 7.10.13 PM.png>) ![alt text](<Screenshot 2025-11-09 at 7.10.53 PM.png>)