import {chromaKeyShader} from './chromakey'
AFRAME.registerShader('chromakey', chromaKeyShader)

AFRAME.registerComponent('play-video', {
  init() {
    console.log('init')
    const playVideo = () => {
      console.log('found')
      const el = document.getElementById('videoEl')
      el.setAttribute('animation', 'property: material.opacity; from: 0; to: 1; dur: 1000')
      document.getElementById('video').play()
      this.el.sceneEl.removeEventListener('xrimagefound', playVideo)
    }

    this.el.sceneEl.addEventListener('xrimagefound', playVideo)
  },
})

// load image target
const onxrloaded = () => {
  XR8.XrController.configure({
    imageTargetData: [
      require('../image-targets/shirt.json'),
    ],
  })
}

window.XR8 ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded)