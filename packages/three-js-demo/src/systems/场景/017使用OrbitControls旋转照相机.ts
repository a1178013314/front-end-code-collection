import {WebGLRenderer, Scene, PerspectiveCamera, BoxGeometry,Mesh, TextureLoader, MeshBasicMaterial, CubeTextureLoader,AmbientLight} from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const height = window.innerHeight
const width = window.innerWidth

//渲染器
const myWebGLRender = new WebGLRenderer()
myWebGLRender.setSize(width, height)
myWebGLRender.setClearColor(0xffffff)
document.body.appendChild(myWebGLRender.domElement)

//场景
const myScene = new Scene()

//灯光

const myLight = new AmbientLight(0xffffff)
myScene.add(myLight)

//相机
const myPerspectiveCamera = new PerspectiveCamera(90, width/height,0.5,1000)

myPerspectiveCamera.position.set(10,10,10)
myPerspectiveCamera.lookAt(myScene.position)
//相机控制器
let myOrbitControls = new OrbitControls(myPerspectiveCamera, myWebGLRender.domElement)
//动态阻尼，旋转灵敏度
myOrbitControls.enableDamping = true
//自动旋转
myOrbitControls.autoRotate = true
//加载图材质创建正方体
let myCubeTextureLoader = new CubeTextureLoader()
myCubeTextureLoader.setPath('./images/')
myCubeTextureLoader.load([
    'img081right.jpg', 'img082left.jpg',
    'img083top.jpg', 'img084bottom.jpg', 
    'img085front.jpg', 'img086back.jpg'
], (texture)=>{
    //正方体
    const boxMesh = new Mesh(new BoxGeometry(2,2,2), new MeshBasicMaterial({envMap: texture}))
    myScene.add(boxMesh)
})

animate()

function animate(){
    myWebGLRender.render(myScene, myPerspectiveCamera)
    myOrbitControls.update()
    requestAnimationFrame(animate)
}