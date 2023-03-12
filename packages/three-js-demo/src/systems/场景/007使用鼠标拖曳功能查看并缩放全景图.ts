import {
    WebGLRenderer, Scene, PointLight, OrthographicCamera, BoxGeometry,
    MeshLambertMaterial, Mesh, MeshNormalMaterial, PerspectiveCamera, CameraHelper,
    SphereGeometry, MeshBasicMaterial, Vector3, TextureLoader, WebGLCubeRenderTarget,
    MathUtils, Texture, Camera

} from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
let myRenderer: WebGLRenderer, myScene: Scene, myCamera: Camera

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
containerDom?.appendChild(myRenderer.domElement)

//场景
myScene = new Scene()
//摄像机
myCamera = new PerspectiveCamera(75, k, 1, 1100);
myCamera.position.set(10, 3, 0)
myCamera.lookAt(0, 0, 0)
//相机控制
const controls = new OrbitControls(myCamera, containerDom)
controls.update()

//创建全景球体
let mySphereGeometry = new SphereGeometry(40, 30, 30)
mySphereGeometry.scale(-1, 1, 1)
const myTextureLoader = new TextureLoader()
myTextureLoader.load('./images/img129.jpg', (texture) => {
    init(texture)

})
const init = (texture: Texture) => {
    let myMaterial = new MeshBasicMaterial({ map: texture });
    var mySphere = new Mesh(mySphereGeometry, myMaterial);
    myScene.add(mySphere)
    animate()
}


function animate() {
    myRenderer.render(myScene, myCamera)
    requestAnimationFrame(animate);
}



