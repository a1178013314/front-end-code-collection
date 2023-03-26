import THREE from 'three'
// 创建一个场景
const scene = new THREE.Scene();

// 创建一个透视投影相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// 创建一个WebGL渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创建一个立方体几何体
const geometry = new THREE.BoxGeometry(1, 1, 1);

// 创建一个材质
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// 创建一个网格对象，将几何体和材质结合起来
const cube = new THREE.Mesh(geometry, material);

// 将网格对象添加到场景中
scene.add(cube);

// 设置相机的位置，使其能够看到立方体
camera.position.z = 5;
// 创建一个射线对象
let raycaster = new THREE.Raycaster();

// 创建一个二维向量对象
let mouse = new THREE.Vector2();

// 给渲染器添加点击事件监听器
renderer.domElement.addEventListener("click", clickBox);

// 定义点击事件处理函数
function clickBox(event) {
  // 将鼠标点击位置的屏幕坐标转换成threejs中的标准坐标
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // 根据鼠标点的位置和当前相机的矩阵计算出射线
  raycaster.setFromCamera(mouse, camera);

  // 获取射线和所有模型相交的数组集合
  var intersects = raycaster.intersectObjects(scene.children);

  // 如果有相交的模型，就随机改变它们的颜色
  if (intersects.length > 0) {
    for (var i = 0; i < intersects.length; i++) {
      intersects[i].object.material.color.set(Math.random() * 0xffffff);
    }
  }
}

// 定义一个动画函数，让立方体旋转起来
function animate() {
  requestAnimationFrame(animate);

  // 改变立方体的旋转角度
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // 渲染场景和相机
  renderer.render(scene, camera);
}

// 调用动画函数
animate();


// import THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// var scene = new THREE.Scene();
// // 初始化摄像机
// var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.set(0, 0, 5);
// // 初始化渲染器
// var renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // 创建天空盒
// var loader = new THREE.CubeTextureLoader();
// var textureCube = loader.load([
//     './images/img081right.jpg', // 右面
//     './images/img082left.jpg', // 左面
//     '/images/img083top.jpg', // 上面
//     '/images/img084bottom.jpg', // 下面
//     '/images/img085front.jpg', // 前面
//     '/images/img086back.jpg'  // 后面
// ]);
// scene.background = textureCube;

// // 添加控制器
// var controls = new OrbitControls(camera, renderer.domElement);

// // 渲染函数
// function animate() {
//     requestAnimationFrame(animate);
//     // 更新控制器
//     controls.update();
//     // 渲染场景和摄像机
//     renderer.render(scene, camera);
// }
// animate();



// // var scene = new THREE.Scene();
// // var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// // var renderer = new THREE.WebGLRenderer();
// // renderer.setSize(window.innerWidth, window.innerHeight);
// // document.body.appendChild(renderer.domElement);

// // // 创建天空盒几何体
// // var skyboxGeo = new THREE.BoxGeometry(1000, 1000, 1000);

// // // 加载天空盒图片
// // var loader = new THREE.CubeTextureLoader();
// // var texture = loader.load([
// //   './images/img081right.jpg', // 右面
// //   './images/img082left.jpg', // 左面
// //   '/images/img083top.jpg', // 上面
// //   '/images/img084bottom.jpg', // 下面
// //   '/images/img085front.jpg', // 前面
// //   '/images/img086back.jpg'  // 后面
// // ]);

// // // 将纹理赋值给场景背景或者网格材质

// // // 方法一：使用场景背景
// // scene.background = texture;

// // var controls = new OrbitControls(camera, renderer.domElement);

// // // 方法二：使用网格材质
// // // var skyboxMaterial = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
// // // var skybox = new THREE.Mesh(skyboxGeo, skyboxMaterial);
// // // scene.add(skybox);

// // // 设置相机位置和方向
// // // camera.position.set(0, 0, 0);
// // // camera.lookAt(0, 0, -1);

// // // 渲染场景和相机
// // function animate() {
// //     requestAnimationFrame(animate);
// //     // 更新控制器
// //     controls.update();
// //     // 渲染场景和摄像机
// //     renderer.render(scene, camera);
// // }
// // animate();