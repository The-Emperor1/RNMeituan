module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'], //表示哪个目录开始设置绝对路径
        alias: {
          //别名的配置
          '@/assets': './src/assets',
          '@/components': './src/components',
          '@/common': './src/common',
          '@/libs': './src/libs',  
          '@/navigator': './src/navigator',  
          '@/screens': './src/screens', 
        },
      },
    ],
  ],
};
