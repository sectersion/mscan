import mineflayer from 'mineflayer'
import 'minecraft-protocol'
import { viewerConnector, onReady } from 'mcraft-fun-mineflayer'

export function reset(internalip, internalport){



  console.log("Starting new bot session on "+internalip+" and port "+internalport)

const options = {
  host: internalip, // Change this to the ip you want.
  port: internalport, // Change this to the port you want.
  username: 'SecterSion',
  auth: "microsoft",
}

const bot = mineflayer.createBot(options)


bot.once('spawn', () => {
  bot.chat("I am a bot that is scraping information from minecraft servers. Please wait and I will automatically disconnect.")
  bot.end()
})

bot.loadPlugin(viewerConnector({
  // Enable console output viewing
  sendConsole: true,
  // Optional IP whitelist
  // ipFilter: ['127.0.0.1'],
  // Optionally enable remote JS code exection (use only with ip filter or password!)
  // allowEval: true,
  forwardChat: true,

  // Optionally disable connection instructions
  // showConnectionInstructions: false,
}))

  }
