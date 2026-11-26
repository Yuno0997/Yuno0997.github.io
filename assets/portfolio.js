export function createPortfolio(React) {
  const h = React.createElement;
  const link = (text, href, className = '') => h('a', {href, className}, text);

  const VIDEO_BASE = 'https://yuno0997.github.io/jea-videos/videos';
  const videoUrl = (file) => `${VIDEO_BASE}/${encodeURIComponent(file)}`;
  const posterUrl = (file) => `./posters/${encodeURIComponent(file.replace(/\.[^.]+$/, '.jpg'))}`;

  const aiProjects = [
    {name:'Fragrance', category:'Product film', tag:'product', file:'fragrance-01.mp4', ratio:'9:16', text:'A fragrance story told through AI-generated visuals and a considered edit.'},
    {name:'UGC', category:'Social video', tag:'social', file:'ugc-02.mp4', ratio:'9:16', text:'A different approach to social storytelling, made for a portrait screen.'},
    {name:'Dog Shampoo', category:'Pet care', tag:'product', file:'dog-shampoo-03.mp4', ratio:'16:9', text:'A wider frame for a pet-care story. Concept, generated scenes, and a finished video.'},
    {name:'Skin Pigmentation', category:'Medical aesthetics', tag:'health', file:'Skin Pigmentation & Laser Rejuvenation (PicoSure Pro & Moxi).mp4', ratio:'9:16', text:'AI-generated visuals for a laser skin rejuvenation treatment, blending clinical clarity with compelling storytelling.'},
    {name:'Skin Lifting', category:'Aesthetics & beauty', tag:'health', file:'Non-Surgical Skin Lifting & Tightening.mp4', ratio:'9:16', text:'A clean, confident concept for a non-surgical lifting treatment — visual storytelling built for social media.'},
    {name:'Kindred Mortgage', category:'Real estate & finance', tag:'realestate', file:'Kindred_Mortgage_Real State_Final.mp4', ratio:'9:16', text:'A polished video for a mortgage brand, combining generated scenes with a focused message for today\'s homebuyers.'},
    {name:'Real Estate', category:'Real estate', tag:'realestate', file:'Real Estate Video.mp4', ratio:'9:16', text:'Cinematic real estate storytelling powered by AI — showcasing properties with visual polish and emotional impact.'},
    {name:'Brightday', category:'Lifestyle / Wellbeing', tag:'social', file:'Brightday.mp4', ratio:'9:16', text:'An ordinary person\'s daily routine made brighter — capturing how small, uplifting moments elevate breakfast, commutes, and seaside escapes.'},
    {name:'Ordinary Skincare', category:'UGC skincare ad', tag:'health', file:'Final UGC.mp4', ratio:'9:16', text:'Authentic UGC-style creator storytelling showcasing The Ordinary serum with native social pacing, texture, and conversion cues.'},
    {name:'Arencia Skincare', category:'K-Beauty skincare ad', tag:'health', file:'Arencia Skincare.mp4', ratio:'9:16', text:'Engaging glow-routine storytelling featuring Arencia Vitamin C & Glutathione Booster Shot Essence, crafted for creator-led social conversions.'},
    {name:'Cetaphil Moisturizer', category:'Skincare / Sun care ad', tag:'health', file:'Cetaphil_Moisturizer.mp4', ratio:'9:16', text:'Clean, relatable daily skincare routine highlighting Cetaphil SPF 50 hydration and daily skin barrier protection.'},
    {name:'Vaseline', category:'UGC product · Pixar cartoon', tag:'cartoon', tags:['product','cartoon'], file:'Vaseline_Final.mp4', ratio:'9:16', text:'A Pixar-style cartoon product film for Vaseline — playful characters, soft glow, and a social-ready UGC finish.'},
    {name:'Garnier', category:'UGC product · Pixar cartoon', tag:'cartoon', tags:['product','cartoon'], file:'Garnier_Final.mp4', ratio:'9:16', text:'A Pixar-style cartoon product film for Garnier — colorful storytelling shaped for a portrait social feed.'},
    {name:'Curtain Set', category:'Home decor · UGC ad', tag:'product', tags:['product','social'], file:'Curtain Set.mp4', ratio:'9:16', text:'Warm, creator-led UGC showcase for an ornate gold-and-sheer curtain set — highlighting drape, texture, and natural sunlight at home.'},
    {name:'Ruffle Dress', category:'Fashion & apparel', tag:'fashion', tags:['product','fashion'], file:'Ruffle Dress.mp4', ratio:'9:16', text:'Tactile e-commerce fashion showcase highlighting brown tweed texture, ruffle-strap details, and crisp studio presentation.'},
    {name:'Slippers', category:'Footwear · Product film', tag:'fashion', tags:['product','fashion'], file:'Slippers.mp4', ratio:'9:16', text:'Clean macro-to-lifestyle footwear showcase featuring knotted black flat slippers, contrast stitching details, and effortless try-on shots.'},
    {name:'T-Shirt', category:'Streetwear · Fashion UGC', tag:'fashion', tags:['product','fashion'], file:'T-Shirt.mp4', ratio:'9:16', text:'Dynamic walking-POV streetwear showcase highlighting a black graphic tee with natural daylight, fit, and casual styling.'},
  ];

  const realPersonProjects = [
    {
      name: 'Coaching Masterclass Motion',
      category: 'Masterclass · Studio motion graphics',
      file: 'Eric-Masterclass.mp4',
      ratio: '16:9',
      format: 'Landscape · 16:9',
      posterTime: '17',
      highlights: ['Real Person', '3D UI Cards', 'Topic Checklists', 'Editorial Captions'],
      text: 'Executive coaching masterclass elevated with floating amber-accented UI cards, animated topic checklists, subtle grid depth, and editorial word-highlighted captions.'
    },
    {
      name: 'WGMI Agency Short',
      category: 'Podcast clip · Short-form motion',
      file: 'WGMI-Agency-Short.mp4',
      ratio: '9:16',
      format: 'Portrait · 9:16',
      posterTime: '9',
      highlights: ['Podcast Clip', 'Motion Callouts', 'Word Captions', 'Short-Form Pacing'],
      text: 'Podcast founder clip cut for Reels, TikTok, and Shorts — paired with sleek gold-accented motion cards, sharp retention pacing, and bold highlighted captions.'
    },
    {
      name: 'Talking Head Motion',
      category: 'Talking head · Creator motion edit',
      file: 'Talkin-Head-Motion.mp4',
      ratio: '16:9',
      format: 'Landscape · 16:9',
      posterTime: '3',
      highlights: ['Real Person', 'Motion Graphics', 'Data Overlays', 'Word Captions'],
      text: 'On-camera creator commentary transformed with frame-synced profit counters, full-screen equity curve covers, kinetic pillar cards, word-level captions, and a ducked music & SFX mix.'
    },
    {
      name: 'Prosper Luxury Real Estate',
      category: 'Real estate · Live footage & motion',
      file: 'Prosper-Luxury-Reel.mp4',
      ratio: '9:16',
      format: 'Portrait · 9:16',
      posterTime: '3',
      highlights: ['Real Footage', 'Color Graded', 'Property Callouts', 'Synced Captions'],
      text: 'Real-footage luxury home tour in Prosper, TX — elevated with warm cinematic color grading, animated property spec callouts, clean subtitles, and layered ambient sound design.'
    },
  ];

  const filters = [
    {label:'All', value:''},
    {label:'Product', value:'product'},
    {label:'Fashion & Apparel', value:'fashion'},
    {label:'Pixar Cartoon', value:'cartoon'},
    {label:'Social & Lifestyle', value:'social'},
    {label:'Health & Beauty', value:'health'},
    {label:'Real Estate', value:'realestate'},
  ];

  const tools = [
    ['Video generation','Google Flow (Veo), Omni Flash'],
    ['Motion graphics & code','Remotion, HTML5 Canvas, Custom Overlays'],
    ['Voice & TTS','ElevenLabs'],
    ['Image generation & AI','Google Gemini, ChatGPT, Nano Banana'],
    ['Video editing','CapCut, OpenChatCut, FFmpeg'],
    ['Prompt engineering','ChatGPT, Gemini'],
    ['Visual design','Canva, Figma']
  ];

  const stages = [
    ['01 — Find the story','Develop the concept, visual direction, script, and pacing around your category — whether AI-generated or shot on camera.'],
    ['02 — Build scenes & motion','Generate AI visuals and voiceovers, or grade live footage and design frame-synced motion graphics and callouts.'],
    ['03 — Make the final cut','Assemble the footage, tighten the rhythm, sync captions, and balance music and SFX for social and widescreen platforms.']
  ];

  const stats = [
    {value:'21+', label:'Videos produced'},
    {value:'2', label:'Tracks · AI & Real Person'},
    {value:'9+', label:'Categories covered'},
  ];

  function pauseAllVideosExcept(activeVideo) {
    document.querySelectorAll('#work video, #real-person video').forEach(v => {
      if (v !== activeVideo && !v.paused) v.pause();
    });
  }

  function ReelsSlideshow({ reels, onRequestStyle }) {
    const n = reels.length;
    const [active, setActive] = React.useState(0);
    const [muted, setMuted] = React.useState(true);
    const [paused, setPaused] = React.useState(false);
    const [autoAdvance, setAutoAdvance] = React.useState(() =>
      typeof matchMedia === 'function' ? !matchMedia('(prefers-reduced-motion: reduce)').matches : true
    );
    const [progress, setProgress] = React.useState(0);
    const [inView, setInView] = React.useState(true);
    const sectionRef = React.useRef(null);
    const videoRef = React.useRef(null);
    const dragStartX = React.useRef(null);
    const didDrag = React.useRef(false);

    const go = React.useCallback((delta) => {
      setActive(prev => (prev + delta + n) % n);
      setProgress(0);
      setPaused(false);
    }, [n]);

    const goTo = React.useCallback((index) => {
      setActive(((index % n) + n) % n);
      setProgress(0);
      setPaused(false);
    }, [n]);

    React.useEffect(() => {
      const el = sectionRef.current;
      if (!el || typeof IntersectionObserver === 'undefined') return;
      const io = new IntersectionObserver(
        ([entry]) => setInView(entry.isIntersecting),
        { threshold: 0.25 }
      );
      io.observe(el);
      return () => io.disconnect();
    }, []);

    React.useEffect(() => {
      const onGridPlay = () => {
        setPaused(true);
        if (videoRef.current && !videoRef.current.paused) videoRef.current.pause();
      };
      window.addEventListener('jea-grid-play', onGridPlay);
      return () => window.removeEventListener('jea-grid-play', onGridPlay);
    }, []);

    React.useEffect(() => {
      const v = videoRef.current;
      if (!v) return;
      v.muted = muted;
      if (inView && !paused) {
        const p = v.play();
        if (p && typeof p.catch === 'function') p.catch(() => {});
      } else {
        v.pause();
      }
    }, [active, inView, paused, muted]);

    React.useEffect(() => {
      if (!muted && inView && !paused) {
        pauseAllVideosExcept(null);
      }
    }, [muted, inView, paused]);

    function handleKeyDown(e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
      else if (e.key === ' ') { e.preventDefault(); togglePlay(); }
    }

    function togglePlay() {
      const v = videoRef.current;
      if (!v) return;
      if (v.paused) {
        setPaused(false);
        v.play().catch(() => {});
      } else {
        setPaused(true);
        v.pause();
      }
    }

    function toggleMute(e) {
      e.stopPropagation();
      setMuted(m => {
        const next = !m;
        if (!next) {
          pauseAllVideosExcept(null);
        }
        return next;
      });
    }

    function handlePointerDown(e) {
      if (e.target.closest('button, a')) return;
      dragStartX.current = e.clientX;
      didDrag.current = false;
    }

    function handlePointerUp(e) {
      if (dragStartX.current === null) return;
      const dx = e.clientX - dragStartX.current;
      dragStartX.current = null;
      if (Math.abs(dx) > 45) {
        didDrag.current = true;
        go(dx < 0 ? 1 : -1);
      }
    }

    const current = reels[active];

    const visibleSlides = [];
    for (let idx = 0; idx < n; idx++) {
      let offset = idx - active;
      if (offset > n / 2) offset -= n;
      if (offset < -n / 2) offset += n;
      if (Math.abs(offset) <= 3) {
        visibleSlides.push({ reel: reels[idx], idx, offset });
      }
    }

    return h('section', {
      id: 'reels',
      ref: sectionRef,
      className: 'reels-section frame',
      'aria-roledescription': 'carousel',
      'aria-label': 'Dynamic AI Reels Slideshow',
      tabIndex: 0,
      onKeyDown: handleKeyDown
    },
      h('div', { className: 'reels-header' },
        h('div', null,
          h('p', { className: 'eyebrow' }, 'Dynamic AI Reels Showcase'),
          h('h2', { 'data-reveal': true }, 'In motion.\nSlide by slide.')
        ),
        h('div', { className: 'reels-header-right' },
          h('p', null, 'Swipe, click, or let the reel deck auto-play through vertical AI productions. Looking for live-footage edits? Jump to Real Person below.'),
          h('div', { className: 'reels-toolbar' },
            h('button', {
              type: 'button',
              className: `reels-pill${autoAdvance ? ' is-on' : ''}`,
              onClick: () => setAutoAdvance(a => !a),
              'aria-pressed': autoAdvance
            }, autoAdvance ? '● Auto-slide ON' : '○ Auto-slide OFF'),
            h('span', { className: 'reels-counter', 'aria-live': 'polite' },
              `${String(active + 1).padStart(2, '0')} / ${String(n).padStart(2, '0')}`
            ),
            h('div', { className: 'reels-nav-btns' },
              h('button', { type: 'button', className: 'reels-arrow', onClick: () => go(-1), 'aria-label': 'Previous reel' }, '←'),
              h('button', { type: 'button', className: 'reels-arrow', onClick: () => go(1), 'aria-label': 'Next reel' }, '→')
            )
          )
        )
      ),

      h('div', { className: 'reels-segments', role: 'tablist', 'aria-label': 'Reel slides' },
        ...reels.map((r, i) => {
          const fill = i < active ? 100 : i === active ? Math.round(progress * 1000) / 10 : 0;
          return h('button', {
            key: r.file,
            type: 'button',
            role: 'tab',
            'aria-selected': i === active,
            'aria-label': `Jump to ${r.name}`,
            className: `reels-segment${i === active ? ' is-active' : ''}`,
            onClick: () => goTo(i)
          },
            h('span', { className: 'reels-segment-fill', style: { width: `${fill}%` } })
          );
        })
      ),

      h('div', {
        className: 'reels-stage',
        onPointerDown: handlePointerDown,
        onPointerUp: handlePointerUp,
        onPointerCancel: () => { dragStartX.current = null; }
      },
        h('div', { className: 'reels-glow', 'aria-hidden': 'true' }),
        ...visibleSlides.map(({ reel, idx, offset }) => {
          const isCenter = offset === 0;
          const posClass =
            offset === 0 ? 'pos-0' :
            offset === -1 ? 'pos-l1' :
            offset === 1 ? 'pos-r1' :
            offset === -2 ? 'pos-l2' :
            offset === 2 ? 'pos-r2' :
            offset < 0 ? 'pos-l3' : 'pos-r3';

          return h('div', {
            key: reel.file,
            className: `reel-slide ${posClass}`,
            onClick: () => {
              if (didDrag.current) { didDrag.current = false; return; }
              if (isCenter) togglePlay();
              else goTo(idx);
            }
          },
            h('div', { className: 'reel-frame' },
              isCenter
                ? h('video', {
                    key: reel.file,
                    ref: videoRef,
                    src: videoUrl(reel.file),
                    poster: posterUrl(reel.file),
                    playsInline: true,
                    muted: muted,
                    autoPlay: inView && !paused,
                    loop: !autoAdvance,
                    preload: 'auto',
                    'aria-label': `${reel.name} — ${reel.category}`,
                    onTimeUpdate: (e) => {
                      const v = e.currentTarget;
                      if (v.duration && isFinite(v.duration)) {
                        setProgress(v.currentTime / v.duration);
                      }
                    },
                    onEnded: () => {
                      if (autoAdvance) go(1);
                    }
                  })
                : h('img', {
                    src: posterUrl(reel.file),
                    alt: `${reel.name} — ${reel.category}`,
                    loading: 'lazy',
                    decoding: 'async',
                    draggable: false
                  }),

              h('div', { className: 'reel-top-bar' },
                h('span', { className: 'reel-badge' }, String(idx + 1).padStart(2, '0')),
                isCenter && h('div', { className: 'reel-actions' },
                  h('button', {
                    type: 'button',
                    className: 'reel-icon-btn',
                    onClick: (e) => { e.stopPropagation(); togglePlay(); },
                    'aria-label': paused ? 'Play reel' : 'Pause reel',
                    title: paused ? 'Play' : 'Pause'
                  }, paused ? '▶' : '❚❚'),
                  h('button', {
                    type: 'button',
                    className: 'reel-icon-btn',
                    onClick: toggleMute,
                    'aria-label': muted ? 'Unmute reel' : 'Mute reel',
                    title: muted ? 'Unmute' : 'Mute'
                  }, muted ? '🔇' : '🔊')
                )
              ),

              isCenter && paused && h('div', { className: 'reel-paused-pill', 'aria-hidden': 'true' }, '▶ Paused'),

              h('div', { className: 'reel-caption' },
                h('span', { className: 'reel-cat' }, reel.category),
                h('strong', { className: 'reel-title' }, reel.name)
              ),

              isCenter && h('div', { className: 'reel-scrubber', 'aria-hidden': 'true' },
                h('span', { style: { width: `${Math.round(progress * 1000) / 10}%` } })
              )
            )
          );
        })
      ),

      h('div', { className: 'reels-details' },
        h('div', { className: 'reels-details-copy' },
          h('span', { className: 'reels-details-cat' }, `AI Video · ${current.category} · ${current.ratio}`),
          h('h3', null, current.name),
          h('p', null, current.text)
        ),
        h('div', { className: 'reels-details-cta' },
          h('button', {
            type: 'button',
            className: 'reels-request-btn',
            onClick: () => onRequestStyle(current, 'AI-Generated Video')
          }, 'Request this style ↗')
        )
      ),

      h('div', { className: 'reels-strip', 'aria-label': 'All AI reels quick jump' },
        ...reels.map((r, i) =>
          h('button', {
            key: r.file,
            type: 'button',
            className: `reels-chip${i === active ? ' is-active' : ''}`,
            onClick: () => goTo(i)
          },
            h('span', { className: 'reels-chip-num' }, String(i + 1).padStart(2, '0')),
            h('span', null, r.name)
          )
        )
      )
    );
  }

  function Portfolio() {
    const [menu, setMenu] = React.useState(false);
    const [copied, setCopied] = React.useState(false);
    const [productionType, setProductionType] = React.useState('AI-Generated Video');
    const [category, setCategory] = React.useState('');
    const [format, setFormat] = React.useState('Portrait · 9:16');
    const [idea, setIdea] = React.useState('');
    const [copyError, setCopyError] = React.useState(false);
    const [activeFilter, setActiveFilter] = React.useState('');

    const reels = React.useMemo(
      () => aiProjects.filter(p => p.ratio === '9:16').slice().reverse(),
      []
    );

    const brief = `Hi Jhon Eric! I'd like to discuss a video project.\n\nProduction Type: ${productionType}\nCategory: ${category || '[Your category]'}\nFormat: ${format}\nIdea: ${idea || '[What would you like to create?]'}\nPlatform: [Instagram, TikTok, YouTube, or other]\nTimeline: [Your timeline]\nBudget: [Your budget]`;

    const filteredAI = activeFilter
      ? aiProjects.filter(p => p.tag === activeFilter || (p.tags && p.tags.includes(activeFilter)))
      : aiProjects;

    function handleRequestStyle(item, track = 'AI-Generated Video') {
      setProductionType(track);
      setCategory(`${item.name} — ${item.category}`);
      setFormat(item.format || (item.ratio === '16:9' ? 'Landscape · 16:9' : 'Portrait · 9:16'));
      setCopied(false);
      const contactEl = document.getElementById('contact');
      if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
    }

    React.useEffect(() => {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.animate(
          [{transform:'translateY(28px)',opacity:0},{transform:'translateY(0)',opacity:1}],
          {duration:650,easing:'cubic-bezier(.16,1,.3,1)',fill:'forwards'}
        );
        observer.unobserve(entry.target);
      }), {threshold:.08});
      document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
      return () => observer.disconnect();
    }, []);

    async function copyBrief() {
      try { await navigator.clipboard.writeText(brief); setCopied(true); setCopyError(false); }
      catch { setCopyError(true); }
    }
    function field(setter) { return event => { setter(event.target.value); setCopied(false); }; }

    return h(React.Fragment, null,
      link('Skip to content','#main','skip-link'),

      // ── HEADER ──────────────────────────────────────────────────────────
      h('header', {className:'site-header frame'},
        link('JEA.CREATIVE','#home','wordmark'),
        h('button',{className:'menu-toggle',onClick:()=>setMenu(!menu),'aria-expanded':menu,'aria-controls':'navigation'},menu?'Close':'Menu'),
        h('nav',{id:'navigation',className:menu?'is-open':'','aria-label':'Main navigation'},
          ...[
            ['Reels','#reels'],
            ['AI Videos','#work'],
            ['Real Person','#real-person'],
            ['About','#about'],
            ['Process','#process'],
            ['Tools','#tools'],
            ['Start a brief','#contact']
          ].map(([text,href])=>
            h('a',{href,key:href,onClick:()=>setMenu(false)},text)))
      ),

      h('main',{id:'main'},

        // ── HERO ────────────────────────────────────────────────────────
        h('section',{id:'home',className:'hero frame'},
          h('div',{className:'hero-eyebrow'},'AI Creative Producer & Video Editor'),
          h('h1',null,
            h('span',{className:'headline-line'},'AI & Real.'),
            h('span',{className:'headline-line accent-line'},'Every category.')
          ),
          h('div',{className:'hero-bottom'},
            h('p',null,'I\'m Jhon Eric. I craft AI-generated short-form ads alongside motion-enhanced real-person edits — built to stop the scroll from concept to final cut.'),
            h('div',{className:'hero-actions'},
              link('AI Videos ↓','#work','button'),
              link('Real Person ↓','#real-person','button button-outline')
            )
          ),
          h('div',{className:'stats-bar'},
            ...stats.map(s => h('div',{key:s.label,className:'stat-item'},
              h('span',{className:'stat-value'},s.value),
              h('span',{className:'stat-label'},s.label)
            ))
          )
        ),

        // ── DYNAMIC AI REELS SLIDESHOW ──────────────────────────────────
        h(ReelsSlideshow, { reels, onRequestStyle: handleRequestStyle }),

        // ── 01 / AI VIDEOS ──────────────────────────────────────────────
        h('section',{id:'work',className:'work frame'},
          h('div',{className:'track-switcher','data-reveal':true},
            h('a',{href:'#work',className:'track-tab is-active'},
              h('span',{className:'track-dot is-ai'}),
              'AI Videos',
              h('span',{className:'track-count'},String(aiProjects.length))
            ),
            h('a',{href:'#real-person',className:'track-tab'},
              h('span',{className:'track-dot is-real'}),
              'Real Person',
              h('span',{className:'track-count'},String(realPersonProjects.length))
            )
          ),

          h('div',{className:'section-intro'},
            h('div',null,
              h('p',{className:'eyebrow'},'01 / AI-Generated Videos'),
              h('h2',{'data-reveal':true},'AI stories across\nevery category.')
            ),
            h('p',{'data-reveal':true},'Fully AI-generated ads, UGC, Pixar-style cartoons, and visual concepts. From generated scenes and voiceovers to a polished social edit.')
          ),

          h('div',{className:'filter-bar','data-reveal':true},
            ...filters.map(f => h('button',{
              key:f.value,
              className:`filter-btn${activeFilter===f.value?' active':''}`,
              onClick:()=>setActiveFilter(f.value)
            },f.label))
          ),

          h('div',{className:'project-grid'},
            ...filteredAI.map((project, i) => h('article',{key:project.file, className:`project${project.ratio==='16:9'?' project-wide':''}`,'data-reveal':true},
              h('div',{className:'video-stage'},
                h('div',{className:'project-num'},String(i+1).padStart(2,'0')),
                h('span',{className:'stage-badge is-ai'},'AI Video'),
                h('video',{
                  controls:true,
                  playsInline:true,
                  preload:'none',
                  poster:posterUrl(project.file),
                  src:videoUrl(project.file),
                  'aria-label':`${project.name} — ${project.category}`,
                  onPlay: event => {
                    window.dispatchEvent(new CustomEvent('jea-grid-play'));
                    pauseAllVideosExcept(event.currentTarget);
                  }
                },'Your browser does not support this video.',link('Open video',videoUrl(project.file)))
              ),
              h('div',{className:'project-meta'},
                h('div',{className:'project-heading'},
                  h('h3',null,project.name),
                  h('span',{className:'ratio-badge'},project.ratio)
                ),
                h('p',{className:'project-category'},project.category),
                h('p',{className:'project-description'},project.text)
              )
            ))
          )
        ),

        // ── 02 / REAL PERSON VIDEOS ─────────────────────────────────────
        h('section',{id:'real-person',className:'real-person frame'},
          h('div',{className:'track-switcher','data-reveal':true},
            h('a',{href:'#work',className:'track-tab'},
              h('span',{className:'track-dot is-ai'}),
              'AI Videos',
              h('span',{className:'track-count'},String(aiProjects.length))
            ),
            h('a',{href:'#real-person',className:'track-tab is-active is-real-active'},
              h('span',{className:'track-dot is-real'}),
              'Real Person',
              h('span',{className:'track-count'},String(realPersonProjects.length))
            )
          ),

          h('div',{className:'section-intro'},
            h('div',null,
              h('p',{className:'eyebrow real-eyebrow'},'02 / Real Person & Live Footage'),
              h('h2',{'data-reveal':true},'Real footage.\nElevated in post.')
            ),
            h('p',{'data-reveal':true},'Live on-camera talent and real property tours — upgraded with frame-synced motion graphics, data overlays, cinematic color grading, synced captions, and custom sound design.')
          ),

          (() => {
            const landscapeReal = realPersonProjects.filter(p => p.ratio === '16:9');
            const portraitReal = realPersonProjects.filter(p => p.ratio !== '16:9');
            const renderRealCard = (project, num) => h('article', {
              key: project.file,
              className: `real-card${project.ratio === '16:9' ? ' is-landscape' : ' is-portrait'}`,
              'data-reveal': true
            },
              h('div', { className: `real-stage${project.ratio === '16:9' ? ' is-16x9' : ' is-9x16'}` },
                h('div', { className: 'project-num' }, String(num).padStart(2, '0')),
                h('span', { className: 'stage-badge is-real' }, 'Real Person'),
                h('video', {
                  controls: true,
                  playsInline: true,
                  preload: 'none',
                  poster: posterUrl(project.file),
                  src: videoUrl(project.file),
                  'aria-label': `${project.name} — ${project.category}`,
                  onPlay: event => {
                    window.dispatchEvent(new CustomEvent('jea-grid-play'));
                    pauseAllVideosExcept(event.currentTarget);
                  }
                }, 'Your browser does not support this video.', link('Open video', videoUrl(project.file)))
              ),
              h('div', { className: 'real-meta' },
                h('div', { className: 'project-heading' },
                  h('h3', null, project.name),
                  h('span', { className: 'ratio-badge' }, project.ratio)
                ),
                h('p', { className: 'project-category real-cat' }, project.category),
                h('p', { className: 'project-description' }, project.text),
                h('div', { className: 'real-highlights' },
                  ...project.highlights.map(tag => h('span', { key: tag, className: 'real-chip' }, tag))
                ),
                h('div', { className: 'real-card-footer' },
                  h('button', {
                    type: 'button',
                    className: 'reels-request-btn',
                    onClick: () => handleRequestStyle(project, 'Real Person & Motion Graphics')
                  }, 'Request this style ↗')
                )
              )
            );

            return h('div', { className: 'real-groups' },
              landscapeReal.length > 0 && h('div', { className: 'real-group' },
                h('div', { className: 'real-group-head' },
                  h('span', { className: 'real-group-label' }, 'Widescreen · 16:9'),
                  h('span', { className: 'real-group-line', 'aria-hidden': 'true' }),
                  h('span', { className: 'real-group-count' }, `${String(landscapeReal.length).padStart(2, '0')} videos`)
                ),
                h('div', { className: 'real-person-grid is-landscape-grid' },
                  ...landscapeReal.map((project, i) => renderRealCard(project, i + 1))
                )
              ),
              portraitReal.length > 0 && h('div', { className: 'real-group' },
                h('div', { className: 'real-group-head' },
                  h('span', { className: 'real-group-label' }, 'Vertical Reels & Shorts · 9:16'),
                  h('span', { className: 'real-group-line', 'aria-hidden': 'true' }),
                  h('span', { className: 'real-group-count' }, `${String(portraitReal.length).padStart(2, '0')} videos`)
                ),
                h('div', { className: 'real-person-grid is-portrait-grid' },
                  ...portraitReal.map((project, i) => renderRealCard(project, landscapeReal.length + i + 1))
                )
              )
            );
          })()
        ),

        // ── ABOUT ───────────────────────────────────────────────────────
        h('section',{id:'about',className:'about frame'},
          h('div',null,
            h('p',{className:'eyebrow'},'Behind the videos'),
            h('h2',{'data-reveal':true},'Jhon Eric'),
            h('p',{className:'name-title','data-reveal':true},'AI Creative Producer · Short-Form & Motion Video Editor')
          ),
          h('div',{className:'about-copy'},
            h('p',{'data-reveal':true},'A good idea can belong to any category — AI-generated or filmed live.'),
            h('p',{'data-reveal':true},'I produce AI-generated videos across product ads, UGC, skincare, cartoons, and real estate, alongside motion-enhanced edits for real people — from talking-head explainers to on-camera luxury property tours.'),
            h('p',{'data-reveal':true},'My work connects creative planning, prompt engineering, generated scenes, custom Remotion & canvas motion graphics, color grading, sound design, and editing all the way to a polished final cut.'),
            h('div',{className:'about-tags','data-reveal':true},
              ...['AI Product Ads','Real Person Edits','Talking Head Motion','Real Estate Tours','Fashion & Apparel','Pixar 3D Cartoon','UGC','Medical Aesthetics'].map(tag =>
                h('span',{key:tag,className:'tag'},tag)
              )
            )
          )
        ),

        // ── PROCESS ─────────────────────────────────────────────────────
        h('section',{id:'process',className:'process frame'},
          h('div',{className:'section-intro'},
            h('div',null,
              h('p',{className:'eyebrow'},'How it works'),
              h('h2',{'data-reveal':true},'From idea\nto final cut.')
            ),
            h('p',{'data-reveal':true},'A focused three-step process that takes your brief — or your raw footage — all the way to a finished, platform-ready video.')
          ),
          h('div',{className:'process-list'},
            ...stages.map(([title,text]) => h('div',{className:'process-step',key:title,'data-reveal':true},
              h('h3',null,title),
              h('p',null,text)
            ))
          )
        ),

        // ── TOOLS ───────────────────────────────────────────────────────
        h('section',{id:'tools',className:'tools frame'},
          h('div',{className:'section-intro'},
            h('div',null,
              h('p',{className:'eyebrow'},'The stack'),
              h('h2',{'data-reveal':true},'The creative toolkit.')
            ),
            h('p',{'data-reveal':true},'The software behind every AI concept, real-person motion overlay, voiceover, and finished edit.')
          ),
          h('dl',{className:'tool-list'},
            ...tools.map(([role,names]) => h('div',{key:role,className:'tool-row','data-reveal':true},
              h('dt',null,role),
              h('dd',null,names)
            ))
          )
        ),

        // ── CONTACT ─────────────────────────────────────────────────────
        h('section',{id:'contact',className:'contact'},
          h('div',{className:'frame contact-grid'},
            h('div',null,
              h('p',{className:'eyebrow light'},'Start a project'),
              h('h2',{'data-reveal':true},'What\'s your\nnext story?'),
              h('p',null,'Whether you need a fully AI-generated campaign or motion-enhanced editing for your real-person footage — put your idea into words and I\'ll take it from there.'),
              h('p',{className:'contact-note'},'This brief stays in your browser. Copy it and send it to me through your preferred channel.')
            ),
            h('form',{onSubmit: event => { event.preventDefault(); copyBrief(); }},
              h('label',{htmlFor:'productionType'},'Production type'),
              h('select',{id:'productionType',name:'productionType',value:productionType,onChange:field(setProductionType)},
                ...['AI-Generated Video','Real Person & Motion Graphics','Hybrid (AI + Real Footage)'].map(value => h('option',{key:value},value))
              ),
              h('label',{htmlFor:'category'},'Category'),
              h('input',{id:'category',name:'category',placeholder:'e.g. talking head, real estate, skincare, fashion…',value:category,onChange:field(setCategory),maxLength:120}),
              h('label',{htmlFor:'format'},'Video format'),
              h('select',{id:'format',name:'format',value:format,onChange:field(setFormat)},
                ...['Portrait · 9:16','Landscape · 16:9','Let\'s decide together'].map(value => h('option',{key:value},value))
              ),
              h('label',{htmlFor:'idea'},'What do you have in mind?'),
              h('textarea',{id:'idea',name:'idea',rows:4,placeholder:'The story, the audience, the feeling…',value:idea,onChange:field(setIdea),maxLength:2000}),
              h('button',{type:'submit',className:'button'},copied?'✓ Brief copied':'Copy my project brief ↗'),
              h('p',{className:'form-status',role:'status'},
                copied?'Ready to paste into your message.' :
                copyError?'Copy isn\'t available here — select and copy your brief below.' :
                'No sign-in or submission needed.'
              ),
              h('details',{className:'brief-preview',open:copyError},
                h('summary',null,'Preview your brief'),
                h('textarea',{'aria-label':'Your project brief',readOnly:true,value:brief,rows:10,onFocus:event=>event.target.select()})
              )
            )
          )
        )
      ),

      // ── FOOTER ──────────────────────────────────────────────────────────
      h('footer',{className:'frame'},
        h('div',{className:'footer-top'},
          h('div',null,
            h('p',{className:'footer-tagline'},'AI & real-person video production.'),
            h('p',{className:'footer-sub'},'From concept and raw footage to final cut.')
          ),
          link('Back to top ↑','#home','footer-link')
        ),
        h('div',{className:'footer-wordmark','aria-label':'JEA Creative'},'JEA.CREATIVE')
      )
    );
  }
  return Portfolio;
}
