window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if(this.scrollY <= 800) nav.className = ' navbar-expand-lg'; else nav.className = ' navbar-expand-lg scroll';
  };


