import {WebGLRenderer, Scene, PerspectiveCamera, BoxGeometry, Mesh, MeshBasicMaterial} from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'


let height = window.innerHeight
let width = window.innerWidth
//渲染器
const myWebGLRender = new WebGLRenderer()
myWebGLRender.setSize(width, height)
document.body.appendChild(myWebGLRender.domElement)
//场景
const myScene = new Scene()
//摄象机
const myCamera = new PerspectiveCamera(90, width/height, 0.1, 1000)
myCamera.position.set(10,10,10)
myCamera.lookAt(myScene.position)
//物体
const boxMesh = new Mesh(new BoxGeometry(4,4,4), new MeshBasicMaterial())

myScene.add(boxMesh)
//控制器
var controls = new OrbitControls(myCamera, myWebGLRender.domElement);
controls.addEventListener('change', animate)

animate()

function animate(){
    myWebGLRender.render(myScene, myCamera)
    requestAnimationFrame(animate)
}