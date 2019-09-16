import { IFilesToCopy } from '../../config/prepareFilesToCopy';
export declare function copyFile(from: string, to: string, replaceExisting: boolean): void;
export declare function createDirectoryIfNotExists(dirPath: string): void;
export declare function copyNecessaryFiles(filesList: Array<IFilesToCopy>, replaceExisting?: boolean): void;
export declare function createNecessaryDirectories(directoriesList: Array<string>): void;
