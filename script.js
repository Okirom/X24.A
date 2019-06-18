function Matrice(ligne,colone,liste){
    this.ligne=10;
    this.colone=10;
    this.liste=[];
}
    

/*var cellule=new Object();
    cellule.boxGeo=new THREE.BoxGeometry(50,50,50);
    cellule.boxMat=new THREE.MeshLambertMaterial({color: 0xff00ff});
    cellule.box=new THREE.Mesh(cellule.boxGeo,cellule.boxMat);*/
    //var boxGeo=new THREE.BoxGeometry(50,50,50);
    //var boxMat=new THREE.MeshLambertMaterial({color: 0xff00ff});
    //var box = new THREE.Mesh(boxGeo,boxMat);
function Cellule(boxGeo,boxMat,box,position){
    this.boxGeo=new THREE.BoxGeometry(5,5,5);
    this.boxMat=new THREE.MeshLambertMaterial({color: 0xff00ff});
    this.box=new THREE.Mesh(this.boxGeo,this.boxMat);
    this.position=[-300,200,0];
}  






var vAngX=0.02;
var vAngY=0.03;

var scene = new THREE.Scene();
var camera = new
THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.set(0,0,300)
camera.lookAt(scene.position);
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);
var axisHelper = new THREE.AxesHelper(70);
scene.add(axisHelper);




/*var boxGeo= new THREE.BoxGeometry(50,50,50);
var boxGeo2= new THREE.BoxGeometry(50,50,50);

var boxMat=new THREE.MeshLambertMaterial({color: 0xff00ff});
var box = new THREE.Mesh(boxGeo,boxMat);
var box2 = new THREE.Mesh(boxGeo2,boxMat);
box2.position.set(100,0,0);
scene.add(box);
scene.add(box2);*/
var matrix=new Matrice();
for(var i=0;i<matrix.ligne*matrix.colone;i++){
    var c=new Cellule();
    matrix.liste.push(c);
    c.position[0]=c.position[0]+10*i;
    /*if(i+1%10==0){
        //
    }*/
    c.box.position.set(c.position[0],c.position[1],c.position[2]);
    scene.add(c.box);  
    console.log(c.position);  
}
/*var c1=new Cellule();
var c2=new Cellule();
c2.position[0]=c2.position[0]+10;
console.log(c2.position);
c2.box.position.set(c2.position[0],c2.position[1],c2.position[2]);
c1.box.position.set(c1.position[0],c1.position[1],c1.position[2]);
scene.add(c2.box);
scene.add(c1.box);*/

var pointLight = new THREE.PointLight( 0xffffff);
pointLight.position.set(60,60,60);
scene.add(pointLight);
var spotLight = new THREE.SpotLight( 0xffffff);
spotLight.position.set(-300,0,0);
scene.add(spotLight);
function render() {
requestAnimationFrame(render);
for(var i=0;i<matrix.liste.length;i++){
//box.rotation.y=box.rotation.y+vAngY
//box.rotation.x=box.rotation.x+vAngX
//matrix.liste[i].box.rotation.y=matrix[i].box.rotation.y+vAngY
//matrix.liste[i].box.rotation.x=matrix[i].box.rotation.x+vAngX
//c.box.rotation.x=c.box.rotation.x+vAngX
//c2.box.rotation.y=c2.box.rotation.y+vAngY
//c2.box.rotation.x=c2.box.rotation.x+vAngX
//box2.rotation.x=box2.rotation.x+vAngX
}
renderer.render(scene, camera);
}
render();
