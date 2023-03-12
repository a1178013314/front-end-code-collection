import {
    WebGLRenderer, Scene, PointLight, OrthographicCamera, BoxGeometry,
    MeshLambertMaterial, Mesh, MeshNormalMaterial, PerspectiveCamera, CameraHelper,
    SphereGeometry, MeshBasicMaterial, Vector3, TextureLoader, WebGLCubeRenderTarget,
    MathUtils, Texture, Camera, VideoTexture

} from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let myRenderer : WebGLRenderer, myScene : Scene, myCamera : Camera, myTexture: Texture,
myMaterial : MeshBasicMaterial, myVideoMesh: Mesh

//DOM
const containerDom = document.getElementById("three-container") as HTMLElement
const myWidth = window.innerWidth
const myHeight = window.innerHeight
const k = myWidth / myHeight
//渲染器
myRenderer = new WebGLRenderer({
    antialias: true,
    alpha: true
})
myRenderer.setSize(myWidth, myHeight)
containerDom?.appendChild(myRenderer.domElement)
//场景
myScene = new Scene()