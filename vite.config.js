/**
 * @type {import('vite').UserConfig}
 */
 const config = {
   target: 'esnext',
   mode: 'whatever',
   plugins: [{
     config(config, configEnv) {
       console.log('config', config.mode) // => whatever
       console.log('configEnv', configEnv.mode) // => development
     }
   }]
  // ...
}
console.log('ssss')
export default config