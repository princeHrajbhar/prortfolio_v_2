import React, { useState } from 'react';
import axios from 'axios';

const SendEmailForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/send-email', { name, email, message });
      setResponseMessage(response.data.message);
    } catch (error) {
      setResponseMessage('Error sending email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send Email'}
      </button>
      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
};

export default SendEmailForm;
