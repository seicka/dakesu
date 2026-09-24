// shared/petals.js — Animación ligera de pétalos flotantes para tools.dakesu.net
(function initPetalsCanvas() {
  if (typeof window === 'undefined') return;

  function setup() {
    let canvas = document.getElementById('petalsCanvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'petalsCanvas';
      canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:1;';
      document.body.prepend(canvas);
    }

    const ctx = canvas.getContext('2d');
    let w, h;
    let petals = [];
    const COUNT = 22;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    class Petal {
      constructor() {
        this.reset(true);
      }
      reset(initial = false) {
        this.x = Math.random() * w;
        this.y = initial ? Math.random() * h : -20;
        this.size = 7 + Math.random() * 8;
        this.speedY = 0.5 + Math.random() * 0.9;
        this.speedX = 0.3 + Math.random() * 0.7;
        this.angle = Math.random() * Math.PI * 2;
        this.spin = (Math.random() - 0.5) * 0.02;
        this.flip = Math.random() * Math.PI;
        this.flipSpeed = 0.01 + Math.random() * 0.02;
        this.alpha = 0.22 + Math.random() * 0.35;
      }
      update() {
        this.y += this.speedY;
        this.x += Math.sin(this.angle) * 0.6 + this.speedX * 0.3;
        this.angle += this.spin;
        this.flip += this.flipSpeed;

        if (this.y > h + 20 || this.x > w + 20) {
          this.reset();
        }
      }
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.scale(1, Math.cos(this.flip));

        const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
        ctx.fillStyle = isDark
          ? `rgba(255, 175, 195, ${this.alpha})`
          : `rgba(235, 110, 135, ${this.alpha * 0.75})`;

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-this.size / 2, -this.size / 2, -this.size / 2, this.size / 2, 0, this.size);
        ctx.bezierCurveTo(this.size / 2, this.size / 2, this.size / 2, -this.size / 2, 0, 0);
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < COUNT; i++) {
      petals.push(new Petal());
    }

    function loop() {
      ctx.clearRect(0, 0, w, h);
      for (let p of petals) {
        p.update();
        p.draw();
      }
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }
})();
