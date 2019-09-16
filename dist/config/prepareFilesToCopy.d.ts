export interface IFilesToCopy {
    from: string;
    to: string;
}
export declare function prepareFilesToSave(): Array<IFilesToCopy>;
export declare function prepareSavedFilesToCopy(projectBasePath: string, libraryTemplatesPath: string): Array<IFilesToCopy>;
export declare function prepareDirectoriesToCreate(projectBasePath: any): Array<string>;
