import React, { useState } from 'react';
import axios from 'axios';
import './OrderForm.css'; // Stil dosyasını import edin

function OrderForm() {
  const [inputText, setInputText] = useState('');
  const [correctedText, setCorrectedText] = useState('');

  const handleTextChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/correct', { text: inputText });
      setCorrectedText(response.data.corrected);
    } catch (error) {
      console.error('Error correcting text:', error);
      setCorrectedText('Error correcting text.');
    }
  };

  return (
    <div className="order-form-container">
      <form onSubmit={handleSubmit}>
        <textarea
          value={inputText}
          onChange={handleTextChange}
          placeholder="Sipariş içeriğini satır satır giriniz.."
          rows="10"
        />
        <button type="submit">Siparişi İşle</button>
      </form>
      <div>
        <h3>Düzeltilmiş Metin:</h3>
        <pre>{correctedText}</pre>
      </div>
    </div>
  );
}

export default OrderForm;
