document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('img');

  images.forEach(function (image) {
    let clicked = false; // 변수 추가: 이미지가 클릭되었는지 여부를 추적하기 위한 플래그

    image.addEventListener('click', function () {
      if (!clicked) { // 이미지가 클릭되지 않은 경우
        images.forEach(function (img) {
          if (img !== image) {
            img.style.display = 'none';
          }
        });

        // 클릭한 이미지의 크기를 확대하고 화면 중앙에 위치시킵니다.
        image.style.width = '320px';
        image.style.top = '50%';
        image.style.left = '50%';
        image.style.transform = 'translate(-50%, -50%) rotate(0)';
        image.style.zIndex = '100';

        clicked = true; // 이미지가 클릭되었음을 표시합니다.
      } else { // 이미지가 클릭된 경우
        images.forEach(function (img) {
          img.style.display = 'initial'; // 다른 모든 이미지를 보이게 합니다.
        });

        // 클릭된 이미지의 확대와 위치를 초기화합니다.
        image.style.width = '221px';
        image.style.top = ''; // 초기화된 값으로 되돌립니다.
        image.style.left = ''; // 초기화된 값으로 되돌립니다.
        image.style.transform = ''; // 초기화된 값으로 되돌립니다.
        image.style.zIndex = ''; // 초기화된 값으로 되돌립니다.

        clicked = false; // 이미지가 클릭되지 않았음을 표시합니다.
      }
    });
  });
});
