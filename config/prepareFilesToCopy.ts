import path from 'path';
import { filenameToPostInstallEntry } from '../src/util/postinstallFilenamesConvertor';
import { ProjectNames } from './projectNames';

export interface IFilesToCopy {
    from: string;
    to: string;
}

export function prepareFilesToCopy(): Array<IFilesToCopy> {
    return [
        {
            path: path.resolve(ProjectNames.E2E_TESTS_FOLDER, ProjectNames.E2E_PLUGINS_SUBFOLDER),
            name: ProjectNames.E2E_PLUGINS_FILE,
        },
        {
            path: path.resolve(ProjectNames.E2E_TESTS_FOLDER, ProjectNames.E2E_SUPPORT_SUBFOLER),
            name: ProjectNames.E2E_SUPPORT_FILE,
        },
        {
            path: path.resolve(ProjectNames.CONFIG_FOLDER),
            name: ProjectNames.E2E_TSCONFIG_FILE,
        },
        {
            path: path.resolve(ProjectNames.E2E_TESTS_FOLDER, ProjectNames.E2E_PAGE_OBJECTS_FOLDER),
            name: ProjectNames.GITIGNORE_FILE,
        },
        {
            path: path.resolve(ProjectNames.E2E_TESTS_FOLDER, ProjectNames.E2E_PAGE_OBJECTS_FOLDER),
            name: ProjectNames.GITIGNORE_FILE,
        },
        {
            path: path.resolve(),
            name: ProjectNames.CYPRESS_CONFIG_FILE,
        },
    ].map(fileInfo => ({
        from: path.resolve(fileInfo.path, fileInfo.name),
        to: path.resolve(ProjectNames.POSTINSTALL_FOLDER, filenameToPostInstallEntry(fileInfo.name)),
    }));
}
