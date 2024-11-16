document.addEventListener("DOMContentLoaded", () => {
  let skill = document.querySelector(".Skills");
  let exp = document.querySelector(".Expereince");
  let edu = document.querySelector(".Education");
  let ski_btn = document.querySelector(".skill");
  let expe_btn = document.querySelector(".expe");
  let edu_btn = document.querySelector(".edu");
  let buttons = document.querySelectorAll('.option-btn');
  const menuIcon = document.querySelector('.open');
  const closeIcon = document.querySelector('.close');
  const menuMain = document.querySelector('.menu-main');

  // Changing underline while selected
  buttons.forEach((button) => {
      button.addEventListener('click', () => {
          buttons.forEach((btn) => btn.classList.remove('active'));
          button.classList.add('active');
      });
  });

  // Changing option section
  ski_btn.addEventListener('click', () => {
      skill.classList.remove('invis');
      exp.classList.add('invis');
      edu.classList.add('invis');
  });

  expe_btn.addEventListener('click', () => {
      skill.classList.add('invis');
      exp.classList.remove('invis');
      edu.classList.add('invis');
  });

  edu_btn.addEventListener('click', () => {
      skill.classList.add('invis');
      exp.classList.add('invis');
      edu.classList.remove('invis');
  });

  // Changing main menu
  menuIcon.addEventListener('click', function() {
      menuMain.style.display = 'flex';
      closeIcon.style.display = 'block';
      menuIcon.style.display = 'none';
  });

  closeIcon.addEventListener('click', function() {
      menuMain.style.display = 'none';
      closeIcon.style.display = 'none';
      menuIcon.style.display = 'block';
  });

  // Intersection Observer to trigger animation on visibility
  const sectionsToAnimate = document.querySelectorAll('.animated');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show');
          } else {
              entry.target.classList.remove('show');
          }
      });
  });

  sectionsToAnimate.forEach(section => observer.observe(section));
});

document.addEventListener("DOMContentLoaded", () => {
  const servicesBoxes = document.querySelectorAll('.services-box.animated');
  
  // Intersection Observer to trigger animations when service boxes are in view
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show');
          }
      });
  }, { threshold: 0.1 });

  servicesBoxes.forEach(box => observer.observe(box));
});
