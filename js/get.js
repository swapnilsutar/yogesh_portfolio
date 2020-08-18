window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if(this.scrollY <= 800) nav.className = ''; else nav.className = 'scroll';
  };


