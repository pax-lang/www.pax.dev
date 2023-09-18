/* tslint:disable */
/* eslint-disable */
/**
* @returns {any}
*/
export function wasm_memory(): any;
/**
*/
export class MemorySlice {
  free(): void;
/**
* @returns {number}
*/
  ptr(): number;
/**
* @returns {number}
*/
  len(): number;
}
/**
*/
export class PaxChassisWeb {
  free(): void;
/**
* @returns {PaxChassisWeb}
*/
  static new(): PaxChassisWeb;
/**
* @param {string} id
*/
  add_context(id: string): void;
/**
* @param {number} width
* @param {number} height
*/
  send_viewport_update(width: number, height: number): void;
/**
* @param {string} id
*/
  remove_context(id: string): void;
/**
* @param {string} native_interrupt
* @param {any} additional_payload
*/
  interrupt(native_interrupt: string, additional_payload: any): void;
/**
* @param {MemorySlice} slice
*/
  deallocate(slice: MemorySlice): void;
/**
* @returns {MemorySlice}
*/
  tick(): MemorySlice;
}
