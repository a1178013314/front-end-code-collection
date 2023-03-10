import { WebGLRenderer, Scene, PointLight, OrthographicCamera, BoxGeometry,
     MeshLambertMaterial,Mesh, MeshNormalMaterial, PerspectiveCamera,CameraHelper,
     SphereGeometry,MeshBasicMaterial
    
    } from "three"
//DOM
const containerDom = document.getElementById("three-container")
const myWidth = window.innerWidth
const myHeight = window.innerHeight
const myAspect = myWidth/myHeight
const myFrustumSize = 700
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
const myCamera = new PerspectiveCamera(45,myAspect,1,5000)
myCamera.position.z = 2500
//创建辅助正交照相机
const myOrthographicCamera = new OrthographicCamera(
    0.5*myFrustumSize*myAspect/-2, 0.5*myFrustumSize*myAspect/2,
    myFrustumSize/2,myFrustumSize/-2,150,1000)
const myOrthographicCameraHelper = new CameraHelper(myOrthographicCamera)
mySence.add(myOrthographicCameraHelper)
//绘制球体
const mySphereGeometry = new SphereGeometry(200,16,8)
const myMeshBasicMaterial = new MeshBasicMaterial({color:"green", wireframe:true})
const myMesh = new Mesh(mySphereGeometry, myMeshBasicMaterial) 

mySence.add(myMesh)
animate()
function animate(){
    requestAnimationFrame(animate)
    let r = Date.now() * 0.0005
    myMesh.position.x = myFrustumSize*Math.cos(r)
    myMesh.position.y = myFrustumSize*Math.sin(r)
    myMesh.position.z = myFrustumSize*Math.sin(r)

    myOrthographicCamera.lookAt(myMesh.position)
    myRenderer.render(mySence, myCamera)
}
