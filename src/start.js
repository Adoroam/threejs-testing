
var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
// (fov, aspect, near render, far render )
var renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

var geometry = new THREE.BoxGeometry(1, 1, 1)
// width, height, depth, widthSegments*, heightSegments*, depthSegments*)
// *optional (number of segmented faces along the n of the sides)
var material = new THREE.MeshLambertMaterial({ color: 0xff0000 })
var cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 5

var light = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(light)
var light2 = new THREE.PointLight(0xffffff, 1)
light2.position.set(100, 100, 0)
scene.add(light2)

var render = function () {
  requestAnimationFrame(render)
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01

  renderer.render(scene, camera)
}

render()
