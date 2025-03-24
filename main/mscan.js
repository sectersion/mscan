import mineflayer from 'mineflayer'
import 'minecraft-protocol'
import { viewerConnector, onReady } from 'mcraft-fun-mineflayer'
import { reset } from './bot.js'


var ip = "kaboom.pw"; //default ip, change to dynamip ip scanner function soon
var port = 25565; //also change port to dynamic

reset(ip, port) //initalize bot on default server



