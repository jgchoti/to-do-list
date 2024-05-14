export const checkbox = (id) => {
    const checkboxEl = document.createElement('input')
    const element = 'checkbox'
    checkboxEl.type = element
    checkboxEl.classList.add(element)
    checkboxEl.id = id
    checkboxEl.value = id
    return checkboxEl;
}