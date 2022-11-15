export default class SlippageStorageManager {
  static readonly _name = 'Slippages'

  static get(): { swap: number } | null {
    const data = window.localStorage.getItem(SlippageStorageManager._name)
    return data ? JSON.parse(data) : null
  }

  static set(data: { swap: number }): void {
    return window.localStorage.setItem(SlippageStorageManager._name, JSON.stringify(data))
  }
}
