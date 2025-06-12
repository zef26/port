const hamburger = document.querySelector(".hamburger"),
        menu = document.querySelector(".menu"),
        closeElem = document.querySelector(".menu__close"),
        overlay = document.querySelector (".menu__overlay")


hamburger.addEventListener('click' , () => {
  menu.classList.add('active');
} );

closeElem.addEventListener('click' , () => {
  menu.classList.remove('active');
} );
overlay.addEventListener('click' , () => {
  menu.classList.remove('active');
} );

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

      counters.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;


      });

      const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault()
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

const form = document.querySelector('.contacts__form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('text').value;

  const body = {
    name,
    email,
    message,
    secret: 'CHEZAHYNA' // 🔐 должен совпадать с тем, что в Render (SECRET_KEY)
  };

  try {
    const response = await fetch('https://tg-bot-xzmm.onrender.com/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (response.ok) {
      alert('Сообщение отправлено!');
      form.reset();
    } else {
      alert('Ошибка при отправке. Попробуйте позже.');
    }
  } catch (error) {
    alert('Ошибка соединения.');
    console.error(error);
  }
});
