import { THEMES_AREA, PALETTE_AREA, requestTheme } from '@hermes/plugin-sdk'

const colors = {
  background: '#181818',
  foreground: '#FFFFFF',
  card: '#181818',
  cardForeground: '#FFFFFF',
  muted: '#1E2025',
  mutedForeground: '#A0A0A0',
  popover: '#1E2025',
  popoverForeground: '#FFFFFF',
  primary: '#173E76',
  primaryForeground: '#FFFFFF',
  secondary: '#363636',
  secondaryForeground: '#FFFFFF',
  accent: '#2C2D30',
  accentForeground: '#FFFFFF',
  border: '#222222',
  input: '#363636',
  ring: '#173E76',
  midground: '#2C2D30',
  composerRing: '#222222',
  destructive: '#DE5D5D',
  destructiveForeground: '#FFFFFF',
  sidebarBackground: '#1A1B1D',
  sidebarBorder: '#222222',
  userBubble: '#173E76',
  userBubbleBorder: '#173E76'
}

const theme = {
  name: 'hermes-gpt-dark-theme',
  label: 'Hermes GPT Dark Theme',
  description: 'Dark charcoal interface, cobalt-blue user bubbles, 780px reading width and Consolas 13px code',
  colors,
  darkColors: colors,
  typography: {
    fontSans: '"Segoe UI", Tahoma, Arial, sans-serif',
    fontMono: 'Consolas, "Cascadia Code", monospace',
    baseSize: '16px',
    lineHeight: '1.55'
  },
  customCSS: `
    
    :root[data-hermes-theme='hermes-gpt-dark-theme'] {
      --ui-bg-chrome: #181818 !important;
      --ui-chat-surface-background: #181818 !important;
      --dt-background: #181818 !important;
      --ui-bg-sidebar: #1A1B1D !important;
      --ui-sidebar-surface-background: #1A1B1D !important;
      --dt-sidebar-bg: #1A1B1D !important;
    }

    
    :root[data-hermes-theme='hermes-gpt-dark-theme'] :is(
      [data-slot='titlebar'],
      [data-slot='window-titlebar'],
      [data-titlebar-root]
    ) {
      background-color: #1E2025 !important;
    }

    
    [data-slot='composer-root'],
    [data-slot='composer-dock'] {
      --composer-fill: #363636 !important;
    }
    [data-slot='composer-surface'] {
      --composer-fill: #363636 !important;
      background: #363636 !important;
      background-color: #363636 !important;
      border-color: #222222 !important;
      border-radius: 24px !important;
      box-shadow: none !important;
      backdrop-filter: none !important;
      -webkit-backdrop-filter: none !important;
    }

    
    [data-slot='aui_assistant-message-content'],
    [data-slot='aui_assistant-message-content'] .aui-md,
    [data-slot='composer-rich-input'] {
      color: #FFFFFF;
      font-size: 16px !important;
      line-height: 26px !important;
    }

    
    .aui-md a[href],
    [data-slot='aui_assistant-message-content'] a[href] {
      color: #9FC7FF !important;
      text-decoration-color: currentColor;
    }
    .aui-md a[href]:hover,
    [data-slot='aui_assistant-message-content'] a[href]:hover {
      color: #C4DEFF !important;
    }
    .aui-md a[href]:focus-visible {
      outline: 2px solid #C4DEFF;
      outline-offset: 2px;
    }

    
    [class~="group/section-label"] > span:first-child,
    [class~="group/section"] > div > span:first-child {
      color: #8AB4F8 !important;
    }

    
    .composer-human-message {
      background: #173E76 !important;
      color: #FFFFFF !important;
      font-size: 16px !important;
      line-height: 26px !important;
      border: 0 !important;
      border-radius: 20px !important;
      width: fit-content !important;
      max-width: min(90%, 820px) !important;
      min-width: 0 !important;
      margin-left: auto !important;
      padding: 10px 16px !important;
      box-shadow: none !important;
      text-align: right !important;
    }
    [data-slot='aui_user-message-root'] { align-items: flex-end !important; }
    [data-slot='aui_user-message-root'] .human-message-with-todos-wrapper {
      align-items: flex-end !important;
    }

    
    .aui-md pre, .aui-md [data-slot='code-card'] {
      background: #393939 !important;
      border-color: #222222 !important;
      border-radius: 16px !important;
    }
    .aui-md pre code,
    .aui-md [data-slot='code-card'] code {
      font-family: Consolas, 'Cascadia Code', monospace !important;
      font-size: 13px !important;
    }
    .aui-md :not(pre) > code {
      border-radius: 6px;
      font-size: 13px !important;
    }

    
    :root {
      --composer-width: 780px !important;
    }

    
    [data-slot='code-card-body'],
    [data-slot='code-card-body'] pre,
    [data-slot='code-card-body'] code,
    [data-slot='code-card-body'] pre span,
    [data-slot='code-card-body'] pre div {
      font-family: Consolas, 'Cascadia Code', monospace !important;
      font-size: 13px !important;
    }
    [data-slot='code-card-body'] > .relative > .scrollbar-overlay {
      max-height: none !important;
      height: auto !important;
      overflow-y: visible !important;
      overflow-x: visible !important;
    }
    [data-slot='code-card-body'] > .relative > .pointer-events-none {
      display: none !important;
    }
    [data-slot='code-card-body'] pre {
      white-space: pre-wrap !important;
      overflow-wrap: anywhere !important;
      word-break: normal !important;
      overflow-x: visible !important;
      max-width: 100% !important;
      line-height: 1.5 !important;
    }
    [data-slot='code-card-body'] pre code,
    [data-slot='code-card-body'] pre .shiki,
    [data-slot='code-card-body'] pre .shiki * {
      white-space: inherit !important;
      overflow-wrap: anywhere !important;
    }


    
    [data-slot='code-card'][data-hgpt-code-language] {
      border: 1px solid #4A4A4A !important;
      border-radius: 16px !important;
      overflow: hidden !important;
      background: #393939 !important;
    }
    [data-slot='code-card'][data-hgpt-code-language]::before {
      content: attr(data-hgpt-code-language);
      box-sizing: border-box;
      display: block;
      height: 39px;
      line-height: 38px;
      padding: 0 15px 0 50px;
      border-bottom: 1px solid #4A4A4A;
      background: #393939;
      font-family: "Segoe UI", Tahoma, sans-serif;
      font-size: 12px;
      font-weight: 600;
      text-align: right;
      direction: ltr;
      color: #FFFFFF;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    [data-slot='code-card'][data-hgpt-code-language] > button {
      left: 10px !important;
      right: auto !important;
      top: 8px !important;
      opacity: 1 !important;
      visibility: visible !important;
      min-height: 24px !important;
      min-width: 26px !important;
      padding: 4px 6px !important;
      background: transparent !important;
      border-radius: 6px !important;
      color: #FFFFFF !important;
      z-index: 20 !important;
    }
    [data-slot='code-card'][data-hgpt-code-language] > button:hover,
    [data-slot='code-card'][data-hgpt-code-language] > button:focus-visible {
      background: #505050 !important;
    }
    [data-slot='code-card'][data-hgpt-code-language] [data-slot='code-card-body'] {
      background: #393939 !important;
    }

    
    [data-slot='aui_user-message-root'] .hgpt-user-copy-toolbar {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-self: flex-end;
      align-items: center;
      min-height: 27px;
      padding: 3px 2px 1px;
      opacity: 0;
      transition: opacity 120ms ease;
    }
    [data-slot='aui_user-message-root']:hover .hgpt-user-copy-toolbar,
    [data-slot='aui_user-message-root']:focus-within .hgpt-user-copy-toolbar {
      opacity: 1;
    }
    [data-slot='aui_user-message-root'] .hgpt-user-copy {
      box-sizing: border-box;
      appearance: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 25px;
      height: 23px;
      border: none;
      border-radius: 6px;
      padding: 3px;
      color: #B9B9B9;
      background: transparent;
      cursor: pointer;
      -webkit-app-region: no-drag;
    }
    [data-slot='aui_user-message-root'] .hgpt-user-copy:hover,
    [data-slot='aui_user-message-root'] .hgpt-user-copy:focus-visible {
      color: #FFFFFF;
      background: #303030;
      outline-offset: 2px;
    }
    [data-slot='aui_user-message-root'] .hgpt-user-copy[data-copied='true'] {
      color: #8AB4F8;
    }
    [data-slot='aui_user-message-root'] .hgpt-user-copy svg {
      width: 15px;
      height: 15px;
      stroke: currentColor;
      stroke-width: 1.8;
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
      pointer-events: none;
    }
    @media (hover: none) {
      [data-slot='aui_user-message-root'] .hgpt-user-copy-toolbar { opacity: 1; }
    }
    [data-slot='file-diff-panel'] .font-mono,
    [data-slot='file-diff-panel'].font-mono {
      font-size: 13px !important;
    }
    .cm-editor .cm-content,
    .cm-editor .cm-line,
    .cm-editor .cm-scroller {
      font-size: 13px !important;
    }
  `
}


const CODE_CARD_SELECTOR = '[data-slot="code-card"]'

function normalizedCodeLanguage(value) {
  if (!value || typeof value !== 'string') return null
  const key = value.trim().toLowerCase().replace(/^language-/, '')
  if (!/^[a-z0-9+#._-]{1,28}$/.test(key)) return null
  const aliases = {
    ps: 'PowerShell', ps1: 'PowerShell', pwsh: 'PowerShell', powershell: 'PowerShell',
    js: 'JavaScript', javascript: 'JavaScript', jsx: 'JavaScript',
    ts: 'TypeScript', typescript: 'TypeScript', tsx: 'TypeScript',
    py: 'Python', python: 'Python',
    sh: 'Shell', bash: 'Bash', shell: 'Shell', zsh: 'Zsh',
    json: 'JSON', jsonc: 'JSON', yaml: 'YAML', yml: 'YAML',
    html: 'HTML', css: 'CSS', scss: 'SCSS',
    xml: 'XML', sql: 'SQL', rust: 'Rust', rs: 'Rust',
    go: 'Go', java: 'Java', c: 'C', cpp: 'C++', cs: 'C#',
    md: 'Markdown', markdown: 'Markdown', dockerfile: 'Dockerfile',
    plaintext: 'Code', plain: 'Code', text: 'Code'
  }
  return aliases[key] ?? key.charAt(0).toUpperCase() + key.slice(1)
}

function detectCodeLanguage(card) {
  const candidates = [card, ...card.querySelectorAll('[data-language], [data-lang], pre, code')]
  for (const node of candidates) {
    for (const key of ['data-language', 'data-lang', 'data-code-language']) {
      const match = normalizedCodeLanguage(node.getAttribute(key))
      if (match) return match
    }
    const classes = node.getAttribute('class') ?? ''
    const match = classes.match(/(?:^|\s)language-([\w+#.-]+)(?:\s|$)/)
    if (match) return normalizedCodeLanguage(match[1]) ?? 'Code'
  }
  const source = (card.querySelector('[data-slot="code-card-body"] pre') ?? card.querySelector('pre'))?.textContent ?? ''
  if (!source) return 'Code'
  if (/\b(?:Get-Date|Get-ChildItem|Write-(?:Host|Output)|Set-ExecutionPolicy|ForEach-Object)\b/.test(source) ||
      /^\s*\$[A-Za-z_]\w*\s*=.*$/m.test(source) && /\b(?:foreach|Write-|Get-|@\()/.test(source)) return 'PowerShell'
  if (/^\s*#!/.test(source)) return 'Shell'
  if (/^\s*(?:from\s+\w+(?:\.\w+)*\s+import\s+|def\s+\w+\(|class\s+\w+\s*\(|print\()/m.test(source)) return 'Python'
  if (/^\s*(?:export\s+|const\s+|let\s+|import\s+.*?\s+from\s+)/m.test(source)) return 'JavaScript'
  if (/^\s*[\[{]/.test(source)) {
    try { JSON.parse(source); return 'JSON' } catch {  }
  }
  return 'Code'
}

function enhanceCodeCards(ctx) {
  if (typeof document === 'undefined' || typeof MutationObserver === 'undefined') return
  let frame = 0
  let disposed = false
  const reconcile = () => {
    frame = 0
    if (disposed) return
    for (const card of document.querySelectorAll(CODE_CARD_SELECTOR)) {
      if (!card.querySelector('[data-slot="code-card-body"]')) continue
      const label = detectCodeLanguage(card)
      if (card.getAttribute('data-hgpt-code-language') !== label) {
        card.setAttribute('data-hgpt-code-language', label)
      }
    }
  }
  const schedule = () => {
    if (frame || disposed) return
    frame = window.requestAnimationFrame(reconcile)
  }
  const observer = new MutationObserver(schedule)
  observer.observe(document.body ?? document.documentElement, { childList: true, subtree: true })
  schedule()
  ctx.onDispose(() => {
    disposed = true
    observer.disconnect()
    if (frame) window.cancelAnimationFrame(frame)
    for (const card of document.querySelectorAll('[data-hgpt-code-language]')) {
      card.removeAttribute('data-hgpt-code-language')
    }
  })
}


const USER_MESSAGE_SELECTOR = '[data-slot="aui_user-message-root"]'

function makeUserCopyIcon() {
  const xmlns = 'http://www.w3.org/2000/svg'
  const svg = document.createElementNS(xmlns, 'svg')
  svg.setAttribute('viewBox', '0 0 24 24')
  svg.setAttribute('aria-hidden', 'true')
  for (const [tag, attributes] of [
    ['rect', { x: '8', y: '8', width: '12', height: '12', rx: '2' }],
    ['path', { d: 'M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2' }]
  ]) {
    const element = document.createElementNS(xmlns, tag)
    for (const [key, value] of Object.entries(attributes)) element.setAttribute(key, value)
    svg.appendChild(element)
  }
  return svg
}

function userBubbleText(root) {
  const bubble = root.querySelector('.composer-human-message')
  if (!bubble) return ''
  const content = bubble.querySelector('.sticky-human-clamp') ?? bubble
  return (content.innerText || content.textContent || '').trim()
}

async function copyUserMessageText(text) {
  if (!text) return false
  try {
    if (typeof navigator.clipboard?.writeText === 'function') {
      await navigator.clipboard.writeText(text)
      return true
    }
  } catch {  }
  let textarea = null
  try {
    textarea = document.createElement('textarea')
    textarea.value = text
    textarea.readOnly = true
    textarea.style.position = 'fixed'
    textarea.style.left = '-9999px'
    textarea.style.top = '0'
    document.body.appendChild(textarea)
    textarea.select()
    return document.execCommand('copy')
  } catch {
    return false
  } finally {
    textarea?.remove()
  }
}

function enhanceUserMessages(ctx) {
  if (typeof document === 'undefined' || typeof MutationObserver === 'undefined') return
  let frame = 0
  let disposed = false
  const reconcile = () => {
    frame = 0
    if (disposed) return
    for (const root of document.querySelectorAll(USER_MESSAGE_SELECTOR)) {
      if (root.querySelector('.hgpt-user-copy-toolbar')) continue
      const bubble = root.querySelector('.composer-human-message')
      const wrapper = root.querySelector('.human-message-with-todos-wrapper')
      if (!bubble || !wrapper) continue
      if (!userBubbleText(root)) continue
      let host = bubble
      while (host.parentElement && host.parentElement !== wrapper) {
        host = host.parentElement
      }
      if (host.parentElement !== wrapper) continue

      const bar = document.createElement('div')
      bar.className = 'hgpt-user-copy-toolbar'
      bar.dataset.hgptUserCopy = 'true'
      const button = document.createElement('button')
      button.type = 'button'
      button.className = 'hgpt-user-copy'
      button.title = 'نسخ الرسالة · Copy message'
      button.setAttribute('aria-label', 'نسخ الرسالة')
      button.appendChild(makeUserCopyIcon())
      for (const type of ['pointerdown', 'mousedown', 'mouseup', 'pointerup']) {
        button.addEventListener(type, event => event.stopPropagation())
      }
      button.addEventListener('click', async event => {
        event.preventDefault()
        event.stopPropagation()
        const ok = await copyUserMessageText(userBubbleText(root))
        if (disposed || !button.isConnected) return
        if (ok) {
          button.dataset.copied = 'true'
          button.title = 'تم النسخ · Copied'
          button.setAttribute('aria-label', 'تم النسخ')
          ctx.setTimeout(() => {
            if (disposed || !button.isConnected) return
            button.removeAttribute('data-copied')
            button.title = 'نسخ الرسالة · Copy message'
            button.setAttribute('aria-label', 'نسخ الرسالة')
          }, 1300)
        } else {
          button.title = 'تعذر النسخ · Copy failed'
        }
      })
      bar.appendChild(button)
      wrapper.insertBefore(bar, host.nextSibling)
    }
  }
  const schedule = () => {
    if (!disposed && !frame) frame = window.requestAnimationFrame(reconcile)
  }
  const observer = new MutationObserver(schedule)
  observer.observe(document.body ?? document.documentElement, { childList: true, subtree: true })
  schedule()
  ctx.onDispose(() => {
    disposed = true
    observer.disconnect()
    if (frame) window.cancelAnimationFrame(frame)
    for (const bar of document.querySelectorAll('.hgpt-user-copy-toolbar[data-hgpt-user-copy="true"]')) {
      bar.remove()
    }
  })
}


const THEME_ID = 'hermes-gpt-dark-theme'

export default {
  id: 'hermes-gpt-dark-theme',
  name: 'Hermes GPT Dark Theme',
  defaultEnabled: true,
  register(ctx) {
    enhanceCodeCards(ctx)
    enhanceUserMessages(ctx)
    ctx.register({ id: 'dark-theme', area: THEMES_AREA, data: theme })

    ctx.register({
      id: 'apply-dark',
      area: PALETTE_AREA,
      data: {
        id: 'hermes-gpt-dark-theme.apply',
        label: 'Hermes GPT Dark Theme: Apply',
        keywords: ['hermes', 'gpt', 'dark', 'theme'],
        run: () => requestTheme(THEME_ID)
      }
    })

    if (ctx.storage.get('didAutoSelectTheme', false)) return
    const selectOnce = (retries) => {
      if (ctx.storage.get('didAutoSelectTheme', false)) return
      if (requestTheme(THEME_ID)) {
        ctx.storage.set('didAutoSelectTheme', true)
      } else if (retries > 0) {
        ctx.setTimeout(() => selectOnce(retries - 1), 250)
      }
    }
    ctx.setTimeout(() => selectOnce(7), 120)
  }
}
