// const express = require('express');
// const app = express();
// const port = 3000;
// const log4js = require('log4js');
// log4js.configure({
//     appenders: {miLoggerConsole: { type: 'console' },
//     miLoggerFile: { type: 'file', filename: 'info.log' },
//     miLoggerFile2: { type: 'file', filename: 'info2.log' },},
//     categories: {default: { appenders: ['miLoggerConsole'],
//      level: 'trace' },
//      consola: { appenders: ['miLoggerConsole'], level: 'debug' },
//      archivo: { appenders: ['miLoggerFile'], level: 'warn' },
//      archivo2: { appenders: ['miLoggerFile2'], level: 'info' },
//      todos: { appenders: ['miLoggerConsole', 'miLoggerFile'], level: 'trace' },},});
//      const logger = log4js.getLogger('todos');
//      logger.trace('Entering cheese testing');
//      logger.debug('Got cheese.');
//      logger.info('Cheese is Comté.');
//      logger.warn('Cheese is quite smelly.');
//      logger.error('Cheese is too ripe!');
//      logger.fatal('Cheese was breeding ground for listeria.');

// const winston= require('winston');
// const logger=winston.createLogger({
//     level:'warn',
//     transports:[
//         new winston.transports.Console({level:'verbose'}),
//         new winston.transports.File({filename:'info.log',level:'error'})
//     ]
// })
// logger.log('error','error message');
import express from 'express';
import cluster from 'cluster';
import {cpus} from 'os';

const port=parseInt(process.argv[2])||8080;
const modoCluster=process.argv[3] == 'cluster';

console.log(port)
console.log(modoCluster)