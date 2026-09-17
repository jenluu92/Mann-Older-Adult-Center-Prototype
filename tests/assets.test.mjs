import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {assets} from '../dist/assets.js';
import {albums} from '../dist/data.js';

test('every supplied image keeps its original bytes and is assigned once',async()=>{
 const manifest=JSON.parse(await readFile(new URL('../ASSET-MANIFEST.json',import.meta.url),'utf8'));
 assert.equal(manifest.files.length,64);
 assert.equal(new Set(manifest.files.map(f=>f.destination)).size,64);
 for(const file of manifest.files){
  const bytes=await readFile(new URL('../dist/'+file.destination,import.meta.url));
  assert.equal(createHash('sha256').update(bytes).digest('hex'),file.sha256,file.destination);
 }
});
test('album photography is mapped to recognized albums, including newly supplied Casino photos',()=>{
 const expected={art:6,resources:6,cooking:4,ready:4,garden:5,heritage:6,apple:6,tea:6,pickleball:2,ribbon:5,zoo:6,casino:2};
 assert.deepEqual(Object.fromEntries(Object.entries(assets.albums).map(([id,photos])=>[id,photos.length])),expected);
 for(const [id,photos] of Object.entries(assets.albums)){
  assert.ok(albums.some(a=>a.id===id));
  assert.ok(photos.every(src=>src.startsWith('./assets/photos/'+id+'/')));
 }
 assert.equal(assets.albums.casino.length,2);
 assert.equal(assets.landing.length,1);
 assert.deepEqual(Object.keys(assets.logos).sort(),['mann','parks','pca','philabundance','wellcare']);
});
