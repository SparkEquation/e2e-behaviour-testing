import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';

import { ProjectNames } from './projectNames';
import { babelOptions, commonConfig } from './webpack.common';

const SCRIPTS_FOLDER = path.resolve(ProjectNames.SOURCES_FOLDER, ProjectNames.SOURCES_SCRIPTS_SUBFOLDER);
const BIN_FOLDER = path.resolve(ProjectNames.OUTPUT_FOLDER, ProjectNames.OUTPUT_SCRIPTS_SUBFOLDER);

export default merge(
    commonConfig,
    {
        entry: {
            'e2eBddStartup': path.resolve(SCRIPTS_FOLDER, 'e2eBddStartup.ts'),
            'copyFiles': path.resolve(SCRIPTS_FOLDER, 'copyFiles.ts'),
        },
        output: {
            path: BIN_FOLDER,
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: babelOptions,
                        },
                        'ts-loader',
                    ],
                },
            ],
        },
        plugins: [
            new webpack.BannerPlugin({
                banner: '#!/usr/bin/env node', raw: true,
            }),
        ],
    }
);
