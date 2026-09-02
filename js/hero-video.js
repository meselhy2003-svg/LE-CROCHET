/**
 * LE CROCHET - Hero Video & Gradient Controller
 * Manages background video playback, sound toggles, and live gradient overlay customizations.
 */

document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('heroBgVideo');
  const gradientOverlay = document.getElementById('heroGradientOverlay');
  const playPauseBtn = document.getElementById('heroPlayPauseBtn');
  const muteBtn = document.getElementById('heroMuteBtn');
  const soundBars = document.getElementById('soundBars');
  const gradientToggleBtn = document.getElementById('gradientToggleBtn');
  const gradientModal = document.getElementById('gradientPickerModal');
  const closeGradientModal = document.getElementById('closeGradientModal');
  const intensitySlider = document.getElementById('gradientIntensity');
  const intensityValue = document.getElementById('intensityValue');
  const presetChips = document.querySelectorAll('.preset-chip');

  // Gradient Presets Dictionary
  const gradientPresets = {
    terracotta: {
      name: 'Terracotta Glow',
      gradient: 'linear-gradient(135deg, rgba(20, 16, 15, 0.85) 0%, rgba(217, 125, 100, 0.48) 50%, rgba(14, 13, 13, 0.88) 100%)',
      intensity: 0.85
    },
    midnight: {
      name: 'Midnight Atelier',
      gradient: 'linear-gradient(135deg, rgba(10, 12, 18, 0.88) 0%, rgba(35, 50, 75, 0.45) 50%, rgba(8, 10, 14, 0.92) 100%)',
      intensity: 0.88
    },
    amber: {
      name: 'Golden Amber',
      gradient: 'linear-gradient(135deg, rgba(28, 20, 14, 0.86) 0%, rgba(229, 190, 122, 0.46) 50%, rgba(16, 12, 10, 0.9) 100%)',
      intensity: 0.85
    },
    emerald: {
      name: 'Emerald Botanique',
      gradient: 'linear-gradient(135deg, rgba(12, 24, 18, 0.86) 0%, rgba(110, 155, 125, 0.44) 50%, rgba(10, 18, 14, 0.9) 100%)',
      intensity: 0.85
    },
    rose: {
      name: 'Velvet Rose',
      gradient: 'linear-gradient(135deg, rgba(28, 14, 20, 0.86) 0%, rgba(230, 150, 165, 0.42) 50%, rgba(18, 10, 15, 0.9) 100%)',
      intensity: 0.85
    }
  };

  let activePresetKey = 'terracotta';

  // Apply gradient preset
  function applyGradient(presetKey, intensity) {
    const preset = gradientPresets[presetKey];
    if (!preset) return;

    activePresetKey = presetKey;
    document.documentElement.style.setProperty('--hero-gradient-current', preset.gradient);

    const appliedIntensity = intensity !== undefined ? intensity : preset.intensity;
    document.documentElement.style.setProperty('--hero-gradient-intensity', appliedIntensity);

    if (intensitySlider) {
      intensitySlider.value = Math.round(appliedIntensity * 100);
    }
    if (intensityValue) {
      intensityValue.textContent = `${Math.round(appliedIntensity * 100)}%`;
    }

    presetChips.forEach(chip => {
      chip.classList.toggle('active', chip.dataset.preset === presetKey);
    });
  }

  // Preset button click events
  presetChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const presetKey = chip.dataset.preset;
      applyGradient(presetKey);
    });
  });

  // Slider change event
  if (intensitySlider) {
    intensitySlider.addEventListener('input', (e) => {
      const val = e.target.value / 100;
      document.documentElement.style.setProperty('--hero-gradient-intensity', val);
      if (intensityValue) {
        intensityValue.textContent = `${e.target.value}%`;
      }
    });
  }

  // Toggle Gradient Picker Modal
  if (gradientToggleBtn && gradientModal) {
    gradientToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      gradientModal.classList.toggle('open');
      gradientToggleBtn.classList.toggle('active', gradientModal.classList.contains('open'));
    });

    if (closeGradientModal) {
      closeGradientModal.addEventListener('click', () => {
        gradientModal.classList.remove('open');
        gradientToggleBtn.classList.remove('active');
      });
    }

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!gradientModal.contains(e.target) && !gradientToggleBtn.contains(e.target)) {
        gradientModal.classList.remove('open');
        gradientToggleBtn.classList.remove('active');
      }
    });
  }

  // Play / Pause toggle
  if (video && playPauseBtn) {
    playPauseBtn.addEventListener('click', () => {
      if (video.paused) {
        video.play().then(() => {
          updatePlayPauseIcon(true);
        }).catch(err => {
          console.warn('Playback error:', err);
        });
      } else {
        video.pause();
        updatePlayPauseIcon(false);
      }
    });

    function updatePlayPauseIcon(isPlaying) {
      playPauseBtn.innerHTML = isPlaying ? `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
      ` : `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      `;
      playPauseBtn.title = isPlaying ? 'Pause Video' : 'Play Video';
    }

    // Ensure play/pause state is synced with video events
    video.addEventListener('play', () => updatePlayPauseIcon(true));
    video.addEventListener('pause', () => updatePlayPauseIcon(false));
  }

  // Mute / Unmute audio toggle
  if (video && muteBtn) {
    muteBtn.addEventListener('click', () => {
      video.muted = !video.muted;
      updateAudioState(!video.muted);
    });

    function updateAudioState(isUnmuted) {
      if (soundBars) {
        soundBars.classList.toggle('playing', isUnmuted);
      }
      muteBtn.classList.toggle('active', isUnmuted);
      muteBtn.title = isUnmuted ? 'Mute Video Audio' : 'Unmute Video Audio';
    }

    // Default: muted (autoplay compliant)
    video.muted = true;
    updateAudioState(false);
  }

  // Attempt Autoplay with fallback
  if (video) {
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log('Autoplay requires user engagement or was suspended:', error);
      });
    }
  }

  // Initialize with Default Preset
  applyGradient('terracotta');
});
