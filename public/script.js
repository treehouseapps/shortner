function fun() {
    const text = document.getElementById('text').innerText
    console.log(text)
    navigator.clipboard.writeText(text).then(() => {
        document.getElementById('status').innerText = 'Text copied!'
    })
}