import { WebGLRenderer, Scene, PointLight, OrthographicCamera, BoxGeometry,
    MeshLambertMaterial,Mesh, MeshNormalMaterial, PerspectiveCamera,CameraHelper,
    SphereGeometry,MeshBasicMaterial,Vector3,TextureLoader,WebGLCubeRenderTarget,
    MathUtils,Texture
   
   } from "three"
let myCamera: PerspectiveCamera, mySence: Scene, myRenderer: WebGLRenderer
let lon = 0,lat = 0, phi=0, theta = 0
//DOM
const containerDom = document.getElementById("three-container")
const myWidth = window.innerWidth
const myHeight = window.innerHeight
const k = myWidth/myHeight
//渲染器
myRenderer = new WebGLRenderer({
    antialias:true,
    alpha:true
})

myRenderer.setSize(myWidth, myHeight)
myRenderer.setClearColor("white", 1)//设置清空颜色

//场景
mySence = new Scene()
//加载图片
const myTextureLoader = new TextureLoader()
myTextureLoader.load('./images/img050.jpg', (myTexture) => {
    init(myTexture)
    animate()

})

function init(myTexture:Texture){
    myRenderer = new WebGLRenderer({antialias:true, alpha:true})
    myRenderer.setSize(myWidth, myHeight)
    document.body.appendChild(myRenderer.domElement)
    myCamera = new PerspectiveCamera(90,k,1,1000)
    mySence = new Scene()
    mySence.background = new WebGLCubeRenderTarget(1024).fromEquirectangularTexture(myRenderer, myTexture).texture
}
function animate(){
    requestAnimationFrame(animate)
    let r = Date.now() * 0.0005
    myCamera.rotateX(0.001)
    myCamera.rotateY(0.001)
    myCamera.rotateZ(0.001)
    lon += 0.15
    lat =  Math.max(-85, Math.min(85, lat))
    phi = MathUtils.degToRad(90 - lat)
    theta = MathUtils.degToRad(lon)

    myCamera.position.x = 100*Math.sin(phi) * Math.cos(theta)
    myCamera.position.y = 100*Math.cos(phi)
    myCamera.position.z = 100*Math.sin(phi) * Math.sin(theta)
    myCamera.lookAt(mySence.position)
    myRenderer.render(mySence, myCamera)
}

// function animate() {
//     requestAnimationFrame(animate);
//     lon +=0.15;//设置在经度方向的增量
//     lat = Math.max( - 85, Math.min( 85, lat ) );
//     phi = THREE.MathUtils.degToRad( 90 - lat );
//     theta = THREE.MathUtils.degToRad( lon );
//     myCamera.position.x = 100 * Math.sin( phi ) * Math.cos( theta );
//     myCamera.position.y = 100 * Math.cos( phi );
//     myCamera.position.z = 100 * Math.sin( phi ) * Math.sin( theta );
//     myCamera.lookAt( myScene.position );
//     myRenderer.render( myScene, myCamera );
//    }