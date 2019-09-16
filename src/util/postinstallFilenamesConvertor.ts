export const filenamePrefix = 'example';
export const filenamePostfix = 'template';

export function filenameToPostInstallEntry(name: string): string {
    return `${filenamePrefix}.${name}.${filenamePostfix}`;
}
