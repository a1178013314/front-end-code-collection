import {
    WebGLRenderer, Scene, PointLight, OrthographicCamera, BoxGeometry,
    MeshLambertMaterial, Mesh, MeshNormalMaterial, PerspectiveCamera, CameraHelper,
    SphereGeometry, MeshBasicMaterial, Vector3, TextureLoader, WebGLCubeRenderTarget,
    MathUtils, Texture, Camera, VideoTexture,BufferGeometry,Float32BufferAttribute,PointsMaterial,
    Points,GridHelper,Color,DirectionalLight,
} from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {TransformControls} from 'three/examples/jsm/controls/TransformControls'

let myRenderer: WebGLRenderer, myScene: Scene, myCamera: PerspectiveCamera, myLight: DirectionalLight,
myTextures: Texture, myBoxGeometry:BoxGeometry, myMeshLambertMaterial:MeshLambertMaterial,
myTransformControls:TransformControls, myMesh:Mesh


//DOM
const containerDom = document.getElementById("three-container") as HTMLElement
const myWidth = window.innerWidth
const myHeight = window.innerHeight
const aspectRatio = myWidth / myHeight

//渲染器
myRenderer = new WebGLRenderer()
myRenderer.setSize(myWidth, myHeight)
myRenderer.setClearColor('black', 1)
containerDom.appendChild(myRenderer.domElement)
//场景
myScene = new Scene()
myScene.background = new Color(0xffffff)
myScene.add(new GridHelper(1000, 10, 0x888888, 0x444444))

//摄像机
myCamera = new PerspectiveCamera(50, aspectRatio, 0.01, 30000)
myCamera.position.set(1500,1500,1800)
myCamera.lookAt(0,0,800)

myCamera.position.z = 0.0001
// const controls = new OrbitControls(myCamera, containerDom)
// controls.update()

//灯光
myLight = new DirectionalLight(0xffffff, 2)
myLight.position.set(1,1,1)
myScene.add(myLight)

//加载图片
new TextureLoader().load('./images/img002.jpg', (textures) => {
    console.log(textures)
    myTextures = textures
    myBoxGeometry = new BoxGeometry(200,200,200)
    myMeshLambertMaterial = new MeshLambertMaterial({map:myTextures})
    myTransformControls = new TransformControls(myCamera,myRenderer.domElement)

    myMesh = new Mesh(myBoxGeometry, myMeshLambertMaterial)
    myScene.add(myMesh)

    myTransformControls.attach(myMesh)
    myScene.add(myTransformControls)
    myRenderer.render(myScene, myCamera);

    myTransformControls.addEventListener('change', () => {
        animate();
    })

})

//创建正方形



function animate() {
    // requestAnimationFrame(animate);
    myRenderer.render(myScene, myCamera);
}

