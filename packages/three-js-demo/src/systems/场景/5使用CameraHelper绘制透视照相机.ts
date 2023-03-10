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
const myCamera = new PerspectiveCamera(45,k,1,5000)
myCamera.position.z = 2500
//绘制透视照相机
const myPerspectiveCamera = new PerspectiveCamera(45,k,250,1000)
const myPerspectiveCameraHelper = new CameraHelper(myPerspectiveCamera)
mySence.add(myPerspectiveCameraHelper)

//绘制球体
const mySphereGeometry = new SphereGeometry(200,16,8)
const myMeshBasicMaterial = new MeshBasicMaterial({color:"green", wireframe:true})
const myMesh = new Mesh(mySphereGeometry, myMeshBasicMaterial) 

mySence.add(myMesh)
animate()
// 
function animate(){
    requestAnimationFrame(animate)
    let r = Date.now() * 0.0005
    myMesh.position.x = 700*Math.cos(r)
    myMesh.position.y = 700*Math.sin(r)
    myMesh.position.z = 700*Math.sin(r)

    myPerspectiveCamera.lookAt(myMesh.position)
    myRenderer.setViewport(0,0,myWidth,myHeight)
    myRenderer.render(mySence, myCamera)
}