import {WebGLRenderer, Scene, PerspectiveCamera, SphereGeometry, Mesh, MeshBasicMaterial,IcosahedronGeometry, Vector3, ArrowHelper} from 'three'
 
const myRenderer = new WebGLRenderer()
myRenderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(myRenderer.domElement)

const scene = new Scene()

const myCamera = new PerspectiveCamera(90,window.innerWidth/window.innerHeight, 0.5, 1000)
myCamera.position.z = 6
// myCamera.lookAt(scene.position)

const mySphere = new Mesh(new IcosahedronGeometry(2,1), new MeshBasicMaterial({color:'darkgreen', wireframe:true}))
scene.add(mySphere)

//创建箭头
const myArrowHelper = new ArrowHelper(
    new Vector3(0,10,0),
    new Vector3(0,0,0),
    3,
    0xff0000
)
scene.add(myArrowHelper)


animate()
function animate(){
    myRenderer.render(scene, myCamera)
    mySphere.rotation.z += 0.02
    myArrowHelper.rotation.z += 0.02
    requestAnimationFrame(animate)
    
}