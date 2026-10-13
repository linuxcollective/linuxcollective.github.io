document.addEventListener('DOMContentLoaded', function () {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('site-header-mobile-toggle');
  const siteHeader = document.getElementById('site-header');

  if (mobileToggle && siteHeader) {
    mobileToggle.addEventListener('click', function () {
      siteHeader.classList.toggle('mobile-open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!siteHeader.contains(e.target)) {
        siteHeader.classList.remove('mobile-open');
      }
    });
  }

  // 2. Terminal Tabs on Homepage
  const terminalTabs = document.querySelectorAll('.terminal-tab');
  terminalTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      const targetId = tab.dataset.tab;
      const showcase = tab.closest('.terminal-window');
      if (!showcase) return;

      showcase.querySelectorAll('.terminal-tab').forEach(function (t) {
        t.classList.remove('active');
      });
      showcase.querySelectorAll('.tab-pane').forEach(function (p) {
        p.classList.remove('active');
      });

      tab.classList.add('active');
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

  // 3. Terminal Copy Button
  const termCopyBtn = document.getElementById('terminal-copy-btn');
  if (termCopyBtn) {
    termCopyBtn.addEventListener('click', function () {
      const activePane = document.querySelector('.tab-pane.active');
      if (!activePane) return;

      const activeCommand = activePane.querySelector('.term-command');
      if (!activeCommand) return;

      const text = activeCommand.textContent.trim();
      navigator.clipboard.writeText(text).then(function () {
        const span = termCopyBtn.querySelector('span');
        const origText = span ? span.textContent : 'Copy';
        if (span) span.textContent = 'Copied!';
        termCopyBtn.style.color = '#38bdf8';
        setTimeout(function () {
          if (span) span.textContent = origText;
          termCopyBtn.style.color = '';
        }, 2000);
      });
    });
  }

  // 4. Cheatsheet Snippet Copy Buttons
  const cheatSnippets = document.querySelectorAll('.cheat-snippet');
  cheatSnippets.forEach(function (snippet) {
    const copyBtn = snippet.querySelector('.snippet-copy-btn');
    if (!copyBtn) return;

    copyBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      const cmd = snippet.dataset.cmd || snippet.querySelector('code').textContent.trim();
      navigator.clipboard.writeText(cmd).then(function () {
        copyBtn.innerHTML = '<span style="color:#10b981;font-size:0.8rem;font-weight:bold;">✓</span>';
        setTimeout(function () {
          copyBtn.innerHTML = '<i class="icon icon-copy"></i>';
        }, 2000);
      });
    });
  });

  // 5. Code Block Copy Buttons in Documentation
  const articleCodeBlocks = document.querySelectorAll('#article-content pre');
  articleCodeBlocks.forEach(function (pre) {
    if (pre.querySelector('.code-copy-btn')) return;

    pre.style.position = 'relative';
    const copyBtn = document.createElement('button');
    copyBtn.className = 'code-copy-btn';
    copyBtn.setAttribute('title', 'Copy code');
    copyBtn.innerHTML = '<i class="icon icon-copy"></i>';

    copyBtn.style.cssText = 'position:absolute;top:10px;right:10px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);color:#cbd5e1;padding:5px 8px;border-radius:6px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.2s;';

    copyBtn.addEventListener('mouseenter', function () {
      copyBtn.style.background = 'rgba(255,255,255,0.15)';
      copyBtn.style.color = '#ffffff';
    });
    copyBtn.addEventListener('mouseleave', function () {
      copyBtn.style.background = 'rgba(255,255,255,0.08)';
      copyBtn.style.color = '#cbd5e1';
    });

    copyBtn.addEventListener('click', function () {
      const code = pre.querySelector('code') || pre;
      const text = code.innerText.trim();
      navigator.clipboard.writeText(text).then(function () {
        copyBtn.innerHTML = '<span style="color:#10b981;font-size:0.8rem;font-weight:bold;">✓</span>';
        setTimeout(function () {
          copyBtn.innerHTML = '<i class="icon icon-copy"></i>';
        }, 2000);
      });
    });

    pre.appendChild(copyBtn);
  });
});
