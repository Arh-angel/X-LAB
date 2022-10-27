import { AxiosResponse } from 'axios';
import apiAxios from '../network';

export default class SearchService {
  static async searchAddress(query: string): Promise<AxiosResponse<any>> {
    return apiAxios.post<any>('/address', { query: query });
  }
}
