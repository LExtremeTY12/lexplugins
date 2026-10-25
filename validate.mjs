import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const configContext={window:{}};vm.createContext(configContext);vm.runInContext(fs.readFileSync('dist/config.js','utf8'),configContext);const config=configContext.window.LEXPLUGINS_CONFIG;
const context={};vm.createContext(context);vm.runInContext(fs.readFileSync('dist/i18n.js','utf8')+';this.messages=MESSAGES',context);
for(const [key,row] of Object.entries(context.messages)){assert.equal(row.length,3,key);row.forEach(value=>assert.equal(typeof value,'string',key));}
const html=fs.readFileSync('dist/index.html','utf8');
for(const match of html.matchAll(/data-i18n(?:-label|-placeholder|-alt)?="([^"]+)"/g))assert(context.messages[match[1]],`Missing translation: ${match[1]}`);
assert.equal(new Set(config.plugins.map(p=>p.id)).size,config.plugins.length,'Unique IDs');
for(const p of config.plugins){
 assert(p.name && p.id && p.category);
 assert.equal(typeof p.price.amount,'number');assert(p.price.amount>=0);new Intl.NumberFormat('en-GB',{style:'currency',currency:p.price.currency});
 if(p.price.amount===0)assert(new URL(p.modrinthUrl).hostname==='modrinth.com');
 assert(!('icon' in p),'Plugin icons must not be configured');
 for(const language of ['pt','es'])for(const field of ['description','tags','features','requirements'])assert(p.translations?.[language]?.[field],`${p.id}.${language}.${field}`);
}
assert(fs.existsSync('dist/assets/world.svg'));
console.log(`Validated ${config.plugins.length} plugins, 3 languages, ${Object.keys(context.messages).length} interface messages, links and local assets.`);

assert(!/plugin-icon|hero-note|art-label|art-coordinates/.test(html),'Removed content must be absent');
assert(!/fetch\(/.test(fs.readFileSync('dist/app.js','utf8')),'Local opening must not depend on fetch');
