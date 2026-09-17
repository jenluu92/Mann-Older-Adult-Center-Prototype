// Copies supplied files unchanged; never crops, retouches, or assigns photos across albums.
import {readdir, mkdir, copyFile, writeFile, readFile} from 'node:fs/promises';
import {join, extname} from 'node:path';
import {createHash} from 'node:crypto';
const source=process.argv[2];
if(!source)throw new Error('Provide the supplied Mann asset directory.');
const folders={art:'Art',resources:'Community Resources',cooking:'Cooking',ready:'Eagles',garden:'Gardening',heritage:'Hispanic Hertiage Month',apple:'Linvilla Orchards',tea:"Mother's Day Tea Pty",pickleball:'Pickleball',ribbon:'Ribbon Cutting',zoo:'Zoo',casino:'Casino Trip'};
const assets={albums:{},landing:[],logos:{}};
const manifest=[];
async function copy(folder,file,destination){
 const from=join(source,folder,file),to=join('dist',destination);
 await mkdir(join(to,'..'),{recursive:true});await copyFile(from,to);
 manifest.push({folder,file,destination,sha256:createHash('sha256').update(await readFile(to)).digest('hex')});
 return './'+destination.replaceAll('\\','/');
}
for(const [id,folder] of Object.entries(folders)){
 const files=(await readdir(join(source,folder))).filter(f=>/\.(jpe?g|png|webp)$/i.test(f)).sort();
 assets.albums[id]=[];
 for(const [index,file] of files.entries())assets.albums[id].push(await copy(folder,file,`assets/photos/${id}/${String(index+1).padStart(2,'0')}${extname(file).toLowerCase()}`));
}
for(const [index,file] of (await readdir(join(source,'Landing Page Photos'))).filter(f=>/\.(jpe?g|png|webp)$/i.test(f)).sort().entries())assets.landing.push(await copy('Landing Page Photos',file,`assets/landing/${index+1}${extname(file).toLowerCase()}`));
for(const [key,file] of Object.entries({mann:'Mann Center Logo.png',philabundance:'philabundance-logo.png',parks:'Philaldephia Parks&Rec Logo.png',wellcare:'Wellcare logo.jpg',pca:'PCA.jpg.webp'}))assets.logos[key]=await copy('Logos',file,`assets/logos/${key}${extname(file).toLowerCase()}`);
await writeFile('dist/assets.js','// Supplied assets; provenance is recorded in ASSET-MANIFEST.json.\nexport const assets = '+JSON.stringify(assets,null,2)+';\n');
await writeFile('ASSET-MANIFEST.json',JSON.stringify({sourceDirectory:source,notes:['Original bytes preserved.','V2: Casino photos and PCA logo were not supplied. V3: two Casino Trip photos and PCA.jpg.webp are now supplied and incorporated.','Eagles maps to the former ready/MOAC album; no photos used across unrelated albums.','Program illustrations and fictional schedules/descriptions remain demonstration content. Removing repeated UI disclaimers in V3 does not change their evidence status.'],files:manifest},null,2)+'\n');
console.log(`Copied ${manifest.length} supplied assets unchanged: ${Object.values(assets.albums).flat().length} album photos, ${assets.landing.length} landing photos, ${Object.keys(assets.logos).length} logos.`);
