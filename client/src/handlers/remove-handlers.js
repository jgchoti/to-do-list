export const removeHandlers = (event) => {
    const target = event.target.closest('tr')
    target.remove()
}