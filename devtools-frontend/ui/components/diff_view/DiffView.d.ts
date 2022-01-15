import * as Diff from '../../../third_party/diff/diff.js';
declare global {
    interface HTMLElementTagNameMap {
        'devtools-diff-view': DiffView;
    }
}
export declare type DiffViewData = {
    diff: Diff.Diff.DiffArray;
    mimeType: string;
};
export declare class DiffView extends HTMLElement {
    #private;
    static readonly litTagName: import("../../lit-html/static.js").Static;
    loaded: Promise<void>;
    constructor(data?: DiffViewData);
    set data(data: DiffViewData);
}
