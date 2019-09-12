export const filenamePrefix = 'example';
export const filenamePostfix = 'template';

export function filenameToPostInstallEntry(name: string) {
    return `${filenamePrefix}.${name}.${filenamePostfix}`
}
