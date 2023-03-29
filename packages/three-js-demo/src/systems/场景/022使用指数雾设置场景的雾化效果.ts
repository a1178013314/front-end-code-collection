import {WebGLRenderer, Scene, BoxGeometry, PerspectiveCamera, Mesh, MeshLambertMaterial, MeshBasicMaterial, FogExp2} from 'three'

const myRender = new WebGLRenderer({antialias: true})
myRender.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(myRender.domElement)

const myScence = new Scene()

myScence.fog = new FogExp2('white', 0.025)

const myCamera = new PerspectiveCamera(90, window.innerHeight/innerHeight, 0.5, 1000)
myCamera.position.set(30,30,30)
myCamera.lookAt(myScence.position)

const boxMesh = new Mesh(new BoxGeometry(20,20,20), new MeshBasicMaterial({color: 'darkgreen'}))
myScence.add(boxMesh)

myRender.render(myScence, myCamera)
// function animate(){}
