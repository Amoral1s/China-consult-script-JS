document.addEventListener('DOMContentLoaded', () => {
  const renderFunc = () => {
    const newDiv = document.createElement('div');
          const body = document.querySelector('body');
          newDiv.innerHTML = `
          <div class="overlay-inter"></div>
          <div class="pop-inter">
            <div class="close-inter">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clip-path="url(#clip0_34_1862)">
                <path d="M15 1L1 15M1 1L15 15" stroke="#111827" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 1L1 15M1 1L15 15" stroke="black" stroke-opacity="0.2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_34_1862">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
                </defs>
              </svg>
            </div>
            <div class="pop-inter__wrap">
              <img src="https://consultinchina.ru/wp-content/uploads/2023/12/avatar.png" alt="help">
              <b>Здравствуйте, я Иван из Consultinchina</b>
              <p>Мы являемся Российским партнером данного поставщика и поможем вам в сопровождении заказа и доставки необходимого товара</p>
              <a href="https://consultinchina.ru/#open">Подробнее</a>
            </div>
          </div>
          <style> 
            .overlay-inter{display:block;width:100%;height:100%;top:0;bottom:0;right:0;left:0;position:fixed;background-color:rgba(0,0,0,.5);z-index:1000}.pop-inter{z-index:1200;display:block;width:450px;border-radius:50px;padding:40px;max-width:calc(100vw - 10px);top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:fixed;background:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0}.pop-inter .close-inter{position:absolute;top:40px;right:40px;cursor:pointer;z-index:20}.pop-inter__wrap{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.pop-inter__wrap img{display:-webkit-box;display:-ms-flexbox;display:flex;width:220px;aspect-ratio:1/1;-o-object-fit:cover;object-fit:cover;border-radius:100%;margin-bottom:30px}.pop-inter__wrap b{font-size:36px;font-weight:700;line-height:.9;margin-bottom:16px;display:block;text-align:center;letter-spacing:-1.8px;font-family:sans-serif}.pop-inter__wrap p{display:block;text-align:center;margin-bottom:30px;font-size:16px;font-weight:400;font-family:sans-serif;line-height:1.5;letter-spacing:-.48px}.pop-inter__wrap a{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:64px;border-radius:12px;-webkit-transition:.2s;-o-transition:.2s;transition:.2s;cursor:pointer;text-decoration:none;color:#fff;background-color:red;transition:.2s}.pop-inter__wrap a:hover{opacity:.8;-webkit-transition:.2s;-o-transition:.2s;transition:.2s}@media (max-width:578px){.pop-inter{padding-left:15px;padding-right:15px;padding-top:15px;border-radius:15px;padding-bottom:15px;width:300px}.pop-inter .close-inter{right:20px;top:20px}.pop-inter img{width:120px}.pop-inter b{font-size:18px;letter-spacing:normal;margin-bottom:10px}.pop-inter p{font-size:14px;letter-spacing:normal;margin-bottom:15px}.pop-inter a{max-height:50px;margin-bottom:0}}
          </style>
          `
          body.appendChild(newDiv);
          const overlay = document.querySelector('.overlay-inter');
          const popup = document.querySelector('.pop-inter .close-inter');
          overlay.addEventListener('click', () => {
            overlay.style.display = 'none';
            popup.parentElement.style.display = 'none';
          });
          popup.addEventListener('click', () => {
            overlay.style.display = 'none';
            popup.parentElement.style.display = 'none';
          });
          if (!localStorage.getItem('opened')) {
            localStorage.setItem('opened', 'opened');
          }
  }

  fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ip = data.ip;
    fetch(`https://ipapi.co/${ip}/country/`)
      .then(response => response.text())
      .then(data => {
        if (data.trim() == 'RU') {
          setTimeout(() => {
            renderFunc();
          }, 5000);
        } 
      })
      .catch(error => {
        console.error(error);
      });
  })
  .catch(error => {
    console.error(error);
  });

});
