import path from 'path';
import merge from 'webpack-merge';
import CopyPlugin from 'copy-webpack-plugin';
import { commonConfig, babelOptions } from './webpack.common';
import { prepareFilesToCopy } from './prepareFilesToCopy';
import { ProjectNames } from './projectNames';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const files = prepareFilesToCopy();
const tsconfigPath = path.resolve('tsconfig.json');

export default merge(
    commonConfig,
    {
        entry: path.resolve(
            ProjectNames.SOURCES_FOLDER, ProjectNames.SOURCES_CORE_SUBFOLDER, ProjectNames.CORE_ENTRY_FILE,
        ),
        output: {
            path: path.resolve(ProjectNames.OUTPUT_FOLDER),
            filename: ProjectNames.OUTPUT_CORE_FILENAME,
            library: ProjectNames.LIBRARY_NAME,
            libraryTarget: 'umd',
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: babelOptions
                        },
                    ],
                },
            ],
        },
        plugins: [
            new CopyPlugin(files),
        ],
        resolve: {
            plugins: [new TsconfigPathsPlugin({ configFile: tsconfigPath })],
        }
    },
)
