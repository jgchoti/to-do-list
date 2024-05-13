export const textInput = (text) => {
    const pEl = document.createElement('p')
    pEl.innerText = text;
    pEl.setAttribute('contenteditable', 'true')
    return pEl;
}