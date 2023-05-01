import { win } from './win'

export const pub = (prefix: string, namespace: string, data?: any) => {
  const event = new CustomEvent(`${prefix}.${namespace}`, {
    bubbles: false,
    detail: data || null,
  })

  win.dispatchEvent(event)
}

export const sub = (prefix: string, namespace: string, callback: Function) =>
  win.addEventListener(`${prefix}.${namespace}`, (e: any) => callback(e.detail))

export const unsub = (prefix: string, namespace: string, callback: Function) =>
  win.removeEventListener(`${prefix}.${namespace}`, callback)
