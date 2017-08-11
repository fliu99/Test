var myPicture = vRViewPlayer('#vr', {
  image: 'Image.jpg',
  is_stereo: false
})
window.addEventListener('load',myPicture);
myPicture.on('ready', function(event) {
  myPicture.addHotspot('creating-hotspot-1', {
    pitch: 0,
    yaw: 0,
    radius: 0.10,
    distance: 1
  });
  myPicture.addHotspot('hotspot2', {
    pitch: 0,
    yaw: 180,
    radius: 0.50,
    distance: 4
  });
  myPicture.addHotspot('hotspot3', {
    pitch: 0,
    yaw: 90,
    radius: 0.50,
    distance: 4
  });
  myPicture.addHotspot('hotspot4', {
    pitch: 0,
    yaw: -90,
    radius: 0.50,
    distance: 4
  });
});
myPicture.on('click',function(event){
  console.log('register all click events');
  if (event.id == 'creating-hotspot-1'){
    alert('i bEen clIKed!');
  }
  if (event.id == 'hotspot2'){
    alert('clicked hotspot2')
  }
  if (event.id == 'hotspot3'){
    alert('clicked hotspot3')
  }
  if (event.id == 'hotspot4'){
    alert('clicked hotspot4')
  }
});
