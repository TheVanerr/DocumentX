# DocumentX masaüstü kısayolu oluşturur / günceller.
$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$launcher = Join-Path $projectRoot "DocumentX.vbs"
$desktop = [Environment]::GetFolderPath("Desktop")
$shortcutPath = Join-Path $desktop "DocumentX.lnk"

$icon = Join-Path $projectRoot "codes\node_modules\electron\dist\electron.exe"
if (-not (Test-Path $icon)) {
  $icon = "$env:SystemRoot\System32\imageres.dll,109"
}

$WshShell = New-Object -ComObject WScript.Shell
$Shortcut = $WshShell.CreateShortcut($shortcutPath)
$Shortcut.TargetPath = "wscript.exe"
$Shortcut.Arguments = "`"$launcher`""
$Shortcut.WorkingDirectory = $projectRoot
$Shortcut.Description = "DocumentX - Kullanim Kilavuzu (dev mode)"
$Shortcut.IconLocation = $icon
$Shortcut.Save()

Write-Host "Desktop shortcut created: $shortcutPath"
