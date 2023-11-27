// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

const heading = document.querySelector('#heading'); // id="heading" 要素を取得

// 「動かす内容」の定数
const Keyframes = {
  opacity: [0, 1], // 不透明度：[開始時0, 終了時1]
  translate: ['0 50px', 0], // 開始時に縦方向を50px下げる
};

// 「動かす詳細」の定数
const options = {
  duration: 2000, // 再生時間を指定 2000=2秒
  easing: 'ease', // アニメーションが変化する速度やタイミングを指定
};

// 動かす要素.animate(動かす内容, 動かす詳細);
heading.animate(Keyframes, options);
