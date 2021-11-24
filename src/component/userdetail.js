import _db from './db.json'

const TIMEOUT = 100

export default {
  getUser: (cb, timeout) => setTimeout(() => cb(_db), timeout || TIMEOUT),
}