/* tslint:disable */
import * as wasm from './particle_manager_bg';

export function __wbg_random_7f3cbaed87c9c079() {
    return Math.random();
}

const heap = new Array(32);

heap.fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function getObject(idx) { return heap[idx]; }

export function __widl_instanceof_CanvasRenderingContext2D(idx) {
    return getObject(idx) instanceof CanvasRenderingContext2D ? 1 : 0;
}

const __widl_f_begin_path_CanvasRenderingContext2D_target = typeof CanvasRenderingContext2D === 'undefined' ? null : CanvasRenderingContext2D.prototype.beginPath || function() {
    throw new Error(`wasm-bindgen: CanvasRenderingContext2D.beginPath does not exist`);
};

export function __widl_f_begin_path_CanvasRenderingContext2D(arg0) {
    __widl_f_begin_path_CanvasRenderingContext2D_target.call(getObject(arg0));
}

const __widl_f_fill_CanvasRenderingContext2D_target = typeof CanvasRenderingContext2D === 'undefined' ? null : CanvasRenderingContext2D.prototype.fill || function() {
    throw new Error(`wasm-bindgen: CanvasRenderingContext2D.fill does not exist`);
};

export function __widl_f_fill_CanvasRenderingContext2D(arg0) {
    __widl_f_fill_CanvasRenderingContext2D_target.call(getObject(arg0));
}

const __widl_f_stroke_CanvasRenderingContext2D_target = typeof CanvasRenderingContext2D === 'undefined' ? null : CanvasRenderingContext2D.prototype.stroke || function() {
    throw new Error(`wasm-bindgen: CanvasRenderingContext2D.stroke does not exist`);
};

export function __widl_f_stroke_CanvasRenderingContext2D(arg0) {
    __widl_f_stroke_CanvasRenderingContext2D_target.call(getObject(arg0));
}

function GetOwnOrInheritedPropertyDescriptor(obj, id) {
    while (obj) {
        let desc = Object.getOwnPropertyDescriptor(obj, id);
        if (desc) return desc;
        obj = Object.getPrototypeOf(obj);
    }
return {}
}

const __widl_f_set_line_width_CanvasRenderingContext2D_target = GetOwnOrInheritedPropertyDescriptor(typeof CanvasRenderingContext2D === 'undefined' ? null : CanvasRenderingContext2D.prototype, 'lineWidth').set || function() {
    throw new Error(`wasm-bindgen: CanvasRenderingContext2D.lineWidth does not exist`);
};

export function __widl_f_set_line_width_CanvasRenderingContext2D(arg0, arg1) {
    __widl_f_set_line_width_CanvasRenderingContext2D_target.call(getObject(arg0), arg1);
}

const __widl_f_arc_CanvasRenderingContext2D_target = typeof CanvasRenderingContext2D === 'undefined' ? null : CanvasRenderingContext2D.prototype.arc || function() {
    throw new Error(`wasm-bindgen: CanvasRenderingContext2D.arc does not exist`);
};

let cachegetUint32Memory = null;
function getUint32Memory() {
    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== wasm.memory.buffer) {
        cachegetUint32Memory = new Uint32Array(wasm.memory.buffer);
    }
    return cachegetUint32Memory;
}

export function __widl_f_arc_CanvasRenderingContext2D(arg0, arg1, arg2, arg3, arg4, arg5, exnptr) {
    try {
        __widl_f_arc_CanvasRenderingContext2D_target.call(getObject(arg0), arg1, arg2, arg3, arg4, arg5);
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
}

const __widl_f_line_to_CanvasRenderingContext2D_target = typeof CanvasRenderingContext2D === 'undefined' ? null : CanvasRenderingContext2D.prototype.lineTo || function() {
    throw new Error(`wasm-bindgen: CanvasRenderingContext2D.lineTo does not exist`);
};

export function __widl_f_line_to_CanvasRenderingContext2D(arg0, arg1, arg2) {
    __widl_f_line_to_CanvasRenderingContext2D_target.call(getObject(arg0), arg1, arg2);
}

const __widl_f_move_to_CanvasRenderingContext2D_target = typeof CanvasRenderingContext2D === 'undefined' ? null : CanvasRenderingContext2D.prototype.moveTo || function() {
    throw new Error(`wasm-bindgen: CanvasRenderingContext2D.moveTo does not exist`);
};

export function __widl_f_move_to_CanvasRenderingContext2D(arg0, arg1, arg2) {
    __widl_f_move_to_CanvasRenderingContext2D_target.call(getObject(arg0), arg1, arg2);
}

const __widl_f_clear_rect_CanvasRenderingContext2D_target = typeof CanvasRenderingContext2D === 'undefined' ? null : CanvasRenderingContext2D.prototype.clearRect || function() {
    throw new Error(`wasm-bindgen: CanvasRenderingContext2D.clearRect does not exist`);
};

export function __widl_f_clear_rect_CanvasRenderingContext2D(arg0, arg1, arg2, arg3, arg4) {
    __widl_f_clear_rect_CanvasRenderingContext2D_target.call(getObject(arg0), arg1, arg2, arg3, arg4);
}

let cachedTextDecoder = new TextDecoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

const __widl_f_get_context_HTMLCanvasElement_target = typeof HTMLCanvasElement === 'undefined' ? null : HTMLCanvasElement.prototype.getContext || function() {
    throw new Error(`wasm-bindgen: HTMLCanvasElement.getContext does not exist`);
};

export function __widl_f_get_context_HTMLCanvasElement(arg0, arg1, arg2, exnptr) {
    let varg1 = getStringFromWasm(arg1, arg2);
    try {

        const val = __widl_f_get_context_HTMLCanvasElement_target.call(getObject(arg0), varg1);
        return isLikeNone(val) ? 0 : addHeapObject(val);

    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
}

const __widl_f_width_HTMLCanvasElement_target = GetOwnOrInheritedPropertyDescriptor(typeof HTMLCanvasElement === 'undefined' ? null : HTMLCanvasElement.prototype, 'width').get || function() {
    throw new Error(`wasm-bindgen: HTMLCanvasElement.width does not exist`);
};

export function __widl_f_width_HTMLCanvasElement(arg0) {
    return __widl_f_width_HTMLCanvasElement_target.call(getObject(arg0));
}

const __widl_f_height_HTMLCanvasElement_target = GetOwnOrInheritedPropertyDescriptor(typeof HTMLCanvasElement === 'undefined' ? null : HTMLCanvasElement.prototype, 'height').get || function() {
    throw new Error(`wasm-bindgen: HTMLCanvasElement.height does not exist`);
};

export function __widl_f_height_HTMLCanvasElement(arg0) {
    return __widl_f_height_HTMLCanvasElement_target.call(getObject(arg0));
}

function freeParticleManager(ptr) {

    wasm.__wbg_particlemanager_free(ptr);
}
/**
*/
export class ParticleManager {

    free() {
        const ptr = this.ptr;
        this.ptr = 0;
        freeParticleManager(ptr);
    }

    /**
    * @param {any} arg0
    * @param {number} arg1
    * @returns {}
    */
    constructor(arg0, arg1) {
        this.ptr = wasm.particlemanager_new(addHeapObject(arg0), arg1);
    }
    /**
    * @returns {void}
    */
    update() {
        return wasm.particlemanager_update(this.ptr);
    }
}

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

export function __wbindgen_object_drop_ref(i) { dropObject(i); }

export function __wbindgen_number_get(n, invalid) {
    let obj = getObject(n);
    if (typeof(obj) === 'number') return obj;
    getUint8Memory()[invalid] = 1;
    return 0;
}

export function __wbindgen_is_null(idx) {
    return getObject(idx) === null ? 1 : 0;
}

export function __wbindgen_is_undefined(idx) {
    return getObject(idx) === undefined ? 1 : 0;
}

export function __wbindgen_boolean_get(i) {
    let v = getObject(i);
    if (typeof(v) === 'boolean') {
        return v ? 1 : 0;
    } else {
        return 2;
    }
}

export function __wbindgen_is_symbol(i) {
    return typeof(getObject(i)) === 'symbol' ? 1 : 0;
}

let cachedTextEncoder = new TextEncoder('utf-8');

let WASM_VECTOR_LEN = 0;

function passStringToWasm(arg) {

    const buf = cachedTextEncoder.encode(arg);
    const ptr = wasm.__wbindgen_malloc(buf.length);
    getUint8Memory().set(buf, ptr);
    WASM_VECTOR_LEN = buf.length;
    return ptr;
}

export function __wbindgen_string_get(i, len_ptr) {
    let obj = getObject(i);
    if (typeof(obj) !== 'string') return 0;
    const ptr = passStringToWasm(obj);
    getUint32Memory()[len_ptr / 4] = WASM_VECTOR_LEN;
    return ptr;
}

export function __wbindgen_throw(ptr, len) {
    throw new Error(getStringFromWasm(ptr, len));
}

