import { WebGLRenderer,Scene,PerspectiveCamera ,SphereGeometry, Mesh, MeshBasicMaterial, Fog, SpotLight, PointLight,MeshLambertMaterial,MeshPhongMaterial} from 'three'

// let width = window.innerWidth
// let height = window.innerHeight

let width = 400
let height = 320

let myWebGLRenderer = new WebGLRenderer()
myWebGLRenderer.setSize(width, height)
// myWebGLRenderer.setClearColor(0xffffff)
document.body.appendChild(myWebGLRenderer.domElement)

let myScene = new Scene()
// myScene.fog = new Fog(0xffffff,50,60)

let myCamera = new PerspectiveCamera(90, width/height, 0.5, 1000)
myCamera.position.set(-55,17,31)
myCamera.lookAt(myScene.position)

const myLight = new PointLight('red')
myLight.position.set(400, 800, 300)
myScene.add(myLight)

// let mySpotLight = new SpotLight('red')
// mySpotLight.position.set(-30,60,60)
// myScene.add(mySpotLight)

let mySphere = new Mesh(new SphereGeometry(16,100,100), new MeshLambertMaterial({color:0XFFBF00}))
myScene.add(mySphere)

myWebGLRenderer.render(myScene, myCamera)
// animate()
// function animate(){
//     myWebGLRenderer.render(myScene, myCamera)
//     requestAnimationFrame(animate)
// }