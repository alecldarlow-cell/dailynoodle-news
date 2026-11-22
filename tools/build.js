#!/usr/bin/env node
'use strict';
// Builds the site: the same steps the main site ran for this section, then copies the public files to _site.
const {spawnSync}=require('node:child_process'),fs=require('node:fs'),path=require('node:path');
for(const t of ["inject-tracker.js","og-tags.js","news-share.js","news-nav.js","news-dark.js","build-feed.js"]){const r=spawnSync(process.execPath,[path.join('tools',t)],{stdio:'inherit'});if(r.status)throw Error(t+' exited '+r.status);}
fs.rmSync('_site',{recursive:true,force:true});fs.mkdirSync('_site');
const KEEP=/^(index\.html|404\.html|front\.(css|js)|dn-[a-z]+\.js|feed\.json|manifest\.webmanifest)$/;
for(const f of fs.readdirSync('.'))if(KEEP.test(f))fs.copyFileSync(f,path.join('_site',f));
for(const d of ['reports','icons','assets'])fs.cpSync(d,path.join('_site',d),{recursive:true});
console.log('Built _site');
