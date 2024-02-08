
function updateImage() {
    const desktopImage = document.getElementById('desktopImage');
    const mobileImage = document.getElementById('mobileImage');

    if (window.innerWidth <= 1024) {
        desktopImage.style.display = 'none';
        mobileImage.style.display = 'block';
    } else {
        desktopImage.style.display = 'block';
        mobileImage.style.display = 'none';
    }
}

// Call the function on page load and on window resize
window.addEventListener('load', updateImage);
window.addEventListener('resize', updateImage);




function toggleMenu() {
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const mobileNav = document.querySelector('.nav-mobile');
    const sidebar = document.querySelector('.sidebar');
    const header = document.querySelector('header');
  
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
    mobileNav.style.display = 'flex';
    sidebar.style.display = 'flex';
    header.classList.add('active');
  
    closeIcon.onclick = function () {
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
      mobileNav.style.display = 'none';
      sidebar.style.display = 'none';
      header.classList.remove('active');
    };
  
    mobileNav.addEventListener('click', function (event) {
      const target = event.target;
      const subList = target.querySelector('ul');
  
      if (subList) {
        subList.style.display = subList.style.display === 'block' ? 'none' : 'block';
        toggleArrowIcons(target);
      }
    });
  
    const nestedLinks = document.querySelectorAll('.nested-link');
  
    nestedLinks.forEach((nestedLink) => {
      nestedLink.addEventListener('click', function () {
        const nestedList = nestedLink.querySelector('.nested-list');
  
        if (nestedList) {
          nestedList.style.display = nestedList.style.display === 'block' ? 'none' : 'block';
          toggleArrowIcons(nestedLink);
        }
      });
    });
  }
  
  function toggleArrowIcons(element) {
    const downArrow = element.querySelector('.down-arrow');
    const upArrow = element.querySelector('.up-arrow');
  
    if (downArrow && upArrow) {
      downArrow.classList.toggle('hide-arrow');
      upArrow.classList.toggle('hide-arrow');
    }
  }
