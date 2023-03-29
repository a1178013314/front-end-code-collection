import { WebGLRenderer, Scene, PerspectiveCamera, Camera, CubeTextureLoader, AxesHelper,
    BoxGeometry,MeshLambertMaterial,Mesh,PointLight
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let myRenderer: WebGLRenderer, myScene: Scene, myCamera: PerspectiveCamera, myCubeTextureLoader: CubeTextureLoader,
myAxesHelper: AxesHelper

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
myCamera = new PerspectiveCamera(45,aspectRatio,1,5000)
myCamera.position.z = 1000
const controls = new OrbitControls(myCamera, myRenderer.domElement)
controls.update()

//灯光 
const myLight = new PointLight('red')
myLight.position.set(400, 800, 300)

myScene.add(myLight)

//加载图片
myCubeTextureLoader = new CubeTextureLoader()
myCubeTextureLoader.setPath('./images/')
myCubeTextureLoader.load(['img081right.jpg', 'img082left.jpg',
    'img083top.jpg', 'img084bottom.jpg', 'img085front.jpg', 'img086back.jpg'], (texture) => {

        myScene.background = texture
        initObject()
    });

animate()
function animate() {
    myRenderer.render(myScene, myCamera)
    requestAnimationFrame(animate);
    controls.update()
}

function initObject(){
    //三位坐标系
    myAxesHelper = new AxesHelper(150)
    myScene.add(myAxesHelper)
    //创建立方体
    const myGeometry = new BoxGeometry(100,100,100)
    
    //创建材质
    const myMeshLambertMaterial = new MeshLambertMaterial({color:0XFFBF00})
    //创建网格
    const myMesh = new Mesh(myGeometry, myMeshLambertMaterial)
    myMesh.position.set(0,0,0)
    myScene.add(myMesh)
    }

