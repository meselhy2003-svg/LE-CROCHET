import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function BespokeSection() {
  const { showToast } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pieceType: 'tote',
    yarn: 'organic-cotton',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const client = formData.name || 'Client';
    showToast(`Thank you, ${client}! Your bespoke inquiry has been received.`);
    setFormData({
      name: '',
      email: '',
      pieceType: 'tote',
      yarn: 'organic-cotton',
      notes: ''
    });
  };

  return (
    <section id="bespoke">
      <div className="container">
        <div className="bespoke-box">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <span className="section-tag">Made-To-Measure</span>
            <h2 className="section-title">Commission a Bespoke Creation</h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Have a particular yarn hue, custom dimension, or specific stitch pattern in mind? Our master artisan will collaborate directly with you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="form-grid">
            <div className="form-group">
              <label htmlFor="clientName" className="form-label">Your Name</label>
              <input
                type="text"
                id="clientName"
                className="form-input"
                placeholder="e.g. Geneviève de Moray"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="clientEmail" className="form-label">Email Address</label>
              <input
                type="email"
                id="clientEmail"
                className="form-input"
                placeholder="name@domain.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="commissionType" className="form-label">Piece Type</label>
              <select
                id="commissionType"
                className="form-select"
                value={formData.pieceType}
                onChange={(e) => setFormData({ ...formData, pieceType: e.target.value })}
              >
                <option value="tote">Custom Structured Tote / Bag</option>
                <option value="cardigan">Bespoke Openwork Knitwear</option>
                <option value="tapestry">Large Wall Hanging & Tapestry</option>
                <option value="accessory">Raffia Accessory / Sun Hat</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="yarnChoice" className="form-label">Preferred Fiber</label>
              <select
                id="yarnChoice"
                className="form-select"
                value={formData.yarn}
                onChange={(e) => setFormData({ ...formData, yarn: e.target.value })}
              >
                <option value="organic-cotton">100% Unbleached Organic Cotton</option>
                <option value="baby-alpaca">Peruvian Baby Alpaca & Silk</option>
                <option value="madagascar-raffia">Madagascar Natural Raffia</option>
                <option value="merino-wool">Fine Australian Merino Wool</option>
              </select>
            </div>

            <div className="form-group full">
              <label htmlFor="clientVision" className="form-label">Your Vision & Dimensional Requests</label>
              <textarea
                id="clientVision"
                rows="4"
                className="form-textarea"
                placeholder="Describe color preferences, measurements, deadline, or inspiration details..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              />
            </div>

            <div className="form-group full" style={{ textAlign: 'center', marginTop: '10px' }}>
              <button type="submit" className="btn btn-primary" style={{ padding: '16px 42px' }}>
                <span>Send Bespoke Inquiry</span>
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
