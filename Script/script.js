import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js";
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js';
import { TWEEN } from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/libs/tween.module.min.js';
// import { EffectComposer } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/js/postprocessing/EffectComposer.js"
// import { BloomPass } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/js/postprocessing/BloomPass.js"
// import { UnrealPassBloom } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/js/postprocessing/UnrealBloomPass.js"


const scene = new THREE.Scene();
scene.background = new THREE.Color(0x101010);

let SCREEN_WIDTH = window.innerWidth;
let SCREEN_HEIGHT = window.innerHeight;
let ratioLargeurHauteur = SCREEN_WIDTH / SCREEN_HEIGHT;



const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);




// ************************************** //


const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 25, 66);
// controls.minDistance = 100;
controls.maxDistance = 300;
controls.target.set(0, 0, 0);
controls.update();

// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);









// *******************************************************************//
// **************************** Mise en place des astres ********************************* //
// *******************************************************************//


// Soleil *******************
const sun = new THREE.SphereGeometry(2, 32, 16);
const material = new THREE.MeshBasicMaterial()
// material.lightMap = true;
const soleil = new THREE.Mesh(sun, material);
const loaderText = new THREE.TextureLoader();
loaderText.load(
    "./texture/soleil.jpg",
    function (texture) {
        console.log("chargement");
        material.map = texture;
        material.needsUpdate = true;
    },
    undefined,
    function (err) {
        console.error("erreur lors du chargement de la texture:", err);
    }
)
scene.add(soleil);



scene.fog = new THREE.FogExp2( 0xffaa00, 0.006 );

let taille = 1.5;
let opa = 0.09;
let tablo = [];
// let couleur = [new THREE.Color(0xff0000), new THREE.Color(0xffff00), new THREE.Color(0x00ffff), new THREE.Color(0x00ff00), new THREE.Color(0xffffff)]

for (let i = 0; i < 50; i++) {
    let haloGeometry = new THREE.SphereGeometry( taille, 32, 15);
    let haloMaterial = new THREE.MeshBasicMaterial({color : 0xffaa00});
    haloMaterial.transparent = true;
    haloMaterial.opacity = opa;
    
    haloMaterial.clearcoat = 1;
    haloMaterial.clearcoatRoughness = 1;
    
    const halo = new THREE.Mesh(haloGeometry, haloMaterial);
    halo.position.set(0, 0, 0)
    tablo.push(halo)
    
    taille +=0.03;
    opa -=0.002;
    
}
console.log(tablo)
tablo.forEach(mesh => {
    scene.add(mesh);
    
});







// Terre *****************
const Eart = new THREE.SphereGeometry(0.5, 32, 16);
const materialT = new THREE.MeshPhongMaterial()
const terre = new THREE.Mesh(Eart, materialT);
const loaderTextT = new THREE.TextureLoader();
loaderTextT.load(
    "./texture/terre.jpg",
    function (texture) {
        console.log("chargement");
        materialT.map = texture;
        materialT.needsUpdate = true;
    },
    undefined,
    function (err) {
        console.error("erreur lors du chargement de la texture:", err);
    }
)
terre.shininess = false;
terre.reflectivity = false;
scene.add(terre);


// Lune *****************
const moon = new THREE.SphereGeometry(0.15, 32, 16);
const materialM = new THREE.MeshPhongMaterial();
const lune = new THREE.Mesh(moon, materialM);
lune.rotation.y = 2.5;
const loaderTextL = new THREE.TextureLoader();
loaderTextL.load(
    "./texture/Lune.jpg",
    function (texture) {
        console.log("chargement");
        materialM.map = texture;
        materialM.needsUpdate = true;
    },
    undefined,
    function (err) {
        console.error("erreur lors du chargement de la texture:", err);
    }
)
lune.position.set(1.5, 0, 0)
lune.name = "Lune";
lune.castShadow = true;
lune.receiveShadow = true;
scene.add(lune);

// Mercure *****************
const mercury = new THREE.SphereGeometry(0.2, 32, 16);
const materialMer = new THREE.MeshPhongMaterial();
const mercure = new THREE.Mesh(mercury, materialMer);
const loaderTextMer = new THREE.TextureLoader();
loaderTextMer.load(
    "./texture/mercure.jpg",
    function (texture) {
        console.log("chargement");
        materialMer.map = texture;
        materialMer.needsUpdate = true;
    },
    undefined,
    function (err) {
        console.error("erreur lors du chargement de la texture:", err);
    }
)
mercure.position.set(3, 0, 1)
mercure.castShadow = true;
mercure.receiveShadow = true;
scene.add(mercure);





// Venus *****************
const venus = new THREE.SphereGeometry(0.3, 32, 16);
const materialVen = new THREE.MeshPhongMaterial();
const Venus = new THREE.Mesh(venus, materialVen);
const loaderTextV = new THREE.TextureLoader();
loaderTextV.load(
    "./texture/venus.jpg",
    function (texture) {
        console.log("chargement");
        materialVen.map = texture;
        materialVen.needsUpdate = true;
    },
    undefined,
    function (err) {
        console.error("erreur lors du chargement de la texture:", err);
    }
)
Venus.position.set(4.5, 0, 0)
Venus.castShadow = true;
Venus.receiveShadow = true;
scene.add(Venus);


// Mars *****************
const mars = new THREE.SphereGeometry(0.25, 32, 16);
const materialMar = new THREE.MeshPhongMaterial();
const Mars = new THREE.Mesh(mars, materialMar);
const loaderTextMar = new THREE.TextureLoader();
loaderTextMar.load(
    "./texture/mars.jpg",
    function (texture) {
        console.log("chargement");
        materialMar.map = texture;
        materialMar.needsUpdate = true;
    },
    undefined,
    function (err) {
        console.error("erreur lors du chargement de la texture:", err);
    }
)
Mars.position.set(10, 0, 0)
Mars.castShadow = true;
Mars.receiveShadow = true;
scene.add(Mars);


// Jupiter *****************
const jupi = new THREE.SphereGeometry(1.5, 32, 16);
const materialJ = new THREE.MeshPhongMaterial();
const Jupitaire = new THREE.Mesh(jupi, materialJ);
const loaderTextJ = new THREE.TextureLoader();
loaderTextJ.load(
    "./texture/jupitaire.jpg",
    function (texture) {
        console.log("chargement");
        materialJ.map = texture;
        materialJ.needsUpdate = true;
    },
    undefined,
    function (err) {
        console.error("erreur lors du chargement de la texture:", err);
    }
)
Jupitaire.position.set(15, 0, 0)
Jupitaire.castShadow = true;
Jupitaire.receiveShadow = true;
scene.add(Jupitaire);


// Saturne *****************
const satu = new THREE.SphereGeometry(1.2, 32, 16);
const materialSatu = new THREE.MeshPhongMaterial();
const Saturne = new THREE.Mesh(satu, materialSatu);
const loaderTextSa = new THREE.TextureLoader();
loaderTextSa.load(
    "./texture/saturne.jpg",
    function (texture) {
        console.log("chargement");
        materialSatu.map = texture;
        materialSatu.needsUpdate = true;
    },
    undefined,
    function (err) {
        console.error("erreur lors du chargement de la texture:", err);
    }
)

Saturne.castShadow = true;
Saturne.receiveShadow = true;
scene.add(Saturne);

// anneau de Saturne
const annoS = new THREE.RingGeometry(2, 2.5, 32);
const materialAnno = new THREE.MeshPhongMaterial({ side: THREE.DoubleSide });
const anno = new THREE.Mesh(annoS, materialAnno);
anno.rotation.x = -Math.PI / 3;
anno.rotation.y = -Math.PI / 16;
scene.add(anno);

// Uranus *****************
const Ura = new THREE.SphereGeometry(1, 32, 16);
const materialU = new THREE.MeshPhongMaterial();
const Uranus = new THREE.Mesh(Ura, materialU);
const loaderTextU = new THREE.TextureLoader();
loaderTextU.load(
    "./texture/uranus.png",
    function (texture) {
        console.log("chargement");
        materialU.map = texture;
        materialU.needsUpdate = true;
    },
    undefined,
    function (err) {
        console.error("erreur lors du chargement de la texture:", err);
    }
)
Uranus.position.set(32, 0, 0)
Uranus.castShadow = true;
Uranus.receiveShadow = true;
scene.add(Uranus);


// Neptune *****************
const nep = new THREE.SphereGeometry(0.9, 32, 16);
const materialN = new THREE.MeshPhongMaterial();
const Neptune = new THREE.Mesh(nep, materialN);
const loaderTextN = new THREE.TextureLoader();
loaderTextN.load(
    "./texture/neptune.jpg",
    function (texture) {
        console.log("chargement");
        materialN.map = texture;
        materialN.needsUpdate = true;
    },
    undefined,
    function (err) {
        console.error("erreur lors du chargement de la texture:", err);
    }
)
Neptune.position.set(35, 0, 0)
Neptune.castShadow = true;
Neptune.receiveShadow = true;
scene.add(Neptune);

// **************************** Etoiles ************************************** //


var vertices = [];


var numPoints = 2000; // Nombre d'etoile
for (let i = 0; i < numPoints; i++) {
    // Pour chaque étoile, on lui défini ses coordonnées entre 0 et 250
    let x = THREE.MathUtils.randFloatSpread(250);
    let y = THREE.MathUtils.randFloatSpread(250);
    let z = THREE.MathUtils.randFloatSpread(250);

    vertices.push(x, y, z); // on ajoute les coordonnées 
}

let Star = new THREE.BufferGeometry();
Star.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3)); // Création  des étoiles grâce au tableau vertices

let materialStar = new THREE.PointsMaterial({
    color: 0xffffff,
    sizeAttenuation: false,
    size: 2,
});




let etoile = new THREE.Points(Star, materialStar); // On ajoute le matériel 
scene.add(etoile);


// ************* Lumière ********************


const diriLightIntensity = 0.2;
const diriLight = new THREE.AmbientLight({ color: 0xffffff }, diriLightIntensity);
diriLight.position.set(0, 0, 0);
scene.add(diriLight);


const color = 0xFFFFFF;
const intensity = 1.5;
const sunLight = new THREE.PointLight(color, intensity);
sunLight.position.set(0, 0, 0);
scene.add(sunLight)






// *******************************************************************//
// ********************** ORBIT ASTRE ******************************* //
// *******************************************************************//



// Orbit de mercure
const OrbitMercure = new THREE.Object3D();
OrbitMercure.add(mercure);
OrbitMercure.rotation.y = -2;

scene.add(OrbitMercure);

// Orbit de Venus
const OrbitVenus = new THREE.Object3D();
OrbitVenus.add(Venus);
OrbitVenus.rotation.y = 1;
scene.add(OrbitVenus);

// Orbit de Mars
const OrbitMars = new THREE.Object3D();
OrbitMars.add(Mars);
OrbitMars.rotation.y = 0.3;
scene.add(OrbitMars);

// Orbit de Jupitaire
const OrbitJupi = new THREE.Object3D();
OrbitJupi.add(Jupitaire);
OrbitJupi.rotation.y = -0.5;
scene.add(OrbitJupi);


// Orbit de Saturne
const groupS = new THREE.Group(); // Crée le groupe Saturne anneau
groupS.add(Saturne);
groupS.add(anno);
groupS.position.set(25, 0, 0) // Position de la Saturne
scene.add(groupS);

const OrbitSatu = new THREE.Object3D();
OrbitSatu.add(groupS);
OrbitSatu.rotation.y = -Math.PI / 3;
scene.add(OrbitSatu);


// Orbit de Uranus
const OrbitUra = new THREE.Object3D();
OrbitUra.add(Uranus);
OrbitUra.rotation.y = Math.PI / 3;
scene.add(OrbitUra);

// Orbit de Neptune
const OrbitNep = new THREE.Object3D();
OrbitNep.add(Neptune);
OrbitNep.rotation.y = -Math.PI / 4;
scene.add(OrbitNep);


// ************* Terre et lune ************* //
const group = new THREE.Group(); // Crée le groupe Terre-Lune
group.name = "group";
group.add(terre);
group.add(lune);
group.position.set(7, 0, 0) // Position de la Terre
scene.add(group);






// Le pivot permet de pouvoir faire bouger le groupe Terre-Lune autours du soleil
const pivote = new THREE.Object3D();
pivote.add(group); // group appartient a l'objet pivote
pivote.name = "group";
scene.add(pivote);


// *******************************************************************//
// ********************* Resize de la page ****************************** //
// *******************************************************************//


function onWindowResize() {
    console.log("Redimensionnement de la fenêtre");

    SCREEN_WIDTH = window.innerWidth;
    SCREEN_HEIGHT = window.innerHeight;
    ratioLargeurHauteur = SCREEN_WIDTH / SCREEN_HEIGHT;

    camera.aspect = ratioLargeurHauteur;
    camera.updateProjectionMatrix();

    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
}

window.addEventListener("resize", onWindowResize)



controls.enableDamping = true;


// *******************************************************************//
// ***************** Animation des objets ************************ //
// *******************************************************************//
let fixeLune; // Défini si la camera fixe la lune ou non
let animation = true; // Défini si l'animation est en route ou non

function animate() {
    requestAnimationFrame(animate);
    if (animation) {
        // Rotation de tout de beau monde

        soleil.rotation.y += 0.0004; // Rotation soleil

        group.rotation.y += 0.0005; // rotation la lune autour de la Terre
        terre.rotation.y += 0.00005; // rotation la terre
        lune.rotation.y += 0.00001; // rotation la lune

        pivote.rotation.y += 0.0005; // rotation Terre-Lune autour du soleil

        OrbitMercure.rotation.y += 0.00085; // Orbit Mercure
        mercure.rotation.y = 0.00005; // Rotation mercure

        OrbitVenus.rotation.y += 0.0003;
        Venus.rotation.y += 0.00002;

        OrbitMars.rotation.y += 0.00047;
        Mars.rotation.y += 0.00005;


        OrbitJupi.rotation.y += 0.00038;
        Jupitaire.rotation.y += 0.000056;

        OrbitSatu.rotation.y += 0.00055;
        Saturne.rotation.y += 0.00006;


        OrbitUra.rotation.y += 0.0003;
        Uranus.rotation.y += 0.00005;

        OrbitNep.rotation.y += 0.0002;
        Neptune.rotation.y += 0.00003;

        // ***************************************


    }
    TWEEN.update();
    renderer.render(scene, camera);
}


soleil.addEventListener('dblclick', function () {
    console.log('coucou');
});



// ********************************************************************************* //
// ****************************** Caméra zoom lune ******************************** //
// ******************************************************************************* //
function fixeL(fixeLune) {
    if (fixeLune) {
        console.log("cam fixe lune")
        // animation = false; // On arrête l'animation (pour que la lune ne bouge plus)

        const objectPosition = new THREE.Vector3();
        lune.getWorldPosition(objectPosition); // On récuprere les coordonnées de la lune


        controls.target.set(objectPosition.x, objectPosition.y, objectPosition.z);// On modifie le target de la camera
        // Celui-ci se position au niveau de la lune

        controls.enabled = false;

        // console.log(objectPosition);
        group.add(camera);// La caméra appartient au group Terre-Lune pour tourner et suivre la lune
        camera.position.set(0, 0, 0);


        controls.update(); // On update l'orbit controls
    }
    else {
        console.log("cam normal")
        // Réinitialisation des commandes
        controls.enabled = true;
        group.remove(camera);
        camera.position.set(0, 25, 66);
        controls.target.set(0, 0, 0);
        controls.update();
    }
}

// *************** Retour a animation / caméra normal ***************** //

document.addEventListener("keydown", function (evente) {

    switch (evente.key) {
        case 'f':
            {
                console.log("revient a la position normal")
                animation = !animation;
                console.log("animation : " + animation)
                    fixeL(false);
                    fixeLune = false;
                // deZoomPro();
            }
            break;
        case "ArrowRight":
            {
                tourneL(false)


            } break;
        case "ArrowLeft":
            {
                tourneL(true)

            } break;


    }
})
// ************************************************ //

let tabTrigo = [-Math.PI / 1.5, -Math.PI / 1.8, -Math.PI / 3, Math.PI / 16, Math.PI / 3, Math.PI / 1.8, Math.PI / 1.5, Math.PI];
// let tabTrigo = [Math.PI/1.8];
// -PI/1.5 -> Premier Croissant
// PI/1.8-> Premier quartier
// -PI/3 -> Gibbeuse croissante
// PI/16 -> Pleine lune
// PI/3 -> Gibbeuse décroissante
// PI/1.8 -> dernier quartier
// PI/1.5 -> dernier Croissant
// PI -> Nouvelle lune




// ********************************************************************************* //
// ***************************** Zoom standard ************************************ //
// ******************************************************************************* //


function zoomPro() {

    fixeLune = true; // On est entrain de fixer la lune !
    animation = false; // On arrête l'animation (pour que la lune ne bouge plus)

    console.log("coucou je fixe la lune !")
    const objectPosition = new THREE.Vector3();
    lune.getWorldPosition(objectPosition);

    // Récupérer la position initiale de la caméra
    const initialPosition = camera.position.clone();
    console.log(camera.position);

    // Définir la position finale de la caméra
    const targetPosition = terre.position.clone();

    // Créer un tween pour animer la position de la caméra
    const tween = new TWEEN.Tween(initialPosition)
        .to(targetPosition, 2000)
        .onUpdate(() => {
            camera.position.copy(initialPosition);
            controls.target.set(objectPosition.x, objectPosition.y, objectPosition.z);
            group.add(camera);
            controls.update();

        })
        .start();
    fixeL(true);



}


// ********************************************************************************* //
// ********************* Caméra différentes faces de la lune ********************** //
// ******************************************************************************* //

// let Pause = document.getElementById("pause");
let Gauche = document.getElementById("gauche");
let Droite = document.getElementById("droite");
let numFace = -1; // Numéro de la face de la lune

Gauche.addEventListener("click", function () { tourneL(true) });
Droite.addEventListener("click", function () { tourneL(false) })


function tourneL(valeur) {

    if (valeur) {

        // Tourne a gauche
        let temoinBis = false // Permet de savoir si on a deja zommer ou non
        animation = false;

        if (!fixeLune) {
            zoomPro();
            temoinBis != temoinBis;
            setTimeout(function () {
            }, 2000);
        }
        if (temoinBis) {
            setTimeout(function () {
                gauche()
            }, 2000);

        }
        else {
            gauche();
        }
    }
    else {
        animation = false;
        let temoin = false; // Permet de savoir si on a deja zommer ou non
        if (!fixeLune) {
            zoomPro();
            temoin = true;
            setTimeout(function () {
            }, 2000);
        }
        if (temoin) {
            setTimeout(function () {
                droite();
            }, 2000);
        }

        else {
            droite();
        }
    }
}



function droite() {
    // Initialisation de la caméra sur la lune

    numFace += 1; // Face numéro 1
    if (numFace == 8) {
        numFace = 0;
    }

    // **********************************************
    pivote.rotation.y = tabTrigo[numFace]; // Rotation Terre-Soleil
    group.rotation.y = tabTrigo[numFace]; // Rotation du group Terre-Lune
}






function gauche() {
    // Initialisation de la caméra sur la lune

    numFace -= 1; // Face numéro 1
    if (numFace <= -1) {
        numFace = 7;
    }
    // **********************************************
    pivote.rotation.y = tabTrigo[numFace]; // Rotation Terre-Soleil
    group.rotation.y = tabTrigo[numFace]; // Rotation du group Terre-Lune

}


animate();