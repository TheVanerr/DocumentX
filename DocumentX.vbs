' DocumentX — masaüstü başlatıcı (derleme yok, npm start / electron-reload)
Option Explicit

Dim shell, fso, rootDir, codesDir, nodeModules, cmd

Set shell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")

rootDir = fso.GetParentFolderName(WScript.ScriptFullName)
codesDir = fso.BuildPath(rootDir, "codes")
nodeModules = fso.BuildPath(codesDir, "node_modules")

If Not fso.FolderExists(codesDir) Then
  MsgBox "DocumentX codes klasörü bulunamadı:" & vbCrLf & codesDir, vbCritical, "DocumentX"
  WScript.Quit 1
End If

shell.CurrentDirectory = codesDir

If Not fso.FolderExists(nodeModules) Then
  MsgBox "İlk çalıştırma: bağımlılıklar yükleniyor (bir kez)." & vbCrLf & "Pencere kapanınca tekrar DocumentX'e tıklayın.", vbInformation, "DocumentX"
  cmd = "cmd /c npm install && npm start"
  shell.Run cmd, 1, True
Else
  cmd = "cmd /c npm start"
  shell.Run cmd, 0, False
End If
