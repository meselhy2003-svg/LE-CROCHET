import React from 'react';
import { Palette, X } from 'lucide-react';
import { GRADIENT_PRESETS } from '../data/gradientPresets';

export default function GradientCustomizer({
  isOpen,
  onClose,
  currentPreset,
  onSelectPreset,
  intensity,
  onChangeIntensity
}) {
  if (!isOpen) return null;

  return (
    <div className="gradient-picker-modal" aria-label="Gradient Mood Customizer">
      <div className="gradient-picker-header">
        <h4>
          <Palette size={16} strokeWidth={2} style={{ color: 'var(--accent-terracotta)' }} />
          Video Gradient Mood
        </h4>
        <button
          onClick={onClose}
          aria-label="Close"
          style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: 1, padding: '2px' }}
        >
          <X size={16} />
        </button>
      </div>

      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
        Select a luxury tone overlay mapped over your background video:
      </p>

      <div className="preset-buttons-grid">
        {Object.values(GRADIENT_PRESETS).map(preset => {
          const isActive = currentPreset.id === preset.id;
          const isWide = preset.id === 'rose';

          return (
            <button
              key={preset.id}
              className={`preset-chip ${isActive ? 'active' : ''}`}
              style={isWide ? { gridColumn: 'span 2' } : {}}
              onClick={() => onSelectPreset(preset)}
            >
              <span className="preset-swatch" style={{ background: preset.swatch }}></span>
              <span>{preset.name}</span>
            </button>
          );
        })}
      </div>

      <div className="slider-group">
        <div className="slider-label-row">
          <span>Overlay Intensity</span>
          <span>{intensity}%</span>
        </div>
        <input
          type="range"
          className="intensity-slider"
          min="20"
          max="98"
          value={intensity}
          onChange={(e) => onChangeIntensity(Number(e.target.value))}
        />
      </div>
    </div>
  );
}
