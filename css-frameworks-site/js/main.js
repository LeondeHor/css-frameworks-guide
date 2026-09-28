document.addEventListener('DOMContentLoaded', () => {
  // 1. Мобильное бургер-меню
  const btn = document.getElementById('burger-btn');
  const menu = document.getElementById('nav-menu');
  
  if (btn && menu) {
    btn.onclick = () => {
      menu.classList.toggle('is-open');
      btn.textContent = menu.classList.contains('is-open') ? '✕' : '☰';
    };
  }

  // 2. Подсветка активной ссылки в меню (автоматически)
  const currentUrl = window.location.href;
  document.querySelectorAll('.nav-right a').forEach(link => {
    if (link.href === currentUrl) link.classList.add('active');
  });

  // 3. Простая обработка всех форм (подписка и контакты)
  document.querySelectorAll('form').forEach(form => {
    form.onsubmit = (e) => {
      e.preventDefault(); // Останавливаем перезагрузку
      alert('Успешно выполнено! (Демонстрация работы JavaScript)');
      form.reset(); // Очищаем форму
    };
  });
});