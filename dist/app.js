'use strict';
const $ = selector => document.querySelector(selector);
const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const supportedLanguages = ['en','pt','es'];
const locales = {en:'en-GB',pt:'pt-PT',es:'es-ES'};
let language = 'en';
try {const saved = localStorage.getItem('lexplugins-language');if(supportedLanguages.includes(saved)) language=saved;} catch {}
function t(key, vars = {}) {
  const message = MESSAGES[key]?.[supportedLanguages.indexOf(language)] ?? key;
  return message.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? ''));
}
function safeUrl(value, allowRelative = false) {
  if (!value) return '';
  try {const url = new URL(value,location.href);if(!['https:','http:'].includes(url.protocol)) return '';if(!allowRelative && !/^https?:\/\//i.test(value))return '';return url.href;} catch{return '';}
}
const downloadIcon = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 2v10m-4-4 4 4 4-4M3 12v5h14v-5"/></svg>';
let plugins = [], site = {}, loaded = false, loadFailed = false, currentCategory = 'All', lastFocused, openPluginId;
const normalise = value => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const isPaid = plugin => Number(plugin.price?.amount) > 0;
const localisePlugin = plugin => ({...plugin,...(plugin.translations?.[language] || {})});
const categoryLabel = category => MESSAGES[category] ? t(category) : category;
function priceLabel(plugin) {
  if(!isPaid(plugin))return t('free');
  try{return new Intl.NumberFormat(locales[language],{style:'currency',currency:plugin.price.currency || 'EUR'}).format(plugin.price.amount);}catch{return `${plugin.price.amount} ${plugin.price.currency || 'EUR'}`;}
}
function purchaseAction(plugin, className='card-download') {
  const paid = isPaid(plugin), href = safeUrl(paid ? plugin.purchaseUrl : plugin.modrinthUrl);
  if(!href)return `<span class="tag">${t(paid ? 'soon' : 'unavailable')}</span>`;
  return `<a class="${className}" href="${escape(href)}" target="_blank" rel="noopener noreferrer" aria-label="${escape(t(paid?'buyLabel':'getLabel',{name:plugin.name}))}">${t(paid?'buy':'getModrinth')} ${paid?'<span aria-hidden="true">↗</span>':downloadIcon}</a>`;
}
function renderPlugins() {
  if(!loaded)return;
  const query=normalise($('#search').value.trim());
  const visible=plugins.filter(p=>currentCategory==='All'||p.category===currentCategory).map(localisePlugin).filter(p=>normalise([p.name,p.description,categoryLabel(p.category),...(p.tags||[])].join(' ')).includes(query));
  $('#plugin-grid').innerHTML=visible.map(p=>`<article class="plugin-card"><div class="card-top"><div><p class="card-category">${escape(categoryLabel(p.category))}</p><h3>${escape(p.name)}</h3></div><span class="card-price${isPaid(p)?' paid':''}">${escape(priceLabel(p))}</span></div><p class="card-description">${escape(p.description)}</p><div class="card-tags">${(p.tags||[]).map(tag=>`<span class="tag">${escape(tag)}</span>`).join('')}</div><div class="card-footer"><button class="details-button" data-plugin="${escape(p.id)}" type="button" aria-label="${escape(t('detailsLabel',{name:p.name}))}">${t('details')} <span aria-hidden="true">↗</span></button>${purchaseAction(p)}</div></article>`).join('');
  $('#empty-state').hidden=visible.length>0;
  $('#catalogue-counter').textContent=`${String(visible.length).padStart(2,'0')} ${visible.length===1?'PLUGIN':'PLUGINS'}`;
}
function renderFilters() {
  const categories=[...new Set(plugins.map(p=>p.category).filter(Boolean))];
  $('#filters').innerHTML=['All',...categories].map(category=>`<button type="button" class="filter${currentCategory===category?' active':''}" data-category="${escape(category)}" aria-pressed="${currentCategory===category}">${escape(category==='All'?t('all'):categoryLabel(category))}${category==='All'?` <span>${plugins.length}</span>`:''}</button>`).join('');
}
function setCategory(category) {currentCategory=category;renderFilters();renderPlugins();}
function renderDialog(id) {
  const base=plugins.find(p=>p.id===id);if(!base)return;
  const p=localisePlugin(base);
  $('#dialog-content').innerHTML=`<button class="dialog-close" type="button" aria-label="${t('close')}">×</button><div class="dialog-top"><div><p class="card-category">${escape(categoryLabel(p.category))}</p><h2 id="dialog-title">${escape(p.name)}</h2></div></div><p class="dialog-description">${escape(p.description)}</p><dl class="dialog-meta"><div><dt>Minecraft Java</dt><dd>${escape(p.minecraft||t('checkDocs'))}</dd></div><div><dt>${t('platforms')}</dt><dd>${escape((p.platforms||[]).join(' · ')||t('checkDocs'))}</dd></div><div><dt>${t('price')}</dt><dd class="green">${escape(priceLabel(p))}</dd></div></dl><h3 class="dialog-section-title">${t('features')}</h3><ul class="feature-list">${(p.features||[]).map(feature=>`<li>${escape(feature)}</li>`).join('')}</ul>${p.requirements?`<p class="dialog-requirements">${escape(p.requirements)}</p>`:''}${p.command?`<p class="dialog-command">${t('command')}: <code>${escape(p.command)}</code></p>`:''}<div class="dialog-actions">${purchaseAction(p,'button primary')}${safeUrl(p.modrinthUrl)?`<a class="text-link" href="${escape(safeUrl(p.modrinthUrl))}" target="_blank" rel="noopener noreferrer">${t('documentation')}</a>`:''}</div>`;
  $('.dialog-close').addEventListener('click',()=>$('#plugin-dialog').close());
}
function openPlugin(id) {
  if(!plugins.some(p=>p.id===id))return;
  lastFocused=document.activeElement;openPluginId=id;renderDialog(id);$('#plugin-dialog').showModal();document.body.classList.add('modal-open');
}
function updateSiteLinks() {
  for(const [selector,value] of [['.discord-link',site.discordUrl],['.modrinth-link',site.modrinthUrl]]) {const url=safeUrl(value);if(url)document.querySelectorAll(selector).forEach(link=>link.href=url);}
}
function renderLoadError() {
  $('#plugin-grid').innerHTML=`<p class="loading">${t('loadError')} <button class="details-button" type="button" id="retry-load">${t('retry')}</button></p>`;
  $('#retry-load').addEventListener('click',()=>location.reload());
}
function applyLanguage(nextLanguage, persist=false) {
  language=supportedLanguages.includes(nextLanguage)?nextLanguage:'en';
  document.documentElement.lang=language==='pt'?'pt-PT':language==='es'?'es':'en';
  $('#language').value=language;
  if(persist)try{localStorage.setItem('lexplugins-language',language);}catch{}
  const author=escape(site.author||'LExtremeTY'), translatedSite={...site,...(site.translations?.[language]||{})};
  document.querySelectorAll('[data-i18n]').forEach(el=>el.innerHTML=t(el.dataset.i18n,{author}));
  for(const [data,attribute] of [['i18nLabel','aria-label'],['i18nPlaceholder','placeholder'],['i18nAlt','alt']])document.querySelectorAll(`[data-${data.replace(/[A-Z]/g,c=>'-'+c.toLowerCase())}]`).forEach(el=>el.setAttribute(attribute,t(el.dataset[data])));
  document.querySelectorAll('[data-site-name]').forEach(el=>el.textContent=site.name||'lexplugins');
  document.querySelector('.nav>.brand').setAttribute('aria-label',site.name||'lexplugins');
  document.querySelector('meta[name="description"]').content=t('metaDescription');
  document.title=`${site.name||'lexplugins'} — ${translatedSite.tagline||(language==='pt'?'O próximo nível do teu servidor.':language==='es'?'El siguiente nivel de tu servidor.':'The next level of your server.')}`;
  if(translatedSite.description)$('#site-description').textContent=translatedSite.description;
  if(loaded){const count=plugins.length,free=plugins.filter(p=>!isPaid(p)).length;$('#plugin-total').textContent=String(count).padStart(2,'0');$('#free-total').textContent=count&&free===count?'100%':String(free).padStart(2,'0');$('#free-caption').textContent=t(count&&free===count?'statFree':'statFreeMixed');$('#free-faq').textContent=t(free===count&&count>0?'freeFaqAll':'freeFaqMixed',{count});renderFilters();renderPlugins();}
  else if(loadFailed)renderLoadError();else $('#plugin-grid').innerHTML=`<p class="loading">${t('loading')}</p>`;
  if($('#plugin-dialog').open&&openPluginId)renderDialog(openPluginId);
  updateSiteLinks();
}
$('#language').addEventListener('change',event=>applyLanguage(event.target.value,true));
$('#plugin-grid').addEventListener('click',event=>{const button=event.target.closest('[data-plugin]');if(button)openPlugin(button.dataset.plugin);});
$('#filters').addEventListener('click',event=>{const button=event.target.closest('[data-category]');if(button)setCategory(button.dataset.category);});
$('#search').addEventListener('input',renderPlugins);
$('#reset-filters').addEventListener('click',()=>{$('#search').value='';setCategory('All');$('#search').focus();});
$('#plugin-dialog').addEventListener('close',()=>{document.body.classList.remove('modal-open');openPluginId=null;if(lastFocused?.isConnected)lastFocused.focus();});
$('#plugin-dialog').addEventListener('click',event=>{if(event.target===$('#plugin-dialog')){const rect=event.target.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)event.target.close();}});
document.addEventListener('keydown',event=>{if(event.key==='/'&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)&&!$('#plugin-dialog').open){event.preventDefault();$('#search').focus();$('#search').scrollIntoView({block:'center'});}});
applyLanguage(language);
function init() {
  try{const config=window.LEXPLUGINS_CONFIG;if(!config)throw new Error('Config unavailable');if(!Array.isArray(config.plugins))throw new Error('Invalid plugin list');plugins=config.plugins.filter(p=>p&&p.id&&p.name&&p.enabled!==false);site=config.site||{};loaded=true;applyLanguage(language);}
  catch(error){loadFailed=true;renderLoadError();console.error('Unable to load config.js:',error);}
}
init();
