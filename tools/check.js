#!/usr/bin/env node
'use strict';
// Light check for the news site: every page parses its dn:* block, has the tracker, and links nothing on the old shared pages.
const fs=require('node:fs');let bad=0;
for(const f of fs.readdirSync('reports').filter(f=>f.endsWith('.html'))){const s=fs.readFileSync('reports/'+f,'utf8');
 const need=['dn:kind','dn-track.js'];for(const n of need)if(!s.includes(n)){console.log(f+': missing '+n);bad++;}
 if(/href="\.\.\/(board|puzzles|lab|games|account|archive)\.html/.test(s)){console.log(f+': links a main-site page by relative path');bad++;}}
const feed=JSON.parse(fs.readFileSync('feed.json','utf8'));if(!feed.items||!feed.items.length){console.log('feed.json empty');bad++;}
console.log(bad?bad+' problem(s)':'ok: '+feed.items.length+' items');process.exit(bad?1:0);
