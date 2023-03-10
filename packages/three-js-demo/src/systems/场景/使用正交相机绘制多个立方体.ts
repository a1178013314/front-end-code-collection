import { WebGLRenderer, Scene, PointLight, OrthographicCamera, BoxGeometry, MeshLambertMaterial,Mesh, MeshNormalMaterial} from "three"

//DOM
const containerDom = document.getElementById("three-container")
const myWidth = window.innerWidth
const myHeight = window.innerHeight

//渲染器
const myRenderer = new WebGLRenderer({antialias: true})
myRenderer.setSize(myWidth, myHeight)
myRenderer.setClearColor("white", 1)//设置清空颜色
containerDom?.appendChild(myRenderer.domElement)

//场景
const mySence = new Scene()

//正交相机
let k = myWidth/myHeight
let s = 24
const myCamera = new OrthographicCamera(-s * k , s * k, s, -s, 1, 1000)
myCamera.position.set(-1.66,2.21,18.2)
myCamera.lookAt(mySence.position)
//立方体1
const myGeometry1 = new BoxGeometry(16,16,16)
const myMaterial1 = new MeshNormalMaterial()
const myMesh1 = new Mesh(myGeometry1, myMaterial1)
myMesh1.translateX(-14)
mySence.add(myMesh1)

//立方体2
const myGeometry2 = new BoxGeometry(16,16,16)
const myMaterial2 = new MeshNormalMaterial()
const myMesh2 = new Mesh(myGeometry2, myMaterial2)
myMesh2.translateX(14)
mySence.add(myMesh2)


myRenderer.render(mySence, myCamera)