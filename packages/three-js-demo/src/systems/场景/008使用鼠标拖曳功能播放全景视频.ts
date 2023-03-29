import {
    WebGLRenderer, Scene, PointLight, OrthographicCamera, BoxGeometry,
    MeshLambertMaterial, Mesh, MeshNormalMaterial, PerspectiveCamera, CameraHelper,
    SphereGeometry, MeshBasicMaterial, Vector3, TextureLoader, WebGLCubeRenderTarget,
    MathUtils, Texture, Camera, VideoTexture

} from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let myRenderer : WebGLRenderer, myScene : Scene, myCamera : Camera, myTexture: Texture,
myMaterial : MeshBasicMaterial, myVideoMesh: Mesh

//DOM
const containerDom = document.getElementById("three-container") as HTMLElement
const myWidth = window.innerWidth
const myHeight = window.innerHeight
const k = myWidth / myHeight
//渲染器
myRenderer = new WebGLRenderer({
    antialias: true,
    alpha: true
})
myRenderer.setSize(myWidth, myHeight)
document.body.appendChild(myRenderer.domElement)
//场景
myScene = new Scene()
//摄像机
myCamera = new PerspectiveCamera(75,k,1,1100)
myCamera.position.set(10, 3, 0)
myCamera.lookAt(0, 0, 0)
//相机控制
const controls = new OrbitControls(myCamera, myRenderer.domElement)
controls.update()
//创建视频播放
let videoDom = document.createElement('video')
videoDom.loop = true
videoDom.muted = true
videoDom.style.display = 'none'
videoDom.src = './images/video02.mp4'
document.body.appendChild(videoDom)
videoDom.load()
videoDom.play()

//创建球体
let mySphereGeometry = new SphereGeometry(500, 60, 40)
mySphereGeometry.scale(-1, 1, 1)

myTexture = new VideoTexture(videoDom)
myMaterial =  new MeshBasicMaterial({map:myTexture})
myVideoMesh = new Mesh(mySphereGeometry, myMaterial)

myScene.add(myVideoMesh)
animate()
function animate(){
    myRenderer.render(myScene, myCamera)
    requestAnimationFrame(animate);
}

