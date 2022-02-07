/**
 * Function to get item stored in localStorage.
 * ----
 * @returns localStorageItem.
 * */
export function getFromLocal(name: string) {
    let localStorageItem = JSON.parse(localStorage.getItem(name))

    return localStorageItem
}

/**
 * Set's given item to localStorage.
 * ----
 * @params itemDetails - details of item to be set.
 * @returns status - 200 if item is set successfully, else 400.
 */
export function setToLocal(name: string, itemDetails: any): { status: number } {
    localStorage.setItem(name, JSON.stringify(itemDetails))

    let localStorageItem = getFromLocal(name)

    if (localStorageItem === null || localStorageItem === undefined) {
        return { status: 400 }
    }

    return { status: 200 }
}
