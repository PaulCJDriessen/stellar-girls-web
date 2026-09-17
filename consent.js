/**
 * Essential cookie/consent preference only.
 * No analytics, ads, or third-party tags are loaded from this file.
 */
(function () {
  const KEY = 'sg_cookie_consent_v1';
  const YEAR_MS = 365 * 24 * 60 * 60 * 1000;

  function read() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return null;
      const data = JSON.parse(raw);
      if (!data?.choice || typeof data.at !== 'number') return null;
      if (Date.now() - data.at > YEAR_MS) return null;
      return data;
    } catch {
      return null;
    }
  }

  function write(choice) {
    try {
      localStorage.setItem(
        KEY,
        JSON.stringify({ choice, at: Date.now() }),
      );
    } catch {
      /* private mode */
    }
  }

  function mount() {
    const banner = document.getElementById('cookie-banner');
    if (!banner) return;

    const saved = read();
    banner.hidden = Boolean(saved);

    banner.querySelectorAll('[data-cookie]').forEach((btn) => {
      btn.addEventListener('click', () => {
        write(btn.getAttribute('data-cookie') || 'necessary');
        banner.hidden = true;
      });
    });

    document.querySelectorAll('[data-cookie-settings]').forEach((el) => {
      el.addEventListener('click', (event) => {
        event.preventDefault();
        banner.hidden = false;
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
