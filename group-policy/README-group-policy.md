# Windows

## Installing ADMX/ADML files

1. Download ADMX and ADML files from athena-desktop-group-policy/windows
2. Move ADMX file into `%systemroot%\PolicyDefinitions\`
3. Move ADML file into `%systemroot%\PolicyDefinitions\en-US\`
4. Start->Run->gpedit.msc
5. The settings should load. User policies can be found under User Configuration->Administrative Templates->athenaDesktop. Machine policies can be found under Computer Configuration->Administrative Templates->athenaDesktop.
6. Click on setting, enable it, choose perference and click Apply to apply to Windows Registry
7. Key should be visible in Start->Run->regedit.exe. User policies will set keys in HKEY_CURRENT_USER->Software->Policies->athenaDesktop. Machine policies will set keys in HKEY_LOCAL_MACHINE->Software->Policies->athenaDesktop.

## Creating a .reg Registry Patch

1. Start->Run->regedit.exe
2. Select the branch you wish to export as a .reg patch. (In this case, select HKEY_CURRENT_USER->Software->Policies->athenaDesktop)
3. File->Export

Note: This will export all keys on this branch. Be sure to remove keys if they aren't nessecary for this patch. (Eg. You may have 'external PDF viewer' enabled, but this may not be a key you want in the patch. You can edit a .reg file in an ordinary text editor.) 

To install a .reg patch, just double-click the .reg file. You can also File->Import in regedit.exe.

# Mac

## Installing policies.json

1. Download the policies.json file from athena-desktop-group-policy/mac
2. Copy the file to `~/Library/Application Support/athenaDesktop`
