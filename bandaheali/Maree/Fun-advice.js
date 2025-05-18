import config from '../../config.js';
import axios from 'axios';

const advice = async (m, sock) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix)
    ? m.body.slice(prefix.length).split(' ')[0].toLowerCase()
    : '';
  const text = m.body.slice(prefix.length + cmd.length).trim();

  if (cmd === "advice") {
    try {
      await m.React('⏳'); // React with loading icon
      
      // Fetch advice from API
      const response = await axios.get('https://api.adviceslip.com/advice');
      const adviceData = response.data.slip;
      
      const formattedAdvice = `
📌 *Advice #${adviceData.id}* 📌

${adviceData.advice}

_— Advice Slip API_
      `;

      await m.React('✅'); // React with success icon

      sock.sendMessage(
        m.from,
        {
          text: formattedAdvice,
          contextInfo: {
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: '120363315182578784@newsletter',
              newsletterName: "Chatwise",
              serverMessageId: -1,
            },
            forwardingScore: 999,
            externalAdReply: {
              title: "Chatwise wisdom",
              body: "Daily Advice Generator",
              thumbnailUrl: 'https://files.catbox.moe/b5c1l0.jpg',
              sourceUrl: 'https://github.com/black-mamba847/chat',
              mediaType: 1,
              renderLargerThumbnail: false,
            },
          },
        },
        { quoted: m }
      );
    } catch (error) {
      console.error('Error fetching advice:', error);
      await m.React('❌'); // React with error icon
      sock.sendMessage(
        m.from,
        { text: '⚠️ Failed to fetch advice. Please try again later.' },
        { quoted: m }
      );
    }
  }
};

export default advice;
