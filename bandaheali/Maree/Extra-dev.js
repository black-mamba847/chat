import config from '../../config.js';

const DevCmd = async (m, Matrix) => {
  try {
    const prefix = config.PREFIX;
    const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';

    if (cmd === 'dev') {
      const devName = 'toxicglen';
      const devNumber = '254717263689';

      const vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${devName}
TEL;type=CELL;type=VOICE;waid=${devNumber}:${devNumber}
END:VCARD`.trim();

      const caption = `*Developer Info*\n\n` +
        `*Name:* ${devName}\n` +
        `*Number:* wa.me/${devNumber}\n\n` +
        `*Website:* https://whatsapp.com/channel/0029VawCel7GOj9ktLjkxQ3g\n` +
        `* GitHub:* https://github.com/black-mamba847/chat/\n` +
        `* TikTok:* @toxic\n` +
        `* Instagram:* @toxic`;

      await Matrix.sendMessage(m.from, {
        contacts: {
          displayName: devName,
          contacts: [{ vcard }]
        }
      }, { quoted: m });

      await Matrix.sendMessage(m.from, { text: caption }, { quoted: m });
    }
  } catch (err) {
    console.error('Dev Command Error:', err);
    await Matrix.sendMessage(m.from, {
      text: '*An error occurred while sending the developer contact.*'
    }, { quoted: m });
  }
};

export default DevCmd;
