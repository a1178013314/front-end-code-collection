import {
    WebGLRenderer, Scene, PointLight, OrthographicCamera, BoxGeometry,
    MeshLambertMaterial, Mesh, MeshNormalMaterial, PerspectiveCamera, CameraHelper,
    SphereGeometry, MeshBasicMaterial, Vector3, TextureLoader, WebGLCubeRenderTarget,
    MathUtils, Texture, Camera, VideoTexture,BufferGeometry,Float32BufferAttribute,PointsMaterial,
    Points

} from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let myRenderer: WebGLRenderer, myScene: Scene, myCamera: PerspectiveCamera, myTextures: Texture[],
    myImage: HTMLImageElement


//DOM
const containerDom = document.getElementById("three-container") as HTMLElement
const myWidth = window.innerWidth
const myHeight = window.innerHeight
const aspectRatio = myWidth / myHeight
//渲染器
myRenderer = new WebGLRenderer()
myRenderer.setSize(myWidth, myHeight)
myRenderer.setClearColor('black', 1)
document.body.appendChild(myRenderer.domElement)
//场景
myScene = new Scene()
//摄像机
myCamera = new PerspectiveCamera(90, aspectRatio, 0.1, 1000)
myCamera.position.x = 0
myCamera.position.y = 0
myCamera.position.z = 0.0001
const controls = new OrbitControls(myCamera, myRenderer.domElement)
controls.update()
//处理图片
myTextures = [];
for (var i = 0; i < 6; i++) {
    myTextures[i] = new Texture();
}
myImage = new Image()
myImage.src = './images/img120.jpg'
myImage.onload = () => {
    for (var i = 0; i < myTextures.length; i++) {
        let myCanvas = document.createElement('canvas')
        let myContext  = myCanvas.getContext('2d') as CanvasRenderingContext2D;
        myCanvas.height = myImage.height;
        myCanvas.width = myImage.height;

        myContext.drawImage(myImage, myImage.height * i, 0, myImage.height,
            myImage.height, 0, 0, myImage.height, myImage.height);
        myTextures[i].image = myCanvas;
        myTextures[i].needsUpdate = true;
    }

}

 //使用6幅贴图创建天空盒材质
 let myMaterials = [];
 for (let i = 0; i < 6; i++) {
     myMaterials.push(new MeshBasicMaterial({ map: myTextures[i] }));
 }
 //使用6幅贴图创建天空盒
 let myMesh = new Mesh(new BoxGeometry(1, 1, 1), myMaterials);
 //可以使用myMesh.geometry.scale(1,1,-1)或myMesh.geometry.scale(1,1,-1)
 //即六幅图像在立方体的里面，而不是外面（myMesh.geometry.scale(1,1,1);）
 myMesh.geometry.scale(1, 1, -1);
 myScene.add(myMesh);
 //渲染天空盒
 animate();
 function animate() {
     requestAnimationFrame(animate);
     myRenderer.render(myScene, myCamera);
 }



