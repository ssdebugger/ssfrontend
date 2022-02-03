export const scrollToElement = (id: string) => {
    document.querySelector(`#${id}`).scrollIntoView()
    return
}
