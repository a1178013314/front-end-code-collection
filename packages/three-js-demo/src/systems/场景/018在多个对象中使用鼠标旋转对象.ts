import {WebGLRenderer, Scene, PerspectiveCamera, BoxGeometry, Mesh, MeshBasicMaterial, Raycaster, Vector2} from 'three'

const colors = [0xfaad14,0xfadb14,0xa0d911,0x52c41a,0x13c2c2,0x722ed1,0xeb2f96,0xa8071a]
// const colors = [0xfaad14]

let height = window.innerHeight
let width = window.innerWidth

const myWebGLRenderer = new WebGLRenderer()
myWebGLRenderer.setSize(width, height)
myWebGLRenderer.setClearColor(0xffffff)
document.body.appendChild(myWebGLRenderer.domElement)
let myScene = new Scene()

let myCamera = new PerspectiveCamera(90, width/height, 1, 1000)
myCamera.position.set(20,20,20)
myCamera.lookAt(myScene.position)
let myMesh:Mesh<BoxGeometry, MeshBasicMaterial>
let myMeshArray:Mesh<BoxGeometry, MeshBasicMaterial>[] = []
for (let index = 0; index < colors.length; index++) {
    let size = randomSize()
    myMesh = new Mesh(new BoxGeometry(size, size,size), new MeshBasicMaterial({color:colors[index]}))
    let {x,y,z} = randomPosition()
    myMesh.position.set(x,y,z)
    myMeshArray.push(myMesh)
    myScene.add(myMesh)
}

function randomSize(){
    let min = 4
    let max = 10

    return Math.round((max - min)*Math.random())
}

function randomPosition(){
    let min = 20
    let max = 40

    return {
        x:Math.round((max - min)*Math.random()),
        y:Math.round((max - min)*Math.random()),
        z:Math.round((max - min)*Math.random()),
    }
}

animate()
function animate(){
    myWebGLRenderer.render(myScene, myCamera)
    requestAnimationFrame(animate)
}

//处理事件
document.addEventListener('click',(clickBox))

function clickBox(event : MouseEvent){
    let myMouse = new Vector2()
    myMouse.x = (event.clientX/window.innerWidth)*2 - 1
    myMouse.y = -(event.clientY/window.innerHeight)*2 + 1

    let myRaycaster = new Raycaster()
    myRaycaster.setFromCamera(myMouse,myCamera)

    let myIntersectObjects = myRaycaster.intersectObjects<Mesh<BoxGeometry, MeshBasicMaterial>>(myMeshArray)

    if(myIntersectObjects.length > 0 ){
        myIntersectObjects[0].object.material.color.set(0x000000)
    }
}