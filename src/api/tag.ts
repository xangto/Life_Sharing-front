import http from './request'
import type {OptionVO} from './types'

export function getAllTag() {
  return http.get<OptionVO[]>('/tag/list')
}
