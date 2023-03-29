import {WebGLRenderer, SphereGeometry, BoxGeometry, Scene, Mesh, MeshLambertMaterial, PerspectiveCamera,AmbientLight,
    FogExp2,Fog
} from 'three'

let width = window.innerWidth
let height = window.innerHeight

let myWebGLRenderer = new WebGLRenderer({antialias:true})
myWebGLRenderer.setSize(width, height)
myWebGLRenderer.setClearColor(0xffffff)
document.body.appendChild(myWebGLRenderer.domElement)

let myScene =  new Scene()
myScene.fog = new Fog(0xff00ff,80,220)

let myPerspectiveCamera = new PerspectiveCamera(45, width/height, 0.1,1000)

myPerspectiveCamera.position.set(-15,88,58)
myPerspectiveCamera.lookAt(myScene.position)

let myAmbientLight= new AmbientLight('withe')
myAmbientLight.position.set(15,30,10)
myScene.add(myAmbientLight)

let myBoxMesh = new Mesh(new BoxGeometry(10,10,10),new MeshLambertMaterial({color:0x0000ff}))
myScene.add(myBoxMesh)

let mySpherrMesh = new Mesh(new SphereGeometry(10,10,10),new MeshLambertMaterial())

mySpherrMesh.position.set(30,0,0)
myScene.add(mySpherrMesh)

myWebGLRenderer.render(myScene,myPerspectiveCamera )
