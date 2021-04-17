exports.wait = () => {
	return`*「🚶」WAIT KAK*`
}

exports.succes = () => {
	return`*「 SUKSES 」*`
}

exports.lvlon = () => {
	return`*「✅」LEVELING ENABLE*`
}

exports.lvloff = () => {
	return`*「✅」LEVELING DISABLE*`
}

exports.lvlnul = () => {
	return`*「🚶」LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*「🎉」LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「❎」BELUM VERIFIKASI「❎」*\n\nketik : @verify ya kak` \n\n lop yu kak✨
}

exports.baned = () => {
	return`*「🙏」MAAF KAK, ANDA TELAH DI BANNED OLEH ADMIN IZUMI*`
}

exports.premium = (prefix) => {
	return`anda belum terdaftar di data premium izumi! Fitur ini khusus user premium!
Upgrade ke premium dulu ya kak!
Jika minat hubungi owner ku
Ketik : ${prefix}owner`
}

exports.rediregis = () => {
	return`*Kamu sudah melakukan verify !*`
}

exports.stikga = () => {
	return`*「 GAGAL 」Coba reply/tag ulang kak*`
}

exports.linkga = () => {
	return`*「❎」maaf linknya tidak valid kak*`
}

exports.groupo = () => {
	return`*「✨」GROUP ONLY*`
}

exports.ownerb = () => {
	return`*「✨」OWNER BOT ONLY*`
}

exports.ownerg = () => {
	return`*「✨」OWNER GROUP ONLY*`
}

exports.admin = () => {
	return`*「✨」ADMIN GROUP ONLY*`
}

exports.badmin = () => {
	return`*「✨」BOT HARUS JADI ADMIN*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*「🚶」Teks nya mana kak?*`
}

exports.clears = () => {
	return`*Sukses Kak*`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 SELAMAT 」*
\`\`\`➸ *Nama* : ${pushname}\`\`\`
\`\`\`➸ *Nomor* : wa.me/${sender.split("@")[0]}\`\`\`
\`\`\`➸ *Xp* : ${getLevelingXp(sender)}\`\`\`
\`\`\`➸ *Level* : ${getLevel} ➸ ${getLevelingLevel(sender)}\`\`\`
`}
 
exports.limitend = (pushname, prefix) => {
	return`*maaf ${pushname} limit hari ini habis*
*Limit di reset setiap jam 24:00*

\`\`\`Upgrade Premium Bebas Limit\`\`\`
\`\`\`➸ 20K : 1 Bulan\`\`\`
\`\`\`Jika berminat silahkan hubungi owner\`\`\`
\`\`\`Kirim perintah : ${prefix}owner\`\`\`
`
}

exports.limitcount = (isPrem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${isPrem ? '9999' : `${limitCounts}`}

Upgrade premium bosku, biar bebas gunain bot`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`┏━━━━━━━♡ *ATM* ♡━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ NOMOR : ${sender.split("@")[0]}
┃│➸ UANG : ${uangkau}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛`
}

exports.donasi = () => {
return`*DONASI KAK*
Pulsa : 085787487695
Gopay : 085624019695
Pulsa Gopay : 085624019695

Donasi supaya bot terus update & Aktif`
}

exports.iklan = (botName, ownerNumbers, ownerName) => {
return`🔰 -----[ 「 *IKLAN ${botName}* 」 ]----- 🔰
──────────────────────────────
◯ *DAFTAR BUAT BOT :*
◯ *BUAT : 15K/GRUP (NORMAL + FREE APIKEY)*
◯ *BUAT : 30K (BISA JADI OWNER + FREE APIKEY + GANTI NAMA BOT, DLL)*
◯ *PEMBAYARAN BISA MELALUI :*
◯ *GOPAY, VIA PULSA, PULSA GOPAY*
──────────────────────────────
◯ *KEUNTUNGAN BUAT BOT :*
◯ *1. BISA MEMASUKAN BOT KE GROUP*
◯ *2. BISA MENGGUNAKAN FITUR PREMIUM*
◯ *KEUNTUNGAN BUAT BOT :*
◯ *1. BISA MENJADI OWNER BOT SENDIRI*
◯ *2. BISA MENGGANTI NAMA BOT SENDIRI*
◯ *3. BISA MEMBAWA BOT KE GROUP*
◯ *4. BISA MENGGUNAKAN COMMAND OWNER*
◯ *5. BISA MENYEWAKAN BOT KEMBALI*
──────────────────────────────
◯ *JIKA MINAT IKLAN DIATAS*
◯ *HARAP HUBUNGI NOMOR DIBAWAH :*
◯ *wa.me/${ownerNumbers}*
──────────────────────────────
🔰 -----[「 *POWERED BY ${ownerName}* 」]----- 🔰`
}