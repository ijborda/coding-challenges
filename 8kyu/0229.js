// Safen User Input Part I - htmlspecialchars

function htmlspecialchars(formData) {
    return formData.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")
}