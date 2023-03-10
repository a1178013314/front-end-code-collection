import { WebGLRenderer, Scene, PointLight, OrthographicCamera, BoxGeometry,
    MeshLambertMaterial,Mesh, MeshNormalMaterial, PerspectiveCamera,CameraHelper,
    SphereGeometry,MeshBasicMaterial,Vector3
   
   } from "three"
//DOM
const containerDom = document.getElementById("three-container")
const myWidth = window.innerWidth
const myHeight = window.innerHeight
const k = myWidth/myHeight
//渲染器
const myRenderer = new WebGLRenderer({
    antialias:true,
    alpha:true
})

myRenderer.setSize(myWidth, myHeight)
myRenderer.setClearColor("white", 1)//设置清空颜色
containerDom?.appendChild(myRenderer.domElement)
//场景
const mySence = new Scene()
//摄像机
const myPerspectiveCamera = new PerspectiveCamera(45,k,0.1,1000)
myPerspectiveCamera.position.set(40.06,20.92,42.68)
myPerspectiveCamera.lookAt(new Vector3(0,0,0))

//立方体1
const myGeometry1 = new BoxGeometry(16,16,16)
const myMaterial1 = new MeshNormalMaterial()
const myMesh1 = new Mesh(myGeometry1, myMaterial1)
myMesh1.translateX(-40)
mySence.add(myMesh1)

//立方体2
const myGeometry2 = new BoxGeometry(16,16,16)
const myMaterial2 = new MeshNormalMaterial()
const myMesh2 = new Mesh(myGeometry1, myMaterial1)
myMesh2.translateX(-10)
mySence.add(myMesh2)

//立方体3
const myGeometry3 = new BoxGeometry(16,16,16)
const myMaterial3 = new MeshNormalMaterial()
const myMesh3 = new Mesh(myGeometry1, myMaterial1)
myMesh3.translateX(20)
mySence.add(myMesh3)

myRenderer.render(mySence, myPerspectiveCamera)