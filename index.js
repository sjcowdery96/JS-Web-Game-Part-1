//combined methods for addImage and addItem with boolean value "isItem"
function newImage(source, locationX, locationY, isItem){
    let charName = document.createElement('img')
    charName.src = source
    charName.style.position = 'fixed'
    charName.style.left = locationX
    charName.style.bottom = locationY
    document.body.append(charName)
    if(isItem){
        charName.addEventListener('dblclick', function(){
            charName.remove()
        })
    }
}

let mainCharacter = newImage('assets/green-character.gif',"100px", "100px")
let pineTree = newImage("assets/pine-tree.png","450px","200px")
let otherTree = newImage("assets/tree.png","200px","300px")
let pillar = newImage("assets/pillar.png","350px","100px")
let crate = newImage("assets/crate.png", "150px", "200px")
let well = newImage("assets/well.png", "500px", "450px")
let sword = newImage("assets/sword.png","500px","405px",true)
let sheild = newImage("assets/shield.png", "165px", "185px", true)
let staff = newImage("assets/staff.png","600px","100px", true)


//attempt was made at creating the extra credit skyline in the background using a double forloop
//had challenges with proper fit sizing and scrolling vs fixed position
function buildLandscape(height, width, sourceGrass, sourceSky){
    
    for(let y=0; y < (height*0.3); y+=100 ){
        //establishes the height of the "sky" at 70% up the visible window

        for(let x=0; x< width; x+=100){
            let landscapePatch = document.createElement('img')
            //landscapePatch.style.position = "fixed"
            landscapePatch.src = sourceSky
            landscapePatch.style.zIndex = -5; //puts these patches behind everything
            landscapePatch.left=x
            landscapePatch.bottom=y
            document.body.append(landscapePatch)
        }
    }
    
    for(let y=height*0.3; y < height; y+=100 ){
        for(let x=0; x< width; x+=100){
            let landscapePatch = document.createElement('img')
            //landscapePatch.style.position = "fixed"
            landscapePatch.src = sourceGrass
            landscapePatch.style.zIndex = -5; //puts this behind everything
            landscapePatch.left=x
            landscapePatch.bottom=y
            document.body.append(landscapePatch)
        }
    }
}

buildLandscape(window.innerHeight, window.innerHeight, "assets/grass.png","assets/sky.png")

/*
commented out in favor of newImage() method

let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)
*/

/* create pine tree -- commented out in replacement for newImage() method

let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)
*/