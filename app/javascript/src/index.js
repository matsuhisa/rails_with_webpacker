const src = require.context('.', true, /\.js$/)
src.keys().forEach(src)