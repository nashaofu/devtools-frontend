import '../../third_party/codemirror/package/addon/runmode/runmode-standalone.js';
import '../../third_party/codemirror/package/mode/css/css.js';
import type * as TextUtils from './TextUtils.js';
export declare type Tokenizer = (line: string, callback: (value: string, style: string | null, start: number, end: number) => void) => void;
export declare class TokenizerFactory implements TextUtils.TokenizerFactory {
    static instance(opts?: {
        forceNew: boolean | null;
    }): TokenizerFactory;
    getMode(mimeType: string): any;
    createTokenizer(mimeType: string): Tokenizer;
}
