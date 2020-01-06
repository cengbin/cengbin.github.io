(function (win) {

  win.documentReady = (function () {

    var funcs = []

    var ready = false

    function handler(event) {
      if (ready) return

      if (event.type === 'onreadystatechange' && document.readyState !== 'complete')
        return

      for (var i = 0; i < funcs.length; i++) {
        funcs[i].call(document)
      }

      if (document.addEventListener) {
        document.removeEventListener('DOMContentLoaded', arguments.callee, false)
      }
      if (document.attachEvent) {
        document.detachEvent('onreadystatechange', arguments.callee)
      }

      ready = true
      funcs = null
    }

    if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', handler, false)

      document.addEventListener('readystatechange', handler, false)//IE9+
    } else {
      document.attachEvent('onreadystatechange', handler)
    }

    return function (fn) {
      if (ready)
        fn.call(document)
      else
        funcs.push(fn)
    }
  }())

}(window))
