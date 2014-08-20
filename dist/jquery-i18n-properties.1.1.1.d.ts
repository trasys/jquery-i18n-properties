/// <reference path="../jquery/jquery.d.ts"/>

interface JQueryStatic {
    i18n: JQueryI18N.StaticInstance;
}

declare module JQueryI18N {

    export interface StaticInstance {
        prop(...key: string[]): string;
        properties(properties?: Properties): void;
    }

    export interface Properties {
        name?: string;
        language?: string;
        path?: string;
        mode?: string;
        cache?: boolean;
        encoding?: string;
        callback?: () => any;
    }

}
