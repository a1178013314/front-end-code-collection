import {WebGLRenderer, Scene, PerspectiveCamera, BoxGeometry, Color, GridHelper, DirectionalLight,Texture, 
    TextureLoader,MeshLambertMaterial,Mesh
} from 'three'
import {TransformControls} from 'three/examples/jsm/controls/TransformControls'

let myRender: WebGLRenderer
let myScene: Scene
let myCamera: PerspectiveCamera
let myLight: DirectionalLight

//DOM
const containerDom = document.getElementById("three-container")
const myWidth = window.innerWidth
const myHeight = window.innerHeight
const aspectRatio = myWidth / myHeight
//渲染器
myRender = new WebGLRenderer()
myRender.setSize(myWidth, myHeight)
document.body.appendChild(myRender.domElement)
//场景
myScene = new Scene()
myScene.background = new Color(0xffffff)
myScene.add(new GridHelper(1000,10))
//摄像机
myCamera = new PerspectiveCamera(90, aspectRatio, 0.5, 2000)
myCamera.position.set(500,500,800)
myCamera.lookAt(0,100,0)
//灯光
myLight = new DirectionalLight(0xffffff, 2)
myLight.position.set(2,2,2)
myScene.add(myLight)

//创建物体

new TextureLoader().loadAsync('./images/img002.jpg').then((texture:Texture) => {
    const mySquare = new BoxGeometry(400,400,400)
    const myMaterial = new MeshLambertMaterial({map:texture})
    const mySquareControls = new TransformControls(myCamera, myRender.domElement)

    mySquareControls.addEventListener('change', ()=>{
        myRender.render(myScene, myCamera)
    })

    mySquareControls.setMode('rotate')

    const myMesh = new Mesh(mySquare, myMaterial)
    mySquareControls.attach(myMesh)
    myScene.add(myMesh)
    myScene.add(mySquareControls)
    myRender.render(myScene, myCamera)
})