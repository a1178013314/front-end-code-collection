//创建一个three渲染
import {WebGLRenderer, Scene, PerspectiveCamera, BoxGeometry, Mesh, MeshBasicMaterial, SphereGeometry} from 'three'
import {DragControls} from 'three/examples/jsm/controls/DragControls'

let height = window.innerHeight
let width = window.innerWidth

const myWebGLRender = new WebGLRenderer({antialias:true})
myWebGLRender.setSize( width, height)
document.body.appendChild(myWebGLRender.domElement)
const myScene = new Scene()

const myPerspectiveCamera = new PerspectiveCamera(90, width/height, 0.5, 1000)

myPerspectiveCamera.position.set(10,10,10)
myPerspectiveCamera.lookAt(myScene.position)

const myBox = new Mesh(new BoxGeometry(2,2,2), new MeshBasicMaterial())
myScene.add(myBox)
const myShape = new Mesh(new SphereGeometry(5,5,5), new MeshBasicMaterial())
myShape.position.set(-10,0,0)
myScene.add(myShape)


animate()

function animate(){
    myWebGLRender.render(myScene, myPerspectiveCamera)
    requestAnimationFrame(animate)
}

const controls = new DragControls([myBox, myShape], myPerspectiveCamera, myWebGLRender.domElement);