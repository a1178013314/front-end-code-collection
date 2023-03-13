import {WebGLRenderer, Scene, PerspectiveCamera, TextureLoader,BoxGeometry,MeshLambertMaterial,Mesh,
    Texture,DirectionalLight,Color,GridHelper
} from 'three'
import {TransformControls} from 'three/examples/jsm/controls/TransformControls'
let myRenderer:WebGLRenderer
let myScene:Scene
let myCamera:PerspectiveCamera
let myBoxGeometry:BoxGeometry
let myMaterial:MeshLambertMaterial
let myMesh:Mesh
let myTransformControls:TransformControls
let myLight:DirectionalLight

//DOM
const containerDom = document.getElementById("three-container") as HTMLElement
const myWidth = window.innerWidth
const myHeight = window.innerHeight
const aspectRatio = myWidth / myHeight

//渲染器
myRenderer = new WebGLRenderer()
myRenderer.setSize(myWidth, myHeight)
containerDom.appendChild(myRenderer.domElement)

//场景
myScene = new Scene()
myScene.background = new Color(0xffffff)
myScene.add(new GridHelper(1000, 10, 0x888888, 0x444444))

//摄像机
myCamera = new PerspectiveCamera(90,aspectRatio,0.5,5000)
myCamera.position.set(500,500,800)
myCamera.lookAt(0,0,800)

//灯光
myLight = new DirectionalLight(0xffffff, 2)
myLight.position.set(1,1,1)
myScene.add(myLight)


const init = (texture:Texture) => {
    myBoxGeometry = new BoxGeometry(200,200,200)
    myMaterial = new MeshLambertMaterial({map:texture})
    

    myTransformControls = new TransformControls(myCamera, myRenderer.domElement)
    myTransformControls.addEventListener('change', () => {
        myRenderer.render(myScene, myCamera)
    })
    myTransformControls.setMode('scale')

    myMesh = new Mesh(myBoxGeometry, myMaterial)
    myScene.add(myMesh)
    myTransformControls.attach(myMesh)
    myScene.add(myTransformControls)
}


//加载物体
new TextureLoader().loadAsync('./images/img002.jpg').then(texture => {
    init(texture)
    
    myRenderer.render(myScene, myCamera)
})

//