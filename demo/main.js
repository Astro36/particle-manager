import('../pkg/particle_manager')
  .then(({ ParticleManager }) => {
    const canvas = document.getElementById('particles');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const context = canvas.getContext("2d");
    context.fillStyle = 'white';
    context.strokeStyle = 'white';

    const particleManager = new ParticleManager(canvas, 100);
    const frameRequetCallback = () => {
      particleManager.update();
      window.requestAnimationFrame(frameRequetCallback);
    }
    window.requestAnimationFrame(frameRequetCallback);
  })
  .catch(console.error);
