function $(query) {
    return document.querySelector(query);
  }
  
  function getSource(n) {
    return `conic-gradient(var(--theme) ${n}%, rgba(0,0,0,0.1) ${n}%)`;
  }
  
  window.onscroll = () => {
    const scroll = Math.round(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100);
    $("#scroll-circular").style.background = getSource(scroll);
  };
  
  // Scroll to top on click
  $("#scroll-circular").addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
 