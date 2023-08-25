import 'egg';

declare module 'egg' {
  export interface Application {}

  export interface Context {
    /**
     * 接口成功返回
     *
     * @param {any} data 成功数据
     * @param {string} msg 成功消息
     * @returns {void}
     */
    success(data: any, msg?: string): void;

    /**
     * 接口失败返回
     *
     * @param {number} code 错误码
     * @param {string} msg 错误信息
     * @param {any} data 错误数据
     * @returns {void}
     */
    fail(code: number, msg: string, data?: any): void;

    /**
     * 创建一个错误，用于throw抛出
     * @param {number} code 错误码
     * @param {string} message 错误信息
     * @param {any} data 错误数据
     * @returns {Error}
     */
    createError(code: number, message: string, data?: any): Error;
  }

  export interface IHelper {
    /**
     * 格式化日期
     *
     * @param {string | number | Date} date 要格式化的日期
     * @param {string} [fmt] 格式，默认：YYYY-MM-DD
     * @returns {string} 格式化后的日期字符串。
     */
    formatDate(date: string | number | Date, fmt?: string): string;

    /**
     * 格式化时间
     *
     * @param {string | number | Date} date 要格式化的日期
     * @param {string} [fmt] 格式，默认：YYYY-MM-DD HH:mm:ss
     * @returns {string} 格式化的日期时间字符串。
     */
    formatTime(date: string | number | Date, fmt?: string): string;

    /**
     * 生成md5
     * @param {string | number[] | Uint8Array} message 文本或文件
     * @param {*} [options] options
     * @returns {string} MD5 hash.
     */
    md5(message: string | number[] | Uint8Array, options?: any): string;
  }

  export interface EggAppConfig {}
}
