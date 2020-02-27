import path from 'path';
import { filenameToPostInstallEntry } from '../src/util/postinstallFilenamesConvertor';
import { ProjectNames } from './projectNames';

export interface IFilesToCopy {
    from: string;
    to: string;
}

export function prepareFilesToSave(): Array<IFilesToCopy> {
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
            path: path.resolve('.'),
            name: ProjectNames.CYPRESS_CUCUMBER_CONFIG_FILE,
        },
        {
            path: path.resolve(ProjectNames.E2E_TESTS_FOLDER, ProjectNames.E2E_CONFIG_SUBFOLDER),
            name: ProjectNames.CYPRESS_INTEGRATION_CONFIG_FILE,
        },
        {
            path: path.resolve(ProjectNames.E2E_TESTS_FOLDER, ProjectNames.E2E_CONFIG_SUBFOLDER),
            name: ProjectNames.CYPRESS_UNIT_CONFIG_FILE,
        },
    ].map(fileInfo => ({
        from: path.resolve(fileInfo.path, fileInfo.name),
        to: path.resolve(ProjectNames.POSTINSTALL_FOLDER, filenameToPostInstallEntry(fileInfo.name)),
    }));
}

export function prepareSavedFilesToCopy(projectBasePath: string, libraryTemplatesPath: string): Array<IFilesToCopy> {
    return [
        {
            resultDir: path.resolve(projectBasePath, ProjectNames.E2E_TESTS_FOLDER, ProjectNames.E2E_PAGE_OBJECTS_FOLDER),
            name: ProjectNames.GITIGNORE_FILE,
        },
        {
            resultDir: path.resolve(projectBasePath, ProjectNames.E2E_TESTS_FOLDER, ProjectNames.E2E_PLUGINS_SUBFOLDER),
            name: ProjectNames.E2E_PLUGINS_FILE,
        },
        {
            resultDir: path.resolve(
                projectBasePath, ProjectNames.E2E_TESTS_FOLDER,
                ProjectNames.E2E_FEATURES_SUBFOLER, ProjectNames.E2E_FEATURES_COMMON_SUBFOLDER,
            ),
            name: ProjectNames.E2E_FEATURES_COMMON_BEFORE_FILE,
        },
        {
            resultDir: path.resolve(projectBasePath),
            name: ProjectNames.CYPRESS_CUCUMBER_CONFIG_FILE,
        },
        {
            resultDir: path.resolve(projectBasePath, ProjectNames.E2E_TESTS_FOLDER, ProjectNames.E2E_CONFIG_SUBFOLDER),
            name: ProjectNames.CYPRESS_INTEGRATION_CONFIG_FILE,
        },
        {
            resultDir: path.resolve(projectBasePath, ProjectNames.E2E_TESTS_FOLDER, ProjectNames.E2E_CONFIG_SUBFOLDER),
            name: ProjectNames.CYPRESS_UNIT_CONFIG_FILE,
        },
        {
            resultDir: path.resolve(projectBasePath, ProjectNames.E2E_TESTS_FOLDER),
            name: ProjectNames.E2E_TSCONFIG_FILE,
            outputName: ProjectNames.OUTPUT_TSCONFIG_FILE,
        },
        {
            resultDir: path.resolve(projectBasePath, ProjectNames.E2E_TESTS_FOLDER, ProjectNames.E2E_SUPPORT_SUBFOLER),
            name: ProjectNames.E2E_SUPPORT_FILE,
        },
        {
            resultDir: path.resolve(projectBasePath),
            name: ProjectNames.CYPRESS_ENV_FILE,
        },
    ].map(fileInfo => ({
        from: path.resolve(libraryTemplatesPath, filenameToPostInstallEntry(fileInfo.name)),
        to: path.resolve(fileInfo.resultDir, (fileInfo.outputName || fileInfo.name)),
    }));
}

export function prepareDirectoriesToCreate(projectBasePath): Array<string> {
    const PROJECT_E2E_PATH = path.resolve(projectBasePath, ProjectNames.E2E_TESTS_FOLDER);
    const PROJECT_PLUGINS_PATH = path.resolve(PROJECT_E2E_PATH, ProjectNames.E2E_PLUGINS_SUBFOLDER);
    const PROJECT_SUPPORT_PATH = path.resolve(PROJECT_E2E_PATH, ProjectNames.E2E_SUPPORT_SUBFOLER);
    const PROJECT_PAGE_OBJECTS_PATH = path.resolve(PROJECT_E2E_PATH, ProjectNames.E2E_PAGE_OBJECTS_FOLDER);
    const PROJECT_TESTS_COMMON_PATH = path.resolve(
        PROJECT_E2E_PATH, ProjectNames.E2E_FEATURES_SUBFOLER, ProjectNames.E2E_FEATURES_COMMON_SUBFOLDER,
    );
    const PROJECT_E2E_CONFIG_PATH = path.resolve(PROJECT_E2E_PATH, ProjectNames.E2E_CONFIG_SUBFOLDER);

    return [
        PROJECT_PLUGINS_PATH, PROJECT_SUPPORT_PATH, PROJECT_PAGE_OBJECTS_PATH,
        PROJECT_TESTS_COMMON_PATH, PROJECT_E2E_CONFIG_PATH,
    ];
}
