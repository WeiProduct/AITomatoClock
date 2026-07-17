// ===== i18n =====
const I18N = {
  'zh-CN': {
    skip: '跳到主要内容',
    navHow: '使用流程', navFeatures: '功能特点', navScreenshots: '应用截图', navFaq: '常见问题', navGet: '获取 App',
    heroEyebrow: '✦ AI 驱动的番茄专注',
    heroTitle: '让 AI 帮你安排下一段专注时间',
    heroSubtitle: 'AI番茄闹钟结合任务优先级、智能时间分配和番茄工作法，把计划负担降下来，让专注节奏更容易坚持。',
    heroSecondary: '查看产品界面',
    trust1: '🍅 番茄工作法', trust2: '🤖 AI 智能排序', trust3: '🌏 中英双语',
    focusTitle: '专注中', focusAi: 'AI 已排序',
    timerLabel: '第 2 个番茄',
    q1now: '写论文引言 · 25min', q1tag: '现在',
    q2task: '回复导师邮件 · 10min', q2tag: '高',
    q3task: '读 20 页 · 25min', q3tag: '中',
    focusFoot: 'AI 已按优先级排好 3 项任务',
    chipA: '🍅 今日 5 个番茄', chipB: '🔥 专注 2h 05m',
    proofRating: '效率工具 · 番茄工作法',
    stat1: '通用应用', stat2: '双语界面', stat3: '智能排序', stat4: '免费下载',
    howEyebrow: '使用流程', featuresEyebrow: '核心功能', screenshotsEyebrow: '界面预览', faqEyebrow: '答疑',
    howTitle: '三步进入专注状态', howSub: '写下要做的事，剩下的交给 AI。',
    demoEyebrow: '亲手体验', demoTitle: '亲手试试 AI 排序', demoSub: '点一下，看 AI 怎么决定先做哪件事。',
    demoTask1: '回消息', demoTag1: '紧急',
    demoTask2: '健身', demoTag2: '稍后',
    demoTask3: '复习第3章', demoTag3: '重要',
    demoTask4: '改简历', demoTag4: '重要',
    demoTask5: '写周报', demoTag5: '现在',
    demoSort: 'AI 排序', demoReset: '重来', demoDone: 'AI 已排好 5 项任务 · 预计 2h 15m',
    methodEyebrow: '方法论', methodTitle: '为什么 AI + 番茄节奏有效', methodSub: '不是更努力，而是把一天切成大脑喜欢的节奏。',
    method1Title: '专注块隔离干扰', method1Desc: '一次只面对一件事，把切换成本和分心的机会都压到最低。',
    method2Title: '休息防止疲劳堆积', method2Desc: '短休息穿插在专注之间，让注意力在一天里保持可持续。',
    method3Title: 'AI 按任务调整块长', method3Desc: '25 分钟只是起点——难的任务给更长的块，小事用 10 分钟快速清掉。',
    rhythmTitle: '一天的节奏 · 示例', rhythmFocus: '专注', rhythmBreak: '休息',
    personasEyebrow: '使用场景', personasTitle: '为你的一天而设计', personasSub: '不同的日程，同一套专注节奏。',
    persona1Name: '学生', persona1Desc: '论文、复习、Deadline——AI 把大任务切成能开始的番茄。', persona1Chip: '论文引言 · 25min',
    persona2Name: '上班族', persona2Desc: '会议之间的碎片时间，也能排出一段完整的 25 分钟。', persona2Chip: '会前清邮件 · 10min',
    persona3Name: '自由职业者', persona3Desc: '多项目来回切换？让 AI 决定现在推进哪一个。', persona3Chip: '客户 A 改稿 · 45min',
    persona4Name: '备考者', persona4Desc: '连续专注与趋势记录，让积累看得见。', persona4Chip: '错题复盘 · 25min',
    compareEyebrow: '价值对比', compareTitle: '有 AI 和没有 AI 的区别', compareSub: '普通计时器只会倒数，AI番茄闹钟帮你决定和坚持。',
    cmpAspect: '对比', cmpApp: 'AI番茄闹钟', cmpPlain: '普通计时器',
    cmpR1: '下一件做什么', cmpR1a: 'AI 按紧急 / 重要排序', cmpR1b: '自己纠结',
    cmpR2: '专注时长', cmpR2a: '按任务自适应', cmpR2b: '固定 25 分钟',
    cmpR3: '休息提醒', cmpR3a: '动态防疲劳', cmpR3b: '得自己记得',
    cmpR4: '进度记录', cmpR4a: '历史 · 趋势 · 连续专注', cmpR4b: '无',
    cmpR5: '语言', cmpR5a: '中英双语', cmpR5b: '—',
    footerTagline: '让 AI 帮你安排下一段专注时间。', footerProduct: '产品', footerSupportCol: '支持', footerAppStore: 'App Store 下载',
    step1Title: '添加任务，AI 排序', step1Desc: '录入待办，AI 按紧急度和重要度给出优先级建议，不用再纠结先做哪一件。',
    step2Title: '开始一段番茄专注', step2Desc: '进入极简计时界面，按任务安排合适的专注时长与休息节奏，减少干扰。',
    step3Title: '回看进度与趋势', step3Desc: '用历史记录和趋势看清自己的专注模式，让每一天都比昨天更有掌控感。',
    featuresTitle: '核心功能', featuresSub: '为专注和持续推进而设计的每一个细节。',
    feature1Title: '智能任务排序', feature1Desc: '根据紧急度和重要度帮你决定下一项任务，减少开始前的犹豫和反复切换。',
    feature2Title: '时间块分配', feature2Desc: '按任务难度和你的习惯安排合适的专注时长，让 25 分钟不再只是固定模板。',
    feature3Title: '番茄专注计时', feature3Desc: '极简的计时界面，专注、休息节奏清晰，帮助你稳定进入深度工作。',
    feature4Title: '自适应提醒', feature4Desc: '动态调整休息与工作提醒，避开疲劳堆积，同时维持持续推进的节奏。',
    feature5Title: '进度与成就', feature5Desc: '通过历史记录、趋势和连续专注反馈，让你看到真实的积累，而不只是完成一次倒计时。',
    feature6Title: '中英双语', feature6Desc: '完整支持简体中文与英文界面，满足不同用户的使用习惯。',
    screenshotsTitle: '产品界面预览', screenshotsSub: '左右滑动，点击可放大查看。',
    shot1: 'AI 建议', shot2: '数据统计', shot3: '专注计时器', shot4: '智能任务管理',
    privacyTitle: '为专注而设计，不为打扰而设计', privacyDesc: '干净简洁的界面，没有广告，没有花哨弹窗——只把注意力还给你正在做的那件事。',
    pp1: '无广告干扰', pp2: '免费下载使用', pp3: '极简专注界面', pp4: 'iPhone 与 iPad 通用',
    faqTitle: '常见问题',
    q1: 'AI番茄闹钟是免费的吗？', a1: '是的，可以在 App Store 免费下载使用。',
    q2: '支持 iPad 吗？', a2: '支持，AI番茄闹钟是 iPhone 与 iPad 通用应用。',
    q3: 'AI 是怎么帮我排任务的？', a3: 'AI 会根据任务的紧急度和重要度给出优先级建议，你随时可以手动调整顺序。',
    q4: '可以自定义番茄时长吗？', a4: '可以，专注与休息时长会按任务智能调整，25 分钟只是起点而非固定模板。',
    q5: '支持哪些语言？', a5: '完整支持简体中文与英文双语界面。',
    downloadTitle: '开始建立更稳定的专注节奏', downloadSubtitle: '适合学生、专业人士、自由职业者，以及任何想减少拖延、提升注意力质量的人。', downloadNote: '适用于 iPhone 与 iPad · 免费下载',
    footerRights: 'AI番茄闹钟. 保留所有权利。', footerCompany: '公司网站', footerSupport: '联系支持',
    stickySub: 'AI 智能番茄专注 · 免费', stickyGet: '获取'
  },
  'en': {
    skip: 'Skip to content',
    navHow: 'How it works', navFeatures: 'Features', navScreenshots: 'Screenshots', navFaq: 'FAQ', navGet: 'Get App',
    heroEyebrow: '✦ AI-powered focus timer',
    heroTitle: 'Let AI plan your next focus session',
    heroSubtitle: 'AI Pomodoro Timer blends task priority, smart time allocation, and the Pomodoro method — less planning overhead, a focus rhythm that actually sticks.',
    heroSecondary: 'See the app',
    trust1: '🍅 Pomodoro method', trust2: '🤖 AI task sorting', trust3: '🌏 EN / 中文',
    focusTitle: 'Focusing', focusAi: 'AI sorted',
    timerLabel: 'Pomodoro 2',
    q1now: 'Draft intro · 25m', q1tag: 'NOW',
    q2task: 'Reply to advisor · 10m', q2tag: 'HIGH',
    q3task: 'Read 20 pages · 25m', q3tag: 'MID',
    focusFoot: 'AI ranked 3 tasks by priority',
    chipA: '🍅 5 pomodoros today', chipB: '🔥 Focus 2h 05m',
    proofRating: 'Productivity · Pomodoro',
    stat1: 'Universal app', stat2: 'Bilingual UI', stat3: 'AI sorting', stat4: 'Free download',
    howEyebrow: 'HOW IT WORKS', featuresEyebrow: 'FEATURES', screenshotsEyebrow: 'PREVIEW', faqEyebrow: 'FAQ',
    howTitle: 'Reach focus in three steps', howSub: 'Write down what to do — AI handles the rest.',
    demoEyebrow: 'TRY IT', demoTitle: 'Try AI sorting yourself', demoSub: 'One tap — watch AI decide what comes first.',
    demoTask1: 'Reply to messages', demoTag1: 'URGENT',
    demoTask2: 'Workout', demoTag2: 'LATER',
    demoTask3: 'Review chapter 3', demoTag3: 'KEY',
    demoTask4: 'Polish resume', demoTag4: 'KEY',
    demoTask5: 'Weekly report', demoTag5: 'NOW',
    demoSort: 'Sort with AI', demoReset: 'Reset', demoDone: 'AI planned 5 tasks · ~2h 15m',
    methodEyebrow: 'THE METHOD', methodTitle: 'Why the AI-Pomodoro rhythm works', methodSub: 'Not about trying harder — it slices your day into a rhythm your brain likes.',
    method1Title: 'Focus blocks isolate distraction', method1Desc: 'One task at a time keeps switching costs and distraction windows to a minimum.',
    method2Title: 'Breaks stop fatigue from stacking', method2Desc: 'Short breaks between sessions keep your attention sustainable across the whole day.',
    method3Title: 'AI sizes blocks per task', method3Desc: '25 minutes is just the starting point — harder tasks get longer blocks, small ones clear in a quick 10.',
    rhythmTitle: 'A day\'s rhythm · example', rhythmFocus: 'Focus', rhythmBreak: 'Break',
    personasEyebrow: 'FOR YOUR DAY', personasTitle: 'Built for your kind of day', personasSub: 'Different schedules, the same focus rhythm.',
    persona1Name: 'Student', persona1Desc: 'Papers, revision, deadlines — AI slices big tasks into pomodoros you can actually start.', persona1Chip: 'Thesis intro · 25m',
    persona2Name: 'Professional', persona2Desc: 'Squeeze a real 25 minutes of deep work between meetings.', persona2Chip: 'Inbox sweep · 10m',
    persona3Name: 'Freelancer', persona3Desc: 'Juggling projects? Let AI pick what moves forward now.', persona3Chip: 'Client A edits · 45m',
    persona4Name: 'Exam prepper', persona4Desc: 'Streaks and trends make the grind visible.', persona4Chip: 'Review mistakes · 25m',
    compareEyebrow: 'WHY AI', compareTitle: 'With AI vs a plain timer', compareSub: 'A plain timer only counts down — AI Pomodoro decides and keeps you going.',
    cmpAspect: 'Compare', cmpApp: 'AI Pomodoro Timer', cmpPlain: 'A plain timer',
    cmpR1: 'What to do next', cmpR1a: 'AI ranks by urgency & importance', cmpR1b: 'You agonize over it',
    cmpR2: 'Session length', cmpR2a: 'Adapts to each task', cmpR2b: 'Fixed 25 minutes',
    cmpR3: 'Break reminders', cmpR3a: 'Dynamic, fatigue-aware', cmpR3b: 'You have to remember',
    cmpR4: 'Progress', cmpR4a: 'History, trends & streaks', cmpR4b: 'None',
    cmpR5: 'Language', cmpR5a: 'English + 中文', cmpR5b: '—',
    footerTagline: 'Let AI plan your next focus session.', footerProduct: 'Product', footerSupportCol: 'Support', footerAppStore: 'Get it on the App Store',
    step1Title: 'Add tasks, AI sorts them', step1Desc: 'Drop in your to-dos and AI suggests priority by urgency and importance — no more agonizing over what to start.',
    step2Title: 'Start a focus session', step2Desc: 'Enter a distraction-free timer with focus and break lengths tuned to each task, so you settle into deep work.',
    step3Title: 'Review progress & trends', step3Desc: 'See your focus patterns through history and trends, and feel a little more in control each day.',
    featuresTitle: 'Core Features', featuresSub: 'Every detail designed for focus and steady progress.',
    feature1Title: 'Smart Task Sorting', feature1Desc: 'Helps you decide the next task by urgency and importance, cutting hesitation and constant switching.',
    feature2Title: 'Adaptive Time Blocks', feature2Desc: 'Sizes focus sessions to task difficulty and your habits, so 25 minutes is a starting point, not a fixed template.',
    feature3Title: 'Pomodoro Focus Timer', feature3Desc: 'A clean, minimal timer with clear focus and break rhythm to help you settle into deep work.',
    feature4Title: 'Adaptive Reminders', feature4Desc: 'Dynamically adjusts break and work nudges to avoid fatigue while keeping momentum going.',
    feature5Title: 'Progress & Streaks', feature5Desc: 'History, trends, and streak feedback show real accumulation — not just one finished countdown.',
    feature6Title: 'Bilingual Support', feature6Desc: 'Full Simplified Chinese and English interfaces to fit the way you work.',
    screenshotsTitle: 'App Preview', screenshotsSub: 'Swipe through — tap any shot to zoom in.',
    shot1: 'AI suggestions', shot2: 'Progress analytics', shot3: 'Focus timer', shot4: 'Smart task management',
    privacyTitle: 'Designed for focus, not distraction', privacyDesc: 'A clean, simple interface with no ads and no gimmicky pop-ups — it hands your attention back to the thing you are actually doing.',
    pp1: 'No ad clutter', pp2: 'Free to download', pp3: 'Minimal focus UI', pp4: 'Universal iPhone & iPad',
    faqTitle: 'Frequently Asked Questions',
    q1: 'Is AI Pomodoro Timer free?', a1: 'Yes, it is free to download and use on the App Store.',
    q2: 'Does it support iPad?', a2: 'Yes — AI Pomodoro Timer is a universal app for both iPhone and iPad.',
    q3: 'How does the AI sort my tasks?', a3: 'The AI suggests priority based on urgency and importance, and you can reorder tasks manually anytime.',
    q4: 'Can I customize the Pomodoro length?', a4: 'Yes. Focus and break lengths adapt to each task — 25 minutes is a starting point, not a fixed template.',
    q5: 'Which languages are supported?', a5: 'Full Simplified Chinese and English interfaces are supported.',
    downloadTitle: 'Build a steadier focus rhythm', downloadSubtitle: 'For students, professionals, freelancers — anyone who wants less procrastination and better-quality attention.', downloadNote: 'For iPhone & iPad · Free download',
    footerRights: 'AI Pomodoro Timer. All rights reserved.', footerCompany: 'Company', footerSupport: 'Contact support',
    stickySub: 'AI Pomodoro focus · Free', stickyGet: 'Get'
  }
};

let currentLang = 'zh-CN';

function applyLang(lang) {
  currentLang = I18N[lang] ? lang : 'zh-CN';
  const t = I18N[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (t[k] !== undefined) el.textContent = t[k];
  });
  document.documentElement.lang = currentLang;
  const ls = document.getElementById('langSwitch');
  if (ls) ls.textContent = currentLang === 'zh-CN' ? 'EN' : '中文';
  const fls = document.getElementById('footerLang');
  if (fls) fls.textContent = currentLang === 'zh-CN' ? 'EN' : '中文';
  try { localStorage.setItem('lang', currentLang); } catch (e) {}
}

function initLang() {
  let saved;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  if (!saved) saved = (navigator.language || '').toLowerCase().startsWith('zh') ? 'zh-CN' : 'en';
  applyLang(saved);
}

// ===== Theme =====
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const meta = document.getElementById('themeColorMeta');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#111827' : '#f05252');
  try { localStorage.setItem('theme', theme); } catch (e) {}
}
function initTheme() {
  let saved;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  if (!saved) saved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  setTheme(saved);
}

// ===== Hero focus timer (progressive tick) =====
function initTimer() {
  const el = document.getElementById('timerTime');
  if (!el) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let total = 24 * 60 + 12;
  setInterval(() => {
    total = total > 0 ? total - 1 : 25 * 60;
    const m = Math.floor(total / 60);
    const s = total % 60;
    el.textContent = m + ':' + String(s).padStart(2, '0');
  }, 1000);
}

// ===== AI sorting demo (FLIP reorder) =====
function initDemo() {
  const card = document.getElementById('demoCard');
  const list = document.getElementById('demoList');
  const sortBtn = document.getElementById('demoSort');
  const resetBtn = document.getElementById('demoReset');
  if (!card || !list || !sortBtn || !resetBtn) return;
  const initialOrder = Array.from(list.children);

  function reorder(sorted) {
    const rows = Array.from(list.children);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const firstTop = new Map(rows.map(r => [r, r.getBoundingClientRect().top]));
    const target = sorted
      ? rows.slice().sort((a, b) => Number(a.dataset.order) - Number(b.dataset.order))
      : initialOrder;
    target.forEach(r => list.appendChild(r));
    card.classList.toggle('sorted', sorted);
    if (reduced) return;
    target.forEach(r => {
      const dy = firstTop.get(r) - r.getBoundingClientRect().top;
      if (!dy) return;
      r.style.transition = 'none';
      r.style.transform = 'translateY(' + dy + 'px)';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          r.style.transition = 'transform .55s cubic-bezier(.2,.8,.25,1)';
          r.style.transform = '';
        });
      });
    });
  }
  sortBtn.addEventListener('click', () => reorder(true));
  resetBtn.addEventListener('click', () => reorder(false));
}

// ===== Gallery =====
function initGallery() {
  const track = document.getElementById('galTrack');
  if (!track) return;
  const shots = Array.from(track.children);
  const dotsWrap = document.getElementById('galDots');
  const prev = document.getElementById('galPrev');
  const next = document.getElementById('galNext');

  shots.forEach((_, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', 'screenshot ' + (i + 1));
    if (i === 0) b.classList.add('active');
    b.addEventListener('click', () => shots[i].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' }));
    dotsWrap.appendChild(b);
  });
  const dots = Array.from(dotsWrap.children);

  function activeIndex() {
    const c = track.scrollLeft + track.clientWidth / 2;
    let best = 0, bd = Infinity;
    shots.forEach((s, i) => {
      const center = s.offsetLeft + s.offsetWidth / 2;
      const d = Math.abs(center - c);
      if (d < bd) { bd = d; best = i; }
    });
    return best;
  }
  track.addEventListener('scroll', () => {
    const i = activeIndex();
    dots.forEach((d, j) => d.classList.toggle('active', j === i));
  }, { passive: true });

  const step = () => (shots[1] ? shots[1].offsetLeft - shots[0].offsetLeft : 300);
  if (prev) prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  if (next) next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));

  // Lightbox
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = '<button class="lightbox-close" aria-label="close">&times;</button><img alt="">';
  document.body.appendChild(lb);
  const lbImg = lb.querySelector('img');
  const close = () => lb.classList.remove('open');
  lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lightbox-close')) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  track.querySelectorAll('.phone').forEach(p => {
    p.addEventListener('click', () => {
      const img = p.querySelector('img');
      lbImg.src = img.src; lbImg.alt = img.alt;
      lb.classList.add('open');
    });
  });
}

// ===== Scroll reveal =====
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach((el, i) => { el.style.transitionDelay = (Math.min(i, 6) * 0.05) + 's'; io.observe(el); });
}

// ===== Nav + sticky =====
function initScroll() {
  const nav = document.getElementById('navbar');
  const sticky = document.getElementById('stickyCta');
  const bar = document.getElementById('progressBar');
  const onScroll = () => {
    const y = window.scrollY;
    if (nav) nav.classList.toggle('scrolled', y > 20);
    if (sticky) sticky.classList.toggle('show', y > 620);
    if (bar) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(y / max, 1) : 0) + ')';
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLang();
  initTimer();
  initDemo();
  initGallery();
  initReveal();
  initScroll();

  const yr = document.getElementById('currentYear');
  if (yr) yr.textContent = new Date().getFullYear();

  const ls = document.getElementById('langSwitch');
  if (ls) ls.addEventListener('click', () => applyLang(currentLang === 'zh-CN' ? 'en' : 'zh-CN'));
  const tt = document.getElementById('themeToggle');
  if (tt) tt.addEventListener('click', () => setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));
  const fl = document.getElementById('footerLang');
  if (fl) fl.addEventListener('click', () => applyLang(currentLang === 'zh-CN' ? 'en' : 'zh-CN'));
  const ft = document.getElementById('footerTheme');
  if (ft) ft.addEventListener('click', () => setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));

  document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    const rel = new Set((link.getAttribute('rel') || '').split(/\s+/).filter(Boolean));
    rel.add('noopener'); rel.add('noreferrer');
    link.setAttribute('rel', Array.from(rel).join(' '));
  });

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      }
    });
  });
});
