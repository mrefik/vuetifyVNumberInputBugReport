removeStyleTag()
Promise.all([loadFont(), loadIcons()])

function removeStyleTag () {
  const tag = document.querySelector('#vuetify-theme-stylesheet')
  if (!tag) return
  tag.parentElement.removeChild(tag)
}

function loadStylesheet (href) {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = href
    link.addEventListener('load', resolve)
    link.addEventListener('error', reject)
    document.body.append(link)
  })
}

function loadFont () {
  return loadStylesheet('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900')
}

function loadIcons () {
  return loadStylesheet('https://cdn.jsdelivr.net/npm/@mdi/font@7.x/css/materialdesignicons.min.css')
}
