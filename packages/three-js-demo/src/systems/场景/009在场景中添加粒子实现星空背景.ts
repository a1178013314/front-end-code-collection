import {
    WebGLRenderer, Scene, PointLight, OrthographicCamera, BoxGeometry,
    MeshLambertMaterial, Mesh, MeshNormalMaterial, PerspectiveCamera, CameraHelper,
    SphereGeometry, MeshBasicMaterial, Vector3, TextureLoader, WebGLCubeRenderTarget,
    MathUtils, Texture, Camera, VideoTexture,BufferGeometry,Float32BufferAttribute,PointsMaterial,
    Points

} from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let myRenderer : WebGLRenderer, myScene : Scene, myCamera : Camera, myTexture: Texture,
mySphereGeometry : SphereGeometry,mySphereMaterial:MeshBasicMaterial,mySphereMesh:Mesh,
myBufferGeometry : BufferGeometry,myPointsMaterial:PointsMaterial, myPoints:Points

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
myRenderer.setClearColor('black',1.0)
document.body.appendChild(myRenderer.domElement)

//场景
myScene = new Scene()
//摄像机
myCamera = new PerspectiveCamera(45,k,1,5000)
myCamera.position.z = 1000
//相机控制
const controls = new OrbitControls(myCamera, myRenderer.domElement)
controls.update()
//绿色球体
mySphereGeometry = new SphereGeometry(400,16,8)
mySphereMaterial = new MeshBasicMaterial({color:'green', wireframe:true})
mySphereMesh = new Mesh(mySphereGeometry, mySphereMaterial)
myScene.add(mySphereMesh)
// 绘制星空背景
myBufferGeometry = new BufferGeometry()
const vertices = [];

for (let i = 0; i < 3000; i++) {
    const x = MathUtils.randFloatSpread(2000)
    const y = MathUtils.randFloatSpread(2000)
    const z = MathUtils.randFloatSpread(2000)
    vertices.push(x,y,z)
}

myBufferGeometry.setAttribute( 'position', new Float32BufferAttribute( vertices, 3 ) );

myPoints = new Points(myBufferGeometry, new PointsMaterial({color:0xffffff}));
myScene.add(myPoints)

animate()
function animate(){
    let r = Date.now()*0.001
    mySphereMesh.position.x = 900* Math.cos(r)
    mySphereMesh.position.y = 900* Math.sin(r)
    mySphereMesh.position.z = 900* Math.sin(r)
    myRenderer.render(myScene, myCamera)
    requestAnimationFrame(animate);
}


// myRenderer.render(myScene, myCamera)