/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
'use strict';

import * as net from 'net';

import { workspace, Disposable, ExtensionContext } from 'vscode';
import { LanguageClient, LanguageClientOptions, SettingMonitor, ServerOptions, ErrorAction, ErrorHandler, CloseAction, TransportKind } from 'vscode-languageclient';

function startLangServer(command: string, args: string[], documentSelector: string[]): Disposable {
	const serverOptions: ServerOptions = {
        command,
        args,
        options: { stdio: 'pipe' },
	};
	const clientOptions: LanguageClientOptions = {
		documentSelector: documentSelector,
        synchronize: {
            configurationSection: "anakinls"
        }
	}

	return new LanguageClient(command, serverOptions, clientOptions).start();
}

export function activate(context: ExtensionContext) {
    context.subscriptions.push(startLangServer('/home/masad-frost/vscoded/piper', [], ["python"]));
}

