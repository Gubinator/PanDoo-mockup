window.addEventListener('DOMContentLoaded', () => {
  const config = {
    type: "carousel",
    perView: 3,
    gap: 24,
    focusAt: 'center',
    breakpoints: {
      640:{
        perView: 3
      },
      1024:{
        perView: 5
      }
    }
}

new Glide(".glide", config).mount();
  })


