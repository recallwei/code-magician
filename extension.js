let vscode = require('vscode')

function activate(context) {
  console.log('Congratulations, your extension "Code Magician" is now active!')

  let disposable = vscode.commands.registerCommand('extension.sayHello', function () {
    vscode.window.showInformationMessage('Congratulations, your extension "Code Magician" is now active!')
  })

  context.subscriptions.push(disposable)
}
exports.activate = activate

function deactivate() {}
exports.deactivate = deactivate
