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
          <div class="inter-chat">
            <div class="inter-chat__info">
              <div class="inter-chat__info-close">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <g clip-path="url(#clip0_91_1039)">
                  <path d="M12.1875 0.8125L0.8125 12.1875M0.8125 0.8125L12.1875 12.1875" stroke="#6B7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_91_1039">
                  <rect width="13" height="13" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
              </div>
              <b>Помогу с выкупом и доставкой</b>
              <p>
                Мы являемся Российским партнером данного поставщика и поможем вам в сопровождении заказа и доставки необходимого товара
              </p>
            </div>
            <div class="inter-chat__link">
              <img src="https://consultinchina.ru/wp-content/uploads/2023/12/avatar-3-5.jpg" alt="Avatar">
            </div>
          </div>
          <style> 
            .overlay-inter{display:none;width:100%;height:100%;top:0;bottom:0;right:0;left:0;position:fixed;background-color:rgba(0,0,0,.5);z-index:1000}.pop-inter{z-index:1200;display:none;width:450px;border-radius:50px;padding:40px;max-width:calc(100vw - 10px);top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:fixed;background:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0}.pop-inter .close-inter{position:absolute;top:40px;right:40px;cursor:pointer;z-index:20}.pop-inter__wrap{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.pop-inter__wrap img{display:-webkit-box;display:-ms-flexbox;display:flex;width:220px;aspect-ratio:1/1;-o-object-fit:cover;object-fit:cover;border-radius:100%;margin-bottom:30px}.pop-inter__wrap b{font-size:36px;font-weight:700;line-height:.9;margin-bottom:16px;display:block;text-align:center;letter-spacing:-1.8px;font-family:sans-serif}.pop-inter__wrap p{display:block;text-align:center;margin-bottom:30px;font-size:16px;font-weight:400;font-family:sans-serif;line-height:1.5;letter-spacing:-.48px}.pop-inter__wrap a{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:64px;border-radius:12px;-webkit-transition:.2s;-o-transition:.2s;transition:.2s;cursor:pointer;text-decoration:none;color:#fff;background-color:red;transition:.2s}.pop-inter__wrap a:hover{opacity:.8;-webkit-transition:.2s;-o-transition:.2s;transition:.2s}.inter-chat{display:block;position:fixed;right:20px;bottom:20px;z-index:900}.inter-chat__info{position:absolute;background-color:#fff;width:280px;padding:15px;right:calc(100% + 16px);bottom:0;-webkit-box-shadow:1px 1px 10px rgba(0,0,0,.1);box-shadow:1px 1px 10px rgba(0,0,0,.1);border-radius:20px;color:#000;font-family:sans-serif;display:none}.inter-chat__info::after{position:absolute;content:"";width:20px;height:20px;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);background-color:#fff;right:-8px;bottom:20px}.inter-chat__info b{font-size:18px;line-height:.9;letter-spacing:-.9px;font-weight:700;display:block;margin-bottom:10px}.inter-chat__info p{font-size:12px;line-height:1.4;display:block;line-height:1.2;font-weight:400;letter-spacing:-.36px;margin:0}.inter-chat__info-close{position:absolute;top:15px;right:15px;cursor:pointer}.inter-chat__link{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:100%;-webkit-box-shadow:1px 1px 8px rgba(0,0,0,.1);box-shadow:1px 1px 8px rgba(0,0,0,.1);width:60px;height:60px}.inter-chat__link:hover{-webkit-transition:.2s;-o-transition:.2s;transition:.2s;opacity:.7}.inter-chat__link img{border-radius:100%;aspect-ratio:1/1;display:block}@media (max-width:578px){.pop-inter{padding-left:15px;padding-right:15px;padding-top:15px;border-radius:15px;padding-bottom:15px;width:300px}.pop-inter .close-inter{right:20px;top:20px}.pop-inter img{width:120px}.pop-inter b{font-size:18px;letter-spacing:normal;margin-bottom:10px}.pop-inter p{font-size:14px;letter-spacing:normal;margin-bottom:15px}.pop-inter a{max-height:50px;margin-bottom:0}.inter-chat__info{padding:10px;width:220px}.inter-chat__info b{font-size:16px;padding-right:20px;margin-bottom:5px}.inter-chat__info p{font-size:10px}}
          </style>
          `
          body.appendChild(newDiv);
          const overlay = document.querySelector('.overlay-inter');
          const popup = document.querySelector('.pop-inter .close-inter');
          const infoText = document.querySelector('.inter-chat__info');
          const popLink = document.querySelector('.inter-chat__link');
          const popLinkClose = document.querySelector('.inter-chat__info-close');
          setTimeout(() => {
            infoText.style.display = 'block';
          }, 5000);
          popLinkClose.addEventListener('click', () => {
            popLinkClose.parentElement.style.display = 'none';
          })
          popLink.addEventListener('click', () => {
            overlay.style.display = 'block';
            infoText.style.display = 'none';
            popup.parentElement.style.display = 'block';
          });
          overlay.addEventListener('click', () => {
            overlay.style.display = 'none';
            popup.parentElement.style.display = 'none';
          });
          popup.addEventListener('click', () => {
            overlay.style.display = 'none';
            popup.parentElement.style.display = 'none';
          });
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
          }, 1000);
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

