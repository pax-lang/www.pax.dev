/* tslint:disable */
/* eslint-disable */
/**
* @returns {Promise<any>}
*/
export function pax_init(): Promise<any>;
/**
* @returns {any}
*/
export function wasm_memory(): any;
/**
*/
export class InterruptResult {
  free(): void;
/**
*/
  prevent_default: boolean;
}
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
* @returns {InterruptResult}
*/
  interrupt(native_interrupt: string, additional_payload: any): InterruptResult;
/**
* @param {MemorySlice} slice
*/
  deallocate(slice: MemorySlice): void;
/**
*/
  update_userland_component(): void;
/**
*/
  handle_recv_designtime(): void;
/**
*/
  designtime_tick(): void;
/**
* @returns {MemorySlice}
*/
  tick(): MemorySlice;
/**
*/
  render(): void;
/**
* @param {string} path
* @returns {boolean}
*/
  image_loaded(path: string): boolean;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly pax_init: () => number;
  readonly wasm_memory: () => number;
  readonly __wbg_paxchassisweb_free: (a: number, b: number) => void;
  readonly __wbg_interruptresult_free: (a: number, b: number) => void;
  readonly __wbg_get_interruptresult_prevent_default: (a: number) => number;
  readonly __wbg_set_interruptresult_prevent_default: (a: number, b: number) => void;
  readonly paxchassisweb_add_context: (a: number, b: number, c: number) => void;
  readonly paxchassisweb_send_viewport_update: (a: number, b: number, c: number) => void;
  readonly paxchassisweb_remove_context: (a: number, b: number, c: number) => void;
  readonly paxchassisweb_interrupt: (a: number, b: number, c: number, d: number) => number;
  readonly paxchassisweb_deallocate: (a: number, b: number) => void;
  readonly paxchassisweb_update_userland_component: (a: number) => void;
  readonly paxchassisweb_handle_recv_designtime: (a: number) => void;
  readonly paxchassisweb_designtime_tick: (a: number) => void;
  readonly paxchassisweb_tick: (a: number) => number;
  readonly paxchassisweb_render: (a: number) => void;
  readonly paxchassisweb_image_loaded: (a: number, b: number, c: number) => number;
  readonly __wbg_memoryslice_free: (a: number, b: number) => void;
  readonly memoryslice_ptr: (a: number) => number;
  readonly memoryslice_len: (a: number) => number;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__haa9c5fdc059abe93: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h023af8363ec9355a: (a: number, b: number, c: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly wasm_bindgen__convert__closures__invoke2_mut__h5232b5349e98f8b2: (a: number, b: number, c: number, d: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
