/*
 * Copyright 2019 Spark Equation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as Click from './click';
import * as See from './see';
import * as LogIn from './logIn';
import * as TypingIn from './typingIn';
import * as Hover from './hover';

export function register(): void {
	Click.register();
	See.register();
	LogIn.register();
	TypingIn.register();
	Hover.register();
}
