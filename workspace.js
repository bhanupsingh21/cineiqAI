const agents = [
  { icon: 'clapperboard', title: 'Director', task: 'Ready for new project', progress: 0, status: 'idle' },
  { icon: 'camera', title: 'Cinematographer', task: 'Awaiting shot list', progress: 0, status: 'idle' },
  { icon: 'file-text', title: 'Script Agent', task: 'Idle', progress: 0, status: 'idle' },
  { icon: 'mic', title: 'Voice Agent', task: 'Idle', progress: 0, status: 'idle' },
  { icon: 'music', title: 'Music Composer', task: 'Idle', progress: 0, status: 'idle' },
  { icon: 'scissors', title: 'Editing Agent', task: 'Idle', progress: 0, status: 'idle' },
];

const scenes = [
  { id: 1, duration: '0:00 - 0:08', thumb: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=300&q=80', active: false },
  { id: 2, duration: '0:08 - 0:15', thumb: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?auto=format&fit=crop&w=300&q=80', active: false },
  { id: 3, duration: '0:15 - 0:24', thumb: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=300&q=80', active: true },
  { id: 4, duration: '0:24 - 0:32', thumb: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=300&q=80', active: false },
];

const pipelineStages = [
  { icon: 'brain-circuit', name: 'Story Analysis' },
  { icon: 'file-edit', name: 'Screenplay' },
  { icon: 'layout', name: 'Shot Planning' },
  { icon: 'users', name: 'Character Creation' },
  { icon: 'image', name: 'Scene Generation' },
  { icon: 'mic', name: 'Voice Generation' },
  { icon: 'music', name: 'Music & FX' },
  { icon: 'scissors', name: 'Editing' },
  { icon: 'video', name: 'Rendering' },
];

document.addEventListener('DOMContentLoaded', () => {
  renderAgents();
  renderThumbnails();
  renderCharacterSection();
  renderWorldSceneSection();
  initInteractions();
  initCharacterModal();
  initSceneModal();
  initMic();
});

function renderAgents() {
  const list = document.getElementById('ws-agents-list');
  if(!list) return;
  list.innerHTML = agents.map(agent => `
    <div class="agent-item">
      <div class="agent-item-header">
        <div style="display:flex; align-items:center; gap:8px;">
          <i data-lucide="${agent.icon}" class="icon-sm"></i>
          <span>${agent.title}</span>
        </div>
        <div class="agent-item-status">
          <div class="status-indicator ${agent.status}"></div>
        </div>
      </div>
      <div class="agent-item-task">${agent.task}</div>
      <div class="agent-progress">
        <div class="agent-progress-fill" style="width: ${agent.progress}%"></div>
      </div>
    </div>
  `).join('');
  lucide.createIcons();
}

function renderThumbnails() {
  const container = document.getElementById('scene-thumbnails');
  if(!container) return;
  container.innerHTML = scenes.map(scene => `
    <div class="scene-thumb ${scene.active ? 'active' : ''}">
      <img src="${scene.thumb}" alt="Scene ${scene.id}">
      <div class="scene-thumb-info">
        <span>Scene ${scene.id}</span>
        <span>${scene.duration}</span>
      </div>
    </div>
  `).join('');
}

function initPlaceholderCanvas() {
  const canvas = document.getElementById('pp-canvas');
  if (!canvas) return null;
  const ctx = canvas.getContext('2d');
  let animId = null;
  let generating = false;
  let genProgress = 0;
  let frameCount = 0;

  const SIZES = [4, 6, 10, 16, 24];
  const TOTAL_FRAMES = 2160;

  function resize() {
    const r = canvas.getBoundingClientRect();
    canvas.width  = r.width  || canvas.offsetWidth;
    canvas.height = r.height || canvas.offsetHeight;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  function idleTick() {
    // Slowly fade toward black so old flickers disappear
    ctx.fillStyle = 'rgba(0,0,0,0.06)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // A handful of very faint random blocks — just enough to feel alive
    const n = 4 + Math.floor(Math.random() * 4);
    for (let i = 0; i < n; i++) {
      const size = SIZES[Math.floor(Math.random() * 2)];
      const x = Math.floor(Math.random() * canvas.width  / size) * size;
      const y = Math.floor(Math.random() * canvas.height / size) * size;
      ctx.fillStyle = `rgba(${140 + Math.random()*40},${20 + Math.random()*20},${8},${Math.random() * 0.08})`;
      ctx.fillRect(x, y, size - 1, size - 1);
    }
  }

  function genTick() {
    frameCount++;
    const fcEl = document.getElementById('pp-frame-count');
    if (fcEl) {
      const f = Math.min(Math.round(frameCount * 9), TOTAL_FRAMES);
      fcEl.textContent = String(f).padStart(4, '0');
    }

    // Fade previous content — faster fade = more dynamic churn
    ctx.fillStyle = 'rgba(0,0,0,0.22)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // More blocks as progress grows
    const numBlocks = Math.floor(28 + genProgress * 55);
    for (let i = 0; i < numBlocks; i++) {
      // Bias toward smaller blocks (more granular look)
      const si = Math.floor(Math.random() ** 1.6 * SIZES.length);
      const size = SIZES[Math.min(si, SIZES.length - 1)];
      const x = Math.floor(Math.random() * canvas.width  / size) * size;
      const y = Math.floor(Math.random() * canvas.height / size) * size;

      const roll = Math.random();
      let r, g, b, a;
      if (roll < 0.52) {
        // Dark near-black "content" block
        r = 4  + Math.random() * 22;
        g = 2  + Math.random() * 10;
        b = 2  + Math.random() * 8;
        a = 0.55 + Math.random() * 0.45;
      } else if (roll < 0.78) {
        // Brand red/orange flash
        r = 160 + Math.random() * 60;
        g = 20  + Math.random() * 35;
        b = 5   + Math.random() * 15;
        a = 0.07 + Math.random() * 0.22;
      } else if (roll < 0.93) {
        // Warm dark tone
        r = 30 + Math.random() * 45;
        g = 8  + Math.random() * 18;
        b = 4  + Math.random() * 12;
        a = 0.3 + Math.random() * 0.4;
      } else {
        // Rare bright pop — like a pixel resolving
        const v = 190 + Math.random() * 65;
        r = v; g = v * 0.28; b = v * 0.12;
        a = 0.08 + Math.random() * 0.18;
      }

      ctx.fillStyle = `rgba(${Math.round(r)},${Math.round(g)},${Math.round(b)},${a.toFixed(2)})`;
      ctx.fillRect(x, y, size - 1, size - 1);
    }
  }

  function loop() {
    generating ? genTick() : idleTick();
    animId = requestAnimationFrame(loop);
  }

  resize();
  new ResizeObserver(resize).observe(canvas);
  loop();

  return {
    startGenerating() { generating = true; frameCount = 0; },
    setProgress(p)    { genProgress = p; },
    stop()            { if (animId) { cancelAnimationFrame(animId); animId = null; } },
  };
}

function initInteractions() {
  // Generate Video Button Logic
  const genBtn = document.getElementById('ws-generate-btn');
  const pipelineContainer = document.getElementById('ai-pipeline');
  const playerVideo = document.getElementById('player-video');
  const playerPlaceholder = document.querySelector('.player-placeholder');
  const playerControls   = document.querySelector('.player-controls');
  
  const stageLabels = [
    'Analyzing prompt…',
    'Writing screenplay…',
    'Planning shots…',
    'Building characters…',
    'Rendering scenes…',
    'Generating voice…',
    'Composing music…',
    'Editing footage…',
    'Final render…',
  ];

  const pixelEngine = initPlaceholderCanvas();

  if(genBtn && pipelineContainer) {
    genBtn.addEventListener('click', () => {
      // Show pipeline
      pipelineContainer.style.display = 'block';
      const stagesContainer = pipelineContainer.querySelector('.pipeline-stages');
      stagesContainer.innerHTML = pipelineStages.map((stage, idx) => `
        <div class="pipeline-stage ${idx === 0 ? 'active' : ''}" id="stage-${idx}">
          <i data-lucide="${stage.icon}" class="stage-icon"></i>
          <div class="stage-name">${stage.name}</div>
          <div class="stage-status">${idx === 0 ? 'In Progress...' : 'Pending'}</div>
        </div>
      `).join('');
      lucide.createIcons();

      // Activate pixel generation state
      const ppGenUI    = document.getElementById('pp-gen-ui');
      const ppIdleText = document.getElementById('pp-idle-text');
      const ppIconRing = document.getElementById('pp-icon-ring');
      const ppLabel    = document.getElementById('pp-gen-label');
      const ppBarFill  = document.getElementById('pp-gen-bar-fill');
      if(playerPlaceholder) playerPlaceholder.classList.add('generating');
      if(ppIdleText) ppIdleText.style.display = 'none';
      if(ppIconRing) ppIconRing.style.display = 'none';
      if(ppGenUI)    ppGenUI.style.display = 'flex';
      if(ppLabel)    ppLabel.textContent = stageLabels[0];
      if(ppBarFill)  ppBarFill.style.width = '0%';
      if(pixelEngine) pixelEngine.startGenerating();

      // Update top-nav status
      const statusIndicator = document.querySelector('.pipeline-status .status-indicator');
      const statusText      = document.querySelector('.pipeline-status span');
      if(statusIndicator) {
        statusIndicator.classList.remove('idle');
        statusIndicator.classList.add('active');
        statusText.textContent = 'AI Pipeline Active';
      }

      // Simulate pipeline progression
      let currentStage = 0;
      const total = pipelineStages.length;
      const interval = setInterval(() => {
        const prevStageEl = document.getElementById(`stage-${currentStage}`);
        if(prevStageEl) {
          prevStageEl.classList.remove('active');
          prevStageEl.classList.add('done');
          prevStageEl.querySelector('.stage-status').textContent = 'Complete';
        }

        currentStage++;
        const progress = currentStage / total;
        if(ppBarFill) ppBarFill.style.width = `${Math.round(progress * 100)}%`;
        if(pixelEngine) pixelEngine.setProgress(progress);

        if(currentStage < total) {
          const nextStageEl = document.getElementById(`stage-${currentStage}`);
          nextStageEl.classList.add('active');
          nextStageEl.querySelector('.stage-status').textContent = 'In Progress...';
          if(ppLabel) ppLabel.textContent = stageLabels[currentStage];
        } else {
          clearInterval(interval);
          if(statusIndicator) {
            statusIndicator.classList.remove('active');
            statusIndicator.classList.add('idle');
            statusText.textContent = 'AI Pipeline Complete';
          }
          if(pixelEngine) pixelEngine.stop();
          if(playerPlaceholder) {
            playerPlaceholder.classList.remove('generating');
            playerPlaceholder.style.display = 'none';
          }
          if(playerVideo) {
            playerVideo.classList.remove('hidden');
            playerVideo.play().catch(() => {});
          }
          if(playerControls) playerControls.classList.add('visible');
        }
      }, 800);
    });
  }

  // Fix Prompt button — appears when textarea has content
  const wsPromptInput = document.getElementById('ws-prompt-input');
  const fixPromptBtn  = document.getElementById('fix-prompt-btn');
  if (wsPromptInput && fixPromptBtn) {
    wsPromptInput.addEventListener('input', () => {
      fixPromptBtn.classList.toggle('visible', wsPromptInput.value.trim().length > 0);
    });
  }

  // Aspect ratio select — update player + placeholder
  const aspectSelect = document.getElementById('aspect-ratio-select');
  const playerContainer = document.getElementById('preview-player-container');
  const player = document.getElementById('preview-player');

  function applyAspectRatio(ratio) {
    if (!player || !playerContainer) return;
    const cssRatio = ratio.replace(':', ' / ');
    player.style.aspectRatio = cssRatio;
    playerContainer.dataset.ratio = ratio;
    const hudRight = document.getElementById('pp-hud-right');
    if (hudRight) hudRight.textContent = `4K · ${ratio} · 24fps`;
    const resBadge = document.querySelector('.res-badge');
    if (resBadge) resBadge.textContent = ratio;
  }

  if (aspectSelect) {
    aspectSelect.addEventListener('change', (e) => applyAspectRatio(e.target.value));
    applyAspectRatio(aspectSelect.value);
  }

  // Content type tab interaction
  const typeTabs = document.querySelectorAll('.prompt-type-tab');
  typeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      typeTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // Handle URL Params for auto-start
  const urlParams = new URLSearchParams(window.location.search);
  const promptParam = urlParams.get('prompt');
  const autoStart = urlParams.get('autoStart');

  if (promptParam) {
    const promptInput = document.getElementById('ws-prompt-input');
    if (promptInput) promptInput.value = promptParam;
  }

  if (autoStart === 'true' && genBtn) {
    setTimeout(() => {
      genBtn.click();
    }, 500);
  }
}

/* ═══════════════════════════════════════════════════════════
   CHARACTER SYSTEM
═══════════════════════════════════════════════════════════ */

const characters = [
  { id: 1, name: 'Dr. Aris', style: 'Cinematic', sceneCount: 4, lastUsed: '2h ago', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80', consistent: true },
  { id: 2, name: 'Nova', style: 'Cyberpunk', sceneCount: 2, lastUsed: '1d ago', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=300&q=80', consistent: true },
  { id: 3, name: 'Commander Hale', style: 'Sci-Fi', sceneCount: 6, lastUsed: '3d ago', img: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=300&q=80', consistent: true },
  { id: 4, name: 'Elena Voss', style: 'Noir', sceneCount: 3, lastUsed: '5d ago', img: 'https://images.unsplash.com/photo-1541823709867-1b206113eafd?auto=format&fit=crop&w=300&q=80', consistent: false },
  { id: 5, name: 'The Architect', style: 'Thriller', sceneCount: 8, lastUsed: '1w ago', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80', consistent: true },
  { id: 6, name: 'Kira', style: 'Fantasy', sceneCount: 1, lastUsed: '2w ago', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80', consistent: true },
  { id: 7, name: 'DELTA-7', style: 'Sci-Fi', sceneCount: 5, lastUsed: '3w ago', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80', consistent: false },
  { id: 8, name: 'Marisol', style: 'Drama', sceneCount: 2, lastUsed: '1mo ago', img: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=300&q=80', consistent: true },
];

const MAX_SCENE_CHARS = 5;
let sceneCharacters = [
  { charId: 1, role: 'The Protagonist' },
];
let pendingCharId = null;

function renderCharacterSection() {
  const section = document.getElementById('char-section');
  const countBadge = document.getElementById('char-scene-count-badge');
  const addBtn = document.getElementById('char-add-btn');
  if (!section) return;

  const count = sceneCharacters.length;
  if (countBadge) countBadge.textContent = `${count} / ${MAX_SCENE_CHARS}`;

  if (addBtn) {
    const full = count >= MAX_SCENE_CHARS;
    addBtn.disabled = full;
    addBtn.style.opacity = full ? '0.4' : '';
    addBtn.title = full ? 'Scene is full (5 characters max)' : '';
  }

  if (count === 0) {
    section.innerHTML = `<div class="char-scene-empty">No characters in scene yet.</div>`;
    return;
  }

  section.innerHTML = `<div class="char-scene-list">${
    sceneCharacters.map(({ charId, role }) => {
      const char = characters.find(c => c.id === charId);
      if (!char) return '';
      return `
        <div class="char-scene-item" data-char-id="${charId}">
          <img src="${char.img}" alt="${char.name}" class="char-scene-img" />
          <div class="char-scene-info">
            <div class="char-scene-name">${char.name}</div>
            <div class="char-scene-role-tag">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              ${role || 'Unassigned'}
            </div>
          </div>
          <div class="char-scene-actions">
            <button class="char-scene-action-btn char-scene-edit" data-char-id="${charId}" title="Edit">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            </button>
            <button class="char-scene-action-btn char-scene-remove" data-char-id="${charId}" title="Remove">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
        </div>`;
    }).join('')
  }</div>`;

  section.querySelectorAll('.char-scene-remove').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.charId);
      sceneCharacters = sceneCharacters.filter(sc => sc.charId !== id);
      renderCharacterSection();
    });
  });

  lucide.createIcons();
}

function openCharModal() {
  const overlay = document.getElementById('char-modal-overlay');
  if (overlay) {
    showCharGrid();
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCharModal() {
  const overlay = document.getElementById('char-modal-overlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function showCharGrid() {
  document.getElementById('char-option-grid')?.classList.remove('hidden');
  document.querySelectorAll('.char-view').forEach(v => v.classList.add('hidden'));
  document.getElementById('char-role-overlay')?.classList.add('hidden');
  pendingCharId = null;
  const backBtn = document.getElementById('char-modal-back');
  if (backBtn) backBtn.classList.add('hidden');
  const title = document.getElementById('char-modal-title');
  const sub   = document.getElementById('char-modal-sub');
  if (title) title.textContent = 'Create Your Character';
  if (sub) sub.textContent = 'Generate cinematic characters for your scenes using AI.';
}

const viewMeta = {
  image:   { title: 'Image Character Builder',   sub: 'Upload reference images to create a consistent AI character.' },
  prompt:  { title: 'AI Character Prompt Studio', sub: 'Describe your character and generate cinematic variations.' },
  builder: { title: 'Character Builder Studio',   sub: 'Sculpt every detail of your cinematic character.' },
  library: { title: 'Character Library',           sub: 'Pick from your saved characters to add to this scene.' },
};

function showCharView(viewId) {
  document.getElementById('char-option-grid')?.classList.add('hidden');
  document.querySelectorAll('.char-view').forEach(v => v.classList.add('hidden'));
  const target = document.getElementById(`char-view-${viewId}`);
  if (target) target.classList.remove('hidden');

  const backBtn = document.getElementById('char-modal-back');
  if (backBtn) backBtn.classList.remove('hidden');

  const meta = viewMeta[viewId] || {};
  const title = document.getElementById('char-modal-title');
  const sub   = document.getElementById('char-modal-sub');
  if (title) title.textContent = meta.title || '';
  if (sub) sub.textContent = meta.sub || '';

  if (viewId === 'library') renderCharLibrary();
  lucide.createIcons();
}

function renderCharLibrary(filter = 'all') {
  const grid = document.getElementById('char-lib-grid');
  if (!grid) return;
  const list = filter === 'recent'
    ? characters.slice(0, 4)
    : filter === 'shared'
    ? characters.filter((_, i) => i % 2 === 0)
    : characters;

  const addedIds = new Set(sceneCharacters.map(sc => sc.charId));
  const sceneFull = sceneCharacters.length >= MAX_SCENE_CHARS;

  grid.innerHTML = list.map(char => {
    const alreadyAdded = addedIds.has(char.id);
    const existing = sceneCharacters.find(sc => sc.charId === char.id);
    return `
      <div class="char-lib-card ${alreadyAdded ? 'already-added' : ''}">
        ${alreadyAdded ? `<div class="char-lib-added-badge"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> In Scene</div>` : ''}
        <img src="${char.img}" alt="${char.name}" loading="lazy" />
        <div class="char-lib-card-info">
          <div class="char-lib-card-name">${char.name}</div>
          <div class="char-lib-style-badge">${char.style}</div>
          ${alreadyAdded ? `<div class="char-lib-role-shown">${existing?.role || 'Unassigned'}</div>` : `
          <div class="char-lib-card-meta">
            <span>${char.sceneCount} scenes</span>
            <span>${char.lastUsed}</span>
          </div>`}
          ${alreadyAdded
            ? `<button class="char-lib-add-btn char-lib-remove-btn" data-char-id="${char.id}">Remove from Scene</button>`
            : `<button class="char-lib-add-btn ${sceneFull ? 'disabled' : ''}" data-char-id="${char.id}" ${sceneFull ? 'disabled' : ''}>+ Add to Scene</button>`
          }
        </div>
      </div>`;
  }).join('');

  grid.querySelectorAll('.char-lib-add-btn:not(.disabled)').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.currentTarget.dataset.charId);
      if (e.currentTarget.classList.contains('char-lib-remove-btn')) {
        sceneCharacters = sceneCharacters.filter(sc => sc.charId !== id);
        renderCharacterSection();
        renderCharLibrary(filter);
      } else {
        showRoleAssignment(id);
      }
    });
  });
}

function showRoleAssignment(charId) {
  pendingCharId = charId;
  const char = characters.find(c => c.id === charId);
  if (!char) return;

  const overlay = document.getElementById('char-role-overlay');
  const selectedEl = document.getElementById('char-role-selected-char');
  const input = document.getElementById('char-role-input');

  if (selectedEl) {
    selectedEl.innerHTML = `
      <img src="${char.img}" alt="${char.name}" class="char-role-char-img" />
      <div>
        <div class="char-role-char-name">${char.name}</div>
        <div class="char-lib-style-badge" style="margin-top:4px;">${char.style}</div>
      </div>`;
  }
  if (input) input.value = '';
  if (overlay) overlay.classList.remove('hidden');
  lucide.createIcons();
  input?.focus();
}

function confirmCharacterAdd() {
  if (!pendingCharId) return;
  const input = document.getElementById('char-role-input');
  const role = input?.value.trim() || 'Unassigned';

  if (!sceneCharacters.find(sc => sc.charId === pendingCharId)) {
    sceneCharacters.push({ charId: pendingCharId, role });
  }
  pendingCharId = null;

  document.getElementById('char-role-overlay')?.classList.add('hidden');
  renderCharacterSection();
  closeCharModal();
}

function initCharacterModal() {
  // Open modal
  document.getElementById('char-add-btn')?.addEventListener('click', openCharModal);

  // Close buttons
  document.getElementById('char-modal-close')?.addEventListener('click', closeCharModal);
  document.getElementById('char-modal-overlay')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeCharModal();
  });

  // Back to grid
  document.getElementById('char-modal-back')?.addEventListener('click', showCharGrid);

  // ESC handled in role-panel block below

  // Option card clicks
  document.querySelectorAll('.char-option-card').forEach(card => {
    card.addEventListener('click', () => {
      const view = card.dataset.view;
      if (view) showCharView(view);
    });
  });

  // Role assignment — confirm
  document.getElementById('char-role-confirm')?.addEventListener('click', confirmCharacterAdd);

  // Role assignment — cancel
  document.getElementById('char-role-cancel')?.addEventListener('click', () => {
    pendingCharId = null;
    document.getElementById('char-role-overlay')?.classList.add('hidden');
  });

  // Role assignment — confirm on Enter key
  document.getElementById('char-role-input')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') confirmCharacterAdd();
  });

  // Role chip clicks
  document.getElementById('char-role-chips')?.addEventListener('click', (e) => {
    const chip = e.target.closest('.char-role-chip');
    if (!chip) return;
    const input = document.getElementById('char-role-input');
    if (input) input.value = chip.dataset.role;
    document.querySelectorAll('.char-role-chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
  });

  // ESC also dismisses role panel first, then modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const roleOverlay = document.getElementById('char-role-overlay');
      if (roleOverlay && !roleOverlay.classList.contains('hidden')) {
        pendingCharId = null;
        roleOverlay.classList.add('hidden');
      } else {
        closeCharModal();
      }
    }
  });

  // Prompt studio — section toggles
  document.querySelectorAll('.char-section-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.char-section-item');
      item?.classList.toggle('open');
    });
  });

  // Prompt studio — example chips
  document.querySelectorAll('.char-prompt-examples .assist-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const ta = document.querySelector('.char-prompt-textarea');
      if (ta) ta.value = chip.dataset.prompt || chip.textContent;
    });
  });

  // Preview mode buttons
  document.querySelectorAll('.char-preview-modes').forEach(group => {
    group.querySelectorAll('.char-mode-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.char-mode-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  });

  // Category list (builder)
  document.querySelectorAll('.char-cat-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.char-cat-item').forEach(c => c.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // Env buttons (builder)
  document.querySelectorAll('.char-env-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.char-env-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Emotion preset buttons
  document.querySelectorAll('.char-emotion-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.char-emotion-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Library filter buttons
  document.querySelectorAll('.char-lib-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.char-lib-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCharLibrary(btn.dataset.filter);
    });
  });

  // Library search
  document.getElementById('char-lib-search')?.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    document.querySelectorAll('.char-lib-card').forEach(card => {
      const name = card.querySelector('.char-lib-card-name')?.textContent.toLowerCase() || '';
      card.style.display = name.includes(q) ? '' : 'none';
    });
  });

  // AI slider value display
  document.querySelectorAll('.char-slider-row').forEach(row => {
    const slider = row.querySelector('.char-slider');
    const val = row.querySelector('.char-slider-val');
    if (slider && val) {
      slider.addEventListener('input', () => { val.textContent = slider.value; });
    }
  });

  // Upload zone
  const uploadZone = document.getElementById('char-upload-zone');
  const fileInput  = document.getElementById('char-file-input');
  const uploadGrid = document.getElementById('char-upload-grid');

  document.getElementById('char-upload-browse')?.addEventListener('click', (e) => {
    e.stopPropagation();
    fileInput?.click();
  });

  uploadZone?.addEventListener('click', () => fileInput?.click());

  uploadZone?.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadZone.classList.add('drag-over');
  });
  uploadZone?.addEventListener('dragleave', () => uploadZone.classList.remove('drag-over'));
  uploadZone?.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadZone.classList.remove('drag-over');
    handleImageFiles(e.dataTransfer.files);
  });

  fileInput?.addEventListener('change', () => handleImageFiles(fileInput.files));

  function handleImageFiles(files) {
    if (!uploadGrid || !files?.length) return;
    Array.from(files).slice(0, 4).forEach(file => {
      if (!file.type.startsWith('image/')) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        const thumb = document.createElement('div');
        thumb.className = 'char-upload-thumb';
        thumb.innerHTML = `<img src="${ev.target.result}" alt="uploaded" />`;
        uploadGrid.appendChild(thumb);
      };
      reader.readAsDataURL(file);
    });
  }

  // Variation strip
  document.querySelectorAll('.char-variation').forEach(v => {
    v.addEventListener('click', () => {
      document.querySelectorAll('.char-variation').forEach(x => x.classList.remove('active'));
      v.classList.add('active');
    });
  });

  // Skin tone buttons
  document.querySelectorAll('.char-skin-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.char-skin-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  lucide.createIcons();
}

/* ═══════════════════════════════════════════════════════════
   WORLD SCENE SYSTEM
═══════════════════════════════════════════════════════════ */

const sceneLibrary = [
  { id: 1,  name: 'Neon Cyberpunk Street',   type: 'Exterior', mood: 'Dark',        style: 'Sci-Fi',    img: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=600&q=80' },
  { id: 2,  name: 'Abandoned Warehouse',      type: 'Interior', mood: 'Gritty',      style: 'Noir',      img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
  { id: 3,  name: 'Misty Mountain Valley',    type: 'Exterior', mood: 'Serene',      style: 'Drama',     img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80' },
  { id: 4,  name: 'Space Station Core',       type: 'Interior', mood: 'Tense',       style: 'Sci-Fi',    img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=600&q=80' },
  { id: 5,  name: 'Ancient Forest Path',      type: 'Exterior', mood: 'Mysterious',  style: 'Fantasy',   img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80' },
  { id: 6,  name: 'Glass Corporate HQ',       type: 'Interior', mood: 'Sterile',     style: 'Thriller',  img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80' },
  { id: 7,  name: 'Rainy Tokyo Alley',        type: 'Exterior', mood: 'Melancholic', style: 'Noir',      img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=80' },
  { id: 8,  name: 'Underground Bunker',       type: 'Interior', mood: 'Intense',     style: 'Action',    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80' },
  { id: 9,  name: 'Golden Desert Dunes',      type: 'Exterior', mood: 'Vast',        style: 'Epic',      img: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=600&q=80' },
  { id: 10, name: 'Victorian Mansion Hall',   type: 'Interior', mood: 'Gothic',      style: 'Horror',    img: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=600&q=80' },
];

const scenePresets = [
  { name: 'Noir City Night',   style: 'Noir',     img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=600&q=80' },
  { name: 'Neon Cyberpunk',    style: 'Sci-Fi',   img: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=600&q=80' },
  { name: 'Golden Desert',     style: 'Epic',     img: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=600&q=80' },
  { name: 'Deep Space',        style: 'Sci-Fi',   img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=600&q=80' },
  { name: 'Ancient Forest',    style: 'Fantasy',  img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80' },
  { name: 'Victorian Manor',   style: 'Horror',   img: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=600&q=80' },
  { name: 'Rainy Tokyo',       style: 'Noir',     img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=80' },
  { name: 'Mountain Valley',   style: 'Drama',    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80' },
  { name: 'Brutal Industrial', style: 'Action',   img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
  { name: 'Glass Metropolis',  style: 'Thriller', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80' },
  { name: 'Underground Vault', style: 'Action',   img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80' },
  { name: 'Cosmic Nebula',     style: 'Sci-Fi',   img: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=600&q=80' },
];

const MAX_WORLD_SCENES = 5;
let activeScenes = [{ sceneId: 7 }];

function renderWorldSceneSection() {
  const section = document.getElementById('world-scene-section');
  const badge   = document.getElementById('scene-count-badge');
  const addBtn  = document.getElementById('scene-add-btn');
  if (!section) return;
  const count = activeScenes.length;
  if (badge) badge.textContent = `${count} / ${MAX_WORLD_SCENES}`;
  if (addBtn) { const full = count >= MAX_WORLD_SCENES; addBtn.disabled = full; addBtn.style.opacity = full ? '0.4' : ''; }

  if (count === 0) { section.innerHTML = `<div class="char-scene-empty">No environments added yet.</div>`; return; }

  section.innerHTML = `<div class="world-scene-list">${
    activeScenes.map(({ sceneId }) => {
      const scene = sceneLibrary.find(s => s.id === sceneId);
      if (!scene) return '';
      return `
        <div class="world-scene-item">
          <div class="world-scene-thumb" style="background-image:url('${scene.img}');"></div>
          <div class="world-scene-info">
            <div class="world-scene-name">${scene.name}</div>
            <div class="world-scene-tags">
              <span class="world-scene-tag">${scene.type}</span>
              <span class="world-scene-tag world-scene-tag-style">${scene.style}</span>
            </div>
          </div>
          <div class="char-scene-actions">
            <button class="char-scene-action-btn world-scene-remove" data-scene-id="${sceneId}" title="Remove">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
        </div>`;
    }).join('')
  }</div>`;

  section.querySelectorAll('.world-scene-remove').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      activeScenes = activeScenes.filter(s => s.sceneId !== parseInt(btn.dataset.sceneId));
      renderWorldSceneSection();
    });
  });
}

function openSceneModal()  { const o = document.getElementById('scene-modal-overlay'); if (o) { showSceneGrid(); o.classList.add('open'); document.body.style.overflow = 'hidden'; } }
function closeSceneModal() { const o = document.getElementById('scene-modal-overlay'); if (o) { o.classList.remove('open'); document.body.style.overflow = ''; } }

const sceneViewMeta = {
  generate:  { title: 'Generate Scene',        sub: 'Describe your world and AI will create it.' },
  reference: { title: 'From Reference Image',  sub: 'Match an environment from your reference photo.' },
  library:   { title: 'Scene Library',         sub: 'Browse your saved cinematic environments.' },
  presets:   { title: 'Cinematic Presets',     sub: 'Pick a ready-made environment and add it instantly.' },
};

function showSceneGrid() {
  document.getElementById('scene-option-grid')?.classList.remove('hidden');
  document.querySelectorAll('#scene-modal .char-view').forEach(v => v.classList.add('hidden'));
  document.getElementById('scene-modal-back')?.classList.add('hidden');
  if (document.getElementById('scene-modal-title')) document.getElementById('scene-modal-title').textContent = 'World Scene';
  if (document.getElementById('scene-modal-sub'))   document.getElementById('scene-modal-sub').textContent   = 'Create or select cinematic environments for your video.';
}

function showSceneView(viewId) {
  document.getElementById('scene-option-grid')?.classList.add('hidden');
  document.querySelectorAll('#scene-modal .char-view').forEach(v => v.classList.add('hidden'));
  document.getElementById(`scene-view-${viewId}`)?.classList.remove('hidden');
  document.getElementById('scene-modal-back')?.classList.remove('hidden');
  const meta = sceneViewMeta[viewId] || {};
  if (document.getElementById('scene-modal-title')) document.getElementById('scene-modal-title').textContent = meta.title || '';
  if (document.getElementById('scene-modal-sub'))   document.getElementById('scene-modal-sub').textContent   = meta.sub   || '';
  if (viewId === 'library') renderSceneLibrary();
  if (viewId === 'presets') renderScenePresets();
  lucide.createIcons();
}

function addSceneToVideo(sceneId) {
  if (activeScenes.length >= MAX_WORLD_SCENES) return;
  if (!activeScenes.find(s => s.sceneId === sceneId)) activeScenes.push({ sceneId });
  renderWorldSceneSection();
  closeSceneModal();
}

function renderSceneLibrary(filter = 'all') {
  const grid = document.getElementById('scene-lib-grid');
  if (!grid) return;
  const addedIds  = new Set(activeScenes.map(s => s.sceneId));
  const sceneFull = activeScenes.length >= MAX_WORLD_SCENES;
  const list = filter === 'exterior' ? sceneLibrary.filter(s => s.type === 'Exterior')
             : filter === 'interior' ? sceneLibrary.filter(s => s.type === 'Interior')
             : sceneLibrary;

  grid.innerHTML = list.map(scene => {
    const added = addedIds.has(scene.id);
    return `
      <div class="scene-lib-card ${added ? 'already-added' : ''}">
        ${added ? `<div class="char-lib-added-badge"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Added</div>` : ''}
        <div class="scene-lib-thumb" style="background-image:url('${scene.img}');"></div>
        <div class="scene-lib-card-info">
          <div class="scene-lib-name">${scene.name}</div>
          <div class="scene-lib-tags">
            <span class="world-scene-tag">${scene.type}</span>
            <span class="world-scene-tag world-scene-tag-style">${scene.style}</span>
            <span class="world-scene-tag">${scene.mood}</span>
          </div>
          ${added
            ? `<button class="char-lib-add-btn char-lib-remove-btn" data-scene-id="${scene.id}">Remove from Video</button>`
            : `<button class="char-lib-add-btn ${sceneFull ? 'disabled' : ''}" data-scene-id="${scene.id}" ${sceneFull ? 'disabled' : ''}>+ Add to Video</button>`
          }
        </div>
      </div>`;
  }).join('');

  grid.querySelectorAll('.char-lib-add-btn:not(.disabled)').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.currentTarget.dataset.sceneId);
      if (e.currentTarget.classList.contains('char-lib-remove-btn')) {
        activeScenes = activeScenes.filter(s => s.sceneId !== id);
        renderWorldSceneSection(); renderSceneLibrary(filter);
      } else { addSceneToVideo(id); }
    });
  });
}

function renderScenePresets() {
  const grid = document.getElementById('scene-presets-grid');
  if (!grid) return;
  grid.innerHTML = scenePresets.map((preset, idx) => `
    <div class="scene-preset-card" style="background-image:url('${preset.img}');">
      <div class="scene-preset-overlay">
        <span class="scene-preset-style">${preset.style}</span>
        <div class="scene-preset-name">${preset.name}</div>
        <button class="scene-preset-add-btn" data-preset-idx="${idx}">+ Add to Video</button>
      </div>
    </div>`).join('');

  grid.querySelectorAll('.scene-preset-add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.dataset.presetIdx);
      const preset = scenePresets[idx];
      const newId  = 100 + idx;
      if (!sceneLibrary.find(s => s.id === newId))
        sceneLibrary.push({ id: newId, name: preset.name, type: 'Exterior', mood: 'Cinematic', style: preset.style, img: preset.img });
      addSceneToVideo(newId);
    });
  });
}

function initSceneModal() {
  document.getElementById('scene-add-btn')?.addEventListener('click', openSceneModal);
  document.getElementById('scene-modal-close')?.addEventListener('click', closeSceneModal);
  document.getElementById('scene-modal-overlay')?.addEventListener('click', (e) => { if (e.target === e.currentTarget) closeSceneModal(); });
  document.getElementById('scene-modal-back')?.addEventListener('click', showSceneGrid);

  document.querySelectorAll('[data-scene-view]').forEach(card => {
    card.addEventListener('click', () => showSceneView(card.dataset.sceneView));
  });
  document.querySelectorAll('[data-scene-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-scene-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSceneLibrary(btn.dataset.sceneFilter);
    });
  });
  document.getElementById('scene-lib-search')?.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    document.querySelectorAll('.scene-lib-card').forEach(card => {
      card.style.display = (card.querySelector('.scene-lib-name')?.textContent.toLowerCase() || '').includes(q) ? '' : 'none';
    });
  });
  document.querySelectorAll('#scene-view-generate .char-section-header').forEach(h => {
    h.addEventListener('click', () => h.closest('.char-section-item')?.classList.toggle('open'));
  });
  document.querySelectorAll('[data-scene-prompt]').forEach(chip => {
    chip.addEventListener('click', () => {
      const ta = document.querySelector('#scene-view-generate .char-prompt-textarea');
      if (ta) ta.value = chip.dataset.scenePrompt;
    });
  });
  document.querySelectorAll('#scene-view-generate .char-slider-row').forEach(row => {
    const s = row.querySelector('.char-slider'), v = row.querySelector('.char-slider-val');
    if (s && v) s.addEventListener('input', () => { v.textContent = s.value; });
  });

  const zone = document.getElementById('scene-upload-zone');
  const inp  = document.getElementById('scene-file-input');
  const ugrid = document.getElementById('scene-upload-grid');
  document.getElementById('scene-upload-browse')?.addEventListener('click', (e) => { e.stopPropagation(); inp?.click(); });
  zone?.addEventListener('click', () => inp?.click());
  zone?.addEventListener('dragover', (e) => { e.preventDefault(); zone.classList.add('drag-over'); });
  zone?.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
  zone?.addEventListener('drop', (e) => { e.preventDefault(); zone.classList.remove('drag-over'); handleSceneFiles(e.dataTransfer.files); });
  inp?.addEventListener('change', () => handleSceneFiles(inp.files));

  function handleSceneFiles(files) {
    if (!ugrid || !files?.length) return;
    Array.from(files).slice(0, 4).forEach(file => {
      if (!file.type.startsWith('image/')) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        const t = document.createElement('div');
        t.className = 'char-upload-thumb';
        t.innerHTML = `<img src="${ev.target.result}" alt="ref" />`;
        ugrid.appendChild(t);
      };
      reader.readAsDataURL(file);
    });
  }
  lucide.createIcons();
}

// ── Voice Input (Web Speech API) ─────────────────────────────────────────────

// Language switch commands — phrase (lowercase) → { lang, label }
const LANG_COMMANDS = [
  { patterns: ['hindi main likho','hindi mein likho','hindi me likho','write in hindi','hindi mai likho'], lang: 'hi-IN', label: 'HI' },
  { patterns: ['english main likho','english mein likho','english me likho','write in english','angrezi mein likho','angrezi main likho'], lang: 'en-US', label: 'EN' },
  { patterns: ['hinglish main likho','hinglish mein likho','write in hinglish'], lang: 'hi-IN', label: 'HI' },
];

function detectLangSwitch(text) {
  const t = text.trim().toLowerCase();
  for (const cmd of LANG_COMMANDS) {
    if (cmd.patterns.some(p => t === p || t.endsWith(p))) return cmd;
  }
  return null;
}

function initMic() {
  const micBtn  = document.getElementById('mic-btn');
  const textarea = document.getElementById('ws-prompt-input');
  if (!micBtn || !textarea) return;

  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    micBtn.title = 'Voice input not supported in this browser';
    micBtn.style.opacity = '0.4';
    micBtn.style.cursor = 'not-allowed';
    return;
  }

  let currentLang = 'en-US';
  let currentLabel = 'EN';
  let listening    = false;
  let baseText     = '';
  let interim      = '';
  let switchPending = null; // { lang, label } to apply on next start

  // Language badge next to mic button
  const langBadge = document.createElement('span');
  langBadge.id = 'mic-lang-badge';
  langBadge.textContent = currentLabel;
  micBtn.parentNode.insertBefore(langBadge, micBtn.nextSibling);

  function buildRecog() {
    const r = new SR();
    r.continuous     = true;
    r.interimResults = true;
    r.lang           = currentLang;

    r.onstart = () => {
      listening = true;
      baseText  = textarea.value;
      micBtn.classList.add('listening');
      micBtn.title = `Listening (${currentLabel})… click to stop`;
    };

    r.onresult = (e) => {
      let finalChunk = '';
      interim = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const t = e.results[i][0].transcript;
        if (e.results[i].isFinal) finalChunk += t;
        else interim += t;
      }

      if (finalChunk) {
        const cmd = detectLangSwitch(finalChunk);
        if (cmd) {
          // Language switch command — restart in new language, don't add to text
          switchPending = cmd;
          r.stop(); // onend will restart
          return;
        }
        baseText += (baseText && !baseText.endsWith(' ') ? ' ' : '') + finalChunk;
      }

      textarea.value = baseText + (interim
        ? (baseText && !baseText.endsWith(' ') ? ' ' : '') + interim
        : '');
      textarea.selectionStart = textarea.selectionEnd = textarea.value.length;
    };

    r.onerror = (e) => {
      if (e.error !== 'no-speech') console.warn('Speech error:', e.error);
    };

    r.onend = () => {
      interim = '';
      if (switchPending) {
        // Apply language switch and immediately restart
        currentLang  = switchPending.lang;
        currentLabel = switchPending.label;
        switchPending = null;
        langBadge.textContent = currentLabel;
        langBadge.classList.add('lang-flash');
        setTimeout(() => langBadge.classList.remove('lang-flash'), 600);
        recogRef.current = buildRecog();
        try { recogRef.current.start(); } catch(_) {}
      } else {
        listening = false;
        micBtn.classList.remove('listening');
        micBtn.title = 'Voice input';
      }
    };

    return r;
  }

  // Mutable ref so onend can replace itself
  const recogRef = { current: buildRecog() };

  micBtn.addEventListener('click', () => {
    if (listening) {
      switchPending = null;
      recogRef.current.stop();
    } else {
      recogRef.current = buildRecog();
      try { recogRef.current.start(); } catch(_) {}
    }
  });
}
