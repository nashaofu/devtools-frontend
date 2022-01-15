export declare const enum FormatterActions {
    FORMAT = "format",
    PARSE_CSS = "parseCSS",
    HTML_OUTLINE = "htmlOutline",
    JAVASCRIPT_OUTLINE = "javaScriptOutline",
    JAVASCRIPT_IDENTIFIERS = "javaScriptIdentifiers",
    EVALUATE_JAVASCRIPT_SUBSTRING = "evaluatableJavaScriptSubstring",
    ARGUMENTS_LIST = "argumentsList"
}
export interface FormatMapping {
    original: number[];
    formatted: number[];
}
export interface FormatResult {
    content: string;
    mapping: FormatMapping;
}
