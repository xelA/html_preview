const DEFAULT_HTML_XELA = `
<html>
  <body>
    <div id="capture">
      <p id="hint" style="margin: 0; padding: .5em 1em; margin: .5em; background: #000; color: #fff; border-radius: 5px;">
        <span style="color: #f1c40f;">Hint:</span><br>Start writing to update this box...
      </p>
    </div>
    <style>
      html, body { width: 1500px; height: 1500px; background: #fff; margin: auto 0; overflow: hidden; }
      #capture { display: inline-block; height: auto; width: auto; overflow: hidden; position: relative; }
    </style>
  </body>
</html>
`

window.addEventListener('load', () => {
  const iframe = document.getElementById("preview")
  const editor = document.getElementById("editor")
  const theme = document.getElementById("toggle-theme")
  const chars = document.getElementById("chars")

  iframe.contentWindow.document.write(DEFAULT_HTML_XELA)
  const d = iframe.contentWindow.document
  const capture = d.getElementById("capture")

  editor.addEventListener("input", (e) => {
    capture.innerHTML = (editor.value) ? editor.value : "<h1>placeholder...</h1>"
    chars.innerText = editor.value.length.toLocaleString()
    iframe.style.width = `${capture.clientWidth}px`
    iframe.style.height = `${capture.clientHeight}px`
  })

  theme.addEventListener("click", (e) => {
    const discord_container = document.getElementById("discord").classList
    if (discord_container[1] == "dark-theme") {
      discord_container.add("light-theme")
      discord_container.remove("dark-theme")
    } else {
      discord_container.remove("light-theme")
      discord_container.add("dark-theme")
    }
  })
})
