const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	danzz: 'https://danzzapi.xyz',
}

global.APIKeys = {
	'https://danzzapi.xyz': '92b0a75k6f',
}

// Other
global.apikey = ['danzz'] // Get in: https://danzzapi.xyz
global.apikeyprem = ['danzzprem'] // Get in: https://danzzapi.xyz
global.apikeyvip = ['92b0a75k6f'] // Get in: https://danzzapi.xyz
global.namabot = ['Nothing>_']
global.namaowner = ['Skyzz']
global.owner = ['6281341554776']
global.premium = ['6281341554776']
global.packname = '© Nothing>_'
global.author = 'wa.me/6281341554776'
global.sessionName = 'NothingSes'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.prefix = ['']
global.symbol1 = '•'
global.symbol2 = '>'
global.wm = '© Nothing>_'
global.mess = {
    success: 'Sukses ✓',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Ini Hanya Bisa Dilakukan Oleh Owner',
    group: 'Fitur Ini Hanya Bisa Dilakukan Di Group Chat',
    private: 'Fitur Ini Hanya Bisa Dilakukan Di Private Chat',
    bot: 'Fitur Ini Hanya Bisa Dilakukan Oleh Bot',
    wait: 'Tunggu Sebentar..',
    notregist: 'Kamu belum terdaftar di database bot silahkan daftar terlebih dahulu',
    premium: 'Fitur Ini Hanya Bisa Dilakukan Oleh User Premium',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB.',
}
global.limitawal = {
	free: "15",
        premium: "unlimited"
}
global.thumb = fs.readFileSync('./media/img/1.jpg')
global.qris = { url: 'https://telegra.ph/file/d5da51a774cf359071f9c.jpg' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.greenBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
