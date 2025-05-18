import config from '../../config.js';

const fancyStyles = [
  "chatwise Speed Is" ];
const colors = ["🫡", "☣️", "😇", "🥰", "👀", "😎", "😈", "❤️‍🔥", "💪"];

const ping = async (m, sock) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix)
    ? m.body.slice(prefix.length).split(' ')[0].toLowerCase()
    : '';

  if (cmd === "ping") {
    const start = new Date().getTime();
    await m.React('⏳'); // Loading reaction
    const end = new Date().getTime();
    const responseTime = (end - start).toFixed(2);

    // Select a random fancy style and color
    const fancyText = fancyStyles[Math.floor(Math.random() * fancyStyles.length)];
    const colorEmoji = colors[Math.floor(Math.random() * colors.length)];

    const responseText = `${colorEmoji} *${fancyText}* *${responseTime}ms*`;

    await m.React('✅'); // Success reaction

    await sock.sendMessage(
      m.from,
      {
        text: responseText,
        contextInfo: {
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363315182578784@newsletter',
            newsletterName: "Chatwise",
            serverMessageId: -1,
          },
          forwardingScore: 999, // Score to indicate it has been forwarded
          externalAdReply: {
            title: "✨ chatwise ✨",
            body: "Ping Speed Calculation",
            thumbnailUrl: 'https://files.catbox.moe/b5c1l0.jpg',
            sourceUrl: 'https://github.com/black-mamba847/chat/fork',
            mediaType: 1,
            renderLargerThumbnail: false,
          },
        },
      },
      { quoted: m }
    );
  }
};

export default ping;
