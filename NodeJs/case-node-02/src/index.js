  // 开发模式下加载index.html文件，解决index.html无法热加载问题；
if (process.env.NODE_ENV !== 'production') {
   require('./index.html')
}  


import './style.scss';
console.log('Hello webpack')

