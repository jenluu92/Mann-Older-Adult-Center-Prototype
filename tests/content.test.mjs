import test from 'node:test';
import assert from 'node:assert/strict';
import {programs,albums,trips,mealsFor,scheduleFor,weekday} from '../dist/data.js';

test('all 12 distinct programs and albums have complete bilingual names',()=>{
 assert.equal(programs.length,12);assert.equal(albums.length,12);
 for(const collection of [programs,albums]){
  assert.equal(new Set(collection.map(x=>x.id)).size,12);
  for(const item of collection)for(const language of ['en','es'])assert.ok(item.name[language]?.trim());
 }
 for(const p of programs){for(const language of ['en','es'])assert.ok(p.description[language]?.trim());assert.ok(p.sessions.length);}
});
test('supplied detail schedules remain authoritative in both language states',()=>{
 const sessions=id=>programs.find(p=>p.id===id).sessions;
 assert.deepEqual(sessions('pickleball'),[{day:1,start:660,end:720}]);
 assert.deepEqual(sessions('yoga'),[{day:2,start:630,end:690}]);
 assert.deepEqual(sessions('computer'),[{day:4,start:600,end:660}]);
 assert.deepEqual(sessions('fitness'),[{day:3,start:600,end:660},{day:5,start:570,end:630}]);
});
test('fixed demonstration day has Wednesday programs and exact meal availability',()=>{
 assert.equal(weekday(24),3);
 assert.deepEqual(scheduleFor(24).filter(x=>x.id).map(x=>x.id),['walking','fitness','memory','bingo']);
 assert.equal(mealsFor(24).hot.en,'Chicken Alfredo');
 assert.equal(mealsFor(24).cold.en,'Turkey Sandwich');
 assert.equal(mealsFor(24).hotCount,35);assert.equal(mealsFor(24).coldCount,5);
});
test('calendar respects supplied center closure and weekends',()=>{
 for(const day of [1,6,7,13,14,20,21,27,28])assert.deepEqual(scheduleFor(day),[]);
 for(let day=1;day<=30;day++)for(const event of scheduleFor(day)){
  assert.ok(event.start>=480&&event.end<=960&&event.start<event.end);
  if(event.id){const p=programs.find(p=>p.id===event.id);assert.ok(p.sessions.some(s=>s.day===weekday(day)&&s.start===event.start&&s.end===event.end));}
 }
});
test('trips retain supplied Boscov’s trip omitted from reference poster',()=>assert.ok(trips.some(x=>x.day===26&&x.name.en==='Boscov’s Trip')));
