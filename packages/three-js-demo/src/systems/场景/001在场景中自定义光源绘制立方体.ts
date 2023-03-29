import { WebGLRenderer, Scene, PointLight, OrthographicCamera, BoxGeometry, MeshLambertMaterial,Mesh, PerspectiveCamera} from "three"

//DOM
const containerDom = document.getElementById("three-container")
const myWidth = 480
const myHeight = 320


//渲染器
const myRenderer = new WebGLRenderer()
myRenderer.setSize(myWidth, myHeight)
// myRenderer.setClearColor("white", 1)//设置清空颜色
document.body.appendChild(myRenderer.domElement)
// containerDom?.appendChild(myRenderer.domElement)

//场景
const mySence = new Scene()

//灯光 
const myLight = new PointLight('red')
myLight.position.set(400, 800, 300)

mySence.add(myLight)

//相机
const k = myWidth/myHeight //宽高比
const s = 120 //控制范围系数


// const myCamera = new PerspectiveCamera(90, myWidth/myHeight,0.5,2000)
const myCamera = new OrthographicCamera(-s * k , s * k, s, -s, 1, 1000)
myCamera.position.set(400,300,200)
myCamera.lookAt(mySence.position)

//创建立方体
const myGeometry = new BoxGeometry(100,100,100)
//创建材质
const myMeshLambertMaterial = new MeshLambertMaterial({color:0XFFBF00})
//创建网格
const myMesh = new Mesh(myGeometry, myMeshLambertMaterial)

mySence.add(myMesh)

myRenderer.render(mySence, myCamera)


