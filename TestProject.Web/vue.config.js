module.exports = {
    configureWebpack: {
      // Using source-map allows VS Code to correctly debug inside vue files
      devtool: 'source-map',
      // Breakpoints in VS and VSCode won’t work since the source maps
      // consider ClientApp the project root, rather than its parent folder
      //output: {
      //  devtoolModuleFilenameTemplate: info => {
      //    const resourcePath = info.resourcePath.replace('./VueApp', './TestProject.Web/VueApp')
      //    return `webpack:///${resourcePath}?${info.loaders}`
      //  }
      //},
      devServer: {
        // When running in IISExpress, the env variable won’t be provided. 
        // Hardcode a fallback here based on your launchSettings.json
        proxy: process.env.ASPNET_URL || 'http://localhost:5000'
      }
    }
  }