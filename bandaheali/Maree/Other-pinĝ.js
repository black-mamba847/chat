import config from '../../config.js';

const fancyStyles = [
  "Sarkar-MD Speed Is",
  "𝕊𝕒𝕣𝕜𝕒𝕣-𝕄𝔻 𝕊𝕡𝕖𝕖𝕕 𝕀𝕤",
  "𝒮𝒶𝓇𝓀𝒶𝓇-ℳ𝒟 𝒮𝓅𝑒𝑒𝒹 𝐼𝓈",
  "𝓢𝓪𝓻𝓴𝓪𝓻-𝓜𝓓 𝓢𝓹𝓮𝓮𝓭 𝓘𝓼",
  "𝘚𝘢𝘳𝘬𝘢𝘳-𝘔𝘋 𝘚𝘱𝘦𝘦𝘥 𝘐𝘴",
  "𝙎𝙖𝙧𝙠𝙖𝙧-𝙈𝘿 𝙎𝙥𝙚𝙚𝙙 𝙄𝙨",
  "𝑺𝒂𝒓𝒌𝒂𝒓-𝑴𝑫 𝑺𝒑𝒆𝒆𝒅 𝑰𝒔",
  "𝐒𝐚𝐫𝐤𝐚𝐫-𝐌𝐃 𝐒𝐩𝐞𝐞𝐝 𝐈𝐬",
  "𝗦𝗮𝗿𝗸𝗮𝗿-𝗠𝗗 𝗦𝗽𝗲𝗲𝗱 𝗜𝘀",
  "𝖲𝖺𝗋𝗄𝖺𝗋-𝖬𝖣 𝖲𝗉𝖾𝖾𝖽 𝖨𝗌",
  "S̷a̷r̷k̷a̷r̷-̷M̷D̷ ̷S̷p̷e̷e̷d̷ ̷I̷s̷",
  "S̶a̶r̶k̶a̶r̶-̶M̶D̶ ̶S̶p̶e̶e̶d̶ ̶I̶s̶",
  "S̲a̲r̲k̲a̲r̲-̲M̲D̲ S̲p̲e̲e̲d̲ I̲s̲",
  "S͎a͎r͎k͎a͎r͎-͎M͎D͎ ͎S͎p͎e͎e͎d͎ ͎I͎s͎",
  "S̳a̳r̳k̳a̳r̳-̳M̳D̳ S̳p̳e̳e̳d̳ I̳s̳",
  "🅂🄰🅁🄺🄰🅁-🄼🄳 🅂🄿🄴🄴🄳 🄸🅂",
  "ⓈⒶⓇⓀⒶⓇ-ⓂⒹ ⓈⓅⒺⒺⒹ ⒾⓈ",
  "【S】【a】【r】【k】【a】【r】-【M】【D】 【S】【p】【e】【e】【d】 【I】【s】",
  "『S』『a』『r』『k』『a』『r』-『M』『D』 『S』『p』『e』『e』『d』 『I』『s』",
  "Sαякαя-MD Sρєє∂ Iѕ",
  "Şαrkαr-ΜĐ Şρεεd İs",
  "ֆǟʀӄǟʀ-ʍɖ ֆքɛɛɖ ɨֆ",
  "รคгкคг-๓๔ รקєє๔ เร",
  "รคгкคг-๓๔ รקєє๔ เร",
  "Şคгкคг-๓๔ Şקєє๔ เŞ",
  "ֆǟʀӄǟʀ-ʍժ ֆքɛɛժ ɨֆ",
  "S͓̽a͓̽r͓̽k͓̽a͓̽r͓̽-M͓̽D͓̽ S͓̽p͓̽e͓̽e͓̽d͓̽ I͓̽s͓̽",
  "꧁༒☬Sarkar-MD Speed Is☬༒꧂",
  "『S』『a』『r』『k』『a』『r』-『M』『D』 『S』『p』『e』『e』『d』 『I』『s』",
  "Sᴀʀᴋᴀʀ-Mᴅ Sᴘᴇᴇᴅ Is",
  "SΛRΚΛR-MD SPEΣD IS",
  "sᴀʀᴋᴀʀ-ᴍᴅ sᴘᴇᴇᴅ ɪs",
  "Sαяκαя-MD Ƨρεєɗ Iร",
  "Sคгкคг-MD Şקєє๔ เŞ",
  "§αгkαя-MD §ρεεd I§",
  "【Sαякαя-MD】【Spєєd】【Iѕ】",
  "SΔΓΚΔΓ-MD SPΣΣD IS",
  "Sλrkλr-MD Spɛɛd Is",
  "S@rk@r-MD Sp33d Is",
  "𝕊𝕒ʀ𝕜𝕒𝕣-𝕄𝔻 𝕊𝕡𝕖𝕖𝕕 𝕀𝕤",
  "ꜱᴀʀᴋᴀʀ-ᴍᴅ ꜱᴘᴇᴇᴅ ɪꜱ",
  "S𝓪𝓻𝓴𝓪𝓻-M𝓓 S𝓹𝓮𝓮𝓭 I𝓼",
  "𝑺𝒂𝒓𝒌𝒂𝒓-𝑴𝑫 𝑺𝒑𝒆𝒆𝒅 𝑰𝒔",
  "𝖘𝖆𝖗𝖐𝖆𝖗-𝖒𝖉 𝖘𝖕𝖊𝖊𝖉 𝖎𝖘",
  "s̴a̴r̴k̴a̴r̴-M̴D̴ s̴p̴e̴e̴d̴ i̴s̴",
  "Ｓａｒｋａｒ－ＭＤ　Ｓｐｅｅｄ　Ｉｓ",
  "Sαrκαr-ΜD Sρεєd Iѕ",
  "S@rkar-MD $peed I$",
  "Ƨαʀƙαʀ-MD ʂρҽҽԃ Iʂ",
  "𝕊𝕒𝕣𝕜𝕒𝕣-𝕄𝔻 𝕊𝕡𝕖𝕖𝕕 𝕀𝕤",
  "SᎪᏒᏦᎪᏒ-MᎠ ᏚᏢᎬᎬᎠ ᎥᏚ",
  "Sคrкคr-MD Spєєd Iร",
  "ֆǟʀӄǟʀ-ʍժ ֆքɛɛժ ɨֆ",
  "Sαяkαя-MD Ƨρεєd Is",
  "SΛRKΛR-MD SƤΣΣD IS",
  "sαrkαr-md speєd is",
  "S∆RK∆R-MD SP∆∆D IS",
  "Sคгkคг-MD Sקєєd IŞ",
  "꧁Sαякαя-MD꧂ ꧁Spєєd꧂ ꧁Iѕ꧂",
  "𓆩Sarkar𓆪-𓆩MD𓆪 𓆩Speed𓆪 𓆩Is𓆪",
  "Sₐᵣₖₐᵣ-ₘD ₛₚₑₑd ᵢₛ",
  "s̾a̾r̾k̾a̾r̾-M̾D̾ s̾p̾e̾e̾d̾ i̾s̾",
  "s͠a͠r͠k͠a͠r͠-M͠D͠ s͠p͠e͠e͠d͠ i͠s͠",
  "S҉a҉r҉k҉a҉r҉-M҉D҉ S҉p҉e҉e҉d҉ I҉s҉",
  "Sαʀκαʀ-MD Spєєd Is",
  "S̶a̶r̶k̶a̶r̶-̶M̶D̶ S̶p̶e̶e̶d̶ I̶s̶",
  "Sᴬᴿᴷᴬᴿ-ᴹᴰ ˢᴾᴱᴱᴰ ᴵˢ",
  "Sąŕķąŕ-MĐ Śƥęęđ Įś",
  "sᴀʀᴋᴀʀ-ᴍᴅ sᴘᴇᴇᴅ ɪs",
  "ֆǟʀӄǟʀ-ʍժ ֆքɛɛժ ɨֆ",
  "sᴀʀᴋᴀʀ•ᴍᴅ sᴘᴇᴇᴅ•ɪs",
  "Sɒʀƙɑʀ-MD Sρɛɛd Iʂ",
  "s͜͡a͜͡r͜͡k͜͡a͜͡r͜͡-M͜͡D͜͡ s͜͡p͜͡e͜͡e͜͡d͜͡ i͜͡s͜͡",
  "S∀ЯK∀Я-MD SԀΞΞԀ IS",
  "sαʀƙαʀ-md sρєє∂ ιѕ",
  "꧁༺Sarkar-MD༻꧂ ꧁༺Speed Is༻꧂",
  "Sₐᵣₖₐᵣ₋ₘD ₛₚₑₑd ᵢₛ",
  "𝒮𝒶𝓇𝓀𝒶𝓇-ℳ𝒟 𝒮𝓅𝑒𝑒𝒹 𝐼𝓈",
  "𝓢𝓪𝓻𝓴𝓪𝓻-𝓜𝓓 𝓢𝓹𝓮𝓮𝓭 𝓘𝓼",
  "S͓̽a͓̽r͓̽k͓̽a͓̽r͓̽-M͓̽D͓̽ S͓̽p͓̽e͓̽e͓̽d͓̽ I͓̽s͓̽"
];

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
            newsletterName: "Sarkar-MD",
            serverMessageId: -1,
          },
          forwardingScore: 999, // Score to indicate it has been forwarded
          externalAdReply: {
            title: "✨ Sarkar-MD ✨",
            body: "Ping Speed Calculation",
            thumbnailUrl: 'https://raw.githubusercontent.com/Sarkar-Bandaheali/BALOCH-MD_DATABASE/refs/heads/main/Pairing/1733805817658.webp',
            sourceUrl: 'https://github.com/Sarkar-Bandaheali/Sarkar-MD/fork',
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
